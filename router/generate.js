const express = require('express')

const router = express.Router();
const { Configuration, OpenAIApi } = require("openai");
console.log(process.env.OPENAI_API_KEY)
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


router.post('/image', async (req, res) => {

    const { prompt } = req.body;

    try {
        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: '512x512',
        });
        res.send(response.data);

    } catch (error) {
        res.send('error');
    }
});


module.exports = router;