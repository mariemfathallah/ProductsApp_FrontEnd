import './Register.css'
import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { instanceAxios } from '../instanceAxios'
import { FaMapMarkerAlt } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast'
import { validEmail, validPassw } from '../RegExp/RegExp'
const Register = () => {
    const [nom, setNom] = useState('')
    const [telephone, setTelephone] = useState('')
    const [adresse, setAdresse] = useState('')
    const [email, setEmail] = useState('')
    const [passw, setPassw] = useState('')
    const [passwordErr,setPasswordErr] = useState(false)
    const [emailErr,setEmailErr] = useState(false)
   const [error, setError] = useState({
    nom:'',
    telephone:'',
    adresse:'',
    email:'',
    passw:''
   })
  const navigate = useNavigate()

const validForm = () =>{
  let status = true;
 let localError = {...error}
 if(nom === ''){
  localError.nom = 'Le nom est requis'
  status = false
 }
 if(telephone === ''){
  localError.telephone ='Le téléphone est requis'
  status= false
 }
 if(adresse === ''){
  localError.adresse= 'Adresse  est requis'
  status=false

 }
 setError(localError)
 console.log(localError)
 return status;
}


    const handelChange = async (e) => {
      e.preventDefault()

      if(!validPassw.test(passwordErr)){
        setPasswordErr(true)
      }

      if(!validEmail.test(emailErr)){
        setEmailErr(true)
      }

  if (validForm()){
      try {
        const data = {
          nom,
          telephone,
          adresse,
          email,
          passw,
        }
  
        const request = await instanceAxios.post('/register', data)
        console.log(request)
        toast.success(request.data.message)
        navigate('/login')
      } catch (err) {
        console.log(err)
        toast.error(err.data.message)
      }
    }
    else{
      console.log('forme non valide')
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
            height: '1500px',
            position: 'relative',
            top: '60px',
          }}
        >
          <h1 className="card-title mt-3 text-center">Créer Un Compte</h1>
          <p className="text-center">Commencez avec votre compte gratuit</p>
       
          <form>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <input

                name=""
                className="form-control"
                placeholder="Nom et prénom"
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
         
              /><br/>
              {error.nom !== '' ? <div style={{color:'red'}} className="position-absolute top-100 start-0">{error.nom} </div> : ''} 
            </div>
            <br />
            <br />
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
              <input
			
                name=""
                className="form-control"
                placeholder="Adresse e-mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
                <br/>
                <br/>
              {emailErr && <div style={{color:'red'}} className="position-absolute top-100 start-0">Le courriel est invalide</div>}
            </div>
           <br/>
           <br/>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                 
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input
		
                className="form-control"
                placeholder="Créer un mot de passe"
                type="mot de passe"
                value={passw}
                onChange={(e) => setPassw(e.target.value)}
                required     


              />
               
              {passwordErr && <div style={{color : 'red'}} className="position-absolute top-100 start-0">le mot de passe est invalide</div>}
            </div>
            <br />
            <br />
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                
                  <i className="fa fa-phone"></i>
                </span>
              </div>
              <select className="custom-select" style={{ maxWidth: '120px' }}>
                <option selected="">+216</option>
                <option defaultValue="1">+972</option>
                <option defaultValue="2">+198</option>
                <option defaultValue="3">+701</option>
              </select>
              <input
		
                name=""
                className="form-control"
                placeholder="Numéro de téléphone"
                type="text"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                required
              />
              {error.telephone !== '' ? <div style={{color:'red'}} className="position-absolute top-100 start-0">{error.telephone} </div> : ''} 
            </div>
            <br />
            <br />
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FaMapMarkerAlt />
                </span>
              </div>
              <input
			 
                name=""
                className="form-control"
                placeholder="Adresse"
                type="adress"
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
                required
              />
              {error.adresse !== '' ? <div style={{color:'red'}} className="position-absolute top-100 start-0">{error.adresse} </div> : ''} 
            </div>{' '}
           
         
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
                Créer un compte
              </button>
            </div>
            <p
              className="text-center"
              style={{
                position: 'relative',
                top: '50px',
                fontSize: '20px',
                color: 'black',
              }}
            >
              Avoir un compte?
              <Link to={'/login'} style={{ fontWeight: 'bold',color:'#82ae46' }}>
                {' '}
                Connexion
              </Link>{' '}
            </p>
          </form>
        </article>
      </div>
    </>
  )
}

export default Register