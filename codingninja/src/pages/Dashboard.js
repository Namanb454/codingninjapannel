import React, { useRef, useEffect } from 'react'
import Sidebar from '../components/Layout/Sidebar'
import { MdOutlineWatchLater } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";

import { motion, stagger, useAnimate, useInView } from 'framer-motion';

function Dashboard() {

    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once: true });

    const variants2 = {
        initial: {
            scale: 0,
        },
        animate: {
            scale: 1,
            y: 0,
        }
    }

    return (
        <div>
            <div className=''>
                <Sidebar>
                    <div className={`flex flex-col flex-1 w-0 overflow-hidden `}>
                        <main className="relative flex-1 overflow-y-auto focus:outline-none ">
                            <div className="py-6">
                                <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                                    <motion.section
                                        // ref={animationScope}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.2 }}
                                        className="bg-[#ff9f9f4f] rounded-xl my-10 shadow-md">
                                        <motion.div
                                            className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
                                                <motion.h1
                                                    initial={{ x: -200, opacity: 0, scale: 0 }}
                                                    animate={{ x: 0, opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.4, delay: 0.3 }}
                                                    className="title-font sm:text-3xl text-3xl mb-4 font-medium text-[#666189]">Welcome Back Captain!
                                                </motion.h1>
                                                <motion.p
                                                    initial={{ x: -200, opacity: 0, scale: 0 }}
                                                    animate={{ x: 0, opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.5, delay: 0.4 }}
                                                    className="mb-8 leading-relaxed text-base text-[#414141] w-[60%]">We're thrilled to have you back in the command center! <br />Get ready to embark on another exciting journey filled with coding adventures, leadership, and innovation.</motion.p>

                                            </div>
                                            <div className="lg:w-[30%] md:w-1/2 w-5/6 absolute left-[70%]">
                                                <motion.img
                                                    initial={{ x: 200, opacity: 0, scale: 0 }}
                                                    animate={{ x: 0, opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.5, delay: 0.4 }}

                                                    className="object-cover object-center rounded" alt="hero" src="Elements(2).png" />
                                            </div>
                                        </motion.div>
                                    </motion.section>

                                    <div className='flex'>

                                        {/* Points */}
                                        <motion.div
                                            ref={ref}
                                            variants={variants2}
                                            initial="initial"
                                            animate={isInView ? "animate" : "initial"}
                                            transition={{ duration: 0.4 }}
                                            className='w-2/3'>
                                            <section

                                                className=" mx-5 text-gray-600 body-font bg-gradient-to-br from-[#132c6626] from-50% to-white rounded-xl shadow-lg my-10">
                                                <div className="container mx-auto px-5 py-5 md:flex-row flex-col items-center">
                                                    <div className="lg:flex-grow md:w-fit mx-auto flex flex-col md:items-start md:text-left md:mb-0 items-center text-center ">
                                                        <h1 className="title-font sm:text-xl text-3xl font-bold text-[#132C66] mx-auto"> Gold Points Glory!
                                                        </h1>
                                                    </div>
                                                    <div className='flex my-2 mx-20'>
                                                        <div type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-gradient-to-br from-[#D0A201] via-[#F8E1A7] to-[#7D0F5E] text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none ">
                                                            20 Points Used
                                                        </div>
                                                        <div type="button" className="ml-auto py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg bg-gradient-to-br from-[#D0A201] via-[#F8E1A7] to-[#7D0F5E] text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none ">
                                                            40 Points Left
                                                        </div>
                                                    </div>
                                                    <p className='w-1/2 mx-auto font-semibold text-sm'>Your  journey just got even more rewarding—go ahead, claim your perks!</p>
                                                    <button type="button" className="relative w-60 py-2 px-5 mt-10 text-white font-semibold text-base rounded-xl overflow-hidden duration-400 ease-in-out shadow-md hover:text-white tracking-wide hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full bg-gradient-to-bl from-[#D05401] from-50% to-white focus:from-[#D05401] focus:from-100% transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
                                                        Reedem Now
                                                    </button>
                                                </div>
                                            </section>
                                        </motion.div>

                                        {/* Suggested Courses */}
                                        <motion.div
                                            ref={ref}
                                            variants={variants2}
                                            initial="initial"
                                            animate={isInView ? "animate" : "initial"}
                                            transition={{ duration: 0.4, delay: 0.2 }}

                                            className='w-1/3'>
                                            <section className=" mx-5 text-gray-600 body-font bg-gradient-to-br from-[#5d48ff39] from-50% to-white rounded-xl shadow-lg my-10">
                                                <div className="container mx-auto px-5 py-5 md:flex-row flex-col items-center">
                                                    <div className="lg:flex-grow md:w-fit mx-auto flex flex-col md:items-start md:text-left md:mb-0 items-center text-center ">
                                                        <h1 className="title-font sm:text-xl text-3xl font-semibold text-[#0c111db9] mx-auto"> Suggested Courses
                                                        </h1>
                                                    </div>
                                                    <div className='my-2 w-fit ml-auto'>
                                                        <button type="button" className=" py-1 px-3 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border-2 border-[#0c111db9] disabled:opacity-50 disabled:pointer-events-none ">
                                                            sort by
                                                        </button>
                                                    </div>

                                                    {/* Cards */}
                                                    <section className="text-gray-600 body-font">
                                                        <div className="container mx-auto">
                                                            <div className="flex flex-wrap -m-4">
                                                                <div className="p-4 md:w-full">
                                                                    <div className="h-full border-2 bg-gradient-to-br from-[#ff9f9f4f] from-10% to-white  border-gray-800 border-opacity-60 rounded-lg overflow-hidden">
                                                                        <div className="p-6">
                                                                            <h2 className="tracking-widest text-xs title-font font-medium text-left text-[#0c111db9] mb-1">  Full Stack</h2>
                                                                            <h1 className="title-font text-sm font-medium text-[#0c111ddd] mb-3 text-left">Java Web Development with Spring Boot</h1>
                                                                            <div className="flex items-center flex-wrap ">
                                                                                <div className=" text-[#0c111ddd] text-xs inline-flex items-center md:mb-2 lg:mb-0">
                                                                                    <MdOutlineWatchLater /> 140+ Hours
                                                                                </div>
                                                                                <div className="ml-auto text-[#0c111ddd] text-xs inline-flex items-center md:mb-2 lg:mb-0">
                                                                                    <GoProjectSymlink />10+ Projects
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </section>

                                                    <button type="button" className="relative w-40 py-2 px-5 mt-10 text-white font-semibold text-base rounded-xl overflow-hidden duration-400 ease-in-out shadow-md hover:text-white tracking-wide hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full bg-gradient-to-bl from-[#D05401] from-50% to-white focus:from-[#D05401] focus:from-100% transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
                                                        View More
                                                    </button>
                                                </div>
                                            </section>
                                        </motion.div>

                                    </div>

                                    {/* Your team  */}
                                    <div className='flex'>
                                        <motion.div
                                            ref={ref}
                                            variants={variants2}
                                            initial="initial"
                                            animate={isInView ? "animate" : "initial"}
                                            transition={{ duration: 0.4, delay: 0.4 }}
                                            className='w-1/3'>
                                            <section

                                                className=" mx-5 text-gray-600 body-font bg-gradient-to-br from-[#5d48ff39] from-50% to-white rounded-xl shadow-lg my-">
                                                <motion.div

                                                    className="container mx-auto px-5 py-5 md:flex-row flex-col items-center">
                                                    <div className="lg:flex-grow md:w-full flex flex-col md:items-start md:text-left md:mb-0 items-center text-center ">
                                                        <div className='flex w-full'>
                                                            <h1 className="title-font w-fit sm:text-xl text-3xl font-semibold text-[#0c111db9] mr-auto"> Your Team
                                                            </h1>
                                                            <button className='text-red-500 text-xl ml-10 items-center my-auto w-fit'>
                                                                <IoMdAdd />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className='my-2 w-fit ml-auto'>
                                                        <button type="button" className=" py-1 px-3 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border-2 border-[#0c111db9] disabled:opacity-50 disabled:pointer-events-none ">
                                                            search by filter
                                                        </button>
                                                    </div>

                                                    {/* Cards */}
                                                    <section className="text-gray-600 body-font">
                                                        <div className="container my-2 px- flex md:flex-row flex-col items-center bg-gradient-to-r from-[#9992CE] from-10% to-transparent transition-all rounded-xl p-1">
                                                            <div className="lg:flex md:items-start md:text-left items-center text-center ">
                                                                <img className='my-auto' src='nametag.png' />
                                                                <h1 className="items-center sm:text-lg font-medium text-[#34394C]">
                                                                    Name <br />
                                                                    <h2 className='text-xs'>Position</h2>
                                                                </h1>
                                                            </div>
                                                            <div className="w-fit  ml-auto">
                                                                <img className="object-cover rounded" alt="hero" src="user.png" />
                                                            </div>
                                                        </div>
                                                        <div className="container my-2 px- flex md:flex-row flex-col items-center bg-gradient-to-r from-[#9992CE] from-10% to-transparent transition-all rounded-xl p-1">
                                                            <div className="lg:flex md:items-start md:text-left items-center text-center ">
                                                                <img className='my-auto' src='nametag.png' />
                                                                <h1 className="items-center sm:text-lg font-medium text-[#34394C]">
                                                                    Name <br />
                                                                    <h2 className='text-xs'>Position</h2>
                                                                </h1>
                                                            </div>
                                                            <div className="w-fit  ml-auto">
                                                                <img className="object-cover rounded" alt="hero" src="user.png" />
                                                            </div>
                                                        </div>
                                                        <div className="container my-2 px- flex md:flex-row flex-col items-center bg-gradient-to-r from-[#9992CE] from-10% to-transparent transition-all rounded-xl p-1">
                                                            <div className="lg:flex md:items-start md:text-left items-center text-center ">
                                                                <img className='my-auto' src='nametag.png' />
                                                                <h1 className="items-center sm:text-lg font-medium text-[#34394C]">
                                                                    Name <br />
                                                                    <h2 className='text-xs'>Position</h2>
                                                                </h1>
                                                            </div>
                                                            <div className="w-fit  ml-auto">
                                                                <img className="object-cover rounded" alt="hero" src="user.png" />
                                                            </div>
                                                        </div>
                                                    </section>


                                                </motion.div>
                                            </section>
                                        </motion.div>
                                        <motion.div
                                            ref={ref}
                                            variants={variants2}
                                            initial="initial"
                                            animate={isInView ? "animate" : "initial"}
                                            transition={{ duration: 0.4, delay: 0.6 }}
                                            className='w-[50%]'>
                                            <section className=" mx-5 text-gray-600 body-font bg-gradient-to-br from-[#5d48ff39] from-50% to-white rounded-xl shadow-lg my-">
                                                <div className="container mx-auto px-5 py-5 md:flex-row flex-col items-center">
                                                    <div className="lg:flex-grow md:w-full flex flex-col md:items-start md:text-left md:mb-0 items-center text-center ">
                                                        <div className='flex w-full'>
                                                            <h1 className="title-font w-fit sm:text-xl text-3xl font-semibold text-[#0c111db9] mr-auto">Captain's Meetup Hub
                                                            </h1>
                                                            {/* <button className='text-red-500 text-xl ml-10 items-center my-auto w-fit'>
                                                <IoMdAdd />
                                            </button> */}
                                                        </div>
                                                        <img className='w-40 mx-auto' src='Elements(1).png' />
                                                        <h3 className='text-sm w-[55%] mx-auto text-center font-semibold'>Join to share ideas and connect with other captains!</h3>
                                                    </div>


                                                    {/* Cards */}
                                                </div>
                                            </section>
                                        </motion.div>
                                    </div>
                                </div>
                                <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                                </div>
                            </div>
                        </main>
                    </div>

                </Sidebar >

            </div >
        </div >
    )
}

export default Dashboard
