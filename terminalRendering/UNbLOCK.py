import random

# Function to generate prompts for the dialogue category
def generate_dialogue_prompts():
    prompts = [
        "Write a conversation between two old friends meeting after many years.",
        "Create a dialogue between a customer and a cashier at a grocery store.",
        "Imagine a conversation between a detective and a suspect during an interrogation."
        # I will add more dialogue prompts here
    ]
    return random.sample(prompts, 2)  # Select two random prompts

# Function to generate prompts for the poetry category
def generate_poetry_prompts():
    prompts = [
        "Write a poem about the beauty of nature.",
        "Compose a poem inspired by a childhood memory.",
        "Craft a sonnet expressing love and longing."
        # I will add more poetry prompts here
    ]
    return random.sample(prompts, 2)  # Select two random prompts

# Function to generate prompts for the nonfiction category
def generate_nonfiction_prompts():
    prompts = [
        "Describe a significant event that changed your perspective on life.",
        "Write an article about the impact of technology on modern society.",
        "Share a personal essay about overcoming a difficult challenge."
        # I will add more nonfiction prompts here
    ]
    return random.sample(prompts, 2)  # Select two random prompts

# Function to generate prompts for the fiction category
def generate_fiction_prompts():
    prompts = [
        "Create a short story set in a dystopian future.",
        "Write a mystery story involving a missing artifact.",
        "Craft a fantasy tale about a quest for a mythical treasure."
        # I will add more fiction prompts here
    ]
    return random.sample(prompts, 2)  # Select two random prompts

# Function to display prompts and ask for user's choice
def display_prompts(category):
    if category == 1:
        prompts = generate_dialogue_prompts()
    elif category == 2:
        prompts = generate_poetry_prompts()
    elif category == 3:
        prompts = generate_nonfiction_prompts()
    elif category == 4:
        prompts = generate_fiction_prompts()
    else:
        print("Invalid choice. Please enter a number between 1 and 4.")
        return

    print("\n Heello, here are your writing prompts:")
    for i, prompt in enumerate(prompts, start=1):
        print(f"{i}. {prompt}")

# Main function
def main():
    # Print asterisks spelling "UNbLOCK"
    print("\n*         *  *             *           *            * * * * * *  * * * * *  *      *")
    print("*         *  *  *          *  *        *            *         *  *          *     *")
    print("*         *  *     *       *  *        *            *         *  *          *   *")
    print("*         *  *        *    *  * * * *  *            *         *  *          * *")
    print("*         *  *         *   *  *     *  *            *         *  *          *    *")
    print("*         *  *           * *  * * * *  *            *         *  *          *      *")
    print("* * * * * *  *             *           * * * * * *  * * * * * *  * * * * *  *       * ")

    # Greet the user and ask for their name
    name = input("\nHi there! What's your name? ")
    print(f"\nNice to meet you, {name}!")

    # Initialize choice variable
    choice = 'yes'

    # Repeat until the user chooses to stop
    while choice.lower() == 'yes':
        # Ask the user to choose a category
        while True:
            print("\nChoose a category to get writing prompts:")
            print("1. Dialogue")
            print("2. Poetry")
            print("3. Nonfiction")
            print("4. Fiction")

            # Get user's choice of category
            category = input("Enter the number corresponding to your choice: ")

            try:
                category = int(category)
                if category in [1, 2, 3, 4]:
                    break
                else:
                    print("Invalid choice. Please enter a number between 1 and 4.")
            except ValueError:
                print("Invalid input. Please enter a number.")

        # Display prompts for the selected category
        display_prompts(category)

        # Ask the user if they want to pick another category
        choice = input("\nDo you want to pick another category? (yes/no): ")

    print("\nThank you for using UNbLOCK! Have a great day!")

# Run the main function
if __name__ == "__main__":
    main()

