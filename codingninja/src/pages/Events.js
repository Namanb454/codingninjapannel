import React, { useState } from 'react'
import Sidebar from '../components/Layout/Sidebar'
import Form from '../components/Layout/Form'
import { useEventData } from '../context/event';

function Events() {

    const { eventData } = useEventData();

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpenClose = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='bg-black'>
            <Sidebar >

                <div className="flex flex-col flex-1 w-0 overflow-hidden bg-[#afb7ff56]">
                    <main className="relative flex-1 overflow-y-auto focus:outline-none ">
                        <div className="py-6">
                            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                                <div className='w-[80%] mx-auto '>

                                    {/* nav  */}
                                    <div className='flex text-base text-[#544C8C] font-semibold'>

                                        <div className=''>
                                            <button className='transition-all relative group tracking-wide px-3 py-2 rounded-md text-base focus:tracking-widest scroll-smooth focus:scroll-auto focus:font-bold bg-clip-text'>
                                                Remaining
                                                <span className="absolute transition-all ease-in-out duration-1000 -bottom-1 left-1/2 w-0 h-[2px] bg-black group-focus:w-1/2 group-focus:transition-all "></span>
                                                <span className="absolute transition-all ease-in-out duration-1000 -bottom-1 right-1/2 w-0 h-[2px] bg-black group-focus:w-1/2 group-focus:transition-all"></span>
                                                <span className="absolute left-0 -bottom-1 w-full rounded-full h-[2px] transition-all ease-in-out duration-1000 -z-10  group-focus:transition-all"></span>
                                            </button>

                                            <button className='ml-10 transition-all relative group tracking-wide px-3 py-2 rounded-md text-base focus:tracking-widest scroll-smooth focus:scroll-auto focus:font-bold bg-clip-text'>
                                                Completed
                                                <span className="absolute transition-all ease-in-out duration-1000 -bottom-1 left-1/2 w-0 h-[2px] bg-black group-focus:w-1/2 group-focus:transition-all "></span>
                                                <span className="absolute transition-all ease-in-out duration-1000 -bottom-1 right-1/2 w-0 h-[2px] bg-black group-focus:w-1/2 group-focus:transition-all"></span>
                                                <span className="absolute left-0 -bottom-1 w-full rounded-full h-[2px] transition-all ease-in-out duration-1000 -z-10  group-focus:transition-all"></span>
                                            </button>
                                        </div>
                                        <div className='ml-auto'>
                                            <button onClick={toggleOpenClose} className='w-fit ml-auto relative py-2 px-8 rounded-xl overflow-hidden duration-400 ease-in-out text-white tracking-wide shadow-lg active:scale-90 before:absolute before:top-0 before:w-full before:h-full bg-gradient-to-bl from-[#D05401] from-70% to-white transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px]'>
                                                {isOpen ? 'Close' : 'Create Event 🔽'}
                                            </button>
                                        </div>

                                    </div>
                                    <div>
                                        {isOpen && (
                                            <div>
                                                <Form />
                                            </div>
                                        )}
                                    </div>

                                    {/* list */}
                                    <section className="text-gray-600 body-font">
                                        {eventData ? (
                                            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                                                <div className="lg:w-[15%] md:w-1/2 w-5/6 mb-10 md:mb-0">
                                                    <img className="object-cover object-center rounded" alt="hero" src="eventthumbnail.png" />
                                                </div>
                                                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                                    <h1 className="title-font sm:text-xs text-3xl font-medium text-gray-900">Study Group</h1>
                                                    <h1 className="title-font sm:text-base text-3xl font-medium text-gray-900">Workshop | Introduction to APIs 101 by Postman</h1>
                                                    <p className="mb-4 text-xs leading-relaxed">🗓️Dec 28,2023 - 2:15 PM (IST)</p>
                                                    <div className="flex w-[60%] lg:flex-row md:flex-col">
                                                        <p className='text-xs'>Attendees: 84</p>
                                                        <p className='text-xs ml-auto'>Check-Ins: 84</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <p>No event data available yet.</p>
                                        )}
                                    </section>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>

            </Sidebar>
        </div>
    )
}

export default Events
