import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
   const [email, setEmail] = useState('email');
   const [phone, setPhone] = useState('phone');
  return (
    <div className='log'>
      <form>
        <h3>Registration</h3>
        <div className='formGroup'>
          <label htmlFor='email'>Email</label>
          <input type='email'
            name={email} id='email'
            value={email}
            onChange={setEmail}
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='phone'>Phone</label>
          <input type='tel'
            name={phone} id='phone'
            value={phone}
            onChange={setPhone}
          />
        </div>
        <div className='formGroup'>
          <input type='submit' value='Login' className='btn1' />
          <Link to='/' className='btn2'>
            Register
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login