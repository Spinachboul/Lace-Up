import React from 'react';
import TournamentCard from "../components/tournamentCard";
import stad1 from '../images/stadium2.jpeg';
import stad3 from '../images/stadium3.jpeg';


const Tournament = () => {
    return (
        <div>
           <TournamentCard
               game={'Basketball'}
               eligiblePoints={2000}
               tourImage={stad1}
               organiserName={'Madhav Association'}
               venue={'Stadium'}
               time={'15th July, 2023'}
               description={'This will contain the details regrading the tournament This will contain the details regrading the tournament This will contain the details regrading the tournament This will contain the details regrading the tournament '}
           />
            <TournamentCard
                game={'Badminton'}
                eligiblePoints={2500}
                tourImage={stad3}
                organiserName={'Johns Badminton Academy'}
                venue={'Stadium'}
                time={'15th July, 2023'}
                description={'This will contain the details regrading the tournament This will contain the details regrading the tournament This will contain the details regrading the tournament This will contain the details regrading the tournament '}
            />
            <TournamentCard
                game={'Tennis'}
                eligiblePoints={3000}
                tourImage={stad1}
                organiserName={'Vellore Tennis Club'}
                venue={'Stadium'}
                time={'15th July, 2023'}
                description={'This will contain the details regrading the tournament This will contain the details regrading the tournament This will contain the details regrading the tournament This will contain the details regrading the tournament '}
            />
        </div>
    );
};

export default Tournament;