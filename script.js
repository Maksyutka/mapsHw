const mymap = L.map('mapid').setView([46.52795, 32.528148], 14);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFrc3l1dGthIiwiYSI6ImNrbWY0NDNjOTBuZW4ybnBwam5waDc4NzkifQ.GoeD0B7FqGFLeK25M_9oXw'
}).addTo(mymap);

mymap.on('click', onMapClick);

function onMapClick(e) {
    console.log("You clicked the map at " + e.latlng);
}

const firstMarker = L.marker([46.534834, 32.534127]).addTo(mymap);
firstMarker.bindPopup("<b>Это кольца!</b><br>Тут мы пьем пиво с пацанами").openPopup();

const secondMarker = L.marker([46.535808, 32.535501]).addTo(mymap);
secondMarker.bindPopup("<b>Это стройка!</b><br>Тут мы взрывали петарды на перерывах").openPopup();

const thirdMarker = L.marker([46.532937, 32.526448]).addTo(mymap);
thirdMarker.bindPopup("<b>Это табачка!</b><br>Тут детям продают пиво").openPopup();

firstMarker.on('click', onFirstMarkerClick);

function onFirstMarkerClick(e) {
    alert("Ссылок на это место в интернете нет");
}

secondMarker.on('click', onSecondMarkerClick);

function onSecondMarkerClick(e) {
    alert("Ссылок на это место в интернете нет");
}

thirdMarker.on('click', onThirdMarkerClick);

function onThirdMarkerClick(e) {
    alert("Ссылок на это место в интернете нет");
}



