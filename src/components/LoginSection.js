import React,{useState,useRef} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useGlobalContext } from '../context'
function LoginSection() {
 const {currenUser,login}  = useGlobalContext();
 const [error,setError] = useState('')
 const [loading,setLoading] = useState(false)
 const emailRef = useRef()
 const passwordRef = useRef()
 const passwordConfirmRef = useRef()
 const navigate = useNavigate()

 const handleSubmit =async(e)=>{
    e.preventDefault()
    try {
        setLoading(true)
        setError('')
        await login(emailRef.current.value,passwordRef.current.value)
        navigate('/')
    } catch (error) {
        setError('Login is faill, you sure your email and password is right');
    }
    setLoading(false);
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
                <h1>Sign-in</h1>
                {error && <p className='error'>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <h5>E-mail</h5>
                    <input type='text' ref={emailRef}/>

                    <h5>Password</h5>
                    <input type='password' ref={passwordRef}/>

                    <button type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' ><Link to='/signup'>Create your Amazon Account</Link></button>
            </div>
            <Link to='/reset-password'>Forgot the Password</Link>
        </div>
  )
}

export default LoginSection
