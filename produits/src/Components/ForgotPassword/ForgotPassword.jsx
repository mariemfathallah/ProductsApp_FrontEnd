import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import { instanceAxios } from '../instanceAxios'
import toast, { Toaster } from 'react-hot-toast'

const ForgotPassword = () => {
    const [email , setEmail] = useState('')


    const handelChange = async() =>{
        try{
            const data ={
                email
            }
            const request = await instanceAxios.post('/forgotPassword',data)
            console.log(request)
            toast.success(request.data.message)
        }
        catch(err){
            console.log(err)
            toast.error(err.response.data.message)
        }
    }
  return (
    <>
    <div className="card text-center position-absolute top-50 start-50 translate-middle" style={{width: '600px'}}>
        <Toaster/>
    <div className="card-header h5 text-white"  style={{backgroundColor:'#82ae46'}}>Réinitialisation du mot de passe</div>
    <div className="card-body px-5 mx-auto">
        <p className="card-text py-2" style={{fontSize:'20px'}}>
        Entrez votre adresse e-mail et nous vous enverrons<br/> un e-mail avec des instructions pour réinitialiser votre mot de passe.
        </p>
        <div className="form-outline">
  
            <input type="email"  className="form-control my-3" placeholder='Entre email'
            value={email} onChange={(e)=>setEmail(e.target.value)}
            />
         
        </div>
        <input className="btn w-100" style={{fontSize:'20px'}} type='submit' value='Réinitialiser le mot de passe' 
        onClick={handelChange}/>

        <div className="d-flex justify-content-between mt-4">
            <Link className="" to={'/login'} style={{textDecoration:'none',fontSize:'20px',color:'#82ae46'}}>Connexion</Link>
            <Link className="" to={'/'} style={{textDecoration:'none',fontSize:'20px',color:'#82ae46'}}>Enregistrer</Link>
        </div>
    </div>
</div>
    </>
  )
}

export default ForgotPassword