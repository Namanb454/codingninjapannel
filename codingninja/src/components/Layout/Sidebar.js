import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { MdEmojiEvents } from "react-icons/md";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import Navbar from './Navbar';
import Footer from './Footer';
import { useAuth } from '../../context/auth';
import toast from "react-hot-toast";
import { Link } from 'react-router-dom';
import { IoLogOut } from "react-icons/io5";

function Sidebar({ children, color }) {

    const sideNavbar = [
        { 'id': '1', 'nav': 'Dashboard', 'icons': RxDashboard, 'link': '/dashboard' },
        { 'id': '2', 'nav': 'Events', 'icons': MdEmojiEvents, 'link': '/events' },
        { 'id': '3', 'nav': 'Members', 'icons': GiNinjaHeroicStance, 'link': '#' },
        { 'id': '4', 'nav': 'Settings', 'icons': IoIosSettings, 'link': '#' },
    ];

    // Logout
    const [auth, setAuth] = useAuth();
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: "",
        });
        localStorage.removeItem("auth");
        toast.success("Logout Successfully");
    };

    return (
        <div>
            <Navbar />
            <div id='sideNavbar' className="flex  overflow-hidden bg-white">
                <div className=" md:flex md:flex-shrink-0">
                    <div className="flex flex-col w-64 h-full">
                        <div className="flex flex-col flex-grow pt-5 overflow-y-auto border-r shadow-md ">
                            <div className="flex flex-col items-center flex-shrink-0 px-4">
                                <a className="text-left focus:outline-none" href="/groups/sidebar/">
                                    <h2 className="block p-2 text-xl font-medium tracking-tighter transition duration-500 ease-in-out transform cursor-pointer text-black">Dr. Akhilesh Das Gupta Institute od Technology and Management - Delhi</h2>
                                </a>
                            </div>
                            <div className="flex flex-col flex-grow px-4 mt-5">
                                <nav className="flex-1 space-y-1">
                                    <ul>
                                        {sideNavbar.map((data) => {
                                            return (
                                                <li>
                                                    <Link to={data.link} className=" inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform rounded-lg text-[#666189] font-semibold  focus:bg-gradient-to-r  focus:from-[#666189] focus:from-[4%] focus:via-[#9992CE] focus:via-5% focus:to-white focus:to-100% focus:transition-all hover:bg-gradient-to-r hover:from-[#9992CE] hover:from-10% hover:to-white hover:transition-all" white="" href="/">
                                                        <data.icons />
                                                        <span className="ml-4">{data.nav}</span>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                        <Link to="/" onClick={handleLogout}>
                                            <button className=" inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform rounded-lg text-[#666189] font-semibold  focus:bg-gradient-to-r  focus:from-[#666189] focus:from-[4%] focus:via-[#9992CE] focus:via-5% focus:to-white focus:to-100% focus:transition-all hover:bg-gradient-to-r hover:from-[#9992CE] hover:from-10% hover:to-white hover:transition-all" white="" >
                                                <IoLogOut />
                                                <span className="ml-4">Sign Out</span>
                                            </button>
                                        </Link>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Sidebar
