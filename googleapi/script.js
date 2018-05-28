

var gMarkers = [];
var markers = [

//
//Skole markører
//
    ['Campus Fjerdingen', 59.916224, 10.759697, 1, 'school', 'sirkelmarker.png'],
    ['Campus Vulkan', 59.9233391, 10.7503081, 2, 'school', 'sirkelmarker.png'],
    ['Campus Brenneriveien', 59.920352, 10.7506041, 3, 'school', 'sirkelmarker.png'],
    ['Campus Kvadraturen', 59.911015, 10.7439543, 4, 'school', 'sirkelmarker.png'],
//
//Spisested markører
//
    ['Talor og Jørgen', 59.9149799, 10.7504415, 5, 'food', 'food-marker.png'],
    ['Mathallen', 59.922217, 10.749852, 6, 'food', 'food-marker.png'],
    ['Taco República', 59.9170294, 10.7509215, 7, 'food', 'food-marker.png'],
    ['Freddy Fuego', 59.9178054, 10.7515039, 8, 'food', 'food-marker.png'],
    ['Peloton', 59.9174132, 10.7522924, 9, 'food', 'food-marker.png'],
    ['Munchies', 59.91638, 10.7490935, 10, 'food', 'food-marker.png'],
    ['Haralds Vaffler', 59.913759, 10.745212, 11, 'food', 'food-marker.png'],
    ['Würst', 59.9137012, 10.7465163, 12, 'food', 'food-marker.png'],
//
//Bar/utested markører
//
    ['Cafe Sara', 59.9176068, 10.754149, 13, 'bar', 'bar-marker.png'],
    ['Verkstedet', 59.9177192, 10.7517947, 14, 'bar', 'bar-marker.png'],
    ['Cafe Sør', 59.9141846, 10.7461596, 15, 'bar', 'bar-marker.png'],
    ['Crow bar', 59.9171999, 10.7512208, 16, 'bar', 'bar-marker.png'],
    ['Tilt', 59.9162015, 10.7485173, 17, 'bar', 'bar-marker.png'],
    ['Angst', 59.9139828, 10.7465088, 18, 'bar', 'bar-marker.png'],
    ['Peretroska', 59.9135765, 10.7470165, 19, 'bar', 'bar-marker.png'],
    ['Kniven', 59.9163927, 10.7490339, 20, 'bar', 'bar-marker.png'],
    ['Oslo Bar & Bowling', 59.9158823, 10.7485441, 21, 'bar', 'bar-marker.png'],
    ['Kulturhuset', 59.9146546, 10.7486177, 22, 'bar', 'bar-marker.png'],
//
//Treningssentre
//
    ['Actic Storgata', 59.91618200000001, 10.757546, 23, 'gym', 'gym-marker.png'],
    ['Haralds Gym', 59.9157868, 10.7587026, 24, 'gym', 'gym-marker.png'],
    ['SATS Schous plass', 59.9188379, 10.7603446, 25, 'gym', 'gym-marker.png'],
    ['EVO Grünerløkka', 59.9199906, 10.7598709, 26, 'gym', 'gym-marker.png'],
    ['SATS Spektrum', 59.9128297, 10.7549285, 27, 'gym', 'gym-marker.png'],
    ['Gymmen', 59.9170116, 10.7587169, 28, 'gym', 'gym-marker.png'],
    ['Lofoten Performance', 59.91722379999998, 10.7561713, 29, 'gym', 'gym-marker.png'],
    ['SiO Athletica Vukan', 59.9231517, 10.7500041, 28, 'gym', 'gym-marker.png'],
    ['SiO Athletica Centrum', 59.9186627, 10.731186, 29, 'gym', 'gym-marker.png']

];
var center = {
    lat: 0,
    lng: 0
};
var options = {
    zoom:15,
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
var marker, i;
var icon;





function filterMarkers(category)    {
    var categories = $(".chk-btn").toArray().filter(function(elm){
        return elm.checked
    }).map(function (value) {
        return value.id
    })
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
    findCenter();
    initMarkers();
    findUserPosition()
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
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(markers[i][1], markers[i][2]),
            map: map,
            icon: icon = {
                scaledSize: new google.maps.Size(30, 30),
                url: markers[i][5]
            },

        });


        google.maps.event.addListener(marker, 'click', (function(marker, i){
            return function() {
                infowindow.setContent(markers[i][0]);
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
        })
    }
}

