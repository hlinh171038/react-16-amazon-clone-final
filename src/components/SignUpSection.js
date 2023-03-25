import React, { useRef,useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useGlobalContext } from '../context'
function SignUpSection() {
    const {currentUser,signup} = useGlobalContext()
    const [error,setError] = useState('')
    const [loading,setLoading]= useState(false)
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const navigate = useNavigate()

    const handleSubmit = async(e) =>{
        e.preventDefault();
        setError('')
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
           return setError('password mot matching')
        }
        try {
            setLoading(false)
            setError('')
            await signup(emailRef.current.value,passwordRef.current.value)
            navigate('/') 
            console.log(currentUser)
        } catch (error) {
            setError('faill to sign up email')
        }
        setLoading(true)
    }

  return (
    <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-up</h1>
                {error && <p className='error'>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <h5>E-mail</h5>
                    <input type='text' ref={emailRef}/>

                    <h5>Password</h5>
                    <input type='password' ref={passwordRef} />

                    <h5>Password Confirm</h5>
                    <input type='password' ref={passwordConfirmRef}/>

                    <button type='submit' className='login__signInButton'>Sign Up</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' >You're have account<Link to='/login'> Login</Link></button>
            </div>
        </div>
  )
}

export default SignUpSection
