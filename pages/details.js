import React, {useEffect, useState} from 'react';
import {Bounce} from "react-awesome-reveal";
import { CheckCircleIcon, RefreshIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import imag from '../images/regImage.png'
import Image from "next/image";
import {Box, MenuItem, Rating, Select, TextField, Typography} from '@mui/material'
import axios from 'axios';

const Details = () => {
    //details
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [favouriteSports, setFavouriteSports] = useState('');
    const [rating, setRating] = useState(2);
    //for the loader
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    //getting the use info
    const { data: session } = useSession();
    //for storing the current user location
    const [currentLocation, setCurrentLocation] = useState(null);
    const email = session?.user?.email;

    console.log(email)

    useEffect(()=>{
        getLocation();
    }, []);
    //getting the location
    const getLocation = async()=>{
        const location = await axios.get('https://ipapi.co/json');
        setCurrentLocation(location.data);
    }


    useEffect(() => {
        setAddress(currentLocation?.city + ',' + currentLocation?.region);
    }, [currentLocation]);
    const getLabel = () => {
        if (rating >= 1 && rating <= 2) {
            return 'Beginner';
        } else if (rating >= 3 && rating <= 4) {
            return 'Intermediate';
        } else if (rating === 5) {
            return 'Advanced';
        } else {
            return '';
        }
    };
    const handleChange = (event, newValue) => {
        setRating(newValue);
    };
    const data = {
        email,
        fullName,
        address,
        phoneNumber,
        favouriteSports,
        rating
    }

    const handleSubmit = async()=>{
        try{
            console.log(data);
            await axios.post('/api/updateDetails', {
                email,
                fullName,
                address,
                phoneNumber,
                favouriteSports,
                rating
            })
        }
        catch(err){
            console.error(err)
        }
    }

    console.log(data)
    return (
        <Bounce triggerOnce>
            <div className="bg-white text-black sm:px-16 md:px-24 lg:px-28 lg:py-12 sm:py-4 md:py-20">
                <div className="max-w-6xl mx-auto px-4 shadow-gray-800 shadow-sm py-8 flex justify-around">
                    <div className={''}>
                        <h1 className={'my-2 flex text-3xl md:text-4xl font-semibold font-bold'}>Specify your details here!</h1>
                        {success && (
                            <div className="flex items-center my-4 text-green-500">
                                <CheckCircleIcon className="h-6 h-6 mr-2" />
                                Details updated successfully!
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className={'py-1'}>
                                <TextField id="outlined-basic" label="Full Name" variant="outlined" onChange={(e)=>setFullName(e.target.value)}  className={'w-full'}/>
                            </div>
                            <div className={'py-1'}>
                                <TextField id="outlined-basic" label="Phone-Number" variant="outlined" onChange={(e)=>setPhoneNumber(e.target.value)}  className={'w-full'}/>
                            </div>
                            <div className={'py-1'}>
                                <TextField id="outlined-basic" label="Address" variant="outlined" value={address} className={'w-full'}/>
                            </div>
                            <div className={'py-1'}>
                                <Select
                                    id="demo-simple-select-standard"
                                    value={favouriteSports}
                                    onChange={(e)=>setFavouriteSports(e.target.value)}
                                    label="Favorite-Sports"
                                    className={'w-full'}
                                >
                                    <MenuItem value="Please select a sport" name={"Please select a sport"}>
                                        None
                                    </MenuItem>
                                    <MenuItem value={'Badminton'}>Badminton</MenuItem>
                                    <MenuItem value={'Tennis'}>Tennis</MenuItem>
                                    <MenuItem value={'Basketball'}>Basketball</MenuItem>
                                </Select>
                            </div>
                            <div className={'py-1'}>
                                <Typography component="legend">Rate yourself</Typography>
                                <Rating
                                    name="size-large"
                                    size="large"
                                    onChange={handleChange}
                                />
                                <div className={'font-bold'}>{getLabel()}</div>
                            </div>
                            <div className={'flex justify-center'}>
                                <button
                                    className="text-black p-2 text-xl transition-all duration-500 bg-white shadow-sm shadow-gray-800 rounded-sm hover:scale-110 active:scale-90"
                                    type="submit"
                                >
                                    {loading ? (
                                        <div className="flex items-center">
                                            <RefreshIcon className="animate-spin w-4 h-4 mr-2" />
                                            Loading...
                                        </div>
                                    ) : (
                                        'Submit'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                    <Image src={imag} alt={''} width={300} className={'hidden lg:block'}/>
                </div>
            </div>
        </Bounce>
    );
};

export default Details;