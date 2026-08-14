        // Define a function that shows a local action based on the user's location input
        function showLocalAction() {
            // Get the text input element where the user types their location
            const locationInput = document.getElementById('location');
            // Read the value the user typed and remove extra spaces from the start and end
            const location = locationInput.value.trim();
            // Get the output div where the action message will be displayed
            const outputDiv = document.getElementById('actionOutput');
            // Create a variable to hold the action message we will show
            let actionMessage = '';

            // Check if the user typed Kibera (case-insensitive)
            if (location.toLowerCase() === 'kibera') {
                // Set the Kibera-specific local action message
                actionMessage = 'Local action for Kibera: Join the weekly plastic collection drive at Olympic Primary School every Saturday at 9 AM.';
            // Check if the user typed Westlands (case-insensitive)
            } else if (location.toLowerCase() === 'westlands') {
                // Set the Westlands-specific local action message
                actionMessage = 'Local action for Westlands: Drop off sorted plastics at the Sarit Centre recycling point on weekdays from 8 AM to 5 PM.';
            // Check if the user typed Karen (case-insensitive)
            } else if (location.toLowerCase() === 'karen') {
                // Set the Karen-specific local action message
                actionMessage = 'Local action for Karen: Bring clean plastics to the Karen Shopping Centre buy-back booth every Sunday from 10 AM to 2 PM.';
            // Handle any other location the user might type
            } else {
                // Set a default action message when the location does not match the three known areas
                actionMessage = 'Default action: Visit nairobiwastemap.org to find the nearest registered waste collector in your area.';
            }

            // Write the chosen action message into the output div so the user can see it
            outputDiv.textContent = actionMessage;
        }

        // Get the button element that the user clicks to trigger the action lookup
        const clickButton = document.getElementById('clickbutton');
        // Listen for a click on the button and run showLocalAction when it happens
        clickButton.addEventListener('click', showLocalAction);