import React,{useState,useRef} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useGlobalContext } from '../context'

function ResetPasswordSection() {
 const {currenUser,resetPassword}  = useGlobalContext();
 const [error,setError] = useState('')
 const [loading,setLoading] = useState(false)
 const [message, setMessage] = useState("")
 const emailRef = useRef()
 const navigate = useNavigate()

 const handleSubmit =async(e)=>{
    e.preventDefault()
   try {
    setError('')
    setLoading(true)
    await resetPassword(emailRef.current.value)
    setMessage('check your inbox for instruction')
   } catch (error) {
    setError('email not exist')
   }
   setLoading(false)
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
                <h1>Reset Password</h1>
                {error && <p className='error'>{error}</p>}
                {message && <p className='message'>{message}</p>}
                <form onSubmit={handleSubmit}>
                    <h5>E-mail</h5>
                    <input type='text' ref={emailRef}/>

                    <button type='submit' className='login__signInButton'>Reset Password</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button className='login__registerButton' ><Link to='/login'>Login</Link></button>
                <button className='login__registerButton' ><Link to='/signup'>Create your Amazon Account</Link></button>
            </div>
        </div>
  )
}

export default ResetPasswordSection
