document.getElementById('startButton').addEventListener('click', () => {
  const nameInput = document.getElementById('nameInput').value.trim();
  if (nameInput !== '') {
    document.getElementById('userName').textContent = nameInput;
    document.querySelector('.unblock-block').classList.add('hidden');
    document.getElementById('promptGenerator').classList.remove('hidden');
  } else {
    alert('Please enter your name to start.');
  }
});

document.getElementById('generateButton').addEventListener('click', async () => {
  const category = document.getElementById('categorySelect').value;
  
  try {
    const response = await fetch('https://unblock-nelt.onrender.com/generate-prompt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate prompt');
    }

    const data = await response.json();
    document.getElementById('promptResult').textContent = data.prompt;
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('promptResult').textContent = 'Error generating prompt. Please try again.';
  }
});
