import React from 'react';
import YouTube from 'react-youtube';


const Live = () => {
    const videoId = "LxbcXTi5hoI"; // Replace with the ID of your random video

    return (
        <div className={'flex items-center'}>
            <div className="flex w-full justify-around h-screen">
                <div className="h-full flex items-center">
                    <div className={' bg-red-600 p-4 rounded text-xl text-white'}>
                        Bet for team - 1
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="youtube-short">
                        <YouTube videoId={videoId} />
                    </div>
                </div>
                <div className="h-full flex items-center">
                    <div className={'bg-green-600 p-4 rounded text-xl text-white'}>
                        Bet for team - 2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Live;