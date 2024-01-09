import React from 'react';
import {Fade} from "react-awesome-reveal";

const About = () => {
    return (
        <>
            <Fade delay={250} className={'z-0'}>
                <div className="bg-white text-black px-4 pt-4 sm:px-16 md:px-24 lg:px-28 sm:py-4">
                    <div className="max-w-6xl mx-auto p-4 shadow-gray-800 shadow-sm">
                        <h1 className={'text-5xl font-semibold'}>About Us
                        </h1>
                        <p className={'text-xl font-thin pt-4'}>
                            Welcome to Laceup, the ultimate platform for outdoor sports enthusiasts! Laceup is an innovative application
                            that brings sports lovers together by allowing users to create and join matches for various outdoor games.
                            <br/>
                            At Laceup, we understand the thrill and excitement of playing sports with like-minded individuals. Whether
                            you're a seasoned athlete or a casual player looking for some friendly competition, Laceup has got you covered.
                            Our platform offers a seamless experience, making it easy for users to organize matches and connect with fellow
                            sports enthusiasts.

                            Creating a match on Laceup is simple and convenient. Users can specify the game they want to play, set the location,
                            and choose a time that suits them best. Whether it's a basketball game in the local park, a soccer match at the nearby
                            field, or a tennis showdown at the nearest court, Laceup provides a platform to make it happen.
                            <br/>
                            Not only can you create matches, but you can also explore and join matches created by other users. Browse through
                            the available matches, check the game details, location, and time, and simply join the ones that interest you.
                            Laceup facilitates the connection between players, fostering a vibrant community of sports enthusiasts who share
                            the same passion.

                            Joining a match on Laceup is not just about playing sports; it's about building connections, making new friends,
                            and enjoying the camaraderie that comes with participating in outdoor activities. Laceup is designed to promote
                            inclusivity and fair play, ensuring that everyone has a great experience on and off the field.
                        </p>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default About;