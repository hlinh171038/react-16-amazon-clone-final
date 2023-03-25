import React,{useContext,useState,useReducer,useEffect,useRef} from 'react';
import slidedata from './data/slidedata'
import productdata from './data/productdata'
import sublinks from './data/sublinkdata'
import sidebars from './data/sidebardata'
import reducer from './reducer'
import {auth} from './firebase'
import SideBar from './components/SideBar';

const AppContext = React.createContext()
const initialState = {
    products:productdata,
    checkoutArr:[],
    total:0,
    price:0
}
const AppProvider = ({children})=>{
    const [slides,setSlides] = useState(slidedata);
    const [state,dispatch] =useReducer(reducer,initialState)
    //-----sign----
    const [currentUser,setCurrentUser] = useState('')
    //----submenu---------
    const [isSubmenu,setIsSubmenu] = useState(false)
    const [location,setLocation] =useState({})
    const [page,setPage] = useState({page:'',links:[]})
    const [contry,setContry] = useState('VN')
    const [imgCountry,setImgCountry] = useState('./image/vn-flag.png')
    // sidebar---------------
    const [isSidebar,setSideBar]= useState(false)
    const [sidebar,setSidebar] = useState(sidebars)
    // searching
    const [search,setSearch] = useState('')
    //add new address
    const [isAddress,setIsAddress] = useState(false);
    const nameRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const districtRef =useRef();
    const provinceRef = useRef();
    const wardRef =useRef()
    const [nameAddress,setNameAddress] = useState('dont have username')
    const [phone,setPhone] = useState('dont have number phone')
    const [address,setAddress] =useState('dont have address ')
    const [district,setDistrict] = useState()
    const [province,setProvince] = useState()
    const [ward,setWard] = useState()
    const [errorNewAddress,setErrorNewAddress]= useState('')
   


// check out ------------------------------------------------------pages---------------
    const handleOpenCheckout =(id) =>{
        if(state.checkoutArr.length >0){
            state.checkoutArr.forEach(item =>{
                let {amount} = item
                if(item.id ===id){
                    console.log('item 1')
                    let result = {...item,amount:amount+1}
                    console.log(result)
                    dispatch({type:'UPDATE__AMOUNT',payload:{data:result,id:id}})
                }
                else{
                    console.log('item not id')
                    let result= state.products.find(ele => {
                        if(ele.id ===id){
                           return ele
                        }
                    });
                   dispatch({type:"ADD__CHECKOUT__PAGE",payload:result})
                }
            })
        }else{
            console.log('item length =0')
            let result= state.products.find(ele => {
                if(ele.id ===id){
                   return ele
                }
            });
           dispatch({type:"ADD__CHECKOUT__PAGE",payload:result})
        }
        
       
    }
    const handleIncrese = (id)=>{
        dispatch({type:"INCRESE___AMOUNT",payload:id})
    }

    const handleDecrese =(id)=>{
        dispatch({type:"DECRESE__AMOUNT",payload:id})
    }

    const handleDelete = (id)=>{
        dispatch({type:"DELETE__ITEM",payload:id})
    }

    const handleRemoveAll = ()=>{
        dispatch({type:"REMOVE__ALL"})
    }

    useEffect(()=>{
        dispatch({type:"GET_TOTALS"});
        dispatch({type:"GET__PRICE"});
    },[state.checkoutArr])

    //----------------------------------------------------------------signin-sign up pages----------------------
    const signup = (email,password)=>{
       return auth.createUserWithEmailAndPassword(email,password)
    }

    const login = (email,password) =>{
        return auth.signInWithEmailAndPassword(email,password);
    }

    const logout = ()=>{
        return auth.signOut();
    }

    const resetPassword = (email)=>{
        return auth.sendPasswordResetEmail(email)
    }
    // take state user
    useEffect(()=>{
        const unsubcribe = auth.onAuthStateChanged(user=>{
                            setCurrentUser(user)
                        })
        return unsubcribe
    })
    /*-----------------------------------------------------------submenu--------------------------------- */
    const openSubmenu = (page,coordinate)=>{
       let context = sublinks.find(sub=>{
            return sub.title === page
        })
        setPage(context);
        setLocation(coordinate)
        setIsSubmenu(true)
    }
    const closeSubmenu = ()=>{
        setIsSubmenu(false)
    }
    const handleCheck =(item)=>{
        let valueRadio =item.contry.slice(item.contry.length-2)
        setContry(valueRadio);
        setImgCountry(item.img)
      }
    // -----------------------------------------------------------side bar--------------------------------------
    const handleOpenSideBar = ()=>{
        setSideBar(true)
    }
    const handleCloseSideBar =()=>{
        setSideBar(false)
    }
    //----------------------------------------------------------searching----------------------------------------
    //--------------------------------------------------------new address form------------------------------------
    const openFormAddress =()=>{
        setIsAddress(true);
    }
    const closeFormAddress =()=>{
        setIsAddress(false);
    }
    const handleSubmitAddNewAddress =(e)=>{
        e.preventDefault();
        setErrorNewAddress('')
        let name = nameRef.current.value
        let phone = phoneRef.current.value
        let address = addressRef.current.value
        let province = provinceRef.current.value
        let district = districtRef.current.value
        let ward = wardRef.current.value
        if(name &&phone&&address&&province&&district&&ward){
            setNameAddress(name)
            setPhone(phone)
            setAddress(address)
            setProvince(province)
            setDistrict(district)
            setWard(ward)
        }else{
            setErrorNewAddress('please ! fill all the feild')
        }
        
    }
    //---------------------------------------------------fillter product
    const handleFilterTech = (e)=>{
        let value =e.target.textContent 
       let techProduct = productdata.filter(product=>{
            return product.catagory === value
        })
        console.log(techProduct)
        dispatch({type:'TECH__FILTER',payload:techProduct})
    }
    const handleFilterKitchen =(e)=>{
        let value = e.target.textContent
        let kitchenProduct = productdata.filter(product=>{
            return product.catagory === value
        })
        console.log(kitchenProduct)
        dispatch({type:'KITCHEN__FILTER',payload:kitchenProduct})
    }
    const handleCatagory =(catagory)=>{
        let cataFilterProduct
        if(catagory ==='all'){
            cataFilterProduct = productdata;
        }else{
            cataFilterProduct = productdata.filter(product=>{
                return product.catagory ===catagory;
            })
        }
        dispatch({type:"FILLTER__CATAGORY__PRODUCT",payload:cataFilterProduct})
         
    }
    return <AppContext.Provider 
            value ={{
                slides,
                state,
                handleOpenCheckout,
                handleIncrese,
                handleDecrese,
                handleDelete,
                handleRemoveAll,
                currentUser,
                signup,
                login,
                logout,
                resetPassword,
                isSubmenu,
                openSubmenu,
                closeSubmenu,
                page,
                location,
                contry,
                imgCountry,
                handleCheck,
                isSidebar,
                handleOpenSideBar,
                handleCloseSideBar,
                sidebar,
                search,
                setSearch,
                isAddress,
                nameRef,
                phoneRef,
                addressRef,
                provinceRef,
                districtRef,
                wardRef,
                openFormAddress,
                closeFormAddress,
                handleSubmitAddNewAddress,
                nameAddress,
                phone,
                address,
                province,
                district,
                ward,
                errorNewAddress,
                setSearch,
                handleCatagory
            }}
        >{children}</AppContext.Provider>
}


const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider,useGlobalContext}