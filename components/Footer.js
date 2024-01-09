import React, {useState} from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import {Fade} from 'react-awesome-reveal';
import Link from "next/link";
import axios from "axios";
import {Button, TextField} from "@mui/material";

const Footer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            message,
        };
        try {
            const response = await axios.post('/api/contact', formData);
            if (response.status === 200) {
                setSubmitted(true);
                setName('');
                setEmail('');
                setMessage('');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Fade delay={250} className={'z-0'}>
                <div className="bg-white text-black py-8 px-4 pt-4 sm:px-16 md:px-24 lg:px-28 sm:py-4 md:py-10">
                    <div className="max-w-6xl mx-auto px-4 shadow-gray-800 shadow-sm">
                        <div className="p-5">
                            <div className={'md:flex md:flex-wrap md:-mx-4 py-6 m-4'}>
                                <div className="md:w-[30%] md:px-4">
                                    <h2 className="uppercase mb-4 font-bold text-xl">About us</h2>
                                    <p className="leading-loose text-sm">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a type specimen book. It has
                                        survived not only five centuries, but also the leap into electronic typesetting,
                                        remaining essentially unchanged. It was popularised in the 1960s with the release of
                                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                        software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </div>
                                <div className="md:w-[20%] md:px-4">
                                    <h2 className="uppercase mb-4 font-bold text-xl">Quick links</h2>
                                    <ul className="leading-loose">
                                        <li><Link href="/" className={'underline'}>Home</Link></li>
                                        <li><Link href="/matches" className={'underline'}>Find Matches</Link></li>
                                        <li><Link href="/tournament" className={'underline'}>Enter Tournament</Link></li>
                                        <li><Link href="/book" className={'underline'}>Book Venue</Link></li>
                                    </ul>
                                </div>
                                <div className="md:w-[20%] md:px-4">
                                    <h2 className="uppercase mb-4 font-bold text-xl">Follow us</h2>
                                    <div className="flex">
                                        <a href="#" className="mr-6 hover:text-gray-300 transition-all duration-500"><FaFacebook size={24} /></a>
                                        <a href="#" className="mr-6 hover:text-gray-300 transition-all duration-500"><FaTwitter size={24} /></a>
                                        <a href="#" className="mr-6 hover:text-gray-300 transition-all duration-500"><FaInstagram size={24} /></a>
                                    </div>
                                </div>
                                <div className="md:w-[30%] md:px-4">
                                    <h2 className="uppercase mb-4 font-bold text-xl">Reach Out!</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <TextField
                                                className="w-full"
                                                type="text"
                                                label={"Name"}
                                                value={name}
                                                onChange={(e)=>setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <TextField
                                                className="w-full"
                                                type="text"
                                                label="Email"
                                                value={email}
                                                onChange={(e)=>setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <TextField
                                                className="w-full h-[60px]"
                                                rows={5}
                                                label="Message"
                                                value={message}
                                                onChange={(e)=>setMessage(e.target.value)}
                                            ></TextField>
                                        </div>
                                        <div className="flex justify-center">
                                            <Button
                                                variant={'contained'}
                                                type={'submit'}
                                            >
                                                Send
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
            <div>
                <p className="text-center text-base leading-6 text-gray-400">
                    &copy; 2023 Articue, Inc. All rights reserved.
                </p>
            </div>
            {submitted && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg py-6 px-12 shadow-sm shadow-gray-800">
                        <h2 className="text-xl font-bold mb-4">Form Submitted Successfully</h2>
                        <p>Your message has been submitted. Thank you!😁</p>
                        <div className={'flex justify-end'}>
                            <button
                                className="p-2 mt-2 text-lg transition-all duration-500 text-black bg-white shadow-sm shadow-gray-800 rounded-sm hover:scale-110 active:scale-90"
                                onClick={() => setSubmitted(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Footer;
