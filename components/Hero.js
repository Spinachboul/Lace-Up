import React, { useEffect, useState } from 'react';
import Image from "next/image";
import imag from '../images/heroImage.jpg';
import imag1 from '../images/heroImage2.png';
import {Fade} from "react-awesome-reveal";

const Hero = () => {
    const [activeUsers, setActiveUsers] = useState(0);
    const [matchesPlayed, setMatchesPlayed] = useState(0);
    const [tournaments, setTournaments] = useState(0);

    useEffect(() => {
        let activeUsersTimer;
        let matchesPlayedTimer;
        let tournamentsTimer;

        // Simulate fetching the data and incrementing the numbers
        activeUsersTimer = setInterval(() => {
            setActiveUsers(prevCount => {
                const nextCount = prevCount + 1;
                return nextCount >= 120 ? 120 : nextCount;
            });
        }, 10); // Adjust the delay as needed

        matchesPlayedTimer = setInterval(() => {
            setMatchesPlayed(prevCount => {
                const nextCount = prevCount + 1;
                return nextCount >= 100 ? 100 : nextCount;
            });
        }, 15); // Adjust the delay as needed

        tournamentsTimer = setInterval(() => {
            setTournaments(prevCount => {
                const nextCount = prevCount + 1;
                return nextCount >= 10 ? 10 : nextCount;
            });
        }, 200); // Adjust the delay as needed

        // Clean up the timers if the component is unmounted
        return () => {
            clearInterval(activeUsersTimer);
            clearInterval(matchesPlayedTimer);
            clearInterval(tournamentsTimer);
        };
    }, []);

    return (
        <div className={'h-screen flex justify-around px-24'}>
            <div className={'pt-24 w-[45%]'}>
                <div className={'flex flex-col gap-4'}>
                    <div className={'text-4xl font-semibold'}>
                        "A SHOE IS JUST A SHOE <br/>UNTIL  SOMEONE STEPS INTO IT," : CONVERY
                    </div>
                    <div className={'text-2xl font-thin'}>
                        AT LACE UP WE GIVE YOU THE CHANCE TO STEP UP YOUR GAME
                    </div>
                    <div className={'flex justify-around'}>
                        <div className={'p-2 border-black border border-gray-300 w-36 h-32 flex flex-col justify-around'}>
                            <div className={'text-center text-6xl font-thin'}>
                                {activeUsers}
                            </div>
                            <div className={'text-center font-semibold text-gray-400'}>
                                Active Users
                            </div>
                        </div>
                        <div className={'p-2 border-black border border-gray-300 w-36 h-32 flex flex-col justify-around'}>
                            <div className={'text-center text-6xl font-thin'}>
                                {matchesPlayed}
                            </div>
                            <div className={'text-center font-semibold text-gray-400'}>
                                Matches Played
                            </div>
                        </div>
                        <div className={'p-2 border-black border border-gray-300 w-36 h-32 flex flex-col justify-around'}>
                            <div className={'text-center text-6xl font-thin'}>
                                {tournaments}
                            </div>
                            <div className={'text-center font-semibold text-gray-400'}>
                                Tournaments
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Fade delay={500}>
                <div className={''}>
                    <Image src={imag} alt={''} height={650} />
                </div>
            </Fade>
        </div>
    );
};

export default Hero;
