import './ResetPassword.css'
import React ,{useState}from 'react'
import { Toaster } from 'react-hot-toast'
import { instanceAxios } from '../instanceAxios'
import { useNavigate, useParams } from 'react-router-dom'

const ResetPassword = () => {
    const [passw, setPassw] = useState('')
    const [confirmPassw, setConfirmPassw] = useState('')
const navigate = useNavigate()




       const {token} = useParams()
    const handelChange = async(e)=>{
        e.preventDefault()
        try{
        const data={
            passw,
            confirmPassw,
            token
        }
        const request = await instanceAxios.post('/resetPassword',data)
        console.log(request)
        navigate('/login')

    }catch(err){
        console.log(err)
    }
    }
  return (
    <>
    <div className="card">
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
        <h2 className="card-title mt-3 text-center">Réinitialiser Le Mot De Passe</h2>
        <form>
   
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
              placeholder="confirm mot de passe"
              type="password"
              value={confirmPassw}
              onChange={(e) => setConfirmPassw(e.target.value)}
            />
          </div>
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
           
           Envoyer
            </button>
          </div>
     
        </form>
      </article>
    </div>
    </>
  )
}

export default ResetPassword