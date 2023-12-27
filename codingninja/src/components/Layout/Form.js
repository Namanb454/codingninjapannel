import { useState } from 'react';
import React from 'react'
import axios from 'axios';
import { useEventData } from '../../context/event';

function Form() {

    const { setEventDataValue } = useEventData();

    const [eventData, setEventData] = useState({
        title: '',
        date: '',
        // Add more fields as needed
    });

    const handleChange = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/api/eventData', eventData);
            console.log('Form data submitted successfully');
            const response = await axios.get('/api/eventdata'); // Modify the API endpoint as needed
            setEventDataValue(response.data);
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    return (
        <div className="flex items-center">
            <div className="bg-white p-10 lg:w-full md:w-2/3 mx-auto rounded">
                <form onSubmit={handleSubmit} >

                    <div className="flex items-center mb-5">
                        <label className="w-20 inline-block text-left mr-4 text-gray-500">Title</label>
                        <input type="text" name="title" value={eventData.title} onChange={handleChange} className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-[#544C8C]" />
                    </div>

                    <div className="flex items-center mb-10">
                        <label className="w-20 inline-block text-left mr-4 text-gray-500">Date</label>
                        <input type="date" name="date" value={eventData.date} onChange={handleChange} className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-[#544C8C]" />
                    </div>
                    <div className="">
                        <button type='submit' className="relative py-2 px-8 rounded-xl overflow-hidden duration-400 ease-in-out text-white tracking-wide shadow-lg active:scale-90 before:absolute before:top-0 before:w-full before:h-full bg-gradient-to-bl from-[#D05401] from-70% to-white transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px]">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form
