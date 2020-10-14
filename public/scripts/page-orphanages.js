// reate map:
const map = L.map('mapid').setView([-27.222633, -49.6455874], 14);

// Create and add tile
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 48],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// Create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanages"> <img src="./public/images/arrow-white.svg" </a>')

// Create and add marker
L.marker([-27.222633, -49.6455874], { icon }).addTo(map)
    .bindPopup(popup)