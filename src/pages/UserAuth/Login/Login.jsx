import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import app from '../../../firebase/firebase';
import { AuthContext } from '../../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const { user, gProvider, gitProvider, createLogin } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '';
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createLogin(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                form.reset();
                setError('')
                toast('your password is successful')
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    const handleGoogle = () => {
        gProvider()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }

    const handleGithub = () => {
        gitProvider()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }


    return (
        <div>
            <div>
                <div className="hero my-16">
                    <div className="  ">
                        <div className="text-center my-8 ">
                            <h1 className="text-5xl font-bold">Please Login Now!</h1>

                        </div>
                        <Form onSubmit={handleLogin}>
                            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 py-10">
                                <div className="card-body">
                                    <p className='text-red-600'>{error}</p>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="Your Email.." className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="Your Password..." className="input input-bordered" required />
                                    </div>
                                    {/* <div className="form-control mt-6"> */}
                                    <button className="btn btn-warning mt-6" type="submit">Login</button>
                                    {/* </div> */}
                                    <div className='my-5 mx-auto'>
                                        <button onClick={handleGoogle} className='btn mb-2 btn-outline btn-primary flex gap-2 items-center'><FaGoogle /> Google SignIn</button>
                                        <button onClick={handleGithub} className='btn btn-outline flex gap-2 items-center '><FaGithub /> GitHub SingIn</button>
                                    </div>
                                    <p className='mt-5'>Don't Have an Account? <Link className='link-hover text-yellow-600' to='/register'>Register</Link> </p>
                                </div>
                            </div>
                        </Form>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;