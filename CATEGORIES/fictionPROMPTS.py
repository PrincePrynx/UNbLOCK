import random

def generate_fiction_prompt():
    prompts = [
        "Create a short story set in a dystopian future.",
        "Write a mystery story involving a missing artifact.",
        "Craft a fantasy tale about a quest for a mythical treasure."
    
        ]
    return random.choice(prompts)

