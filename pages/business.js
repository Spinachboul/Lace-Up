import React from 'react';
import {GiRunningShoe} from "react-icons/gi";
import {AiFillCrown, AiOutlineCrown} from "react-icons/ai";

const Business = () => {
    return (
        <div className="bg-white text-black py-8 px-4 pt-4 sm:px-16 md:px-24 lg:px-28 sm:py-4 md:py-4">
            <div className="max-w-6xl mx-auto px-4 shadow-gray-800 shadow-sm flex p-4">
                <div className={"max-w-6xl mx-auto px-4 shadow-gray-800 shadow-sm flex flex-col p-4"}>
                    <div className={'max-w-6xl mx-auto px-4 shadow-gray-800 shadow-sm flex p-4'}>
                        <GiRunningShoe size={160}/>
                    </div>
                    <p className={'font-bold px-4 py-2'}>Buy 100 SlayPoints for $10</p>
                </div>
                <div className={"max-w-6xl mx-auto px-4 shadow-gray-800 shadow-sm flex flex-col p-4"}>
                    <div className={'max-w-6xl mx-auto px-4 shadow-gray-800 shadow-sm flex p-4'}>
                        <GiRunningShoe size={160}/>
                    </div>
                    <p className={'font-bold px-4 py-2'}>Buy 2000 SlayPoints for $100</p>
                </div>
                <div className={"max-w-6xl mx-auto px-4 shadow-gray-800 shadow-sm flex flex-col p-4"}>
                    <div className={'max-w-6xl mx-auto px-4 shadow-gray-800 shadow-sm flex p-4'}>
                        <GiRunningShoe size={160}/>
                    </div>
                    <p className={'font-bold px-4 py-2'}>Buy 10000 SlayPoints for $200</p>
                </div>
                <div className={"max-w-6xl mx-auto px-4 shadow-gray-800 shadow-sm flex flex-col p-4"}>
                    <div className={'max-w-6xl mx-auto px-4 shadow-gray-800 shadow-sm flex p-4'}>
                        <AiOutlineCrown className={'text-yellow-500'} size={160}/>
                    </div>
                    <p className={'font-bold px-4 py-2 text-center'}>Buy premium</p>
                </div>
            </div>
        </div>
    );
};

export default Business;