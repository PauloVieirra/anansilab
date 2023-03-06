import React, { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async (text) => {
    const url = "https://api.openai.com/v1/engines/davinci-codex/completions";
    const headers = {
      Authorization: "Bearer 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",
      "Content-Type": "application/json",
    };
    const data = {
      prompt: text,
      max_tokens: 60,
      n: 1,
      stop: "\n",
    };

    try {
      const res = await axios.post(url, data, { headers });
      setResponse(res.data.choices[0].text);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (text) => {
    setMessage(text);
    sendMessage(text);
  };

  return (
    <div>
      <button onClick={() => handleClick("Olá, como vai?")}>Enviar mensagem 1</button>
      <button onClick={() => handleClick("Qual é a sua cor favorita?")}>Enviar mensagem 2</button>
      <input type="text" value={response} readOnly />
    </div>
  );
}

export default App;