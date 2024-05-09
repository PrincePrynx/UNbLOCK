# Generates dialogue prompts

import random

@app.route('/dialogue')
def generate_dialogue_prompt():
    prompts = [
        "Write a conversation between two old friends meeting after many years.",
        "Create a dialogue between a customer and a cashier at a grocery store.",
        "Imagine a conversation between a detective and a suspect during an interrogation."
        # I will add  more dialogue prompts here
    ]
    return random.choice(prompts)
