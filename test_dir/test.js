const fs = require('fs');
const path = require('path');
const { OpenAI } = require('openai'); // Assuming 'openai' package exports OpenAI class
const apiKey = ''; // Replace with your actual API key

const openai = new OpenAI({ apiKey });
const speechFile = path.resolve("./output.mp3");

async function textToSpeech(textInput,fileName) {
  try {
    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: "onyx",
      input: textInput,
    });

    const buffer = Buffer.from(await mp3.arrayBuffer());
    await fs.promises.writeFile(fileName, buffer);
    console.log('Audio file saved successfully!');
  } catch (error) {
    console.error('Error generating or saving speech:', error);
  }
}

main("i am salman siddiq");
