// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../AuthContext/AuthContext';

// const Login: React.FC = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('https://your-api-endpoint.com/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (!response.ok) {
//         throw new Error('Login failed');
//       }

//       const data = await response.json();
//       // Assuming the API returns a token or user data
//       login(data.token);
//       navigate('/dashboard');
//     } catch (err) {
//       setError('Login failed. Please check your credentials and try again.');
//     }
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>
//             Username:
//             <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//           </label>
//         </div>
//         <div>
//           <label>
//             Password:
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//           </label>
//         </div>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// // export default Login;



import React, { use, useEffect, useState } from 'react';
import { useAuth } from '../../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { json } from 'stream/consumers';
import { AuthResult } from './AuthResult';
import './login-component.css';
import { checkTenantAvailability } from '../../Service Proxey/loginAppservice';
function LoginPage() {

    const { login ,getTenant} = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [tenancName, settenancName] = useState('');
    const [TenantError, setTenantError] = useState('');
    const [TenentId, setTenentId] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tenantExists, setTenantExists] = useState<boolean | null>(null); // null = loading, true = exists, false = not found
    useEffect(() => {
       var tenantname =  getTenant();
       checkTenantIsavailabel(tenantname === ''?'default':tenantname);
    }, [getTenant]);
    useEffect(() => {
        if (tenantExists === false) {
         
          navigate("/notfound");
        }
      }, [tenantExists, navigate]);

    const checkTenantIsavailabel = async (tenancName: string) => {
        try {
            checkTenantAvailability(tenancName).then((response) => {
                if (response.tenantId === null) {
                    setTenantError(response.errorMessage);
                    setTenantExists(false);
                } else {
                    setTenentId(response.tenantId);
                    settenancName(tenancName);
                    setIsModalOpen(false);
                }
            });
        }
        catch (err) {
            throw err;
        }

    }


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const input = document.getElementById('tenancyName') as HTMLInputElement;
        console.log(input);
        checkTenantIsavailabel(input.value);
    };
    const handleLogin = async (e: React.FormEvent) => {
        try {

            login(username, password, TenentId).then((response) => {
                if (response.error) {
                    setError(response.error);
                    alert(`Error: ${response.error}`);
                }
                else {
                    navigate('/dashboard');
                }
            });
            // navigate('/dashboard');
        }
        catch (err) {
            setError('Login failed. Please check your credentials and try again.');
        }

    }
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };



    const tenantSelect = () => {
        return (<div className="modal" tabIndex={-1} style={{ display: isModalOpen ? 'block' : 'none' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-black">Modal title</h5>

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group mb-4">
                            <label className="form-label" htmlFor="tenancyName">Tenant</label>
                            <input type="text" id="tenancyName" className="form-control" name='tenancyName' placeholder="Enter Tenant" />
                            {TenantError && <p style={{ color: 'red' }}>{TenantError}</p>}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleCloseModal} data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>)
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <div className="row" style={{ height: '100vh', width: '100vw', }}>
                <div className="col-lg-6 container d-flex justify-content-center align-items-center bg-black text-white">
                    <div className='p-md-5 mx-md-4 desigenclass'>
                        <div className="card-body">
                            <div className="text-center">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                    style={{ width: '185px' }} alt="logo" />
                                <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                                <span>Current tenant :{TenentId === 0 ? 'Not Selected' : tenancName}</span>(<a href="#" onClick={handleOpenModal}>Change</a>)

                                {tenantSelect()}
                            </div>
                            <form>
                                <p>Please login to your account</p>
                                <div className="form-group mb-4">
                                    <label className="form-label" htmlFor="email">Username</label>
                                    <input type="email" id="email" className="form-control" placeholder="Phone number or email address" value={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <a className="forgot-password" href="#!">Forgot password?</a>
                                </div>

                                <div className="text-center pt-1 mb-5 pb-1">
                                    <button onClick={handleLogin} className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
                                        in</button>
                                </div>

                                <div className="d-flex align-items-center justify-content-center pb-4">
                                    <p className="mb-0 me-2">Don't have an account?</p>
                                    <button type="button" className="btn btn-outline-danger">Create new</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-6 gradient-custom-2 d-flex align-items-center" >
                    {/* <div>
                        <label>
                            Username:
                            <input type="text" value={tenancName} onChange={(e) => settenancName(e.target.value)} />
                        </label>
                    </div>
                    {TenantError && <p style={{ color: 'red' }}>{TenantError}</p>}
                    <button onClick={checkTenantIsavailabel}>SELECT tenant</button>
                    <div>
                        <label>
                            Username:
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button onClick={handleLogin}>Login</button> */}

                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h4 className="mb-4">We are more than just a company</h4>
                        <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                </div>
            </div>



        </div>



    );

}
export default LoginPage;

