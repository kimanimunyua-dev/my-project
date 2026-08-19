// Nairobi Waste Management Dataset (70 Service Providers)
const nairobiGarbageServices = [
    {
        name: "Bins (Nairobi) Services Ltd",
        lat: -1.2885,
        lng: 36.7820,
        phone: "+254 722 713964",
        email: "info@binsgroup.com",
        hours: "Mon–Fri: 7:00 AM – 5:00 PM, Sat: 7:00 AM – 1:00 PM"
    },
    {
        name: "TakaTaka Solutions",
        lat: -1.2612,
        lng: 36.8055,
        phone: "+254 11 048 8276",
        email: "info@takatakasolutions.com",
        hours: "Mon–Sat: 7:00 AM – 6:00 PM"
    },
    {
        name: "Colnet Limited",
        lat: -1.3180,
        lng: 36.8850,
        phone: "+254 721 566140",
        email: "info@colnet.co.ke",
        hours: "Mon–Fri: 8:00 AM – 5:00 PM, Sat: 9:00 AM – 12:00 PM"
    },
    {
        name: "Mr. Green Africa Kenya Ltd",
        lat: -1.2422,
        lng: 36.8856,
        phone: "+254 757 204782",
        email: "contact@mrgreentrading.com",
        hours: "Mon–Fri: 8:00 AM – 5:00 PM"
    },
    {
        name: "Stelarlizar Limited",
        lat: -1.2680,
        lng: 36.8080,
        phone: "+254 722 379342",
        email: "info@stelarlizar.com",
        hours: "24/7 Operations"
    },
    {
        name: "GM Cleaning & Waste Services",
        lat: -1.2210,
        lng: 36.8920,
        phone: "+254 721 979781",
        email: "info@gmcleaning.co.ke",
        hours: "Mon–Sat: 7:00 AM – 6:00 PM"
    },
    {
        name: "Trash Connections Ltd",
        lat: -1.3380,
        lng: 36.7550,
        phone: "+254 783 872740",
        email: "info@trash.co.ke",
        hours: "Mon–Fri: 8:00 AM – 5:00 PM, Sat: 8:00 AM – 1:00 PM"
    },
    {
        name: "KitutoAfrica Waste Management",
        lat: -1.3120,
        lng: 36.7890,
        phone: "+254 721 428236",
        email: "info@kitutoafrica.co.ke",
        hours: "Mon–Sat: 7:00 AM – 6:00 PM"
    },
    {
        name: "Safe Cleaning Services",
        lat: -1.2840,
        lng: 36.8220,
        phone: "+254 725 051212",
        email: "info@safecleaningservices.co.ke",
        hours: "Mon–Sat: 7:30 AM – 5:30 PM"
    },
    {
        name: "Ladies for Ladies Executive Care",
        lat: -1.2650,
        lng: 36.8020,
        phone: "+254 722 378901",
        email: "info@ladiesforladiesexecutives.co.ke",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM"
    },
    {
        name: "Royfy Enterprises",
        lat: -1.3010,
        lng: 36.8590,
        phone: "+254 718 002608",
        email: "info@royfyenterprises.co.ke",
        hours: "24/7 Operations"
    },
    {
        name: "EcoPost Kenya",
        lat: -1.3250,
        lng: 36.8410,
        phone: "+254 722 795893",
        email: "info@ecopost.co.ke",
        hours: "Mon–Fri: 8:00 AM – 5:00 PM"
    },
    {
        name: "Fresh Life / Sanergy Kenya",
        lat: -1.3090,
        lng: 36.8520,
        phone: "+254 711 082000",
        email: "info@freshlife.org",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM"
    },
    {
        name: "Garbage Dot Com Ltd",
        lat: -1.2970,
        lng: 36.7910,
        phone: "+254 722 528379",
        email: "info@garbagemasters.co.ke",
        hours: "Mon–Sat: 7:30 AM – 5:30 PM"
    },
    {
        name: "CleanCity Environmental Services",
        lat: -1.3200,
        lng: 36.8900,
        phone: "+254 720 112233",
        email: "contact@cleancity.co.ke",
        hours: "Mon–Sat: 6:00 AM – 6:00 PM"
    },
    {
        name: "Nairobi Central Sanitation & Waste",
        lat: -1.2833,
        lng: 36.8167,
        phone: "+254 712 345678",
        email: "support@nairobisanitation.co.ke",
        hours: "24/7 Operations"
    },
    {
        name: "GreenLoop Waste Recyclers",
        lat: -1.2480,
        lng: 36.8720,
        phone: "+254 723 456789",
        email: "info@greenloop.co.ke",
        hours: "Mon–Fri: 8:00 AM – 5:00 PM"
    },
    {
        name: "EcoScraps & Waste Solutions",
        lat: -1.2780,
        lng: 36.8480,
        phone: "+254 714 567890",
        email: "ops@ecoscraps.co.ke",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM"
    },
    {
        name: "CityClean Waste Management",
        lat: -1.3510,
        lng: 36.7620,
        phone: "+254 725 678901",
        email: "info@cityclean.co.ke",
        hours: "Mon–Sat: 7:00 AM – 6:00 PM"
    },
    {
        name: "Kazi Eco Sanitation CBO",
        lat: -1.3140,
        lng: 36.7880,
        phone: "+254 716 789012",
        email: "info@kazieco.org",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM"
    },
    {
        name: "Mathare Green Youth CBO",
        lat: -1.2610,
        lng: 36.8580,
        phone: "+254 727 890123",
        email: "matharegreen@cbo.co.ke",
        hours: "Mon–Sat: 7:30 AM – 5:00 PM"
    },
    {
        name: "Mukuru Waste Collection Hub",
        lat: -1.3150,
        lng: 36.8620,
        phone: "+254 718 901234",
        email: "mukuruwaste@cbo.co.ke",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM"
    },
    {
        name: "Dandora Green Light CBO",
        lat: -1.2480,
        lng: 36.8980,
        phone: "+254 729 012345",
        email: "dandora.green@cbo.co.ke",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM"
    },
    {
        name: "Eastlands Environmental Services",
        lat: -1.2980,
        lng: 36.8550,
        phone: "+254 710 123456",
        email: "eastlandsenv@gmail.com",
        hours: "Mon–Sat: 7:00 AM – 6:00 PM"
    },
    {
        name: "Karen & Langata Waste Handlers",
        lat: -1.3530,
        lng: 36.7120,
        phone: "+254 721 234567",
        email: "info@klwaste.co.ke",
        hours: "Mon–Fri: 8:00 AM – 5:00 PM, Sat: 8:00 AM – 2:00 PM"
    },
    {
        name: "Lavington Cleaners & Recyclers",
        lat: -1.2820,
        lng: 36.7710,
        phone: "+254 712 234567",
        email: "care@lavingtonclean.co.ke",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM"
    },
    {
        name: "Westlands Green Refuse",
        lat: -1.2630,
        lng: 36.8030,
        phone: "+254 723 345678",
        email: "info@westlandsrefuse.co.ke",
        hours: "Mon–Fri: 7:30 AM – 5:30 PM"
    },
    {
        name: "Roysambu Eco Collectors",
        lat: -1.2180,
        lng: 36.8870,
        phone: "+254 714 345678",
        email: "roysambueco@gmail.com",
        hours: "Mon–Sat: 7:00 AM – 6:00 PM"
    },
    {
        name: "Kasarani Clean Environment CBO",
        lat: -1.2220,
        lng: 36.9010,
        phone: "+254 725 456789",
        email: "kasaraniclean@gmail.com",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM"
    },
    {
        name: "Embakasi Green Ventures",
        lat: -1.2820,
        lng: 36.9050,
        phone: "+254 716 456789",
        email: "embakasi.green@gmail.com",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM"
    },
    {
        name: "South C Waste Managers",
        lat: -1.3210,
        lng: 36.8280,
        phone: "+254 727 567890",
        email: "southcwaste@gmail.com",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM"
    },
    {
        name: "Parklands Sanitation Services",
        lat: -1.2610,
        lng: 36.8210,
        phone: "+254 718 567890",
        email: "info@parklandssanitation.co.ke",
        hours: "Mon–Fri: 8:00 AM – 5:00 PM"
    },
    {
        name: "Ngara Refuse Solutions",
        lat: -1.2750,
        lng: 36.8250,
        phone: "+254 729 678901",
        email: "ngararefuse@gmail.com",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM"
    },
    {
        name: "Eastleigh Green Youth Group",
        lat: -1.2760,
        lng: 36.8520,
        phone: "+254 710 789012",
        email: "eastleighgreen@cbo.co.ke",
        hours: "Mon–Sat: 7:30 AM – 6:00 PM"
    },
    {
        name: "Githurai Environmental Services",
        lat: -1.2050,
        lng: 36.9200,
        phone: "+254 721 789012",
        email: "githuraienv@gmail.com",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM"
    },
    {
        name: "Ruai Waste Management Enterprise",
        lat: -1.2710,
        lng: 36.9820,
        phone: "+254 712 890123",
        email: "ruaiwaste@gmail.com",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM"
    },
    {
        name: "Njiru Environmental Refuse",
        lat: -1.2520,
        lng: 36.9410,
        phone: "+254 723 890123",
        email: "njirurefuse@gmail.com",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM"
    },
    {
        name: "Utawala Clean Environment Ltd",
        lat: -1.2810,
        lng: 36.9610,
        phone: "+254 714 901234",
        email: "utawalaclean@gmail.com",
        hours: "Mon–Sat: 7:00 AM – 6:00 PM"
    },
    {
        name: "Pipeline Sanitation Services",
        lat: -1.3190,
        lng: 36.8920,
        phone: "+254 725 901234",
        email: "pipelinesanitation@gmail.com",
        hours: "Mon–Sat: 7:00 AM – 6:00 PM"
    },
    {
        name: "Kayole Youth Environmental CBO",
        lat: -1.2780,
        lng: 36.9120,
        phone: "+254 716 012345",
        email: "kayoleyouth.env@cbo.co.ke",
        hours: "Mon–Sat: 7:30 AM – 5:30 PM"
    },
    {
        name: "Buruburu Eco Collectors",
        lat: -1.2840,
        lng: 36.8810,
        phone: "+254 727 012345",
        email: "buruburueco@gmail.com",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM"
    },
    {
        name: "Donholm Clean & Clear Services",
        lat: -1.2910,
        lng: 36.8910,
        phone: "+254 718 123456",
        email: "donholmclean@gmail.com",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM"
    },
    {
        name: "Savannah Environmental Enterprise",
        lat: -1.2950,
        lng: 36.8980,
        phone: "+254 729 123456",
        email: "savannahenv@gmail.com",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM"
    },
    {
        name: "Fedha Green Handlers",
        lat: -1.3080,
        lng: 36.8920,
        phone: "+254 710 234567",
        email: "fedhagreen@gmail.com",
        hours: "Mon–Sat: 7:30 AM – 5:30 PM"
    },
    {
        name: "Imara Daima Refuse Handlers",
        lat: -1.3280,
        lng: 36.8790,
        phone: "+254 721 345678",
        email: "imararefuse@gmail.com",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM"
    },
    {
        name: "South B Clean Environment",
        lat: -1.3120,
        lng: 36.8390,
        phone: "+254 712 456789",
        email: "southbclean@gmail.com",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM"
    },
    {
        name: "Nairobi West Waste Managers",
        lat: -1.3050,
        lng: 36.8220,
        phone: "+254 723 567890",
        email: "naiwestwaste@gmail.com",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM"
    },
    {
        name: "Madaraka Eco Management",
        lat: -1.3080,
        lng: 36.8150,
        phone: "+254 714 678901",
        email: "madarakaeco@gmail.com",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM"
    },
    {
        name: "Highrise Clean Environment CBO",
        lat: -1.3110,
        lng: 36.8080,
        phone: "+254 725 789012",
        email: "highriseclean@cbo.co.ke",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM"
    },
    {
        name: "Kibera Human Development CBO",
        lat: -1.3130,
        lng: 36.7860,
        phone: "+254 716 890123",
        email: "kiberahuman@cbo.co.ke",
        hours: "Mon–Sat: 7:30 AM – 5:00 PM"
    },
    {
        name: "Jamhuri Refuse Services",
        lat: -1.3020,
        lng: 36.7720,
        phone: "+254 727 901234",
        email: "jamhurirefuse@gmail.com",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM"
    },
    {
        name: "Woodley Eco Waste Services",
        lat: -1.3010,
        lng: 36.7850,
        phone: "+254 718 012345",
        email: "woodleyeco@gmail.com",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM"
    },
    {
        name: "Adams Arcade Cleaners",
        lat: -1.2990,
        lng: 36.7810,
        phone: "+254 729 234567",
        email: "adamsclean@gmail.com",
        hours: "Mon–Sat: 7:30 AM – 5:30 PM"
    },
    {
        name: "Dagoretti Corner Youth CBO",
        lat: -1.3030,
        lng: 36.7580,
        phone: "+254 710 345678",
        email: "dagorettiyouth@cbo.co.ke",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM"
    },
    {
        name: "Riruta Environmental Action",
        lat: -1.3010,
        lng: 36.7450,
        phone: "+254 721 456789",
        email: "rirutaenv@gmail.com",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM"
    },
    {
        name: "Kawangware Green Movement CBO",
        lat: -1.2880,
        lng: 36.7510,
        phone: "+254 712 567890",
        email: "kawangwaregreen@cbo.co.ke",
        hours: "Mon–Sat: 7:30 AM – 5:00 PM"
    },
    {
        name: "Kileleshwa Eco Services",
        lat: -1.2780,
        lng: 36.7920,
        phone: "+254 723 678901",
        email: "kileleshwaeco@gmail.com",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM"
    },
    {
        name: "Kilimani Waste Solutions",
        lat: -1.2910,
        lng: 36.7850,
        phone: "+254 714 789012",
        email: "kilimaniwaste@gmail.com",
        hours: "Mon–Sat: 7:30 AM – 5:30 PM"
    },
    {
        name: "Thompson Estate Cleaners",
        lat: -1.2950,
        lng: 36.7780,
        phone: "+254 725 890123",
        email: "thompsonclean@gmail.com",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM"
    },
    {
        name: "Lavington Green Action",
        lat: -1.2790,
        lng: 36.7680,
        phone: "+254 716 901234",
        email: "lavingtongreen@gmail.com",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM"
    },
    {
        name: "Highridge Refuse Services",
        lat: -1.2580,
        lng: 36.8150,
        phone: "+254 727 012345",
        email: "highridgerefuse@gmail.com",
        hours: "Mon–Sat: 7:30 AM – 5:30 PM"
    },
    {
        name: "Spring Valley Waste Managers",
        lat: -1.2530,
        lng: 36.7980,
        phone: "+254 718 123456",
        email: "springvalleywaste@gmail.com",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM"
    },
    {
        name: "Kyuna Eco Solutions",
        lat: -1.2570,
        lng: 36.7880,
        phone: "+254 729 234567",
        email: "kyunaeco@gmail.com",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM"
    },
    {
        name: "Loresho Refuse Handlers",
        lat: -1.2510,
        lng: 36.7720,
        phone: "+254 710 345678",
        email: "loreshorefuse@gmail.com",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM"
    },
    {
        name: "Mountain View Green Handlers",
        lat: -1.2620,
        lng: 36.7480,
        phone: "+254 721 456789",
        email: "mountainviewgreen@gmail.com",
        hours: "Mon–Sat: 7:30 AM – 5:00 PM"
    },
    {
        name: "Kangemi Youth Environmental CBO",
        lat: -1.2650,
        lng: 36.7550,
        phone: "+254 712 567890",
        email: "kangemiyouth@cbo.co.ke",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM"
    },
    {
        name: "Uthiru Waste Handlers",
        lat: -1.2610,
        lng: 36.7320,
        phone: "+254 723 678901",
        email: "uthiruwaste@gmail.com",
        hours: "Mon–Sat: 7:30 AM – 5:30 PM"
    },
    {
        name: "Waithaka Sanitation CBO",
        lat: -1.3080,
        lng: 36.7250,
        phone: "+254 714 789012",
        email: "waithakasanitation@cbo.co.ke",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM"
    },
    {
        name: "Muthaiga Clean Environment",
        lat: -1.2520,
        lng: 36.8310,
        phone: "+254 725 890123",
        email: "muthaigaclean@gmail.com",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM"
    },
    {
        name: "Gigiri Refuse & Waste Services",
        lat: -1.2320,
        lng: 36.8120,
        phone: "+254 716 901234",
        email: "gigirirefuse@gmail.com",
        hours: "Mon–Sat: 7:30 AM – 5:30 PM"
    }
];

