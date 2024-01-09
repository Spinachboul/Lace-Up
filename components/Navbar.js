import React, {useEffect, useRef, useState} from 'react';
import {FaBars, FaSearch, FaShoppingCart, FaTimes, FaUser} from 'react-icons/fa';
import Image from "next/image";
import logo from '../images/logo.png'
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {MenuItem} from "@mui/material";
import {GiRunningShoe} from "react-icons/gi";
import axios from "axios";

export default function Navbar(){
    const router = useRouter();
    const {data ,status} = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const prevScrollY = useRef(0);
    const [showPopup, setShowPopup] = useState(false);
    const [isOpenDetails, setIsOpenDetails] = useState(false);
    const [showDropdown, setShowDropDown] = useState(false);
    const {data: session} = useSession();

    const [details, setDetails] = useState(null);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSignIn = async () => {
        await signIn();
        await router.push('/details');
    };
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > prevScrollY.current) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
            prevScrollY.current = currentScrollY;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(()=>{
        const handleKeyDown = (event)=>{
            if(event.keyCode === 27 && showPopup){
                setShowPopup(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return ()=>{
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [showPopup]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await axios.get(`/api/userdashboard/${session?.user?.id}`);
                setDetails(res.data.user);
            } catch (err) {
                console.error(err);
                setDetails(null);
            }
        };
        fetchUserData();
    }, [session]);

    const toggleDropdownDetails = () => {
        setIsOpenDetails(!isOpenDetails);
        setShowDropDown(false);
    };

    const handleDropdownToggle = () => {
        setShowDropDown(prevState => !prevState);
        setIsOpenDetails(false);
    };


    return (
        <nav className={`z-20 bg-white text-black border-b-[1px] font-semibold transition-all duration-700 transition-all ${
            isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100 sticky top-0"
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="/" className="font-bold text-xl">
                            <Image src={logo} alt={''} height={60}/>
                        </a>
                    </div>
                    <div className="hidden md:block w-full">
                        <ul className="flex justify-between space-x-10 text-xl">
                            <ul className="mx-14 flex justify-center space-x-4 text-lg">
                                <li className={'flex items-center'}>
                                    <Link href="/matches" className="hover:text-gray-700">
                                        Find Matches
                                    </Link>
                                </li>
                                <li className={'flex items-center'}>
                                    <Link href="/tournament" className="hover:text-gray-700">
                                        Enter Tournaments
                                    </Link>
                                </li>
                                <li className={'flex items-center'}>
                                    <Link href="/book" className="hover:text-gray-700">
                                        Book venue
                                    </Link>
                                </li>
                                <li className={'flex items-center'} title={'Watch LIve Matches'}>
                                    <Link href="/live" className="hover:underline text-red-600">
                                        LIVE!
                                    </Link>
                                </li>
                            </ul>
                            <ul className="flex space-x-10 text-xl">
                                <li className={'relative p-2 hover:bg-gray-200 rounded-full duration-500 transition-all transform cursor-pointer'} onClick={handleDropdownToggle}>
                                    <GiRunningShoe size={28}/>
                                    <p className={'absolute top-0 bg-white end-0 rounded-full shadow-gray-800 shadow-sm px-1.5 text-sm'}>
                                        {details?.slayPoints}
                                    </p>
                                    {
                                        showDropdown && (
                                            <div className="absolute right-0 z-10 mt-2 w-40 bg-white rounded-md shadow-lg">

                                                    <MenuItem>
                                                        <Link href={'/business'} className={'py-2'}>
                                                            Buy Slay Points
                                                    </Link>
                                                    </MenuItem>
                                            </div>
                                        )
                                    }
                                </li>
                                <li className={'relative flex flex-col justify-center items-center'}>
                                    <div className="hover:text-gray-300 underline flex items-center" onClick={() => setShowPopup(!showPopup)}>
                                        {data ?
                                            <button onClick={toggleDropdownDetails} className={'p-1 transform transition-all duration-500 rounded-full shadow-gray-800 shadow-sm'}>
                                                <div>
                                                    <Image className={'rounded-full cursor-pointer'} src={data?.user?.image} alt={''} width={35} height={35}/>
                                                    {isOpenDetails && (
                                                        <div
                                                            id="dropdownDelay"
                                                            className="absolute right-0 text-black z-10 mt-4 divide-y divide-gray-100 bg-white shadow-lg w-44"
                                                        >
                                                            <ul className="" aria-labelledby="dropdownDelayButton flex flex-col items-center">

                                                                    <MenuItem className={'text-lg w-full text-center'}>
                                                                        <Link href="/dashboard" className="w-full py-1 flex justify-center">
                                                                            Dashboard
                                                                        </Link>
                                                                    </MenuItem>
                                                                    <MenuItem className={'text-lg w-full flex justify-center'}>
                                                                        <Link href="/details" className="w-full flex justify-center py-1">
                                                                        Update Details
                                                                        </Link>
                                                                    </MenuItem>


                                                                <li className={'border-t-[1px] bg-gray-100 flex justify-center text-lg hover:bg-gray-200'}>
                                                                    <button onClick={()=>signOut()} className="block px-3 py-2 hover:bg-gray-200">
                                                                        LogOut
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </button>: <button onClick={()=>signIn( ['github', 'google'] ,  {callbackUrl:'http://localhost:3000/'})}><FaUser size={20}/></button>}
                                    </div>
                                </li>
                            </ul>
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="text-gray-400 hover:text-black focus:outline-none"
                            onClick={toggleMenu}
                        >
                            {isOpen ? <FaTimes/> : <FaBars/>}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden text-xl">
                    <ul className="flex flex-col space-y-10 py-4 px-3 absolute top-16 left-0 w-full bg-white">
                        <li className="text-center">
                            <Link href="/matches" className="hover:text-gray-300">
                                Find Matches
                            </Link>
                        </li>
                        <li className="text-center">
                            <Link href="/tournament" className="hover:text-gray-300">
                                Enter Tournament
                            </Link>
                        </li>
                        <li className="text-center">
                            <Link href="/book" className="hover:text-gray-300">
                                Book Venue
                            </Link>
                        </li>
                        <li className={'flex items-center'} title={'Watch LIve Matches'}>
                            <Link href="/live" className="hover:underline text-red-600">
                                LIVE!
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex space-x-10 text-xl">
                        <li className={'relative p-2 hover:bg-gray-200 rounded-full duration-500 transition-all transform cursor-pointer'} onClick={handleDropdownToggle}>
                            <GiRunningShoe size={28}/>
                            <p className={'absolute top-0 bg-white end-0 rounded-full shadow-gray-800 shadow-sm px-1.5 text-sm'}>
                                {details?.slayPoints}
                            </p>
                            {
                                showDropdown && (
                                    <div className="absolute right-0 z-10 mt-2 w-40 bg-white rounded-md shadow-lg">

                                        <MenuItem>
                                            <Link href={'/business'} className={'py-2'}>
                                                Buy Slay Points
                                            </Link>
                                        </MenuItem>
                                    </div>
                                )
                            }
                        </li>
                        <li className={'relative flex flex-col justify-center items-center'}>
                            <div className="hover:text-gray-300 underline flex items-center" onClick={() => setShowPopup(!showPopup)}>
                                {data ?
                                    <button onClick={toggleDropdownDetails} className={'p-1 transform transition-all duration-500 rounded-full shadow-gray-800 shadow-sm'}>
                                        <div>
                                            <Image className={'rounded-full cursor-pointer'} src={data?.user?.image} alt={''} width={35} height={35}/>
                                            {isOpenDetails && (
                                                <div
                                                    id="dropdownDelay"
                                                    className="absolute right-0 text-black z-10 mt-4 divide-y divide-gray-100 bg-white shadow-lg w-44"
                                                >
                                                    <ul className="" aria-labelledby="dropdownDelayButton flex flex-col items-center">

                                                        <MenuItem className={'text-lg w-full text-center'}>
                                                            <Link href="/dashboard" className="w-full py-1 flex justify-center">
                                                                Dashboard
                                                            </Link>
                                                        </MenuItem>
                                                        <MenuItem className={'text-lg w-full flex justify-center'}>
                                                            <Link href="/details" className="w-full flex justify-center py-1">
                                                                Update Details
                                                            </Link>
                                                        </MenuItem>


                                                        <li className={'border-t-[1px] bg-gray-100 flex justify-center text-lg hover:bg-gray-200'}>
                                                            <button onClick={()=>signOut()} className="block px-3 py-2 hover:bg-gray-200">
                                                                LogOut
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </button>: <button onClick={()=>signIn( ['github', 'google'] ,  {callbackUrl:'http://localhost:3000/'})}><FaUser size={20}/></button>}
                            </div>
                        </li>

                    </ul>
                </div>
            )}
        </nav>
    );
};

