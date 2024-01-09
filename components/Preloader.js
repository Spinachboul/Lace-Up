import React from 'react';
import imag from '../images/preloaderImage.png';
import Image from 'next/image';

const Preloader = () => {
    return (
        <div className="fixed relative top-0 left-0 z-50 w-screen h-screen overflow-hidden bg-black">
            <div className="inset-0 flex items-center">
                {/*<div className="ml-8 text-white text-2xl font-bold">*/}
                {/*    The opportunity portal*/}
                {/*</div>*/}
                <div className="flex justify-center w-full">
                    <Image src={imag} alt="Website Logo" className="absolute" />
                    <div className="h-1 mt-4 w-72 bg-gray-900 rounded absolute bottom-10">
                        <div className="h-full bg-white rounded animate-progress"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
