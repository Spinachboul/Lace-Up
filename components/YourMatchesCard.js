import React from 'react';
import Image from "next/image";
import {AiFillStar, AiOutlineClockCircle} from "react-icons/ai";
import {GiTennisRacket} from "react-icons/gi";
import {GiRunningShoe} from "react-icons/gi";
import {SiGamejolt} from "react-icons/si";
import {CiLocationOn} from "react-icons/ci";
import {Button} from "@mui/material";
import {BiBasketball} from "react-icons/bi";

const MatchCard = ({userImage, rating, name, game, address, time, solePoints, matchPlayed, playedFor}) => {
    const arr = new Array(rating);
    for(let i=0;i<rating;i++){
        arr.push('lol');
    }
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
        <div className="max-w-6xl mx-auto shadow-gray-800 shadow-sm pt-4 my-4 mx-2">
            <div className={'flex flex-col justify-between mx-4'}>
                <div className={'flex'}>
                    <div className={'relative pr-12'}>
                        <Image src={userImage} alt={''} width={150} className={'rounded-full'}/>
                        <div className={'absolute bg-white top-0 end-0 shadow-gray-800 shadow-sm rounded-full p-1 flex'}>
                            {
                                arr.map((i)=>(
                                    <AiFillStar size={20} className={'text-yellow-500'}/>
                                ))
                            }
                        </div>
                    </div>
                    <div className={'flex flex-col justify-between'}>
                        <div title={'SolePoints'} className={'relative p-4'}>
                            <GiRunningShoe size={28}/>
                            <p className={'bg-white absolute top-0 end-0 rounded-full shadow-gray-800 shadow-sm px-1.5 text-sm'}>
                                {solePoints}
                            </p>
                        </div>
                        <div title={'Matches-Played'} className={'relative p-4'}>
                            <SiGamejolt size={25}/>
                            <p className={'bg-white absolute top-0 end-0 rounded-full shadow-gray-800 shadow-sm px-1.5 text-sm'}>
                                {matchPlayed}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={'pl-4'}>
                    <div className={'flex text-md'}>
                        <div className={'font-bold'}>Made By: </div>
                        <div className={'pl-1'}>{name}</div>
                    </div>
                    <div className={'flex text-md'}>
                        <div className={'font-bold py-1'}>Game: </div>

                        {gameIcon && (
                            <div className={`flex ${gameStyle} rounded-full text-white font-bold px-2 ml-1`}>
                                <div className={"pl-1 flex items-center"}>{game}</div>
                                <div className={"flex items-center"}>{gameIcon}</div>
                            </div>
                        )}

                    </div>
                    <div className={'flex text-md py-1 shadow-gray-800 shadow-sm rounded-full my-1 mt-2'}>
                        <div className={'font-bold py-1 flex px-2'}><CiLocationOn size={25}/> </div>
                        <div>{address}</div>
                    </div>
                    <div className={'flex text-md py-1 shadow-gray-800 shadow-sm rounded-full my-1'}>
                        <div className={'font-bold py-1 flex px-2'}><AiOutlineClockCircle size={25}/></div>
                        <div>{time}
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col justify-between'}>
                    <div className={'text-gray-400'}>
                        2 players joined
                    </div>
                    <div>
                        <Button variant={"contained"} className={'w-full'} color={'success'}>Play</Button>
                    </div>
                </div>
            </div>
            <div className={'flex items-center mt-2 justify-center bg-red-200'}>
                <div className={'flex text-xl font-bold text-red-600'}>
                    <div>Match for: {playedFor}</div>
                    <div className={'flex items-center'}>
                        <GiRunningShoe size={23} className={'ml-2'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchCard;