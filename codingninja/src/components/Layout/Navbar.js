import React, { useState, useEffect, useRef } from 'react';
import { Link, json } from 'react-router-dom';
import { motion, stagger } from 'framer-motion';
import { useAuth } from '../../context/auth';

const Navbar = ({ items, defaultValue = '' }) => {

    // context
    const [auth, setAuth] = useAuth();


    const [isNavOpen, setIsNavOpen] = useState(false);
    let menuRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setIsNavOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    })

    const navbar = [
        { 'id': '2', 'nav': 'About Us', 'link': '#aboutus' },
        { 'id': '3', 'nav': 'Campus', 'link': '#campus' },
        { 'id': '5', 'nav': 'Upcoming Events', 'link': '#events' },
    ];
    const [navSize, setnavSize] = useState("4rem");
    const [navColor, setnavColor] = useState("white");
    const [textcolor, settextcolor] = useState("#414141");
    const listenScrollEvent = () => {
        window.backgroundColor = "red";
        window.scrollY > 10 ? setnavColor("#") : setnavColor("white");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    const [visible, setVisible] = useState(false)
    const options = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <nav className='shadow-md relative' style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 0.5s",
            color: textcolor,
        }}>
            <div className="w-full mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between">
                    <motion.div
                        className=" w-full flex items-center lg:my-3 lg:pt-0 pt-5">
                        <Link
                            to='/' className="w-fit lg:mx-0 flex items-center rounded-full">
                            <motion.img
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.1, }}
                                className=" rounded-full" src="cnlogo.svg" alt="codingninjalogo" />
                        </Link>
                        <div className="hidden md:hidden lg:block ml-auto">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.2, delay: 0.2, stiffness: 1000, velocity: -100 }}
                                className="ml-10 flex items-baseline space-x-4">
                                {navbar.map((data, index) => {

                                    return (
                                        <motion.a
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 0.2, delay: index * 0.2, stiffness: 1000, velocity: -100 }}

                                            id='navs' key={data.id}
                                            href={data.link}
                                            className="transition-all relative group tracking-wide px-3 py-2 rounded-md text-base hover:tracking-widest scroll-smooth hover:scroll-auto hover:text-[#D05401] hover:font-bold hover:bg-gradient-to-t hover:from-[#D05401] hover:from-40% hover:to-white hover:text-transparent bg-clip-text"
                                        >
                                            <span>{data.nav}</span>
                                            <span className="absolute transition-all ease-in-out duration-1000 -bottom-1 left-1/2 w-0 h-[2px] bg-gradient-to-t from-[#D05401] from-10% to-white group-hover:w-1/2 group-hover:transition-all "></span>
                                            <span className="absolute transition-all ease-in-out duration-1000 -bottom-1 right-1/2 w-0 h-[2px] bg-gradient-to-t from-[#D05401] from-10% to-white group-hover:w-1/2 group-hover:transition-all"></span>
                                            <span className="absolute left-0 -bottom-1 w-full rounded-full h-[2px] transition-all ease-in-out duration-1000 -z-10  group-hover:transition-all"></span>
                                        </motion.a>

                                    )
                                })}
                                <Link to='/dashboard'>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.2, delay: 0.2, stiffness: 1000, velocity: -100 }}

                                        id='navs'

                                        className={!auth.user ? "hidden" : "transition-all relative group tracking-wide px-3 py-2 rounded-md text-base hover:tracking-widest scroll-smooth hover:scroll-auto hover:text-[#D05401] hover:font-bold hover:bg-gradient-to-t hover:from-[#D05401] hover:from-40% hover:to-white hover:text-transparent bg-clip-text"}
                                    >
                                        <span>Dashboard</span>
                                        <span className="absolute transition-all ease-in-out duration-1000 -bottom-1 left-1/2 w-0 h-[2px] bg-gradient-to-t from-[#D05401] from-10% to-white group-hover:w-1/2 group-hover:transition-all "></span>
                                        <span className="absolute transition-all ease-in-out duration-1000 -bottom-1 right-1/2 w-0 h-[2px] bg-gradient-to-t from-[#D05401] from-10% to-white group-hover:w-1/2 group-hover:transition-all"></span>
                                        <span className="absolute left-0 -bottom-1 w-full rounded-full h-[2px] transition-all ease-in-out duration-1000 -z-10  group-hover:transition-all"></span>
                                    </motion.div>
                                </Link>


                                {!auth?.user ? (
                                    <Link to='/login'>
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 0.1 }}
                                            whileHover={{ backgroundColor: '' }}
                                            whileTap={{ scale: 1.1 }}
                                            id='navs'
                                            className="relative py-2 px-8 text-[#D05401] text-base rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:text-white tracking-wide hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full hover:bg-gradient-to-r hover:from-[#D05401] hover:from-10% hover:to-white hover:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">

                                            Sign In
                                        </motion.div>
                                    </Link>
                                ) : (<span id='navs'>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.1 }}
                                        whileHover={{ backgroundColor: '' }}
                                        whileTap={{ scale: 1.1 }}
                                        id='navs'
                                        className="relative py-2 px-8 text-base rounded-l-full overflow-hidden text-white font-semibold tracking-wide active:scale-90 before:absolute before:top-0 bg-gradient-to-br from-[#D05401] from-50% to-white transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] before:left-0">

                                        <span> {auth.user.name} </span>

                                    </motion.div>
                                    {/* <span> {auth.user.name} </span> */}
                                    {/* <Dropdown items={options} defaultValue="Option 2" /> */}
                                    {/* <Dropdown /> */}
                                </span>)}
                            </motion.div>
                        </div>
                    </motion.div>



                    <section className="MOBILE-MENU flex lg:hidden md:ml-auto items-center justify-center" ref={menuRef}>
                        <div
                            className="HAMBURGER-ICON space-y-2 pt-5"
                            onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                            <span className="block h-0.5 w-4 ml-auto bg-[#0D2232] "></span>
                            <span className="block h-0.5 w-7 ml-auto bg-[#0D2232] "></span>
                            <span className="block h-0.5 w-5 ml-auto bg-[#0D2232] "></span>
                        </div>

                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav "}>
                            <div
                                className="absolute top-0 right-0 px-2 pt-3"
                                onClick={() => setIsNavOpen(false)}
                            >
                                <button
                                    className="relative border-2 border-[#0D2232] group rounded-full hover:border-[#D05401] w-10 h-10 duration-500 overflow-hidden"
                                    type="button"
                                >
                                    <p
                                        className="font-Manrope text-3xl h-full w-full flex items-center justify-center text-[#0D2232] duration-500 relative z-10 group-hover:scale-0"
                                    >
                                        ×
                                    </p>
                                    <span
                                        className="absolute w-full h-full bg-[#D05401] rotate-45 group-hover:top-7 duration-500 top-12 left-0"
                                    ></span>
                                    <span
                                        className="absolute w-full h-full bg-[#D05401] rotate-45 top-0 group-hover:left-7 duration-500 left-12"
                                    ></span>
                                    <span
                                        className="absolute w-full h-full bg-[#D05401] rotate-45 top-0 group-hover:right-7 duration-500 right-12"
                                    ></span>
                                    <span
                                        className="absolute w-full h-full bg-[#D05401] rotate-45 group-hover:bottom-7 duration-500 bottom-12 right-0"
                                    ></span>
                                </button>

                            </div>
                            <div
                                className={`${isNavOpen ? 'block' : 'hidden'
                                    } lg:hidden bg-transparent w-full px-4 pt-5`}
                                id="mobile-Homeu"
                                ref={menuRef}
                            >
                                <div className=" space-y-5 transition-all mx- " ref={menuRef}>
                                    <div className="w-fit flex items-center" onClick={() => setIsNavOpen(false)}
                                    >
                                        <img className="" src="cnlogo.svg" alt="codingninjalogo" />

                                    </div>

                                    {navbar.map(data => {
                                        return (

                                            <a
                                                id='navs'
                                                onClick={() => setIsNavOpen(false)}
                                                key={data.id}
                                                href={data.link}
                                                className="text-[#1C314C] hover:tracking-widest scroll-smooth hover:scroll-auto hover:text-[#D05401] hover:font-bold font-semibold hover:bg-gradient-to-t hover:from-[#D05401] hover:from-30% hover:to-white hover:text-transparent bg-clip-text w-[100%] tracking-wide transition-all block px-3 py-5 rounded-md text-base text-left"
                                            >
                                                {data.nav}
                                            </a>
                                        )
                                    })}
                                    <Link to='/login'>
                                        <div
                                            id='navs'
                                            className="mt-10 relative py-2 px-0 text-[#D05401] text-base rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:text-white tracking-wide hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full w-[50%] before:h-full hover:bg-gradient-to-r hover:from-[#D05401] hover:from-10% hover:to-white hover:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"
                                        >
                                            Sign In
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        // justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
                </div>
            </div>

            {/* Mobile Homeu, toggle classes based on Homeu state */}

        </nav>
    );
};

export default Navbar;
