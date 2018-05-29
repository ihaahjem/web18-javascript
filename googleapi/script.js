

var gMarkers = [];
var markers = [

//
//Skole markører
//
    ['Campus Fjerdingen', 59.916224, 10.759697, 0, 'school', 'sirkelmarker.png', 'http://facebook.com', '/infovindu-bilder/hk.jpg'],
    ['Campus Vulkan', 59.9233391, 10.7503081, 1, 'school', 'sirkelmarker.png', 'http://facebook.com', '/infovindu-bilder/hk.jpg'],
    ['Campus Brenneriveien', 59.920352, 10.7506041, 2, 'school', 'sirkelmarker.png', 'http://facebook.com', '/infovindu-bilder/hk.jpg'],
    ['Campus Kvadraturen', 59.911015, 10.7439543, 3, 'school', 'sirkelmarker.png', 'http://facebook.com', '/infovindu-bilder/hk.jpg'],
//
//Spisested markører
//
    ['Talor og Jørgen', 59.9149799, 10.7504415, 4, 'food', 'food-marker.png', 'http://facebook.com', '/infovindu-bilder/t&j.jpg'],
    ['Mathallen', 59.922217, 10.749852, 5, 'food', 'food-marker.png', 'http://facebook.com', '/infovindu-bilder/t&j.jpg'],
    ['Taco República', 59.9170294, 10.7509215, 6, 'food', 'food-marker.png', 'http://facebook.com', '/infovindu-bilder/taco-republica.jpg'],
    ['Freddy Fuego', 59.9178054, 10.7515039, 7, 'food', 'food-marker.png', 'http://facebook.com', '/infovindu-bilder/t&j.jpg'],
    ['Peloton', 59.9174132, 10.7522924, 8, 'food', 'food-marker.png', 'http://facebook.com', '/infovindu-bilder/peloton.jpg'],
    ['Munchies', 59.91638, 10.7490935, 9, 'food', 'food-marker.png', 'http://facebook.com', '/infovindu-bilder/munchies.jpg'],
    ['Haralds Vaffler', 59.913759, 10.745212, 10, 'food', 'food-marker.png', 'http://facebook.com', '/infovindu-bilder/vafler.jpg'],
    ['Würst', 59.9137012, 10.7465163, 11, 'food', 'food-marker.png', 'http://facebook.com', '/infovindu-bilder/wurst.jpg'],
    ['Bari Pizza', 59.9166197, 10.7527744, 12, 'food', 'food-marker.png', 'http://facebook.com', '/infovindu-bilder/bari-pizza.jpg'],
//
//Bar/utested markører
//
    ['Cafe Sara', 59.9176068, 10.754149, 13, 'bar', 'bar-marker.png', 'http://facebook.com', '/infovindu-bilder/cafe-sara.jpg'],
    ['Verkstedet', 59.9177192, 10.7517947, 14, 'bar', 'bar-marker.png', 'http://dogs.com', '/infovindu-bilder/verkstedet.jpg'],
    ['Cafe Sør', 59.9141846, 10.7461596, 15, 'bar', 'bar-marker.png', 'http://dogs.com', '/infovindu-bilder/cafe-&-sor.jpg'],
    ['Crow bar', 59.9171999, 10.7512208, 16, 'bar', 'bar-marker.png', 'http://dogs.com', '/infovindu-bilder/crow.jpg'],
    ['Tilt', 59.9162015, 10.7485173, 17, 'bar', 'bar-marker.png', 'http://dogs.com', '/infovindu-bilder/tilt.jpg'],
    ['Angst', 59.9139828, 10.7465088, 18, 'bar', 'bar-marker.png', 'http://dogs.com', '/infovindu-bilder/angst.jpg'],
    ['Peretroska', 59.9135765, 10.7470165, 19, 'bar', 'bar-marker.png', 'http://dogs.com', '/infovindu-bilder/peretroika.jpg'],
    ['Kniven', 59.9163927, 10.7490339, 20, 'bar', 'bar-marker.png', 'http://dogs.com', '/infovindu-bilder/kniven.jpg'],
    ['Oslo Bar & Bowling', 59.9158823, 10.7485441, 21, 'bar', 'bar-marker.png', 'http://dogs.com', '/infovindu-bilder/bar-&-bowling.jpg'],
    ['Kulturhuset', 59.9146546, 10.7486177, 22, 'bar', 'bar-marker.png', 'http://dogs.com', '/infovindu-bilder/kulturhuset.jpg'],
//
//Treningssentre
//
    ['Actic Storgata', 59.91618200000001, 10.757546, 23, 'gym', 'gym-marker.png', 'http://dogs.com', '/infovindu-bilder/t&j.jpg'],
    ['Haralds Gym', 59.9157868, 10.7587026, 24, 'gym', 'gym-marker.png', 'http://dogs.com', '/infovindu-bilder/t&j.jpg'],
    ['SATS Schous plass', 59.9188379, 10.7603446, 25, 'gym', 'gym-marker.png', 'http://dogs.com', '/infovindu-bilder/t&j.jpg'],
    ['EVO Grünerløkka', 59.9199906, 10.7598709, 26, 'gym', 'gym-marker.png', 'http://dogs.com', '/infovindu-bilder/t&j.jpg'],
    ['SATS Spektrum', 59.9128297, 10.7549285, 27, 'gym', 'gym-marker.png', 'http://dogs.com', '/infovindu-bilder/t&j.jpg'],
    ['Gymmen', 59.9170116, 10.7587169, 28, 'gym', 'gym-marker.png', 'http://dogs.com', '/infovindu-bilder/t&j.jpg'],
    ['Lofoten Performance', 59.91722379999998, 10.7561713, 29, 'gym', 'gym-marker.png', 'http://dogs.com', '/infovindu-bilder/t&j.jpg'],
    ['SiO Athletica Vukan', 59.9231517, 10.7500041, 30, 'gym', 'gym-marker.png', 'http://dogs.com', '/infovindu-bilder/t&j.jpg'],
    ['SiO Athletica Centrum', 59.9186627, 10.731186, 31, 'gym', 'gym-marker.png', 'http://dogs.com', '/infovindu-bilder/t&j.jpg'],
    ['24Fitness AS', 59.91266, 10.743449, 32, 'gym', 'gym-marker.png', 'http://dogs.com', '/infovindu-bilder/t&j.jpg'],
    ['Fitness24Seven', 59.9138303, 10.7455569, 33, 'gym', 'gym-marker.png', 'http://dogs.com', '/infovindu-bilder/t&j.jpg'],
    ['SATS Akersgata', 59.914745, 10.7432694, 34, 'gym', 'gym-marker.png', 'http://dogs.com', '/infovindu-bilder/t&j.jpg'],
    ['Fresh Fitness St Hanshaugen', 59.925468, 10.7454316, 35, 'gym', 'gym-marker.png', 'http://dogs.com', '/infovindu-bilder/t&j.jpg']


];
var bysykkelMarkers = [];
var center = {
    lat: 0,
    lng: 0
};
var options = {
    zoom:15,
    maxZoom : 17,
    minZoom: 13,
    center: {
        lat: center.lat,
        lng: center.lng
    },
    styles:[
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "saturation": "0"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#55646c"
                },
                {
                    "weight": "2.39"
                }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#767e89"
                },
                {
                    "weight": "2.90"
                },
                {
                    "gamma": "4.29"
                }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#6f8189"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#7e92a3"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#8896a7"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#cfdce2"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#76909b"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "landscape.natural.landcover",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#8194ab"
                }
            ]
        },
        {
            "featureType": "landscape.natural.terrain",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#6c8795"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.medical",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#a7b7c0"
                }
            ]
        },
        {
            "featureType": "poi.medical",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#a9b3bc"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#c9d4da"
                }
            ]
        },
        {
            "featureType": "poi.place_of_worship",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#a0b2ba"
                }
            ]
        },
        {
            "featureType": "poi.place_of_worship",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#bbc4ca"
                }
            ]
        },
        {
            "featureType": "poi.school",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#c2cad2"
                }
            ]
        },
        {
            "featureType": "poi.school",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#b9c8d0"
                }
            ]
        },
        {
            "featureType": "poi.sports_complex",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#bbcace"
                }
            ]
        },
        {
            "featureType": "poi.sports_complex",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#c2ccd2"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit.station.bus",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#73959d"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#9aadb5"
                },
                {
                    "visibility": "on"
                }
            ]
        }

    ],
    gestureHandling: 'greedy',
    zoomControl: true

};
var map;
var infowindow = new google.maps.InfoWindow();
var icon;
var userPosition;

