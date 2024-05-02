import random

def generate_poetry_prompt():
    prompts = [
        "Write a poem about the beauty of nature.",
        "Compose a poem inspired by a childhood memory.",
        "Craft a sonnet expressing love and longing."
    
    ]
    return random.choice(prompts)

