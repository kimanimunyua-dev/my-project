// Expanded Nairobi Waste Management Dataset
const nairobiGarbageServices = [
    // --- RECYCLERS (10) ---
    {
        name: "TakaTaka Solutions",
        type: "Recycler",
        lat: -1.2612, lng: 36.8055,
        phone: "+254 11 048 8276", email: "info@takatakasolutions.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 6:00 PM",
        details: "Collects household & commercial waste for sorting and 95% recycling.",
        pricing: "Pays KES 5-15/kg for sorted clean plastics & paper"
    },
    {
        name: "Mr. Green Africa Kenya Ltd",
        type: "Recycler",
        lat: -1.2422, lng: 36.8856,
        phone: "+254 757 204782", email: "contact@mrgreentrading.com", sms: "+254 757 204782", website: "N/A",
        hours: "Mon–Fri: 8:00 AM – 5:00 PM",
        details: "Plastics recycling aggregator and ethical trade waste processor.",
        pricing: "Pays KES 20-35/kg for rigid HDPE & PET plastics"
    },
    {
        name: "EcoPost Kenya",
        type: "Recycler",
        lat: -1.3250, lng: 36.8410,
        phone: "+254 722 795893", email: "info@ecopost.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Fri: 8:00 AM – 5:00 PM",
        details: "Recycles plastic waste into durable fencing posts and lumber.",
        pricing: "Pays KES 12/kg for clean soft plastics"
    },
    {
        name: "GreenLoop Waste Recyclers",
        type: "Recycler",
        lat: -1.2480, lng: 36.8720,
        phone: "+254 723 456789", email: "info@greenloop.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Fri: 8:00 AM – 5:00 PM",
        details: "Specializes in paper, cardboard, and glass waste recovery.",
        pricing: "Pays KES 8/kg for cardboard & paper"
    },
    {
        name: "EcoScraps & Waste Solutions",
        type: "Recycler",
        lat: -1.2780, lng: 36.8480,
        phone: "+254 714 567890", email: "ops@ecoscraps.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM",
        details: "Scrap metal, e-waste, and rigid plastic recovery plant.",
        pricing: "Pays KES 30-120/kg depending on metal/e-waste type"
    },
    {
        name: "Lavington Cleaners & Recyclers",
        type: "Recycler",
        lat: -1.2820, lng: 36.7710,
        phone: "+254 712 234567", email: "care@lavingtonclean.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM",
        details: "Residential waste pickup with integrated dry-recyclable sorting.",
        pricing: "KES 800/month (Includes free sorted recyclable pickup)"
    },
    {
        name: "PlastiCycle Kenya",
        type: "Recycler",
        lat: -1.2910, lng: 36.8850,
        phone: "+254 701 112233", email: "info@plasticycle.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Industrial and commercial plastic waste recycling center.",
        pricing: "Pays KES 18/kg for clean bulk LDPE films"
    },
    {
        name: "E-Waste Initiative Kenya",
        type: "Recycler",
        lat: -1.3050, lng: 36.8250,
        phone: "+254 720 998877", email: "recycle@ewaste.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Fri: 8:30 AM – 4:30 PM",
        details: "Safe disposal and recycling of electronics, phones, and computers.",
        pricing: "Free drop-off / Pays valuation price for reusable electronics"
    },
    {
        name: "BioOrganic Recyclers Ltd",
        type: "Recycler",
        lat: -1.3320, lng: 36.8650,
        phone: "+254 733 445566", email: "green@bioorganic.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 6:00 AM – 6:00 PM",
        details: "Converts organic food and market waste into bio-fertilizer.",
        pricing: "Free pickup for commercial organic waste above 500kg"
    },
    {
        name: "GlassValue Recyclers Nairobi",
        type: "Recycler",
        lat: -1.2680, lng: 36.8420,
        phone: "+254 711 223344", email: "glass@glassvalue.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Fri: 8:00 AM – 5:00 PM",
        details: "Crushed cullet and glass bottle recycling hub.",
        pricing: "Pays KES 4/kg for clean color-sorted glass bottles"
    },

    // --- FREE (NGOs & CBOs) (25) ---
    {
        name: "Fresh Life / Sanergy Kenya",
        type: "Free",
        lat: -1.3090, lng: 36.8520,
        phone: "+254 711 082000", email: "info@freshlife.org", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Non-profit community sanitation and organic waste transformation initiative."
    },
    {
        name: "Kazi Eco Sanitation CBO",
        type: "Free",
        lat: -1.3140, lng: 36.7880,
        phone: "+254 716 789012", email: "info@kazieco.org", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Community cleanup group providing free neighborhood dumpsite clearances."
    },
    {
        name: "Mathare Green Youth CBO",
        type: "Free",
        lat: -1.2610, lng: 36.8580,
        phone: "+254 727 890123", email: "matharegreen@cbo.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:30 AM – 5:00 PM",
        details: "Youth-led informal settlement cleanup and riverbank clearing."
    },
    {
        name: "Mukuru Waste Collection Hub",
        type: "Free",
        lat: -1.3150, lng: 36.8620,
        phone: "+254 718 901234", email: "mukuruwaste@cbo.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Community sanitation hub maintaining clean drainage pathways."
    },
    {
        name: "Dandora Green Light CBO",
        type: "Free",
        lat: -1.2480, lng: 36.8980,
        phone: "+254 729 012345", email: "dandora.green@cbo.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM",
        details: "Local youth group performing weekly public site cleanups."
    },
    {
        name: "Kasarani Clean Environment CBO",
        type: "Free",
        lat: -1.2220, lng: 36.9010,
        phone: "+254 725 456789", email: "kasaraniclean@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Volunteer community environmental advocacy and litter collection."
    },
    {
        name: "Eastleigh Green Youth Group",
        type: "Free",
        lat: -1.2760, lng: 36.8520,
        phone: "+254 710 789012", email: "eastleighgreen@cbo.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:30 AM – 6:00 PM",
        details: "Community youth market waste clearing and street sweeping."
    },
    {
        name: "Kayole Youth Environmental CBO",
        type: "Free",
        lat: -1.2780, lng: 36.9120,
        phone: "+254 716 012345", email: "kayoleyouth.env@cbo.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:30 AM – 5:30 PM",
        details: "Youth community sanitation drives along main public roads."
    },
    {
        name: "Highrise Clean Environment CBO",
        type: "Free",
        lat: -1.3110, lng: 36.8080,
        phone: "+254 725 789012", email: "highriseclean@cbo.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Estate cleanup drives targeting open public space accumulation."
    },
    {
        name: "Kibera Human Development CBO",
        type: "Free",
        lat: -1.3130, lng: 36.7860,
        phone: "+254 716 890123", email: "kiberahuman@cbo.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:30 AM – 5:00 PM",
        details: "Informal settlement waste management and trench unblocking."
    },
    {
        name: "Dagoretti Corner Youth CBO",
        type: "Free",
        lat: -1.3030, lng: 36.7580,
        phone: "+254 710 345678", email: "dagorettiyouth@cbo.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Public space cleaning and tree planting volunteer brigade."
    },
    {
        name: "Kawangware Green Movement CBO",
        type: "Free",
        lat: -1.2880, lng: 36.7510,
        phone: "+254 712 567890", email: "kawangwaregreen@cbo.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:30 AM – 5:00 PM",
        details: "Grassroots environmental restoration and free market cleanup."
    },
    {
        name: "Kangemi Youth Environmental CBO",
        type: "Free",
        lat: -1.2650, lng: 36.7550,
        phone: "+254 712 567890", email: "kangemiyouth@cbo.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM",
        details: "Community youth initiative for public garbage collection."
    },
    {
        name: "Waithaka Sanitation CBO",
        type: "Free",
        lat: -1.3080, lng: 36.7250,
        phone: "+254 714 789012", email: "waithakasanitation@cbo.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Sub-county sanitation volunteer team clearing illegal dumping."
    },
    {
        name: "Korogocho Green Champions",
        type: "Free",
        lat: -1.2510, lng: 36.8820,
        phone: "+254 700 123123", email: "korogocho.green@cbo.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 4:00 PM",
        details: "Volunteer community group clearing slums waterways."
    },
    {
        name: "Githurai Youth Environmental Shield",
        type: "Free",
        lat: -1.2010, lng: 36.9250,
        phone: "+254 711 321321", email: "githurai.shield@cbo.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM",
        details: "Free market area waste removal and public awareness."
    },
    {
        name: "Ziwani Clean Wave CBO",
        type: "Free",
        lat: -1.2780, lng: 36.8320,
        phone: "+254 722 434343", email: "ziwani.clean@cbo.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Estate channel unblocking and public space sanitation."
    },
    {
        name: "Pumwani Green Brigade",
        type: "Free",
        lat: -1.2810, lng: 36.8450,
        phone: "+254 733 545454", email: "pumwani.green@cbo.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Volunteer group maintaining community health through cleanliness."
    },
    {
        name: "Kariobangi Clean River CBO",
        type: "Free",
        lat: -1.2580, lng: 36.8790,
        phone: "+254 714 656565", email: "kariobangi.river@cbo.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:30 AM – 4:30 PM",
        details: "Specializes in retrieving plastics and waste from local rivers."
    },
    {
        name: "Baba Dogo Youth Eco Taskforce",
        type: "Free",
        lat: -1.2450, lng: 36.8710,
        phone: "+254 725 767676", email: "babadogo.eco@cbo.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Industrial area boundary waste cleanups."
    },
    {
        name: "Huruma Community Sanitation",
        type: "Free",
        lat: -1.2590, lng: 36.8640,
        phone: "+254 736 878787", email: "huruma.sanitation@cbo.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Door-to-door sanitation education and free alleyway clearing."
    },
    {
        name: "Nairobi River Rescue Initiative",
        type: "Free",
        lat: -1.2850, lng: 36.8280,
        phone: "+254 700 989898", email: "river.rescue@ngo.org", sms: "N/A", website: "N/A",
        hours: "Mon–Sun: 7:00 AM – 6:00 PM",
        details: "NGO focused on removing illegal dumps along river banks."
    },
    {
        name: "Viwandani Eco Action CBO",
        type: "Free",
        lat: -1.3190, lng: 36.8680,
        phone: "+254 711 090909", email: "viwandani.eco@cbo.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Informal industrial neighborhood volunteer environmental group."
    },
    {
        name: "Muirigo Green Volunteers",
        type: "Free",
        lat: -1.3480, lng: 36.7280,
        phone: "+254 722 101010", email: "muirigo.green@cbo.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 4:00 PM",
        details: "Suburban boundary public land garbage clearing."
    },
    {
        name: "Ruaraka Eco Action Group",
        type: "Free",
        lat: -1.2380, lng: 36.8620,
        phone: "+254 733 212121", email: "ruaraka.eco@cbo.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Community initiative cleaning roadside dumpsites."
    },

    // --- NORMAL SERVICES (65) ---
    {
        name: "Bins (Nairobi) Services Ltd",
        type: "Normal",
        lat: -1.2885, lng: 36.7820,
        phone: "+254 722 713964", email: "info@binsgroup.com", sms: "N/A", website: "N/A",
        hours: "Mon–Fri: 7:00 AM – 5:00 PM, Sat: 7:00 AM – 1:00 PM",
        details: "Residential & commercial standard door-to-door trash collection.",
        pricing: "KES 1,200/month (Weekly collection)"
    },
    {
        name: "Colnet Limited",
        type: "Normal",
        lat: -1.3180, lng: 36.8850,
        phone: "+254 721 566140", email: "info@colnet.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Fri: 8:00 AM – 5:00 PM, Sat: 9:00 AM – 12:00 PM",
        details: "Commercial refuse, office waste, and industrial disposal services.",
        pricing: "KES 1,500/month (Residential) / Custom for Commercial"
    },
    {
        name: "Stelarlizar Limited",
        type: "Normal",
        lat: -1.2680, lng: 36.8080,
        phone: "+254 722 379342", email: "info@stelarlizar.com", sms: "N/A", website: "N/A",
        hours: "24/7 Operations",
        details: "Continuous commercial waste handling and skip hire.",
        pricing: "KES 2,500 per skip container clearance"
    },
    {
        name: "GM Cleaning & Waste Services",
        type: "Normal",
        lat: -1.2210, lng: 36.8920,
        phone: "+254 721 979781", email: "info@gmcleaning.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 6:00 PM",
        details: "Commercial sanitation, estate collection & office cleaning.",
        pricing: "KES 1,000/month"
    },
    {
        name: "Trash Connections Ltd",
        type: "Normal",
        lat: -1.3380, lng: 36.7550,
        phone: "+254 783 872740", email: "info@trash.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Fri: 8:00 AM – 5:00 PM, Sat: 8:00 AM – 1:00 PM",
        details: "Household scheduled waste pickup in Karen and Langata.",
        pricing: "KES 1,500/month"
    },
    {
        name: "KitutoAfrica Waste Management",
        type: "Normal",
        lat: -1.3120, lng: 36.7890,
        phone: "+254 721 428236", email: "info@kitutoafrica.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 6:00 PM",
        details: "Urban household solid waste handling.",
        pricing: "KES 800/month"
    },
    {
        name: "Safe Cleaning Services",
        type: "Normal",
        lat: -1.2840, lng: 36.8220,
        phone: "+254 725 051212", email: "info@safecleaningservices.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:30 AM – 5:30 PM",
        details: "General cleaning & routine domestic trash collection.",
        pricing: "KES 750/month"
    },
    {
        name: "Ladies for Ladies Executive Care",
        type: "Normal",
        lat: -1.2650, lng: 36.8020,
        phone: "+254 722 378901", email: "info@ladiesforladiesexecutives.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Executive estate residential garbage collection.",
        pricing: "KES 1,200/month"
    },
    {
        name: "Royfy Enterprises",
        type: "Normal",
        lat: -1.3010, lng: 36.8590,
        phone: "+254 718 002608", email: "info@royfyenterprises.co.ke", sms: "N/A", website: "N/A",
        hours: "24/7 Operations",
        details: "Paid industrial and residential refuse disposal.",
        pricing: "KES 900/month"
    },
    {
        name: "Garbage Dot Com Ltd",
        type: "Normal",
        lat: -1.2970, lng: 36.7910,
        phone: "+254 722 528379", email: "info@garbagemasters.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:30 AM – 5:30 PM",
        details: "Door-to-door domestic trash management.",
        pricing: "KES 600/month"
    },
    {
        name: "CleanCity Environmental Services",
        type: "Normal",
        lat: -1.3200, lng: 36.8900,
        phone: "+254 720 112233", email: "contact@cleancity.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 6:00 AM – 6:00 PM",
        details: "Municipal zone contract waste removal.",
        pricing: "KES 700/month"
    },
    {
        name: "Nairobi Central Sanitation & Waste",
        type: "Normal",
        lat: -1.2833, lng: 36.8167,
        phone: "+254 712 345678", email: "support@nairobisanitation.co.ke", sms: "N/A", website: "N/A",
        hours: "24/7 Operations",
        details: "CBD commercial property refuse collection.",
        pricing: "KES 2,000/month (Commercial)"
    },
    {
        name: "CityClean Waste Management",
        type: "Normal",
        lat: -1.3510, lng: 36.7620,
        phone: "+254 725 678901", email: "info@cityclean.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 6:00 PM",
        details: "Private estate collection and disposal.",
        pricing: "KES 1,000/month"
    },
    {
        name: "Eastlands Environmental Services",
        type: "Normal",
        lat: -1.2980, lng: 36.8550,
        phone: "+254 710 123456", email: "eastlandsenv@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 6:00 PM",
        details: "Regional residential paid collection.",
        pricing: "KES 500/month"
    },
    {
        name: "Karen & Langata Waste Handlers",
        type: "Normal",
        lat: -1.3530, lng: 36.7120,
        phone: "+254 721 234567", email: "info@klwaste.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Fri: 8:00 AM – 5:00 PM, Sat: 8:00 AM – 2:00 PM",
        details: "Low-density residential trash pickup.",
        pricing: "KES 1,800/month"
    },
    {
        name: "Westlands Green Refuse",
        type: "Normal",
        lat: -1.2630, lng: 36.8030,
        phone: "+254 723 345678", email: "info@westlandsrefuse.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Fri: 7:30 AM – 5:30 PM",
        details: "Commercial & residential waste collection.",
        pricing: "KES 1,500/month"
    },
    {
        name: "Roysambu Eco Collectors",
        type: "Normal",
        lat: -1.2180, lng: 36.8870,
        phone: "+254 714 345678", email: "roysambueco@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 6:00 PM",
        details: "Apartment complex garbage services.",
        pricing: "KES 400/household/month"
    },
    {
        name: "Embakasi Green Ventures",
        type: "Normal",
        lat: -1.2820, lng: 36.9050,
        phone: "+254 716 456789", email: "embakasi.green@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM",
        details: "High-density residential waste removal.",
        pricing: "KES 350/month"
    },
    {
        name: "South C Waste Managers",
        type: "Normal",
        lat: -1.3210, lng: 36.8280,
        phone: "+254 727 567890", email: "southcwaste@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Estate garbage disposal.",
        pricing: "KES 800/month"
    },
    {
        name: "Parklands Sanitation Services",
        type: "Normal",
        lat: -1.2610, lng: 36.8210,
        phone: "+254 718 567890", email: "info@parklandssanitation.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Fri: 8:00 AM – 5:00 PM",
        details: "Commercial & residential waste collection.",
        pricing: "KES 1,200/month"
    },
    {
        name: "Ngara Refuse Solutions",
        type: "Normal",
        lat: -1.2750, lng: 36.8250,
        phone: "+254 729 678901", email: "ngararefuse@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM",
        details: "Commercial & domestic waste service.",
        pricing: "KES 600/month"
    },
    {
        name: "Githurai Environmental Services",
        type: "Normal",
        lat: -1.2050, lng: 36.9200,
        phone: "+254 721 789012", email: "githuraienv@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM",
        details: "Suburban household waste management.",
        pricing: "KES 300/month"
    },
    {
        name: "Ruai Waste Management Enterprise",
        type: "Normal",
        lat: -1.2710, lng: 36.9820,
        phone: "+254 712 890123", email: "ruaiwaste@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM",
        details: "Outer Nairobi peri-urban waste collection.",
        pricing: "KES 500/month"
    },
    {
        name: "Njiru Environmental Refuse",
        type: "Normal",
        lat: -1.2520, lng: 36.9410,
        phone: "+254 723 890123", email: "njirurefuse@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Residential trash pickup.",
        pricing: "KES 400/month"
    },
    {
        name: "Utawala Clean Environment Ltd",
        type: "Normal",
        lat: -1.2810, lng: 36.9610,
        phone: "+254 714 901234", email: "utawalaclean@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 6:00 PM",
        details: "Residential refuse collection services.",
        pricing: "KES 500/month"
    },
    {
        name: "Pipeline Sanitation Services",
        type: "Normal",
        lat: -1.3190, lng: 36.8920,
        phone: "+254 725 901234", email: "pipelinesanitation@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 6:00 PM",
        details: "Dense apartment waste collection.",
        pricing: "KES 300/month"
    },
    {
        name: "Buruburu Eco Collectors",
        type: "Normal",
        lat: -1.2840, lng: 36.8810,
        phone: "+254 727 012345", email: "buruburueco@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Neighborhood refuse services.",
        pricing: "KES 600/month"
    },
    {
        name: "Donholm Clean & Clear Services",
        type: "Normal",
        lat: -1.2910, lng: 36.8910,
        phone: "+254 718 123456", email: "donholmclean@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM",
        details: "Paid estate garbage collection.",
        pricing: "KES 500/month"
    },
    {
        name: "Savannah Environmental Enterprise",
        type: "Normal",
        lat: -1.2950, lng: 36.8980,
        phone: "+254 729 123456", email: "savannahenv@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Domestic garbage handling.",
        pricing: "KES 500/month"
    },
    {
        name: "Fedha Green Handlers",
        type: "Normal",
        lat: -1.3080, lng: 36.8920,
        phone: "+254 710 234567", email: "fedhagreen@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:30 AM – 5:30 PM",
        details: "Household waste collection.",
        pricing: "KES 400/month"
    },
    {
        name: "Imara Daima Refuse Handlers",
        type: "Normal",
        lat: -1.3280, lng: 36.8790,
        phone: "+254 721 345678", email: "imararefuse@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM",
        details: "Estate trash collection.",
        pricing: "KES 600/month"
    },
    {
        name: "South B Clean Environment",
        type: "Normal",
        lat: -1.3120, lng: 36.8390,
        phone: "+254 712 456789", email: "southbclean@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Residential trash collection.",
        pricing: "KES 700/month"
    },
    {
        name: "Nairobi West Waste Managers",
        type: "Normal",
        lat: -1.3050, lng: 36.8220,
        phone: "+254 723 567890", email: "naiwestwaste@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM",
        details: "Local refuse removal.",
        pricing: "KES 700/month"
    },
    {
        name: "Madaraka Eco Management",
        type: "Normal",
        lat: -1.3080, lng: 36.8150,
        phone: "+254 714 678901", email: "madarakaeco@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Domestic waste removal.",
        pricing: "KES 600/month"
    },
    {
        name: "Jamhuri Refuse Services",
        type: "Normal",
        lat: -1.3020, lng: 36.7720,
        phone: "+254 727 901234", email: "jamhurirefuse@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Neighborhood trash management.",
        pricing: "KES 500/month"
    },
    {
        name: "Woodley Eco Waste Services",
        type: "Normal",
        lat: -1.3010, lng: 36.7850,
        phone: "+254 718 012345", email: "woodleyeco@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Residential refuse services.",
        pricing: "KES 800/month"
    },
    {
        name: "Adams Arcade Cleaners",
        type: "Normal",
        lat: -1.2990, lng: 36.7810,
        phone: "+254 729 234567", email: "adamsclean@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:30 AM – 5:30 PM",
        details: "Commercial & retail waste.",
        pricing: "KES 1,000/month"
    },
    {
        name: "Riruta Environmental Action",
        type: "Normal",
        lat: -1.3010, lng: 36.7450,
        phone: "+254 721 456789", email: "rirutaenv@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM",
        details: "Local garbage management.",
        pricing: "KES 400/month"
    },
    {
        name: "Kileleshwa Eco Services",
        type: "Normal",
        lat: -1.2780, lng: 36.7920,
        phone: "+254 723 678901", email: "kileleshwaeco@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Estate garbage services.",
        pricing: "KES 1,200/month"
    },
    {
        name: "Kilimani Waste Solutions",
        type: "Normal",
        lat: -1.2910, lng: 36.7850,
        phone: "+254 714 789012", email: "kilimaniwaste@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:30 AM – 5:30 PM",
        details: "Commercial & domestic waste.",
        pricing: "KES 1,200/month"
    },
    {
        name: "Thompson Estate Cleaners",
        type: "Normal",
        lat: -1.2950, lng: 36.7780,
        phone: "+254 725 890123", email: "thompsonclean@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Private estate trash removal.",
        pricing: "KES 1,000/month"
    },
    {
        name: "Lavington Green Action",
        type: "Normal",
        lat: -1.2790, lng: 36.7680,
        phone: "+254 716 901234", email: "lavingtongreen@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Residential garbage management.",
        pricing: "KES 1,500/month"
    },
    {
        name: "Highridge Refuse Services",
        type: "Normal",
        lat: -1.2580, lng: 36.8150,
        phone: "+254 727 012345", email: "highridgerefuse@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:30 AM – 5:30 PM",
        details: "Residential waste collection.",
        pricing: "KES 1,000/month"
    },
    {
        name: "Spring Valley Waste Managers",
        type: "Normal",
        lat: -1.2530, lng: 36.7980,
        phone: "+254 718 123456", email: "springvalleywaste@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Domestic garbage pickup.",
        pricing: "KES 1,500/month"
    },
    {
        name: "Kyuna Eco Solutions",
        type: "Normal",
        lat: -1.2570, lng: 36.7880,
        phone: "+254 729 234567", email: "kyunaeco@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Suburban trash removal.",
        pricing: "KES 1,500/month"
    },
    {
        name: "Loresho Refuse Handlers",
        type: "Normal",
        lat: -1.2510, lng: 36.7720,
        phone: "+254 710 345678", email: "loreshorefuse@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Residential collection.",
        pricing: "KES 1,200/month"
    },
    {
        name: "Mountain View Green Handlers",
        type: "Normal",
        lat: -1.2620, lng: 36.7480,
        phone: "+254 721 456789", email: "mountainviewgreen@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:30 AM – 5:00 PM",
        details: "Estate garbage management.",
        pricing: "KES 800/month"
    },
    {
        name: "Uthiru Waste Handlers",
        type: "Normal",
        lat: -1.2610, lng: 36.7320,
        phone: "+254 723 678901", email: "uthiruwaste@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:30 AM – 5:30 PM",
        details: "Local household collection.",
        pricing: "KES 400/month"
    },
    {
        name: "Muthaiga Clean Environment",
        type: "Normal",
        lat: -1.2520, lng: 36.8310,
        phone: "+254 725 890123", email: "muthaigaclean@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Residential refuse services.",
        pricing: "KES 2,000/month"
    },
    {
        name: "Gigiri Refuse & Waste Services",
        type: "Normal",
        lat: -1.2320, lng: 36.8120,
        phone: "+254 716 901234", email: "gigirirefuse@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:30 AM – 5:30 PM",
        details: "Commercial & residential services.",
        pricing: "KES 2,000/month"
    },
    {
        name: "Runda Sanitation Ltd",
        type: "Normal",
        lat: -1.2150, lng: 36.8180,
        phone: "+254 700 887766", email: "info@rundasanitation.co.ke", sms: "N/A", website: "N/A",
        hours: "Mon–Fri: 8:00 AM – 5:00 PM",
        details: "High-end residential area garbage services.",
        pricing: "KES 2,500/month"
    },
    {
        name: "Nyayo Estate Waste Handlers",
        type: "Normal",
        lat: -1.3010, lng: 36.9120,
        phone: "+254 711 554433", email: "nyayowaste@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM",
        details: "Gated community scheduled pickup.",
        pricing: "KES 600/month"
    },
    {
        name: "Kitisuru Refuse Collectors",
        type: "Normal",
        lat: -1.2380, lng: 36.7780,
        phone: "+254 722 665544", email: "kitisuru.refuse@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Private suburban collection.",
        pricing: "KES 2,000/month"
    },
    {
        name: "Kahawa West Waste Solutions",
        type: "Normal",
        lat: -1.1820, lng: 36.9020,
        phone: "+254 733 778899", email: "kahawawest.waste@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 6:00 PM",
        details: "Household waste handling.",
        pricing: "KES 400/month"
    },
    {
        name: "Zimmerman Refuse Services",
        type: "Normal",
        lat: -1.2050, lng: 36.8920,
        phone: "+254 714 889900", email: "zimma.refuse@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 6:00 PM",
        details: "Apartment complex garbage collection.",
        pricing: "KES 350/month"
    },
    {
        name: "Kasarant Estate Cleaners",
        type: "Normal",
        lat: -1.2180, lng: 36.9080,
        phone: "+254 725 990011", email: "kasarani.estate@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Commercial & domestic waste.",
        pricing: "KES 500/month"
    },
    {
        name: "Mirema Waste Handlers",
        type: "Normal",
        lat: -1.2110, lng: 36.8850,
        phone: "+254 736 001122", email: "mirema.waste@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 6:00 PM",
        details: "Residential garbage services.",
        pricing: "KES 400/month"
    },
    {
        name: "Pangani Refuse Ltd",
        type: "Normal",
        lat: -1.2680, lng: 36.8350,
        phone: "+254 717 112233", email: "panganirefuse@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:30 AM – 5:30 PM",
        details: "Commercial & residential pickup.",
        pricing: "KES 600/month"
    },
    {
        name: "Eastleigh Commercial Waste Handlers",
        type: "Normal",
        lat: -1.2720, lng: 36.8480,
        phone: "+254 728 223344", email: "eastleighcomm@gmail.com", sms: "N/A", website: "N/A",
        hours: "24/7 Operations",
        details: "Shopping mall and business garbage services.",
        pricing: "KES 1,500/month"
    },
    {
        name: "Industrial Area Refuse Collectors",
        type: "Normal",
        lat: -1.3080, lng: 36.8480,
        phone: "+254 739 334455", email: "indarea.refuse@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 6:00 AM – 6:00 PM",
        details: "Factory and workshop non-hazardous waste.",
        pricing: "KES 3,000/month"
    },
    {
        name: "Mbagathi Way Garbage Services",
        type: "Normal",
        lat: -1.3050, lng: 36.8020,
        phone: "+254 710 445566", email: "mbagathi.garbage@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM",
        details: "Residential estate trash pickup.",
        pricing: "KES 600/month"
    },
    {
        name: "Langata Green Garbage Handlers",
        type: "Normal",
        lat: -1.3280, lng: 36.7920,
        phone: "+254 721 556677", email: "langatagreen@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Household waste handling.",
        pricing: "KES 800/month"
    },
    {
        name: "Karen Plains Waste Services",
        type: "Normal",
        lat: -1.3410, lng: 36.7180,
        phone: "+254 732 667788", email: "karenplains@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Fri: 8:00 AM – 5:00 PM",
        details: "Low-density residential collection.",
        pricing: "KES 1,800/month"
    },
    {
        name: "Kabete Clean Environment Ltd",
        type: "Normal",
        lat: -1.2580, lng: 36.7220,
        phone: "+254 713 778899", email: "kabeteclean@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 7:00 AM – 5:00 PM",
        details: "Domestic waste collection.",
        pricing: "KES 500/month"
    },
    {
        name: "Lower Kabete Refuse Handlers",
        type: "Normal",
        lat: -1.2450, lng: 36.7420,
        phone: "+254 724 889900", email: "lowerkabete@gmail.com", sms: "N/A", website: "N/A",
        hours: "Mon–Sat: 8:00 AM – 5:00 PM",
        details: "Residential garbage removal.",
        pricing: "KES 1,000/month"
    }
];

