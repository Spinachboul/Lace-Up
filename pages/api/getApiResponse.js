const { Configuration, OpenAIApi } = require("openai");
const {useState, useEffect} = require("react");


const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res){
    const prompt = `Suggest tips to improve in ${req.query.link}`;

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0,
        max_tokens: 4000,
    })
    res.status(200).json(response.data);
}
