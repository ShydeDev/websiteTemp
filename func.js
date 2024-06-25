document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('roleAssignmentForm');
    const resultMessage = document.getElementById('resultMessage');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const userId = form.userId.value.trim();
        if (!userId) {
            resultMessage.textContent = 'Please enter a User ID.';
            return;
        }

        const requestBody = {
            content: userId
        };

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.text();
            resultMessage.textContent = data;
        } catch (error) {
            console.error('Error:', error);
            resultMessage.textContent = 'Error assigning role.';
        }
    });
});
