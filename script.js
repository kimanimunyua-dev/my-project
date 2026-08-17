// Nairobi Waste Management Providers Dataset
const nairobiGarbageServices = [
    {
        name: "Bins Nairobi (K) Ltd",
        lat: -1.2885,
        lng: 36.7820,
        phone: "+254 722 203816",
        email: "info@bins.co.ke",
        hours: "Mon-Fri: 8:00 AM - 5:00 PM"
    },
    {
        name: "TakaTaka Solutions",
        lat: -1.2612,
        lng: 36.8055,
        phone: "+254 705 825825",
        email: "info@takatakasolutions.com",
        hours: "Mon-Sat: 7:00 AM - 6:00 PM"
    },
    {
        name: "Mr. Green Africa",
        lat: -1.2422,
        lng: 36.8856,
        phone: "+254 793 000111",
        email: "hello@mrgreenafrica.com",
        hours: "Mon-Fri: 8:00 AM - 5:00 PM"
    },
    {
        name: "Fresh Life / Sanergy Kenya",
        lat: -1.3090,
        lng: 36.8520,
        phone: "+254 711 082000",
        email: "info@freshlife.org",
        hours: "Mon-Sat: 8:00 AM - 5:00 PM"
    },
    {
        name: "Garbage Dot Com Ltd",
        lat: -1.2970,
        lng: 36.7910,
        phone: "+254 722 528379",
        email: "info@garbagemasters.co.ke",
        hours: "Mon-Sat: 7:30 AM - 5:30 PM"
    },
    {
        name: "EcoPost / Regeneration Kenya",
        lat: -1.3250,
        lng: 36.8410,
        phone: "+254 722 795893",
        email: "info@ecopost.co.ke",
        hours: "Mon-Fri: 8:00 AM - 5:00 PM"
    },
    {
        name: "CleanCity Environmental Services",
        lat: -1.3200,
        lng: 36.8900,
        phone: "+254 720 112233",
        email: "contact@cleancity.co.ke",
        hours: "Mon-Sat: 6:00 AM - 6:00 PM"
    },
    {
        name: "Nairobi Central Sanitation & Waste",
        lat: -1.2833,
        lng: 36.8167,
        phone: "+254 712 345678",
        email: "support@nairobisanitation.co.ke",
        hours: "24/7 Operations"
    }
];

// Leaflet Map Initialization
let map;
let activeMarker;

// Green Pin Icon using #a2ffa1
const greenPinIcon = L.divIcon({
    className: 'custom-marker',
    html: `<svg width="26" height="38" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.37 0 0 5.37 0 12C0 21 12 36 12 36C12 36 24 21 24 12C24 5.37 18.63 0 12 0Z" fill="#a2ffa1" stroke="#000000" stroke-width="2"/>
            <circle cx="12" cy="12" r="4" fill="#000000"/>
           </svg>`,
    iconSize: [26, 38],
    iconAnchor: [13, 38]
});

function initMap() {
    if (map) return; // Initialize once

    map = L.map('map').setView([-1.286389, 36.817223], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    map.on('click', function (e) {
        const { lat, lng } = e.latlng;
        setLocation(lat, lng);
    });
}

// Distance Calculation (Haversine)
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// Get 5 closest collectors
function getNearbyGarbageServices(lat, lng) {
    const calculated = nairobiGarbageServices.map(service => {
        const dist = calculateDistance(lat, lng, service.lat, service.lng);
        return { ...service, distance: dist };
    });

    return calculated.sort((a, b) => a.distance - b.distance).slice(0, 5);
}

// Render collectors list
function renderServicesList(services) {
    const container = document.getElementById('services-list');
    container.innerHTML = '';

    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';

        const distFormatted = service.distance < 1 
            ? `${Math.round(service.distance * 1000)} meters away`
            : `${service.distance.toFixed(2)} km away`;

        card.innerHTML = `
            <div class="service-header">
                <div class="service-name">${service.name}</div>
                <span class="distance-badge">${distFormatted}</span>
            </div>
            <div class="service-details">
                <div class="detail-item"><span class="label">Phone:</span> ${service.phone}</div>
                <div class="detail-item"><span class="label">Email:</span> ${service.email}</div>
                <div class="detail-item"><span class="label">Hours:</span> ${service.hours}</div>
            </div>
        `;

        container.appendChild(card);
    });
}

// Update location on map selection or search
async function setLocation(lat, lng, displayName = null) {
    const outputBox = document.getElementById('location-output');

    if (activeMarker) {
        activeMarker.setLatLng([lat, lng]);
    } else {
        activeMarker = L.marker([lat, lng], { icon: greenPinIcon }).addTo(map);
    }

    if (displayName) {
        outputBox.value = displayName;
    } else {
        outputBox.value = "Fetching location details...";
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
            );
            const data = await response.json();
            outputBox.value = data.display_name || `Latitude: ${lat.toFixed(4)}, Longitude: ${lng.toFixed(4)}`;
        } catch {
            outputBox.value = `Latitude: ${lat.toFixed(4)}, Longitude: ${lng.toFixed(4)}`;
        }
    }

    const nearestServices = getNearbyGarbageServices(lat, lng);
    renderServicesList(nearestServices);
}

// Search location
async function handleSearch() {
    const query = document.getElementById('search-input').value.trim();
    if (!query) return;

    const outputBox = document.getElementById('location-output');
    outputBox.value = "Searching location...";

    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query + ', Nairobi')}`
        );
        const data = await response.json();

        if (data && data.length > 0) {
            const firstResult = data[0];
            const lat = parseFloat(firstResult.lat);
            const lon = parseFloat(firstResult.lon);

            map.setView([lat, lon], 14);
            setLocation(lat, lon, firstResult.display_name);
        } else {
            outputBox.value = "Location not found. Please try another query.";
        }
    } catch {
        outputBox.value = "Error searching location. Please try again.";
    }
}

// Modal Trigger Logic
const toolLink = document.getElementById('toolLink');
const collectorDialog = document.getElementById('collectorDialog');
const closeDialogBtn = document.getElementById('closeDialogBtn');

if (toolLink && collectorDialog) {
    toolLink.addEventListener('click', (e) => {
        e.preventDefault();
        collectorDialog.showModal();
        
        // Initialize map & invalidate size so tiles render cleanly inside dialog
        setTimeout(() => {
            initMap();
            map.invalidateSize();
        }, 100);
    });
}

if (closeDialogBtn && collectorDialog) {
    closeDialogBtn.addEventListener('click', () => {
        collectorDialog.close();
    });
}

document.getElementById('search-btn').addEventListener('click', handleSearch);
document.getElementById('search-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});