# Generates nonfiction prompts

import random

@app.route('/nonfiction')
def generate_nonfiction_prompt():
    prompts = [
        "Describe a significant event that changed your perspective on life.",
        "Write an article about the impact of technology on modern society.",
        "Share a personal essay about overcoming a difficult challenge."
        # I will add more nonfiction prompts here
    ]
    return random.choice(prompts)

