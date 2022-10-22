import React, {useState} from 'react'
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    
    const email = e.target[0].value;
    const password = e.target[1].value;
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Messenger App</span>
            <span className='title'>Register</span>
            <form onSubmit={handlesubmit}>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <input style={{display:"none"}} type="file" id='file'/>
                <button>Sign In</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>You don't have an account? <Link to="/Register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login