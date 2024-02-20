import { AuthContext } from "./AuthProvider";
import { useContext } from "react";
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    let { createUser, update, googleLogin, Toast } = useContext(AuthContext)
    let nav = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value
        let name = e.target.name.value
        let url = e.target.url.value

        let patC = /[A-Z]/
        let patS = /[!@#$%^&*_/+=:;,.~'"]/;

        if (password.length < 6) {
            return Toast.fire({
                icon: 'error',
                title: 'Must be longer then 6 characters'
            })
        }
        if (!patC.test(password)) {
            return Toast.fire({
                icon: 'error',
                title: 'Must have a capital character'
            })
        }
        if (!patS.test(password)) {
            return Toast.fire({
                icon: 'error',
                title: 'Must contain special character'
            })
        }
        createUser(email, password)
            .then(() => {
                Toast.fire({
                    icon: 'success',
                    title: 'Registered successfully'
                })
                update(name, url)
                    .then(() => nav('/'))
                    .catch((error) => Toast.fire({
                        icon: 'error',
                        title: error.code
                    }))

            })
            .catch((error) => Toast.fire({
                icon: 'error',
                title: error.code
            }))
    }

    const handleGoogleLogin = (e) => {
        e.preventDefault()
        googleLogin()
            .then(() => {
                Toast.fire({
                    icon: 'success',
                    title: 'Logged in with Google'
                })
                nav('/')
            })
            .catch((error) => Toast.fire({
                icon: 'error',
                title: error.code
            }))

    }

    return (
        <div className="pb-16">
            <form onSubmit={handleRegister} className="lg:w-2/5 md:4/5 m-4 md:mx-auto p-4 border border-low rounded-lg">
                <div className=''>
                    <span className="block whitespace-nowrap text-3xl md:text-5xl text-center" >-Register Now-</span>
                </div>
                <div className='md:mt-12 mt-8'>
                    <label htmlFor="name"
                        className=''
                    >Enter Your Name:</label>
                    <br />
                    <input type="text" name="name" id="name" placeholder="Username"
                        className="" />
                </div>

                <div className='md:mt-8 mt-4'>
                    <label htmlFor="email"
                        className=''
                    >Enter Your Email Address:</label>
                    <br />
                    <input type="text" name="email" id="email" placeholder="Email"
                        className="" />
                </div>
                <div className='md:mt-8 mt-4'>
                    <label htmlFor="url"
                        className=''
                    >Image URL:</label>
                    <br />
                    <input type="text" name="url" id="url" placeholder="Image URL"
                        className="" />
                </div>

                <div className='md:mt-8 mt-4'>
                    <label htmlFor="email"
                        className=''
                    >Create New Password:</label>
                    <br />
                    <input type="password" name="password" id="password" placeholder="Password"
                        className="" />
                </div>
                <button className='btn p-2 bg-low w-full rounded-md mt-8 text-xl md:text-2xl tracking-widest text-white '>Register</button>
                <div className='flex items-center gap-2'>
                    <div className='w-full h-[1px] bg-gray-400'></div>
                    <div className='text-lg my-2 text-low'>or</div>
                    <div className='w-full h-[1px] bg-gray-400'></div>
                </div>
                <button onClick={handleGoogleLogin} className='btn p-2 bg-low text-xl w-full rounded-md text-white flex  justify-center items-center'><span className='text-2xl md:text-3xl'><FcGoogle></FcGoogle></span>oogle</button>
            </form>
            <p className='text-center'>Already have an account? <Link to="/login" className='text-blue-600'>Login Here.</Link></p>
        </div>
    );
};

export default Register;