// Nairobi Boundary Definition (Bounding box around Nairobi County)
const nairobiBounds = L.latLngBounds(
    L.latLng(-1.45, 36.65),
    L.latLng(-1.15, 37.10)
);

function isInNairobi(lat, lng) {
    return nairobiBounds.contains([lat, lng]);
}

let map;
let activeMarker;
let currentSelectedLat = null;
let currentSelectedLng = null;
let currentLang = 'en'; // Default language: English

// Custom SVG Marker Icon
const greenPinIcon = L.divIcon({
    className: 'custom-marker',
    html: `<svg width="28" height="40" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.37 0 0 5.37 0 12C0 21 12 36 12 36C12 36 24 21 24 12C24 5.37 18.63 0 12 0Z" fill="#a2ffa1" stroke="#121212" stroke-width="2"/>
            <circle cx="12" cy="12" r="4.5" fill="#121212"/>
           </svg>`,
    iconSize: [28, 40],
    iconAnchor: [14, 40]
});

function clearServicesList() {
    const container = document.getElementById('services-list');
    const msgEn = "Click a location on the map or search above to view nearby garbage collection services.";
    const msgSw = "Bonyeza eneo kwenye ramani au utafute hapo juu ili kuona huduma za ukusanyaji taka karibu nawe.";
    const currentMsg = currentLang === 'sw' ? msgSw : msgEn;
    
    container.innerHTML = `<div class="empty-state" data-en="${msgEn}" data-sw="${msgSw}">${currentMsg}</div>`;
}

