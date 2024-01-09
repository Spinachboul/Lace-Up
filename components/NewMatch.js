import React, {useState} from 'react';
import Image from "next/image";

import tennisImage from '../images/add1.png';
import badmintonImage from '../images/add2.jpg';
import basketballImage from '../images/add3.png';

import {Button, MenuItem, Select, TextField} from "@mui/material";
import axios from "axios";
import {useSession} from "next-auth/react";

const NewMatch = () => {
    const [sports, setSports] = useState('');
    const [time, setTime] = useState('');
    const [venue, setVenue] = useState('');
    const [maxPlayers, setMaxPlayers] = useState('');
    const [betFor, setBetFor] = useState('');
    const {data:session} = useSession();

    let image = badmintonImage;
    if(sports === 'Basketball')
        image = basketballImage
    else if (sports === 'Tennis')
        image = tennisImage;
    else
        image = badmintonImage;


    const handleMatchForm = async(event)=>{
        event.preventDefault();
        console.log({betFor, maxPlayers})
        try{
            const matchData = {
                userId: session?.user?.id,
                game:sports,
                venue,
                time,
                betFor,
                maxPlayers,
            }
            const res = await axios.post('/api/addMatches', matchData);
            console.log(res.data)
        }
        catch(err){
            console.error(err)
        }
        setSports('');
        setTime('');
        setVenue('');
        setMaxPlayers('');
        setBetFor('');
    }
    return (
        <div className={'z-100 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'}>
            <div className="bg-white shadow-gray-800 shadow-lg rounded-sm py-6 pr-5 pl-10 w-10/12">
                <h1 className={'text-4xl font-semibold mb-4'}>Create a match</h1>
                <div className={'flex'}>
                    <form className={'w-7/12'} onSubmit={handleMatchForm}>
                        <div className={'py-1'}>
                            <Select
                                id="demo-simple-select-standard"
                                value={sports}
                                onChange={(e) => setSports(e.target.value)}
                                label="Favorite Sports"
                                className="w-full"
                                defaultValue="Badminton" // Set the default value here
                            >
                                <MenuItem value="Badminton">Badminton</MenuItem>
                                <MenuItem value="Tennis">Tennis</MenuItem>
                                <MenuItem value="Basketball">Basketball</MenuItem>
                            </Select>
                        </div>
                        <div className={'py-1'}>
                            <TextField id="outlined-basic" value={time} label="Enter game time" variant="outlined" onChange={(e)=>setTime(e.target.value)}  className={'w-full'}/>
                        </div>
                        <div className={'py-1'}>
                            <TextField id="outlined-basic" value={venue} label="Enter game venue" variant="outlined" onChange={(e)=>setVenue(e.target.value)}  className={'w-full'}/>
                        </div>
                        <div className={'py-1'}>
                            <TextField id="outlined-basic" value={maxPlayers} label="Enter maximum players" variant="outlined" onChange={(e)=>setMaxPlayers(e.target.value)}  className={'w-full'}/>
                        </div>
                        <div className={'py-1'}>
                            <TextField id="outlined-basic" value={betFor} label="How many SlayPoints to bet for?(Minimum 100)" variant="outlined" onChange={(e)=>setBetFor(e.target.value)}  className={'w-full'}/>
                        </div>
                        <div className={'flex justify-center py-2'}>
                            <Button variant={'contained'} type={'submit'}>
                                Create
                            </Button>
                        </div>
                    </form>
                    <Image src={image} alt={''} className={'w-5/12'}/>
                </div>
            </div>
        </div>
    );
};

export default NewMatch;