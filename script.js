// Function to show local actions
function showLocalAction() {
    const locationInput = document.getElementById('location');
    const location = locationInput.value.trim();
    const outputDiv = document.getElementById('actionOutput');
    let actionMessage = '';

    if (location.toLowerCase() === 'kibera') {
        actionMessage = 'Local action for Kibera: Join the weekly plastic collection drive at Olympic Primary School every Saturday at 9 AM.';
    } else if (location.toLowerCase() === 'westlands') {
        actionMessage = 'Local action for Westlands: Drop off sorted plastics at the Sarit Centre recycling point on weekdays from 8 AM to 5 PM.';
    } else if (location.toLowerCase() === 'karen') {
        actionMessage = 'Local action for Karen: Bring clean plastics to the Karen Shopping Centre buy-back booth every Sunday from 10 AM to 2 PM.';
    } else {
        actionMessage = 'Default action: Visit nairobiwastemap.org to find the nearest registered waste collector in your area.';
    }

    outputDiv.textContent = actionMessage;
}

// Attach event listener for the main page Action button
const clickButton = document.getElementById('clickbutton');
if (clickButton) {
    clickButton.addEventListener('click', showLocalAction);
}

// --- TOOL MODAL DIALOG LOGIC ---
const toolLink = document.getElementById('toolLink');
const collectorDialog = document.getElementById('collectorDialog');
const closeDialogBtn = document.getElementById('closeDialogBtn');

// Open dialog when clicking "Tool" link
if (toolLink && collectorDialog) {
    toolLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevents page reload/jump
        collectorDialog.showModal();
    });
}

// Close dialog
if (closeDialogBtn && collectorDialog) {
    closeDialogBtn.addEventListener('click', () => {
        collectorDialog.close();
    });
}

// Zone map buttons interaction inside dialog
const zoneButtons = document.querySelectorAll('.zone-btn');
const collectorInput = document.getElementById('collectorLocation');
const collectorResults = document.getElementById('collectorResults');

zoneButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const zone = btn.getAttribute('data-zone');
        if (collectorInput) collectorInput.value = zone;
        if (collectorResults) {
            collectorResults.textContent = `Showing registered waste collectors near ${zone}.`;
        }
    });
});

// Find collectors button inside dialog
const findCollectorsBtn = document.getElementById('findCollectorsBtn');
if (findCollectorsBtn) {
    findCollectorsBtn.addEventListener('click', () => {
        const query = collectorInput ? collectorInput.value.trim() : '';
        if (collectorResults) {
            collectorResults.textContent = query 
                ? `Searching for waste collectors in "${query}"...` 
                : 'Please enter or select a location.';
        }
    });
}