//bysykkel
var stations = [];
var availability = [];
var availabilityInterval;

//directions
var directionsDisplay = new google.maps.DirectionsRenderer;
var directionsService = new google.maps.DirectionsService;
var travelModes = {
    bike : 'BICYCLING',
    walk : 'WALKING',
    drive : 'DRIVING',
    transit : 'TRANSIT'
};


function filterMarkers(category)    {
    var categories = $(".chk-btn").toArray().filter(function(elm){
        return elm.checked
    }).map(function (value) {
        return value.id
    });
        for(i = 0; i < markers.length; i++){
            var marker = gMarkers[i];
            category = markers[i][4];

           if(categories.includes(category)){
                marker.setVisible(true);
            }
            else{
                marker.setVisible(false);
            }

        }
    };

window.onload = function () {
    map = new google.maps.Map(document.getElementById('map'), options);
    initMap();
};

$(".chk-btn").on('change', filterMarkers)

function initMap() {
    findUserPosition();
    findCenter();
    initMarkers();
    initDirections();
    bysykkelImportStations();
    bysykkelLoadAvailability();
    bysykkelStationsWithAvailability();
    initBysykkelMarkers();
}

function findCenter() {
    for (var i = 0; i < markers.length; i++) {
        center.lat += markers[i][1];
        center.lng += markers[i][2];
    }
    center.lng = center.lng / 4;
    center.lat = center.lat / 4;
}

