import React from 'react'
import { FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import style from '../signupForm/signupForm.module.scss'

const ContactForm = () => {
  return (
    <form className={[style.form].join(' ')}>
      <div className={style.secondRow}>
        <div className={style.email}>
          <label htmlFor='email' className='form-label'>
            Email Address
          </label>
          <input
            type='email'
            id='email'
            className='form-control'
            aria-describedby='emailHelpBlock'
            placeholder='example@example.com'
          />
        </div>
        <div>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <div className={[style.password, 'input-group mb-3'].join(' ')}>
            <input
              type='password'
              id='password'
              className='form-control'
              aria-describedby='passwordHelpBlock'
              placeholder='Password'
            />
            <span
              className={['input-group-text', style.showPassword].join(' ')}
              id='passwordHelpBlock'
            >
              <FaEye />
              {/* <FaEyeSlash /> */}
            </span>
          </div>
        </div>
        <div>
          <p className={style.forgotpassword}>Forgot Password?</p>
        </div>
      </div>
      <div className={style.btnContainer}>
        <button type='submit'>Login</button>
      </div>
      <footer className={style.caption}>
        <p className={style.footerLink}>
          Don’t have an account yet?{' '}
          <Link to={`/signup`} className={style.signupLink}>
            Sign up here
          </Link>
        </p>
      </footer>
    </form>
  )
}

export default ContactForm
