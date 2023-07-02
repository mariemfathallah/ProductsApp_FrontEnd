import './Login.css'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { instanceAxios } from '../instanceAxios'
import toast, { Toaster } from 'react-hot-toast'
import { validEmail, validPassw } from '../RegExp/RegExp'

const Login = () => {
  const [email, setEmail] = useState('')
  const [passw, setPassw] = useState('')
  const [passwordErr, setPasswordErr] = useState(false)
  const [emailErr, setEmailErr] = useState(false)










  const navigate = useNavigate()

  const handelChange = async (e) => {
    e.preventDefault()

    if (!validPassw.test(passwordErr)) {
      setPasswordErr(true)
    }

    if (!validEmail.test(emailErr)) {
      setEmailErr(true)
    }

    try {
      const data = {
        email,
        passw,
      }

      const request = await instanceAxios.post('/login', data)
      console.log(request)
const {token , refreshToken} = request.data
      localStorage.setItem('token',token)
      localStorage.setItem('refreshToken',refreshToken)
      localStorage.setItem('user_data', JSON.stringify(request.data.user))
   
      if (request.data.user.role  === 'admin') {
        navigate('/dashbord')
        toast.success('utilisateur connecté avec succès')
        console.log(request.data.user.role)
     
 

      }   
      else if (request.data.user.role === 'user') {
     
        navigate('/home')
        toast.success('utilisateur connecté avec succès')

      }
    } catch (err) {
      console.log(err)
      toast.error(err.response.data.message)
    }
  }

  return (
    <>
      <div>
        <Toaster />
        <article
          className="card-body mx-auto"
          style={{
            width: '500px',
            height: '1000px',
            position: 'relative',
            top: '100px',
          }}
        >
          <h1 className="card-title mt-3 text-center">Connexion</h1>
          <p className="text-center">Connecter ici pour accéder a votre site</p>
      
       

          <form>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
              <input
                required
                name=""
                className="form-control"
                placeholder="Adresse e-mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailErr && (
                <div
                  style={{ color: 'red' }}
                  className="position-absolute top-100 start-0"
                >
                  Le courriel est invalide
                </div>
              )}
            </div>
            <br />
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input
                required
                className="form-control"
                placeholder="Créer un mot de passe"
                type="password"
                value={passw}
                onChange={(e) => setPassw(e.target.value)}
              />
              {passwordErr && (
                <div
                  style={{ color: 'red' }}
                  className="position-absolute top-100 start-0"
                >
                  le mot de passe est invalide
                </div>
              )}
            </div>
            <br />
            <div className="form-group">
              <button
                type="submit"
                className="btn"
                style={{
                  position: 'relative',
                  top: '30px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  textAlign: 'center',
                  width: '470px',
                  left: '1px',
                  fontSize: '20px',
                }}
                onClick={handelChange}
              >
                {' '}
                Connexion
              </button>
            </div>
            <Link
              to={'/forgotPassword'}
              style={{
                position: 'relative',
                top: '50px',
                fontSize: '20px',
                color: '#82ae46',
              }}
            >
              {' '}
              Mot de passe oublié?
            </Link>
          </form>
        </article>
      </div>
    </>
  )
}

export default Login
