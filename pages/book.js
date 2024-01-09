import React, {useEffect} from 'react';
import axios from 'axios';
import BookCard from "../components/BookCard";

const Book = () => {
    const api_key='0da6f5b644906bc2d6fcf3182c8f9b02';
    const config = {
        method: 'get',
        url: 'https://v1.basketball.api-sports.io/',
        headers: {
            'x-rapidapi-key': `${api_key}`,
            'x-rapidapi-host': 'v1.basketball.api-sports.io'
        }
    };
    const fetchComplexes = async()=>{
        try{
            const res = await axios.get(config);
            console.log(res);
        }
        catch(err){
            console.error(err);
        }
    }
    useEffect(()=>{
        fetchComplexes().then(()=>{
            console.log('success')
        });
    },[])
    return (
        <div className="">
            <div className="">
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
            </div>
        </div>
    );
};

export default Book;