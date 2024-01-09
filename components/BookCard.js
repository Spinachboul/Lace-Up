import React from 'react';
import Image from "next/image";
import stad from '../images/stadium2.jpeg'
import {Button} from "@mui/material";

const BookCard = () => {
    return (
        <div className="bg-white h-[350px] text-black py-8 px-4 pt-4 sm:px-16 md:px-24 lg:px-28 sm:py-4 md:py-10">
            <div className="max-w-6xl mx-auto px-4 shadow-gray-800 shadow-sm flex w-full justify-around">
                <Image src={stad} alt={''} className={'h-full w-1/3'}/>
                <div className={'flex flex-col justify-center gap-4'}>
                    <div className={'text-4xl'}>
                        Vellore, Badminton Stadium
                    </div>
                    <div className={'text-2xl font-thin'}>
                        Occupancy: 1200
                    </div>
                    <Button variant={'contained'}>
                        Book!
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;