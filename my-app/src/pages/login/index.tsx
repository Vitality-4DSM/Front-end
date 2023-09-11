import React,{useState} from 'react';
import './styles.css'  
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    return (
 
            <div className ='login'>
                <form action =''>
                    <div className = 'container'>
                        <div className='input'>
                            <div className='titulo' >
                                <h1> Login </h1>
                            </div>
                            <hr />
                            <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /> 
                            <input type='password'  placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} /> 
                            <button className='botaoLogin' > 
                        <p>Entrar</p>
                        </button> 
                        <hr />
                        </div> 
                        
                       
  
                       

                    </div>
                </form>
            </div>

    )
}
export default Login;
