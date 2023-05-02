import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [error, setError] = useState();

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
                                    <input type="email" name="email" placeholder="Your Email.." className="input input-bordered"  required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Your Password..." className="input input-bordered" required />
                                </div>
                                {/* <div className="form-control mt-6"> */}
                                    <button  className="btn btn-warning mt-6" type="submit">Login</button>
                                {/* </div> */}
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