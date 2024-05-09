from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('landing_page.html')

@app.route('/generate_prompt', methods=['POST'])
def generate_prompt():
    name = request.form['name']
    category = request.form['category']
    # Add code to generate prompts based on category
    prompt1 = "Prompt 1 for " + category
    prompt2 = "Prompt 2 for " + category
    return render_template('prompt_page.html', name=name, category=category, prompt1=prompt1, prompt2=prompt2)

if __name__ == '__main__':
    app.run(debug=True)