function initMarkers() {

    for(var i = 0; i < markers.length; i++){
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(markers[i][1], markers[i][2]),
            map: map,
            icon: icon = {
                scaledSize: new google.maps.Size(30, 30),
                url: markers[i][5]
            },
        });

        marker.setVisible(false);
        google.maps.event.addListener(marker, 'mouseover', (function(marker, i){

        var infoWindowContent = ('<img id="infoImg" src=markers[i][7]>' + '<div id ="windowBtns"' +
            '<button id="bike-btn" class="windowBtnClass" onclick="findDirectionsFromButton('+ i +', travelModes.bike)">Sykle</button>' +
            '<button id="walk-btn" onclick="findDirectionsFromButton('+ i +', travelModes.walk)">Gå</button>' +
            '<button id="drive-btn" onclick="findDirectionsFromButton('+ i +', travelModes.drive)">Miljøsvin</button>' +
            '<button id="transit-btn" onclick="findDirectionsFromButton('+ i +', travelModes.transit)">Offentlig transport</button>' +
            '<button id="info-btn" onclick="infoLink(' + i + ')">More info</button>' + '</div>');

            return function() {
                infowindow.setContent(infoWindowContent);
                infowindow.open(map, marker);
            }
        })(marker, i))

        google.maps.event.addListener(map, 'click', (function(marker, i){
            return function() {
                infowindow.close(map, marker);
            }
        })(marker, i))
        gMarkers[i] = marker
    }
}

function initBysykkelMarkers() {
    this.bysykkelMarkers.forEach(marker => {
        marker.setMap(null);
    });
    this.bysykkelMarkers = availability.forEach(s =>{
        return new google.maps.Marker({
            position: {
                lat: s.latitude,
                lng: s.longitude
            },
            icon: MapIconGenerator(s.bikes),
            map: this.map,
        })
    })
}

function findUserPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var infoWindow = new google.maps.Marker(
                {
                    position: pos,
                    map: this.map,
                    title: "Her er du"
                }
            );
            this.map.setCenter(pos);
            userPosition = pos;
        })
    }
}

function initDirections() {
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('right-panel'));

    document.getElementById('mode').addEventListener('change', function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    });
}

function findDirectionsFromButton(i, travelMode) {
    console.log(markers[i]);
    //var destination = new google.maps.LatLng(marker[1], marker[2]);
    var directionRequest = {
        origin: userPosition,
        destination: {
            lat: markers[i][1],
            lng: markers[i][2]
        },
        travelMode: travelMode
    };
    directionsService.route(directionRequest,
        function(response, status) {
            if (status == 'OK') {
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var selectedMode = document.getElementById('mode').value;
    directionsService.route({
        origin : userPosition,
        destination: {lat: 59.9233391, lng: 10.7503081},
        travelMode: google.maps.TravelMode[selectedMode]
    }, function(response, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

function infoLink(markerNumber){
    console.log(markerNumber);

    for(var i = 0; i < markers.length; i++){
        if(markerNumber === markers[i][3]){
            window.location.replace(markers[i][6]);
        }
    }
}

//Bysykkel
function bysykkelImportStations() {
    axios.get('http://188.166.72.34:8080/stations')
        .then(response => {
            stations = response.data;
        })
        .catch(e => {
            this.errors.push(e);
        });
    availabilityInterval = setInterval(() => {
            bysykkelLoadAvailability()
        },
        6000);

}

function bysykkelLoadAvailability() {
    axios.get('http://188.166.72.34:8080/stations/availability/')
        .then(response => {
            availability = response.data.reduce((result, item) => {
                result[item.id] = item;
                return result;
            }, {});
        })
        .catch(e => {
            this.errors.push(e);
        });
}

function bysykkelStationsWithAvailability() {
    return stations.map(station => {
        console.log(station);
        return {...station, availability: availability[station.id]}
    })
}








