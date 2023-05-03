import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import app from '../../../firebase/firebase';


const Login = () => {
    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();
    const handleGoogle = ()=>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
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
                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 py-10">
                            <div className="card-body">
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
                                    <button className='btn btn-outline flex gap-2 items-center '><FaGithub /> GitHub SingIn</button>
                                </div>
                                <p className='mt-5'>Don't Have an Account? <Link className='link-hover text-yellow-600' to='/register'>Register</Link> </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;