import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheck } from 'react-icons/fa';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../../firebase/firebase';

const auth = getAuth(app)
const Register = () => {
    const { createRegister, updateUser, user } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const handleRegister = (e) => {

        e.preventDefault();
        setSuccess('');
        setError('');
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase ');
            return;
        }

        createRegister(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                form.reset();
                setError('')
                toast('Your Auth is successful');
                setSuccess('Your Auth is successful')
                updateUserData(user, name)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });

        // update profile
        const updateUserData = (user, name) => {
            updateProfile(user, {
                displayName: name
            })
                .then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    setError(error.message)
                });
        }

    }

    return (
        <>
            <div className="hero mb-16">
                <div className="  ">
                    <div className="text-center my-8 ">
                        <h1 className="text-5xl font-bold">Please Register Now!</h1>

                    </div>
                    <Form onSubmit={handleRegister}>
                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 py-10">
                            <div className="card-body">
                                <p className='text-red-600'>{error}</p>
                                <p className='text-success'>{success}</p>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your Name.." className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Photo URL.." className="input input-bordered" required />
                                </div>
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
                                <button className="btn btn-warning mt-6" type="submit">Register</button>
                                {/* </div> */}
                                <p className='mt-5'>Already Have an Account? <Link className='link-hover text-yellow-600' to='/login'>Login</Link> </p>
                            </div>
                        </div>
                    </Form>
                </div>

                <ToastContainer />
            </div>
        </>
    );
};

export default Register;