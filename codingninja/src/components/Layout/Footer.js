import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import { motion, } from 'framer-motion';

function Footer() {
    const codingninja = [
        { "heading": "Coding Ninjas", "id": '0' },
        { "title": "About Us", "id": '1' }, { "title": "Press", "id": '2' }, { "title": "Privacy Policy", "id": '3' }, { "title": "Terms & Conditions", "id": '4' }, { "title": "Big Bounty", "id": '5' },
    ]
    const products = [
        { "heading": "Products", "id": '0' },
        { "title": "Problem of the day", "id": '1' }, { "title": "Interview Problems", "id": '2' }, { "title": "Interview Experience", "id": '3' }, { "title": "Guided Paths", "id": '4' }, { "title": "Library", "id": '5' }, { "title": "Test Series", "id": '6' }, { "title": "Contest", "id": '7' }, { "title": "Online Compiler", "id": '8' },
    ]
    const community = [
        { "heading": "Community", "id": '0' },
        { "title": "Coding Ninjas Studio", "id": '1' }, { "title": "Blog", "id": '2' }, { "title": "Events", "id": '3' }, { "title": "Campus Ninjas", "id": '4' },
    ]
    // const { inView } = useInView({ threshold: -0.1 });
    // const { scrollY } = useScroll();
    return (
        <motion.div
        // style={{ scale: scrollY / window.innerHeight * 8 }}
        >
            <footer className="text-white body-font bg-gradient-to-br from-[#464264] from-100%  to-100%">
                <div className="container px-5 py-24 mx-auto flex md:items-center xl:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">

                            <img src='cnlogo2.png' alt='codingninjalogo' />
                        </a>
                        <div className='px-10 py-10'>
                            <h1 className='font-bold text-base'>Download our app:</h1>
                            <button className="bg-black inline-flex mt-2 py-3 px-5 rounded-lg items-center focus:outline-none">
                                <img className='w-5' src='google-play.svg' alt='google play' />
                                <span className="ml-4 flex items-start flex-col leading-none">
                                    <span className="text-xs  mb-1">GET IT ON</span>
                                    <span className="title-font font-medium">Google Play</span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 text-left">

                        <div className="xl:w-1/4 md:w-1/2 w-full md:px-4 md:my-0 my-5">
                            <h2 className="title-font font-bold text-white tracking-widest md:text-lg text-sm mb-3 uppercase">Coding Ninjas</h2>
                            {codingninja.map((data, index) => {
                                return (
                                    <motion.nav
                                        key={data.id}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.2, delay: index * 0.2, stiffness: 1000, velocity: -100 }}
                                        className="list-none mb-3">
                                        <li>
                                            <a href='/' className="md:text-base text-sm text-white hover:tracking-widest tracking-wide hover:font-bold transition-all duration-200 hover:bg-gradient-to-tr hover:from-[#D05401] hover:from-40% hover:to-white hover:text-transparent bg-clip-text">{data.title}</a>
                                        </li>
                                    </motion.nav>
                                )
                            })}
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 w-full md:px-4 md:my-0 my-5">
                            <h2 className="title-font font-bold text-white tracking-widest md:text-lg text-sm mb-3 uppercase">Products</h2>
                            {products.map((data, index) => {
                                return (
                                    <motion.nav
                                        key={data.id}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.2, delay: index * 0.2, stiffness: 1000, velocity: -100 }}
                                        className="list-none mb-3">
                                        <li>
                                            <a href='/' className="md:text-base text-sm text-white hover:tracking-widest tracking-wide hover:font-bold transition-all duration-200 hover:bg-gradient-to-tr hover:from-[#D05401] hover:from-10% hover:to-white hover:text-transparent bg-clip-text">{data.title}</a>
                                        </li>
                                    </motion.nav>
                                )
                            })}
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 w-full md:px-4 md:my-0 my-5">
                            <h2 className="title-font font-bold text-white tracking-widest md:text-lg text-sm mb-3 uppercase">Community</h2>
                            {community.map((data) => {
                                return (
                                    <nav
                                        key={data.id}
                                        className="list-none mb-3">
                                        <li>
                                            <a href='/' className="md:text-base text-sm text-white hover:tracking-widest tracking-wide hover:font-bold transition-all duration-200 hover:bg-gradient-to-tr hover:from-[#D05401] hover:from-40% hover:to-white hover:text-transparent bg-clip-text">{data.title}</a>
                                        </li>
                                    </nav>
                                )
                            })}
                        </div>



                        <div className="xl:w-1/4 md:w-1/2 w-full md:my-0 my-5">
                            <h2 className="title-font font-bold text-white tracking-widest md:text-lg text-sm mb-3 uppercase xl:text-center text-left">Follow Us</h2>
                            <nav className="list-none mb-10 justify-center md:mx-auto w-fit">
                                <span className="inline-flex sm:mt-2 mt-2 sm:justify-start">

                                    <a href='/' className="group flex justify-center p-2 rounded-md drop-shadow-xl  text-white font-semibold hover:translate-y-3 hover:rounded-full transition-all duration-500 hover:from-white hover:to-[#D05401] to-80% bg-gradient-to-r from-gray-800 to-black">
                                        <FaInstagram />
                                        <span
                                            className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                        >
                                            Instagram
                                        </span>
                                    </a>
                                    <a href='/' className="ml-3  group flex justify-center p-2 rounded-md drop-shadow-xl text-white font-semibold hover:translate-y-3 hover:rounded-full transition-all duration-500 hover:from-white hover:to-[#D05401] to-80% bg-gradient-to-r from-gray-800 to-black">
                                        <FaTwitter />
                                        <span
                                            className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                        >
                                            Twitter
                                        </span>
                                    </a>
                                    <a href='/' className="ml-3  group flex justify-center p-2 rounded-md drop-shadow-xl  text-white font-semibold hover:translate-y-3 hover:rounded-full transition-all duration-500 hover:from-white hover:to-[#D05401] to-80% bg-gradient-to-r from-gray-800 to-black">
                                        <FaFacebook />
                                        <span
                                            className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                        >
                                            Facebook
                                        </span>
                                    </a>
                                    <a href='/' className="ml-3  group flex justify-center p-2 rounded-md drop-shadow-xl  text-white font-semibold hover:translate-y-3 hover:rounded-full transition-all duration-500 hover:from-white hover:to-[#D05401] to-80% bg-gradient-to-r from-gray-800 to-black">
                                        <FaYoutube />
                                        <span
                                            className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                        >
                                            Youtube
                                        </span>
                                    </a>
                                    <a href='/' className="ml-3 group flex justify-center p-2 rounded-md drop-shadow-xl  text-white font-semibold hover:translate-y-3 hover:rounded-full transition-all duration-500 hover:from-white hover:to-[#D05401] to-80% bg-gradient-to-r from-gray-800 to-black">
                                        <FaLinkedin />
                                        <span
                                            className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                        >
                                            Linkedin
                                        </span>
                                    </a>
                                </span>
                            </nav>
                        </div>
                    </div>
                </div>

            </footer>
        </motion.div>
    )
}

export default Footer