function unselectLocation(message = null) {
    if (activeMarker) {
        map.removeLayer(activeMarker);
        activeMarker = null;
    }
    currentSelectedLat = null;
    currentSelectedLng = null;
    
    const defaultMsg = message || (currentLang === 'sw' 
        ? "Eneo halijaingizwa. Tafadhali weka eneo lako" 
        : "Location not input. Please input your location");
        
    document.getElementById('location-output').value = defaultMsg;
    clearServicesList();
}

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
            const err = currentLang === 'sw' ? "Tafadhali weka eneo halali jijini Nairobi" : "Please enter a valid location in Nairobi";
            unselectLocation(err);
            return;
        }
        setLocation(lat, lng);
    });
}

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

// Fetch & Filter Collectors
function getFilteredServices(lat, lng, selectedType) {
    let calculated = nairobiGarbageServices.map(service => {
        const dist = calculateDistance(lat, lng, service.lat, service.lng);
        return { ...service, distance: dist };
    });

    calculated.sort((a, b) => a.distance - b.distance);

    if (selectedType === "All") {
        return calculated.slice(0, 7);
    } else {
        return calculated.filter(service => service.type === selectedType);
    }
}

function renderServicesList(services, selectedType) {
    const container = document.getElementById('services-list');
    container.innerHTML = '';

    if (!services || services.length === 0) {
        const noServ = currentLang === 'sw' 
            ? `Hakuna huduma za ukusanyaji za ${selectedType} zilizopatikana karibu.`
            : `No ${selectedType} collection services found nearby.`;
        container.innerHTML = `<div class="empty-state">${noServ}</div>`;
        return;
    }

    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';

        const distFormatted = service.distance < 1 
            ? `${Math.round(service.distance * 1000)} ${currentLang === 'sw' ? 'mita kutoka hapa' : 'meters away'}`
            : `${service.distance.toFixed(2)} ${currentLang === 'sw' ? 'km kutoka hapa' : 'km away'}`;

        const typeHtml = selectedType === "All" 
            ? `<div class="detail-item"><span class="label">${currentLang === 'sw' ? 'Aina:' : 'Type:'}</span> <span class="type-tag ${service.type.toLowerCase()}">${service.type}</span></div>` 
            : '';

        const pricingHtml = (service.type === "Normal" || service.type === "Recycler") && service.pricing
            ? `<div class="detail-item"><span class="label">${currentLang === 'sw' ? 'Gharama:' : 'Pricing:'}</span> ${service.pricing}</div>`
            : '';

        card.innerHTML = `
            <div class="service-header">
                <div class="service-name">${service.name}</div>
                <span class="distance-badge">${distFormatted}</span>
            </div>
            <div class="service-details">
                ${typeHtml}
                <div class="detail-item"><span class="label">${currentLang === 'sw' ? 'Simu:' : 'Phone:'}</span> ${service.phone}</div>
                <div class="detail-item"><span class="label">${currentLang === 'sw' ? 'Barua pepe:' : 'Email:'}</span> ${service.email}</div>
                <div class="detail-item"><span class="label">SMS:</span> ${service.sms}</div>
                <div class="detail-item"><span class="label">${currentLang === 'sw' ? 'Tovuti:' : 'Website:'}</span> ${service.website}</div>
                <div class="detail-item"><span class="label">${currentLang === 'sw' ? 'Saa za Kazi:' : 'Hours:'}</span> ${service.hours}</div>
                ${pricingHtml}
                <div class="detail-item full-width"><span class="label">${currentLang === 'sw' ? 'Maelezo:' : 'Details:'}</span> ${service.details}</div>
            </div>
        `;

        container.appendChild(card);
    });
}

