const GOOGLE_MAPS_API_KEY = ""; // Add your Google Maps JavaScript API key to enable live map rendering.
const GOOGLE_MAPS_API_KEY = ""; // Add your Google Maps JavaScript API key to enable live Google Maps rendering.

const stations = [
  {
    name: "Tata Power EZ Charge - Mumbai BKC",
    city: "Mumbai",
    lat: 19.0676,
    lng: 72.8676,
    price: 20,
    output: 60,
    connectors: ["CCS2", "Type 2"],
    foodHubs: ["Jio World Drive", "Yauatcha", "BKC Food Court"],
  },
  {
    name: "Ather Grid - Bengaluru Indiranagar",
    city: "Bengaluru",
    lat: 12.9784,
    lng: 77.6408,
    price: 16,
    output: 30,
    connectors: ["CCS2", "Type 2", "Bharat AC001"],
    foodHubs: ["Toit", "Rameshwaram Cafe", "Third Wave Coffee"],
  },
  {
    name: "ChargeZone - Delhi Aerocity",
    city: "Delhi NCR",
    lat: 28.5562,
    lng: 77.1000,
    price: 22,
    output: 120,
    connectors: ["CCS2", "CHAdeMO"],
    foodHubs: ["Worldmark", "Farzi Cafe", "Kampai"],
  },
  {
    name: "Jio-bp Pulse - Ahmedabad SG Highway",
    city: "Ahmedabad",
    lat: 23.0700,
    lng: 72.5190,
    price: 18,
    output: 90,
    connectors: ["CCS2", "Type 2"],
    foodHubs: ["Gordhan Thal", "Honest", "Zen Cafe"],
  },
  {
    name: "Statiq - Jaipur Tonk Road",
    city: "Jaipur",
    lat: 26.8530,
    lng: 75.8050,
    price: 19,
    output: 50,
    connectors: ["CCS2", "Bharat DC001"],
    foodHubs: ["Tapri", "Chokhi Dhani", "Masala Chowk"],
  },
  {
    name: "Shell Recharge - Hyderabad Hitec City",
    city: "Hyderabad",
    lat: 17.4435,
    lng: 78.3772,
    price: 21,
    output: 150,
    connectors: ["CCS2", "Type 2"],
    foodHubs: ["Shah Ghouse", "IKEA Food Court", "Roastery Coffee"],
  },
  { name: "Tata Power EZ Charge - Mumbai BKC", city: "Mumbai", state: "Maharashtra", lat: 19.0676, lng: 72.8676, price: 20, output: 60, connectors: ["CCS2", "Type 2"], amenities: ["24x7", "Valet", "Restroom"], foodHubs: ["Jio World Drive", "Yauatcha", "BKC Food Court"] },
  { name: "Ather Grid - Bengaluru Indiranagar", city: "Bengaluru", state: "Karnataka", lat: 12.9784, lng: 77.6408, price: 16, output: 30, connectors: ["CCS2", "Type 2", "Bharat AC001"], amenities: ["Cafe", "Wi-Fi", "Two-wheeler bay"], foodHubs: ["Toit", "Rameshwaram Cafe", "Third Wave Coffee"] },
  { name: "ChargeZone - Delhi Aerocity", city: "Delhi NCR", state: "Delhi", lat: 28.5562, lng: 77.1, price: 22, output: 120, connectors: ["CCS2", "CHAdeMO"], amenities: ["Airport access", "Fast DC", "Lounge"], foodHubs: ["Worldmark", "Farzi Cafe", "Kampai"] },
  { name: "Jio-bp Pulse - Ahmedabad SG Highway", city: "Ahmedabad", state: "Gujarat", lat: 23.07, lng: 72.519, price: 18, output: 90, connectors: ["CCS2", "Type 2"], amenities: ["Highway bay", "Canopy", "Family stop"], foodHubs: ["Gordhan Thal", "Honest", "Zen Cafe"] },
  { name: "Statiq - Jaipur Tonk Road", city: "Jaipur", state: "Rajasthan", lat: 26.853, lng: 75.805, price: 19, output: 50, connectors: ["CCS2", "Bharat DC001"], amenities: ["Hotel parking", "Security", "Restroom"], foodHubs: ["Tapri", "Chokhi Dhani", "Masala Chowk"] },
  { name: "Shell Recharge - Hyderabad Hitec City", city: "Hyderabad", state: "Telangana", lat: 17.4435, lng: 78.3772, price: 21, output: 150, connectors: ["CCS2", "Type 2"], amenities: ["Ultra-fast", "Mall", "Restroom"], foodHubs: ["Shah Ghouse", "IKEA Food Court", "Roastery Coffee"] },
  { name: "Relux Electric - Chennai OMR", city: "Chennai", state: "Tamil Nadu", lat: 12.921, lng: 80.23, price: 18, output: 60, connectors: ["CCS2", "Type 2", "Bharat AC001"], amenities: ["IT corridor", "Cafe", "Covered bay"], foodHubs: ["Sangeetha", "Murugan Idli", "Writer's Cafe"] },
  { name: "Kazam - Kolkata Salt Lake", city: "Kolkata", state: "West Bengal", lat: 22.5867, lng: 88.4171, price: 17, output: 45, connectors: ["CCS2", "Bharat DC001", "Type 2"], amenities: ["Metro nearby", "Security", "Shopping"], foodHubs: ["6 Ballygunge Place", "Arsalan", "Mio Amore"] },
  { name: "ChargeZone - Pune Hinjewadi", city: "Pune", state: "Maharashtra", lat: 18.5913, lng: 73.7389, price: 19, output: 90, connectors: ["CCS2", "Type 2"], amenities: ["Office hub", "Fast DC", "Wi-Fi"], foodHubs: ["Blue Ridge Food Court", "Barbeque Nation", "Irani Cafe"] },
  { name: "Tata Power - Kochi Vyttila", city: "Kochi", state: "Kerala", lat: 9.9674, lng: 76.3184, price: 18, output: 50, connectors: ["CCS2", "Type 2"], amenities: ["Mall", "Restroom", "Family stop"], foodHubs: ["Lulu Mall Food Court", "Paragon", "Cocoa Tree"] },
  { name: "Jio-bp Pulse - Lucknow Gomti Nagar", city: "Lucknow", state: "Uttar Pradesh", lat: 26.8467, lng: 80.9462, price: 18, output: 60, connectors: ["CCS2", "Bharat AC001"], amenities: ["City center", "Covered bay", "Restroom"], foodHubs: ["Tunday Kababi", "Royal Cafe", "Dastarkhwan"] },
  { name: "Statiq - Guwahati GS Road", city: "Guwahati", state: "Assam", lat: 26.1445, lng: 91.7362, price: 20, output: 40, connectors: ["CCS2", "Type 2"], amenities: ["North-East route", "Cafe", "Security"], foodHubs: ["Paradise", "11th Avenue Cafe", "Khorikaa"] },
  { name: "Magenta ChargeGrid - Chandigarh", city: "Chandigarh", state: "Chandigarh", lat: 30.7333, lng: 76.7794, price: 19, output: 60, connectors: ["CCS2", "Type 2", "CHAdeMO"], amenities: ["Highway connector", "Garden city", "Restroom"], foodHubs: ["Indian Coffee House", "Pal Dhaba", "Nik Baker's"] },
  { name: "Fortum Charge & Drive - Bhubaneswar", city: "Bhubaneswar", state: "Odisha", lat: 20.2961, lng: 85.8245, price: 18, output: 50, connectors: ["CCS2", "Bharat DC001"], amenities: ["Temple route", "Parking", "Security"], foodHubs: ["Dalma", "Truptee", "Bocca Cafe"] },
];

