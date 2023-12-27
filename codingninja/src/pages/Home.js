import React, { useEffect, useRef } from 'react'
import Layout from '../components/Layout/Layout'
import { motion } from 'framer-motion';

function Home() {
    const videoEl = useRef(null);
    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };
    useEffect(() => {
        attemptPlay();
    }, []);

    const direction = [
        { "dir": "East", "id": '1' }, { "dir": "West", "id": '2' }, { "dir": "North", "id": '3' }, { "dir": "South", "id": '4' },
    ]

    return (
        <Layout title={'codingninja-Home'}>
            {/* <h1>HomePage</h1>
            <pre>{JSON.stringify(auth, null, 4)}</pre> */}

            <section className=" relative left-0 py-20 text-gray-600 body-font">

                {/* Header  */}
                <motion.img
                    initial={{ scale: 0 }}
                    animate={{
                        scale: 1,
                        // y: [0, 20, 0],
                        // bounce: true,
                    }} transition={{ delay: 1.2, duration: 0.8 }}
                    className='w-14 absolute xl:block hidden -z-10 xl:left-[91%] md:left-[90%] left-[78%] -top-[1%]'
                    src='diagonal.png' alt='img' />
                <motion.img
                    initial={{ scale: 0 }}
                    animate={{
                        scale: 1,
                        // y: [0, 20, 0],
                        // bounce: true,
                    }} transition={{ delay: 1.2, duration: 0.8 }}
                    className='w-14 absolute xl:block hidden z-1 xl:left-[94%] md:left-[100%] left-[85%] top-[0.5%]' src='diagonal.png' alt='img' />
                <motion.img
                    initial={{ scale: 0 }}
                    animate={{
                        scale: 1,
                        // y: [0, 20, 0],
                        // bounce: true,
                    }} transition={{ delay: 1.2, duration: 0.8 }}
                    className='w-14 absolute xl:block hidden z-1 xl:left-[91%] md:left-[90%] top-[2%] ' src='diagonal.png' alt='img' />

                <div className="container mx-auto flex px-5 md:flex-row xl:flex-row-reverse flex-col items-center">

                    <motion.div className="xl:max-w-lg xl:w-1/2 md:w-full w-full mb-10 md:mb-0">
                        <div className='flex'>
                            <div className='mt-20'>
                                <motion.img initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }} className=" object-center rounded w-[100%] " alt="hero" src="learn.png" />
                                <motion.img initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6 }} className=" object-center rounded w-[100%] " alt="hero" src="connect.png" />
                            </div>
                            <div>
                                <motion.img initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 }} className=" object-center rounded w-[100%] " alt="hero" src="lead.png" />
                                <motion.img initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4 }} className=" object-center rounded w-[100%] " alt="hero" src="innovate.png" />
                            </div>
                        </div>
                    </motion.div>

                    <section className="text-gray-600 body-font">
                        <div className="container mx-auto flex flex-col">
                            <div className="xl:text-left md:text-left text-center w-full xl:px-20 mb-4">
                                <motion.h1
                                    initial={{ scale: 0, y: 0, x: -400 }} animate={{ scale: 1, y: 0, x: 0 }} transition={{ delay: 1, duration: 0.5 }}
                                    id='Heading' className="title-font xl:text-[45px] md:text-3xl text-2xl xl:mb-4 text-[#132C66] font-bold">
                                    Be a Leader.
                                </motion.h1>
                                <motion.h1
                                    initial={{ scale: 0, y: 0, x: -400 }} animate={{ scale: 1, y: 0, x: 0 }} transition={{ delay: 1.2, duration: 0.5 }} id='Heading' className="title-font xl:text-[45px] md:text-3xl text-2xl xl:mb-4 text-[#132C66] font-bold ">
                                    Be a Ninja Entrepreneur.
                                </motion.h1>
                                {/* {renderWords()} */}
                            </div>

                            {/* Card  */}
                            <div
                                className='relative z-0 xl:w-[60%] md:w-[100%] w-full xl:mx-20 xl:px-10 px-'>
                                <motion.img
                                    initial={{ scale: 0 }}
                                    animate={{
                                        scale: 1,
                                    }} transition={{ delay: 1.2, duration: 0.8 }}
                                    className='absolute xl:block hidden z-1 xl:left-[85%] md:left-[90%] left-[78%] top-[5%]' src='diagonal.png' alt='img' />
                                <motion.img
                                    initial={{ scale: 0 }}
                                    animate={{
                                        scale: 1,
                                    }} transition={{ delay: 1.2, duration: 0.8 }}
                                    className='absolute xl:block hidden z-1 xl:left-[92%] md:left-[100%] left-[85%] xl:top-[17%] md:top-[17%] top-[0%]' src='diagonal.png' alt='img' />
                                <motion.img
                                    initial={{ scale: 0 }}
                                    animate={{
                                        scale: 1,
                                    }} transition={{ delay: 1.2, duration: 0.8 }}
                                    className='absolute xl:block hidden z-1 xl:left-[0%] md:right-[90%] xl:top-[85%] md:top-[80%]' src='diagonal.png' alt='img' />

                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{
                                        scale: 1,
                                    }} transition={{ delay: 1.2, duration: 0.8 }}

                                    id='navs' className='relative z-10 bg-[#464264] px-5 py-5 rounded-xl'>
                                    <h1 className='xl:text-[35px] md:text-2xl text-2xl text-white text-left'>
                                        Ninja Entrepreneur Programme
                                    </h1>
                                    <h1 className='xl:text-sm md:text-sm my-5 text-white text-left'>
                                        Leadership is not inherited, it's cultivated. Join the program and lead your community.
                                    </h1>

                                    <div className='text-[#FFE8D9] text-base text-left px-10'>
                                        <li>
                                            Amplify your social impact.
                                        </li>
                                        <li>
                                            Bring together your peers to aid learning and assimilation of new skills.
                                        </li>
                                        <li>
                                            Be a part of the largest tech community today and stand out from the crowd.
                                        </li>
                                        <li>
                                            Gain access to special events, courses, and networking opportunities.
                                        </li>
                                    </div>
                                    <div>
                                        <motion.button
                                            whileTap={{ scale: 4 }}
                                            className='w-[60%] py-2 my-2 text-lg tracking-wide transition-all ease-in-out duration-500 rounded-lg text-white bg-gradient-to-br from-[#D05401] from-70% to-white shadow-white shadow-inner '>
                                            Read More
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                </div>


                {/* Video  */}
                <div className='py-24'>
                    <video playsInline
                        loop
                        muted
                        ref={videoEl} src='CNVideo.mp4' className='w-full'>
                    </video>
                </div>

                {/* Connect */}
                <section className="mb-32">
                    <div id="map" className="relative h-[350px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3996.0431120224166!2d77.05345063728963!3d28.442953921066866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03d1c62ba76b%3A0xec4dbad7537d963b!2sCoding%20Ninjas!5e0!3m2!1sen!2sus!4v1703703360102!5m2!1sen!2sus" width="100%" height="480" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="container px-2 xl:px-20 w-full mx-auto">
                        <div
                            className="block mx-auto xl:h-[120vh] md:h-[80vh] h-[70vh] rounded-2xl bg-[#132C66F0] xl:px-20 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-10 -mt-[100px] backdrop-blur-[30px] border border-gray-300">

                            <div className="flex flex-wrap">
                                <div className="md:mb-12 w-fit mx-auto shrink-0 grow-0 basis-auto md:px-3 xl:mb-0  xl:px-6">
                                    <h1 className='glow leading-snug text-white xl:text-5xl md:text-4xl text-2xl w-fit font-semibold  drop-shadow-2xl '>Connect With Ninja
                                        <br />
                                        Captains Nationwide!</h1>
                                </div>
                            </div>

                            {/* Search Bar  */}
                            <div className="flex flex-col gap-4 justify-center items-center p-4 md:my-5">
                                <div className="relative p-3 md:w-[80%] w-full">
                                    <input type="text" className="rounded-full md:p-3 p-2 w-full text-black md:text-lg px-5" placeholder="Find Captains Near You" />
                                    <button type="submit" className="absolute right-6 top-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                            stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Navbar  */}

                            <div className=" px-4 py-6 sm:px-6 xl:px-8">
                                <div className="mx-auto max-w-7xl">

                                    <div>
                                        <div className="sm:block">
                                            <nav className="flex xl:gap-40 md:gap-20 mx-auto w-fit" aria-label="Tabs">
                                                {direction.map(data => {

                                                    return (
                                                        <button key={data.id} id='navs'
                                                            className="text-gray-200 transition-all relative group tracking-wide md:px-3 px-2 py-2 rounded-md md:text-xl hover:tracking-widest scroll-smooth hover:scroll-auto hover:text-[#D05401] hover:font-bold hover:bg-gradient-to-t hover:from-[#D05401] hover:from-40% hover:to-white hover:text-transparent bg-clip-text"
                                                        >
                                                            <span>{data.dir}</span>
                                                            <span className="absolute transition-all ease-in-out duration-1000 -bottom-1 left-1/2 w-0 h-[2px] bg-gradient-to-t from-[#D05401] from-10% to-white group-hover:w-1/2 group-hover:transition-all "></span>
                                                            <span className="absolute transition-all ease-in-out duration-1000 -bottom-1 right-1/2 w-0 h-[2px] bg-gradient-to-t from-[#D05401] from-10% to-white group-hover:w-1/2 group-hover:transition-all"></span>
                                                            <span className="absolute left-0 -bottom-1 w-full rounded-full h-[2px] transition-all ease-in-out duration-1000 -z-10  group-hover:transition-all"></span>
                                                        </button>
                                                    )
                                                })}
                                            </nav>
                                        </div>
                                        <div className="w-full mt-2 border-b border-gray-300"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </Layout>
    )
}

export default Home