function updateServicesView() {
    if (currentSelectedLat === null || currentSelectedLng === null) return;
    const selectedType = document.getElementById('collector-type-select').value;
    const services = getFilteredServices(currentSelectedLat, currentSelectedLng, selectedType);
    renderServicesList(services, selectedType);
}

async function setLocation(lat, lng, displayName = null) {
    const outputBox = document.getElementById('location-output');

    if (!isInNairobi(lat, lng)) {
        const err = currentLang === 'sw' ? "Tafadhali weka eneo halali jijini Nairobi" : "Please enter a valid location in Nairobi";
        unselectLocation(err);
        return;
    }

    currentSelectedLat = lat;
    currentSelectedLng = lng;

    if (activeMarker) {
        activeMarker.setLatLng([lat, lng]);
    } else {
        activeMarker = L.marker([lat, lng], { icon: greenPinIcon }).addTo(map);
        
        activeMarker.on('click', function(e) {
            L.DomEvent.stopPropagation(e);
            unselectLocation();
        });
    }

    if (displayName) {
        outputBox.value = displayName;
    } else {
        outputBox.value = currentLang === 'sw' ? "Inatafuta maelezo ya eneo..." : "Fetching location details...";
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

    updateServicesView();
}

async function handleSearch() {
    const query = document.getElementById('search-input').value.trim();

    if (!query) {
        unselectLocation();
        return;
    }

    document.getElementById('location-output').value = currentLang === 'sw' ? "Inatafuta eneo..." : "Searching location...";

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
                const err = currentLang === 'sw' ? "Tafadhali weka eneo halali jijini Nairobi" : "Please enter a valid location in Nairobi";
                unselectLocation(err);
                return;
            }

            map.setView([lat, lon], 14);
            setLocation(lat, lon, firstResult.display_name);
        } else {
            const err = currentLang === 'sw' ? "Tafadhali weka eneo halali jijini Nairobi" : "Please enter a valid location in Nairobi";
            unselectLocation(err);
        }
    } catch {
        const err = currentLang === 'sw' ? "Tafadhali weka eneo halali jijini Nairobi" : "Please enter a valid location in Nairobi";
        unselectLocation(err);
    }
}

