import React from 'react'
import { useGlobalContext } from '../context'
function FormChangeAddress() {
    const {isAddress,
        closeFormAddress,
        handleSubmitAddNewAddress,
        nameRef,
        phoneRef,
        addressRef,
        provinceRef,
        districtRef,
        wardRef,
        errorNewAddress
    } = useGlobalContext()
  return (
    <div className={isAddress ? 'FromchangeAddress__conteiner showNewAddress':'FromchangeAddress__conteiner'} >
      <div className='forms'>
        <p style={{color:"red"}}>{errorNewAddress && errorNewAddress}</p>
      <p className='from__change__address__container__title'>add new address</p>
        <div className='forms__cross' onClick={closeFormAddress}>x</div>
        <form  className='forms__form' onSubmit={handleSubmitAddNewAddress}>
            <div className='forms__left__container'>
                <label id="name">
                    <p>Full name</p>
                    <input type='text' name="name" placeholder='type your email' ref={nameRef}/>
                </label>
                <label id="phone">
                    <p>phone numner</p>
                    <input type='number' name="phone" placeholder='type your phone number' ref={phoneRef}/>
                </label>
            </div>
            <div className='forms__right__container'>
                <label id="address">
                    <p>address</p>
                    <input type='text' name="address" placeholder='type your address' ref={addressRef}/>
                </label>
                <label id="province">
                    <p>province</p>
                    <input type='text' name="province" placeholder='type your province' ref={provinceRef}/>
                </label>
                <label id="district">
                    <p>district</p>
                    <input type='text' name="district" placeholder='type your district' ref={districtRef}/>
                </label>
                <label id="ward">
                    <p>ward</p>
                    <input type='text' name="ward" placeholder='type your ward'ref={wardRef}/>
                </label>
                <div>
                    <label id='add'>
                        <input type='radio' name="add" checked/>Home
                        <input type='radio' name="add"/>Company
                    </label>
                </div>
                <button className='btn__fomrs' type="submit">Save</button>
            </div>
            
        </form>
      </div>
    </div>
  )
}

export default FormChangeAddress