const coveredCities = [
  "Srinagar", "Jammu", "Amritsar", "Ludhiana", "Chandigarh", "Dehradun", "Delhi NCR", "Gurugram", "Noida", "Jaipur", "Jodhpur", "Udaipur", "Ahmedabad", "Surat", "Vadodara", "Indore", "Bhopal", "Lucknow", "Kanpur", "Varanasi", "Patna", "Ranchi", "Jamshedpur", "Kolkata", "Bhubaneswar", "Raipur", "Nagpur", "Nashik", "Mumbai", "Pune", "Goa", "Hyderabad", "Visakhapatnam", "Vijayawada", "Bengaluru", "Mysuru", "Mangaluru", "Chennai", "Coimbatore", "Madurai", "Kochi", "Thiruvananthapuram", "Guwahati", "Shillong", "Imphal", "Agartala"
];

const vehicles = [
  { company: "TATA", model: "Nexon EV", battery: 40.5, range: 465, connectors: ["CCS2", "Type 2"], maxOutput: 50, behavior: "Prefer 20-80% DC fast charging for battery longevity." },
  { company: "TATA", model: "Tiago EV", battery: 24, range: 315, connectors: ["CCS2", "Type 2"], maxOutput: 25, behavior: "Use AC overnight; DC is best for quick city top-ups." },
  { company: "Mahindra", model: "XUV400", battery: 39.4, range: 456, connectors: ["CCS2", "Type 2"], maxOutput: 50, behavior: "Plan highway stops at CCS2 chargers above 50 kW." },
  { company: "MG", model: "ZS EV", battery: 50.3, range: 461, connectors: ["CCS2", "Type 2"], maxOutput: 75, behavior: "Use high-output CCS2 stations when range urgency is high." },
  { company: "BYD", model: "Atto 3", battery: 60.48, range: 521, connectors: ["CCS2", "Type 2"], maxOutput: 80, behavior: "Best paired with 60-120 kW DC chargers on intercity routes." },
  { company: "Hyundai", model: "Kona Electric", battery: 39.2, range: 452, connectors: ["CCS2", "Type 2"], maxOutput: 50, behavior: "Avoid repeated 100% fast charging unless starting a long trip." },
  { company: "Suzuki", model: "eVX-ready profile", battery: 60, range: 500, connectors: ["CCS2", "Type 2"], maxOutput: 75, behavior: "Use CCS2 route chargers and keep daily charging below 90%." },
];

