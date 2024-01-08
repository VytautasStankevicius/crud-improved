import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, signInWithEmailAndPassword} from "../../services/AuthServices"

const Login = ()=>{
    const navigate = useNavigate();
const [credentials, setCredentials] = useState({
    email:'',
    password:''
})
const [user,loading,error] = useAuthState(auth);


}


const handleChange = (e)=>{
    const value = e.target.value;
    setCredentials({
        ...credentials,
        [e.target.name]:value
    })
}

const handleSubmit = (e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(credentials.email, credentials.password)
}
    return(
        <div className="container">
            <h2></h2>
            <form className="form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input name='email' onChange={handleChange} type="text" className="form-control" placeholder="El.pastas" />
                </div>
                <div className="mb-3">
                    <input name='password' onChange={handleChange} type="password" className="form-control" placeholder="Slaptazodis" />
                </div>
                <div className="mb-3">
                    <button type='submit'>Prisijungti</button>
                </div>
                <div className="mb-3">
                    <p>Neturite paskyros ?<Link to="/register">Registruokites</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Login