// Modal Pop-Up Logic (How To Use)
const howToUseLink = document.getElementById('howToUseLink');
const howToUseDialog = document.getElementById('howToUseDialog');
const closeHowToUseBtn = document.getElementById('closeHowToUseBtn');

if (howToUseLink && howToUseDialog) {
    howToUseLink.addEventListener('click', (e) => {
        e.preventDefault();
        howToUseDialog.showModal();
    });
}

if (closeHowToUseBtn && howToUseDialog) {
    closeHowToUseBtn.addEventListener('click', () => {
        howToUseDialog.close();
    });
}

// Modal Pop-Up Logic (The Tool)
const toolLink = document.getElementById('toolLink');
const collectorDialog = document.getElementById('collectorDialog');
const closeDialogBtn = document.getElementById('closeDialogBtn');

if (toolLink && collectorDialog) {
    toolLink.addEventListener('click', (e) => {
        e.preventDefault();
        collectorDialog.showModal();

        if (!activeMarker) {
            unselectLocation();
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

// Modal Pop-Up Logic (Feedback)
const feedbackLink = document.getElementById('feedbackLink');
const feedbackDialog = document.getElementById('feedbackDialog');
const closeFeedbackBtn = document.getElementById('closeFeedbackBtn');
const submitFeedbackBtn = document.getElementById('submitFeedbackBtn');
const feedbackInput = document.getElementById('feedbackInput');

if (feedbackLink && feedbackDialog) {
    feedbackLink.addEventListener('click', (e) => {
        e.preventDefault();
        feedbackDialog.showModal();
    });
}

if (closeFeedbackBtn && feedbackDialog) {
    closeFeedbackBtn.addEventListener('click', () => {
        feedbackDialog.close();
    });
}

if (submitFeedbackBtn && feedbackInput) {
    submitFeedbackBtn.addEventListener('click', () => {
        feedbackInput.value = ''; // Empty text box on submit
    });
}

// Search and Filter Event Listeners
document.getElementById('search-btn').addEventListener('click', handleSearch);
document.getElementById('search-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') handleSearch();
});

document.getElementById('search-input').addEventListener('input', function () {
    if (!this.value.trim()) {
        unselectLocation();
    }
});

document.getElementById('collector-type-select').addEventListener('change', updateServicesView);

// Theme Changer Logic (Dark Mode <-> Light Mode)
const themeToggleBtn = document.getElementById('themeToggleBtn');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLightMode = document.body.classList.contains('light-mode');
    
    if (isLightMode) {
        themeToggleBtn.textContent = 'Dark Mode';
    } else {
        themeToggleBtn.textContent = 'Light Mode';
    }
});

// Language Switcher Logic (English <-> Swahili)
const langToggleBtn = document.getElementById('langToggleBtn');

langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'sw' : 'en';
    
    // Toggle Button Text
    langToggleBtn.textContent = currentLang === 'sw' ? 'English' : 'Swahili';

    // Translate all elements with data-en and data-sw attributes
    const translatableElements = document.querySelectorAll('[data-en][data-sw]');
    translatableElements.forEach(el => {
        if (currentLang === 'sw') {
            el.textContent = el.getAttribute('data-sw');
        } else {
            el.textContent = el.getAttribute('data-en');
        }
    });

    // Refresh active output messages
    if (currentSelectedLat !== null && currentSelectedLng !== null) {
        updateServicesView();
    } else {
        unselectLocation();
    }
});