const cityFilter = document.querySelector("#cityFilter");
const connectorFilter = document.querySelector("#connectorFilter");
const stationList = document.querySelector("#stationList");
const carModel = document.querySelector("#carModel");
const form = document.querySelector("#plannerForm");
const recommendation = document.querySelector("#recommendation");
const quickTip = document.querySelector("#quick-tip");

function unique(values) {
  return [...new Set(values.flat())].sort();
function unique(values) { return [...new Set(values.flat())].sort(); }

function cityToPosition(city) {
  const station = stations.find((item) => item.city === city);
  const lat = station?.lat ?? 8 + ((city.charCodeAt(0) * 1.7) % 28);
  const lng = station?.lng ?? 68 + ((city.charCodeAt(city.length - 1) * 2.1) % 29);
  return { left: `${((lng - 68) / 29) * 100}%`, top: `${100 - ((lat - 8) / 29) * 100}%` };
}

function populateFilters() {
  cityFilter.innerHTML = ["All India", ...unique(stations.map((station) => [station.city]))]
    .map((city) => `<option value="${city}">${city}</option>`)
    .join("");
  connectorFilter.innerHTML = ["All connectors", ...unique(stations.map((station) => station.connectors))]
    .map((connector) => `<option value="${connector}">${connector}</option>`)
    .join("");
  carModel.innerHTML = vehicles
    .map((vehicle, index) => `<option value="${index}">${vehicle.company} ${vehicle.model}</option>`)
    .join("");
  cityFilter.innerHTML = ["All India", ...unique(coveredCities.map((city) => [city]))].map((city) => `<option value="${city}">${city}</option>`).join("");
  connectorFilter.innerHTML = ["All connectors", ...unique(stations.map((station) => station.connectors))].map((connector) => `<option value="${connector}">${connector}</option>`).join("");
  carModel.innerHTML = vehicles.map((vehicle, index) => `<option value="${index}">${vehicle.company} ${vehicle.model}</option>`).join("");
}

function filteredStations() {
  const city = cityFilter.value;
  const connector = connectorFilter.value;
  return stations.filter((station) => {
    const cityMatch = city === "All India" || station.city === city;
    const connectorMatch = connector === "All connectors" || station.connectors.includes(connector);
    return cityMatch && connectorMatch;
  });
}

function renderIndiaMap() {
  const selectedCity = cityFilter.value;
  const activeCities = new Set(filteredStations().map((station) => station.city));
  document.querySelector("#mapPins").innerHTML = coveredCities.map((city) => {
    const hasStation = activeCities.has(city);
    const selected = selectedCity === city;
    const position = cityToPosition(city);
    return `<button class="map-pin ${hasStation ? "has-station" : "city-only"} ${selected ? "selected" : ""}" style="left:${position.left};top:${position.top}" data-city="${city}" title="${city}${hasStation ? " charging + food hub" : " city coverage"}"><span></span>${city}</button>`;
  }).join("");
}

function renderStations() {
  const items = filteredStations();
  renderIndiaMap();
  stationList.innerHTML = items.map((station) => `
    <article class="station">
      <strong>${station.name}</strong>
      <div class="meta">
        <span>📍 ${station.city}</span>
        <span>📍 ${station.city}, ${station.state}</span>
        <span>⚡ ${station.output} kW output • ₹${station.price}/kWh</span>
        <span>🔌 ${station.connectors.join(", ")}</span>
        <span>🍽️ ${station.foodHubs.join(" • ")}</span>
        <span>🧰 ${station.amenities.join(" • ")}</span>
        <span>🍽️ Nearby food hubs: ${station.foodHubs.join(" • ")}</span>
      </div>
    </article>
  `).join("") || "<p>No matching stations found.</p>";
  `).join("") || `<p>No live station card yet for ${cityFilter.value}. City is still highlighted on the India map; try All India for available stations.</p>`;
}

function scoreStation(station, vehicle, requiredKwh) {
  const compatible = station.connectors.some((connector) => vehicle.connectors.includes(connector));
  const outputFit = Math.min(station.output, vehicle.maxOutput);
  const timeHours = requiredKwh / Math.max(outputFit, 1);
  const cost = requiredKwh * station.price;
  return { station, compatible, outputFit, timeHours, cost, score: (compatible ? 100 : 0) + outputFit - station.price };
}

function planCharge(event) {
  event.preventDefault();
  const vehicle = vehicles[Number(carModel.value)];
  const batteryLevel = Number(document.querySelector("#batteryLevel").value);
  const batteryHealth = Number(document.querySelector("#batteryHealth").value);
  const desiredRange = Number(document.querySelector("#desiredRange").value);
  const effectiveBattery = vehicle.battery * (batteryHealth / 100);
  const usableKwhNow = effectiveBattery * (batteryLevel / 100);
  const kwhPerKm = effectiveBattery / vehicle.range;
  const requiredKwh = Math.max(desiredRange * kwhPerKm - usableKwhNow, 0);
  const candidates = filteredStations().map((station) => scoreStation(station, vehicle, requiredKwh)).sort((a, b) => b.score - a.score);
  const best = candidates[0];
  const healthWarning = batteryHealth < 80 ? " Battery health is below 80%, so prefer slower charging and schedule a service check." : "";

  if (!best || !best.compatible) {
    recommendation.className = "recommendation warning";
    recommendation.innerHTML = `<strong>No compatible filtered station found.</strong><p>Try All India or CCS2/Type 2 filters for ${vehicle.company} ${vehicle.model}.${healthWarning}</p>`;
    return;
  }

  recommendation.className = "recommendation";
  recommendation.innerHTML = `
    <strong>Best match: ${best.station.name}</strong>
    <p>${vehicle.company} ${vehicle.model} needs about <b>${requiredKwh.toFixed(1)} kWh</b> for ${desiredRange} km considering ${batteryHealth}% battery health.</p>
    <p>Estimated cost: <b>₹${best.cost.toFixed(0)}</b> • Charging time: <b>${Math.ceil(best.timeHours * 60)} minutes</b> at ${best.outputFit} kW usable output.</p>
    <p>Food hubs nearby: ${best.station.foodHubs.join(", ")}.${healthWarning}</p>
    <p>Food hubs nearby: ${best.station.foodHubs.join(", ")}. Amenities: ${best.station.amenities.join(", ")}.${healthWarning}</p>
  `;
  quickTip.textContent = `${best.station.name} is recommended for your ${vehicle.company} ${vehicle.model}.`;
}

function renderCompatibility() {
  document.querySelector("#compatibilityRows").innerHTML = vehicles.map((vehicle) => `
    <tr>
      <td><strong>${vehicle.company}</strong><br>${vehicle.model}</td>
      <td>${vehicle.battery} kWh</td>
      <td>${vehicle.connectors.join(", ")}</td>
      <td>Up to ${vehicle.maxOutput} kW</td>
      <td>${vehicle.behavior}</td>
    </tr>
    <tr><td><strong>${vehicle.company}</strong><br>${vehicle.model}</td><td>${vehicle.battery} kWh</td><td>${vehicle.connectors.join(", ")}</td><td>Up to ${vehicle.maxOutput} kW</td><td>${vehicle.behavior}</td></tr>
  `).join("");
}

function initGoogleMap() {
  if (!GOOGLE_MAPS_API_KEY) return;
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=renderGoogleMap`;
  script.async = true;
  document.head.appendChild(script);
}

window.renderGoogleMap = function renderGoogleMap() {
  const map = new google.maps.Map(document.querySelector("#map"), {
    center: { lat: 22.9734, lng: 78.6569 },
    zoom: 5,
  });
  const map = new google.maps.Map(document.querySelector("#map"), { center: { lat: 22.9734, lng: 78.6569 }, zoom: 5, restriction: { latLngBounds: { north: 37.6, south: 6.4, west: 68.1, east: 97.4 } } });
  stations.forEach((station) => {
    const marker = new google.maps.Marker({ position: { lat: station.lat, lng: station.lng }, map, title: station.name });
    const info = new google.maps.InfoWindow({
      content: `<strong>${station.name}</strong><br>₹${station.price}/kWh • ${station.output} kW<br>${station.foodHubs.join(", ")}`,
    });
    const info = new google.maps.InfoWindow({ content: `<strong>${station.name}</strong><br>${station.city}, ${station.state}<br>₹${station.price}/kWh • ${station.output} kW<br>Plugs: ${station.connectors.join(", ")}<br>Food: ${station.foodHubs.join(", ")}` });
    marker.addListener("click", () => info.open({ anchor: marker, map }));
  });
};

populateFilters();
renderStations();
renderCompatibility();
form.addEventListener("submit", planCharge);
cityFilter.addEventListener("change", renderStations);
connectorFilter.addEventListener("change", renderStations);
document.querySelector("#mapPins").addEventListener("click", (event) => {
  const pin = event.target.closest(".map-pin");
  if (!pin) return;
  cityFilter.value = pin.dataset.city;
  renderStations();
});
initGoogleMap();
