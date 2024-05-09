# Generates poetry prompts


import random

@app.route('/poetry')
def generate_poetry_prompt():
    prompts = [
        "Write a poem about the beauty of nature.",
        "Compose a poem inspired by a childhood memory.",
        "Craft a sonnet expressing love and longing."
        # I will add more poetry prompts here
    ]
    return random.choice(prompts)