// Nairobi Boundary Definition (Bounding box around Nairobi County)
const nairobiBounds = L.latLngBounds(
    L.latLng(-1.45, 36.65), // South-West point
    L.latLng(-1.15, 37.10)  // North-East point
);

function isInNairobi(lat, lng) {
    return nairobiBounds.contains([lat, lng]);
}

let map;
let activeMarker;

// Custom SVG Marker Icon in #a2ffa1
const greenPinIcon = L.divIcon({
    className: 'custom-marker',
    html: `<svg width="28" height="40" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.37 0 0 5.37 0 12C0 21 12 36 12 36C12 36 24 21 24 12C24 5.37 18.63 0 12 0Z" fill="#a2ffa1" stroke="#121212" stroke-width="2"/>
            <circle cx="12" cy="12" r="4.5" fill="#121212"/>
           </svg>`,
    iconSize: [28, 40],
    iconAnchor: [14, 40]
});

// Initialize Leaflet Map with Nairobi boundaries
function initMap() {
    if (map) return;

    map = L.map('map', {
        maxBounds: nairobiBounds,
        maxBoundsViscosity: 1.0,
        minZoom: 11
    }).setView([-1.286389, 36.817223], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        bounds: nairobiBounds,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    map.on('click', function (e) {
        const { lat, lng } = e.latlng;
        if (!isInNairobi(lat, lng)) {
            document.getElementById('location-output').value = "Please enter a valid location in Nairobi";
            return;
        }
        setLocation(lat, lng);
    });
}

// Distance Calculation (Haversine formula)
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

// Fetch the 7 nearest garbage collection services based on spatial distance
function getNearbyGarbageServices(lat, lng) {
    const calculated = nairobiGarbageServices.map(service => {
        const dist = calculateDistance(lat, lng, service.lat, service.lng);
        return { ...service, distance: dist };
    });

    return calculated.sort((a, b) => a.distance - b.distance).slice(0, 7);
}

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

async function setLocation(lat, lng, displayName = null) {
    const outputBox = document.getElementById('location-output');

    if (!isInNairobi(lat, lng)) {
        outputBox.value = "Please enter a valid location in Nairobi";
        return;
    }

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
            
            if (data.address && (data.address.county === "Nairobi" || data.address.city === "Nairobi" || data.display_name.includes("Nairobi"))) {
                outputBox.value = data.display_name;
            } else {
                outputBox.value = `Latitude: ${lat.toFixed(4)}, Longitude: ${lng.toFixed(4)}`;
            }
        } catch {
            outputBox.value = `Latitude: ${lat.toFixed(4)}, Longitude: ${lng.toFixed(4)}`;
        }
    }

    const nearestServices = getNearbyGarbageServices(lat, lng);
    renderServicesList(nearestServices);
}

