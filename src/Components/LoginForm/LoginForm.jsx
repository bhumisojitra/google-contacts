import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { loginAsncy, loginGoogle } from '../../Services/Actions/loginFormAction';
import google from '../../assets/google.png'

const LoginForm = () => {

    const { isLogin, user, isError } = useSelector(state => state.loginFormReducer)

    const [inputConForm, setInputConForm] = useState({
        email : '',
        password : '',
      })
    
      const dispatch = useDispatch();
      const navigate = useNavigate();
    
    
      const handleConSubmit = (e) => {
        e.preventDefault();

        dispatch(loginAsncy(inputConForm))
    
        setInputConForm({
          email : '',
          password : '',
        })
      }

      // handleGoogle
      const handleGoogle = () => {
        dispatch(loginGoogle())
      }

      useEffect(() => {
        if(isLogin && user){
          navigate('/')
        }
      }, [isLogin, user])
    
  return (
    <>
    <div className='login-form'>
      <Container className='d-flex justify-content-center align-items-center'>
            <form className='p-5 form2' onSubmit={handleConSubmit}>
                <div className='text-center'>
                    <h4>Sign-in</h4>
                    <img src={google} />
                    <h5 className='ms-4'>Use Your Google Account</h5>
                </div>
                <div className=' text-center mt-5'>
                    <button type='submit' className="btn btn22" onClick={handleGoogle}>Continue With  Google</button>
                </div>
            </form>
      </Container>
    </div>
    </>
  )
}

export default LoginForm
