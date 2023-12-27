import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import Layout from '../../components/Layout/Layout';

function Signup() {

    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/register", {
                name,
                file,
                email,
                password,
                phone,
                address,
            });
            if (res && res.data.success) {
                navigate("/login");
                toast.success(res.data && res.data.message);
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <>
            <html className="h-full">
                <body className=" flex h-full items-center ">
                    <main id='authFont' className="w-full h-auto bg-stone-50 max-w-md mx-auto p-10">
                        <div>
                            <Link to='/'>
                                <img className="mx-auto" src="cnlogo.svg" alt="logo" />
                            </Link>
                            <h2 className="my-3">
                                Already have an account?
                                <Link className="text-blue-600" to="/login"> Sign In</Link>
                            </h2>
                        </div>
                        <div className=" bg-white border border-gray-200 rounded-xl shadow-sm dark:border-gray-700">
                            <div className="p-4 sm:p-7">
                                <div className="text-center">
                                    <h1 className="block text-xl font-semibold ">Sign Up</h1>
                                </div>

                                <div className="mt-5">
                                    <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none  dark:border-gray-700  dark:hover:bg- dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                        <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                            <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                                            <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                                            <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                                            <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                                        </svg>
                                        Sign in with Google
                                    </button>

                                    <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>

                                    <form onSubmit={handleSubmit}>
                                        <div className="grid gap-y-4">
                                            <div>
                                                <label for="name" className="block text-sm mb-2 text-left">Full Name</label>
                                                <div className="relative">
                                                    <input type="name" id="name" name="name" className="py-3 px-4 block w-full border-[1px] border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="name-error" value={name}
                                                        onChange={(e) => setName(e.target.value)} />
                                                    <div className=" absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">

                                                    </div>
                                                </div>

                                            </div>
                                            {/* <div>
                                                <label for="file" className="block text-sm mb-2 text-left">Choose Profile</label>
                                                <div className="relative">
                                                    <input type="file" accept='image/' id="file" name="file" className="py-3 px-4 block w-full border-[1px] border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   dark:text-gray-400 dark:focus:ring-gray-600"  aria-describedby="file-error" value={file}
                                                        onChange={(e) => setFile(e.target.value)} />
                                                    <div className=" absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">

                                                    </div>
                                                </div>

                                            </div> */}
                                            <div>
                                                <label for="text" className="block text-sm mb-2 text-left">Phone</label>
                                                <div className="relative">
                                                    <input type="text" id="text" name="text" className="py-3 px-4 block w-full border-[1px] border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="text-error" value={phone}
                                                        onChange={(e) => setPhone(e.target.value)} />
                                                    <div className=" absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">

                                                    </div>
                                                </div>

                                            </div>
                                            <div>
                                                <label for="email" className="block text-sm mb-2 text-left">Email address</label>
                                                <div className="relative">
                                                    <input type="email" id="email" name="email" className="py-3 px-4 block w-full border-[1px] border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="email-error" value={email}
                                                        onChange={(e) => setEmail(e.target.value)} />
                                                    <div className=" absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">

                                                    </div>
                                                </div>
                                                <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                                            </div>

                                            <div>
                                                <div className="flex justify-between items-center">
                                                    <label for="password" className="block text-sm mb-2 ">Password</label>
                                                </div>
                                                <div className="relative">
                                                    <input type="password" id="password" name="password" className="py-3 px-4 block w-full border-[1px] border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="password-error" value={password}
                                                        onChange={(e) => setPassword(e.target.value)} />
                                                    <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">

                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex justify-between items-center">
                                                    <label for="password" className="block text-sm mb-2 ">Address</label>
                                                </div>
                                                <div className="relative">
                                                    <input type="text" id="text" name="text" className="py-3 px-4 block w-full border-[1px] border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none   dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="text-error" value={address}
                                                        onChange={(e) => setAddress(e.target.value)} />
                                                    <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">

                                                    </div>
                                                </div>
                                            </div>

                                            <button onSubmit={handleSubmit} type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Sign Up</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </main>
                </body>
            </html>
        </>
    )
}

export default Signup
