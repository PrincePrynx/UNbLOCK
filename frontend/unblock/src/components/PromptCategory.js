// src/components/PromptCategory.js
import React, { useState } from 'react';
import axios from 'axios';

const PromptCategory = ({ category }) => {
    const [prompt, setPrompt] = useState('');

    const fetchPrompt = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/${category}`);
            setPrompt(response.data.prompt);
        } catch (error) {
            console.error("Error fetching prompt:", error);
        }
    };

    return (
        <div>
            <button onClick={fetchPrompt}>{category}</button>
            {prompt && <p>{prompt}</p>}
        </div>
    );
};

export default PromptCategory;
