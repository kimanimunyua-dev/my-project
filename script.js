// Database of Garbage Collection Services sourced from c.txt
const garbageCollectorsData = {
    "karen": [
        {
            name: "Bins Nairobi Ltd",
            address: "Falcon Road, off Enterprise Road, Nairobi (Servicing Karen & Greater Nairobi)",
            schedule: "Mon–Fri: 7:00 AM – 5:00 PM | Sat: 7:00 AM – 1:00 PM",
            phone: "+254 722 713 964 / +254 733 677 710",
            email: "info@binsgroup.com"
        },
        {
            name: "Rizenn Homes Ltd",
            address: "Lower Ground Floor, Ambank House, University Way, Nairobi",
            schedule: "Mon–Fri: 7:00 AM – 6:00 PM | Sat: 7:00 AM – 1:00 PM",
            phone: "+254 733 866 808 / +254 20 760 2133",
            email: "info@rizennhomes.co.ke"
        }
    ],
    "westlands": [
        {
            name: "Hurricane Global Waste Management",
            address: "331A Muguga Green, off Brookside Drive, Westlands, Nairobi",
            schedule: "Mon–Sat (Weekly and monthly pickup schedules)",
            phone: "+254 737 883 000",
            email: "info@hurricaneglobal.co.ke"
        },
        {
            name: "Bestcare Facilities Management",
            address: "Westlands Commercial Center / Servicing Westlands Estates",
            schedule: "24/7 (Same-day and weekly recurring collection)",
            phone: "+254 725 548 383",
            email: "info@bestcare.co.ke"
        }
    ],
    "eastlands": [
        {
            name: "Tamia Limited Waste Services",
            address: "Buruburu Complex, 4th Floor, Buruburu, Nairobi",
            schedule: "Daily, alternate-day, or weekly custom plans",
            phone: "+254 729 993 861 / +254 707 924 583",
            email: "info@tamia.co.ke"
        },
        {
            name: "TakaTaka Solutions",
            address: "Kiambu / Servicing Eastlands & Nairobi Metropolis",
            schedule: "Mon–Fri: 8:00 AM – 5:00 PM",
            phone: "+254 11 04 88 276 / +254 708 276 201",
            email: "info@takatakasolutions.com"
        }
    ],
    "kasarani": [
        {
            name: "First Class Cleaning & Sanitation Services",
            address: "Kasarani Estate Branch, Off Thika Road, Nairobi",
            schedule: "Mon–Sat: 8:00 AM – 5:00 PM",
            phone: "+254 721 867 339",
            email: "info@firstclasscleaning.co.ke"
        },
        {
            name: "GM Cleaning Services",
            address: "206 Mbaruk Road (Servicing Kasarani & surrounding routes)",
            schedule: "Mon–Sat (Customized weekly residential pickup)",
            phone: "+254 721 979 781 / +254 731 593 377",
            email: "info@gmcleaning.co.ke"
        }
    ],
    "kibera": [
        {
            name: "Kibera Eco-Care Initiative (KECCI)",
            address: "Olympic - Subra, Kibera, Nairobi",
            schedule: "Mon–Fri: 8:00 AM – 6:00 PM | Sat–Sun: 10:00 AM – 4:00 PM",
            phone: "+254 795 960 560",
            email: "info@kecci.co.ke"
        },
        {
            name: "Safe Cleaning & Waste Services",
            address: "Servicing Kibera and adjacent Lang'ata zones",
            schedule: "Mon–Sat: 8:00 AM – 5:00 PM",
            phone: "+254 725 051 212 / +254 733 334 074",
            email: "info@safecleaningservices.co.ke"
        }
    ],
    "mathare": [
        {
            name: "Mto Wangu Initiative Waste Management",
            address: "Mathare Valley Sub-County, Nairobi",
            schedule: "Mon–Fri (Door-to-door community waste pickups)",
            phone: "+254 748 265 795",
            email: "mtowanguinitiative@gmail.com"
        },
        {
            name: "Nairobi City County Government (Ruaraka/Mathare Sub-County Office)",
            address: "Section 3 Eastleigh, Off Juja Road / Ruaraka Hub, Nairobi",
            schedule: "Mon–Fri: 8:00 AM – 5:00 PM",
            phone: "+254 712 453 283 / +254 726 848 919",
            email: "InfoRoysambu@Nairobiwater.co.ke"
        }
    ]
};

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
const resultsSideWindow = document.getElementById('resultsSideWindow');
const collectorsContainer = document.getElementById('collectorsContainer');
const resultsHeader = document.getElementById('resultsHeader');

// Open dialog when clicking "Tool" link
if (toolLink && collectorDialog) {
    toolLink.addEventListener('click', (e) => {
        e.preventDefault();
        collectorDialog.showModal();
    });
}

// Close dialog and reset side panel
if (closeDialogBtn && collectorDialog) {
    closeDialogBtn.addEventListener('click', () => {
        collectorDialog.close();
        if (resultsSideWindow) resultsSideWindow.style.display = 'none';
    });
}

// Render collectors into the side window
function displayCollectors(zoneQuery) {
    const key = zoneQuery.toLowerCase().trim();
    const collectors = garbageCollectorsData[key];

    collectorsContainer.innerHTML = '';

    if (collectors && collectors.length > 0) {
        resultsHeader.textContent = `Collectors in ${zoneQuery.charAt(0).toUpperCase() + zoneQuery.slice(1)}`;
        collectors.forEach(collector => {
            const card = document.createElement('div');
            card.className = 'collector-card';
            card.innerHTML = `
                <h4>${collector.name}</h4>
                <p><strong>Address:</strong> ${collector.address}</p>
                <p><strong>Schedule:</strong> ${collector.schedule}</p>
                <p><strong>Phone:</strong> ${collector.phone}</p>
                <p><strong>Email:</strong> ${collector.email}</p>
            `;
            collectorsContainer.appendChild(card);
        });
    } else {
        resultsHeader.textContent = 'No Services Found';
        collectorsContainer.innerHTML = `<p style="font-size:13px; color:#666;">No registered collectors found for "${zoneQuery}". Try Kibera, Westlands, Karen, Mathare, Kasarani, or Eastlands.</p>`;
    }

    // Display the side window horizontally adjacent to the main panel
    resultsSideWindow.style.display = 'block';
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
        displayCollectors(zone);
    });
});

// Find collectors button inside dialog
const findCollectorsBtn = document.getElementById('findCollectorsBtn');
if (findCollectorsBtn) {
    findCollectorsBtn.addEventListener('click', () => {
        const query = collectorInput ? collectorInput.value.trim() : '';
        if (query) {
            if (collectorResults) {
                collectorResults.textContent = `Displaying collectors for "${query}".`;
            }
            displayCollectors(query);
        } else {
            if (collectorResults) {
                collectorResults.textContent = 'Please enter or select a location.';
            }
        }
    });
}