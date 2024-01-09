import React from 'react';
import Image from "next/image";
import {AiFillStar, AiOutlineClockCircle} from "react-icons/ai";
import {GiTennisRacket} from "react-icons/gi";
import {GiRunningShoe} from "react-icons/gi";
import {SiGamejolt} from "react-icons/si";
import {CiLocationOn} from "react-icons/ci";
import {Button} from "@mui/material";
import {BiBasketball} from "react-icons/bi";

const TournamentCard = ({organiserName, game, venue, time,tourImage, eligiblePoints, description}) => {
    let gameStyle;
    let gameIcon;
    switch (game) {
        case "Tennis":
            gameIcon = <GiTennisRacket size={20} />;
            gameStyle = "bg-green-400";
            break;
        case "Basketball":
            gameIcon = <BiBasketball size={20} />;
            gameStyle = "bg-orange-500";
            break;
        case "Badminton":
            gameIcon = <GiTennisRacket size={20} />;
            gameStyle = "bg-blue-300";
            break;
        default:
            gameIcon = null;
            gameStyle = "";
            break;
    }
    return (
        <div className="max-w-6xl mx-auto shadow-gray-800 shadow-sm pt-4 my-4 w-full">
            <div className={'flex mx-4 gap-4'}>
                <div className={'w-2/3 shadow-gray-800 shadow-sm overflow-hidden flex items-center'}>
                    <Image src={tourImage} alt={''} className={'rounded-sm w-full hover:scale-110 duration-500 transform transition-all'}/>
                </div>
                <div className={'w-1/3 w-max-auto p-8 shadow-sm shadow-gray-800 flex flex-col gap-2'}>
                    <div className={'flex text-lg'}>
                        <div className={'font-bold'}>Organised By: </div>
                        <div className={'pl-1'}>{organiserName}</div>
                    </div>
                    <div className={'flex text-lg'}>
                        <div className={'font-bold flex items-center'}>Game: </div>
                        {gameIcon && (
                            <div className={`flex ${gameStyle} rounded-full text-white font-bold px-2 ml-1 py-1`}>
                                <div className={"pl-1 flex items-center"}>{game}</div>
                                <div className={"flex items-center"}>{gameIcon}</div>
                            </div>
                        )}

                    </div>
                    <div className={'flex text-lg py-1 shadow-gray-800 shadow-sm rounded-full my-1 mt-2'}>
                        <div className={'font-bold py-1 flex px-2'}><CiLocationOn size={25}/> </div>
                        <div>{venue}</div>
                    </div>
                    <div className={'flex text-xl py-1 shadow-gray-800 shadow-sm rounded-full my-1'}>
                        <div className={'font-bold py-1 flex px-2'}><AiOutlineClockCircle size={25}/></div>
                        <div>{time}
                        </div>
                    </div>
                    <div className={'flex flex-col justify-between'}>
                        <div>
                            <Button variant={"contained"} className={'w-full text-xl'} color={'success'}>Join!</Button>
                        </div>
                    </div>
                    <div className={'font-thin h-[220px] text-xl overflow-scroll'}>
                        {description}
                    </div>
                </div>
            </div>
            <div className={'flex items-center mt-2 justify-center bg-red-200'}>
                <div className={'flex text-xl font-bold text-red-600'}>
                    <div>Eligibility: {eligiblePoints}</div>
                    <div className={'flex items-center'}>
                        <GiRunningShoe size={23} className={'ml-2'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TournamentCard;