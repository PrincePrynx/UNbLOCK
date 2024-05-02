import random

def generate_dialogue_prompt():
    prompts = [
        "Write a conversation between two old friends meeting after many years.",
        "Create a dialogue between a customer and a cashier at a grocery store.",
        "Imagine a conversation between a detective and a suspect during an interrogation."

    ]
    return random.choice(prompts)

