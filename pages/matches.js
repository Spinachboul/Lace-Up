import React, {useEffect, useState} from 'react';
import MatchCard from "../components/matchCard";
import user from '../images/profile.jpg';
import axios from "axios";


const Matches = () => {
    const [data, setData] = useState(null);
    const getData = async()=>{
        try{
            const res = await axios.get('/api/getMatches');
            setData(res.data);
        }
        catch(err){
            console.error(err)
        }
    }
    useEffect(()=>{
        getData().then(()=>{
            console.log(data);
            const da = getUserDetailsById(data?.user, '647b3a6aafe09ea637f599ad')
            console.log(da)
        })
    },[])

    function getUserDetailsById(users, userId) {
        const user = users?.find((user) => user.id === userId);

        if (user) {
            const { userImage, fullName, rating, slayPoints } = user;
            return { userImage, fullName, rating, slayPoints };
        }

        return null;
    }

    return (
        <div className="bg-white text-black py-8 px-4 pt-4 sm:px-16 md:px-24 lg:px-48 sm:py-4 md:py-20">
            {
                data?.match?.map((mat)=>(
                    <MatchCard
                        userImage={user}
                        name={'Jai Bhalla'}
                        rating={3}
                        game={mat.game}
                        address={mat.venue}
                        time={mat.time}
                        solePoints={400}
                        matchPlayed={2}
                        playedFor={mat.betFor}
                    />
                ))
            }
        </div>
    );
};

export default Matches;