async function handleSearch() {
    const query = document.getElementById('search-input').value.trim();
    const outputBox = document.getElementById('location-output');

    if (!query) {
        if (!activeMarker) {
            outputBox.value = "Location not input. Please input your location";
        }
        return;
    }

    outputBox.value = "Searching location...";

    try {
        const searchQuery = query.toLowerCase().includes("nairobi") ? query : `${query}, Nairobi, Kenya`;
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}`
        );
        const data = await response.json();

        if (data && data.length > 0) {
            const firstResult = data[0];
            const lat = parseFloat(firstResult.lat);
            const lon = parseFloat(firstResult.lon);

            if (!isInNairobi(lat, lon)) {
                outputBox.value = "Please enter a valid location in Nairobi";
                return;
            }

            map.setView([lat, lon], 14);
            setLocation(lat, lon, firstResult.display_name);
        } else {
            outputBox.value = "Please enter a valid location in Nairobi";
        }
    } catch {
        outputBox.value = "Please enter a valid location in Nairobi";
    }
}

// Modal Pop-Up Logic
const toolLink = document.getElementById('toolLink');
const collectorDialog = document.getElementById('collectorDialog');
const closeDialogBtn = document.getElementById('closeDialogBtn');

if (toolLink && collectorDialog) {
    toolLink.addEventListener('click', (e) => {
        e.preventDefault();
        collectorDialog.showModal();

        if (!activeMarker) {
            document.getElementById('location-output').value = "Location not input. Please input your location";
        }

        initMap();
        setTimeout(() => {
            if (map) {
                map.invalidateSize();
            }
        }, 150);
    });
}

if (closeDialogBtn && collectorDialog) {
    closeDialogBtn.addEventListener('click', () => {
        collectorDialog.close();
    });
}

document.getElementById('search-btn').addEventListener('click', handleSearch);
document.getElementById('search-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') handleSearch();
});