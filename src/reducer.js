const reducer =(state,action)=>{
    switch(action.type){
        case "ADD__CHECKOUT__PAGE": 
            return {...state,checkoutArr:[...state.checkoutArr, action.payload]};
        case "UPDATE__AMOUNT":
            const tempCheckout= state.checkoutArr.filter(item=>item.id !==action.payload.id);
            let result = tempCheckout.push(action.payload.data);
            console.log('result'+result)
            return {...state,checkoutArr:tempCheckout};

        case "GET_TOTALS":
            const temp = state.checkoutArr.reduce((total,item)=>{
                total += item.amount;
                return total;
            },0);
            console.log(temp)
            return {...state,total:temp};
        case "GET__PRICE":
            const tempPrice = state.checkoutArr.reduce((total,priceItem)=>{
                total +=priceItem.price*priceItem.amount;
                return total
            },0);
            // tempPrice.parseFloat(tempPrice.toFixed(2))
            return {...state,price:tempPrice}

        case "INCRESE___AMOUNT":
            const tempIn = state.checkoutArr.map(item=>{
                if(item.id === action.payload){
                    return {...item,amount:item.amount+1}
                }
                return item;
            });
            return {...state,checkoutArr:tempIn}
        case "DECRESE__AMOUNT":
            const tempDe = state.checkoutArr.map(item=>{
                if(item.id ===action.payload){
                    return {...item,amount:item.amount - 1}
                }
                return item
            }).filter(item =>item.amount>0);
            return {...state,checkoutArr:tempDe}
        case "DELETE__ITEM":
            return {...state,checkoutArr:state.checkoutArr.filter(item=>item.id!==action.payload)}
        case "REMOVE__ALL":
            return {...state,checkoutArr:[]}
        case "FILLTER__CATAGORY__PRODUCT":
            return {...state,products:action.payload}
        default:
            return state;
    }
}
export default reducer;