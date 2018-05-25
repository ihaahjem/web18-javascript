
function initMap(){
}

var school = [
    ['Campus Fjerdingen', 59.9161644, 10.7574865, 1],
    ['Campus Vulkan', 59.9233391, 10.7503081, 2],
    ['Campus Brenneriveien', 59.920352, 10.7506041, 3],
    ['Campus Kvadraturen', 59.911015, 10.7439543, 4]
];

var center = {
    lat : 0,
    lng : 0
};

findCenter();

function findCenter () {
    for(let i = 0; i < school.length; i++){
        center.lat += school[i][1];
        center.lng += school[i][2];
    }
    center.lng = center.lng/4;
    center.lat = center.lat/4;
};
S }
            )
            //this.map.setCenter(pos);
        })
    }
}

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

    ]

}

var markers = []
var map;
var icon;
var infowindow;
var marker, i;

window.onload = function () {
    map = new google.maps.Map(document.getElementById('map'), options);
    initMarkers();
    findUsersPosition()
}

infowindow = new google.maps.InfoWindow();
icon = {
    scaledSize: new google.maps.Size(30,30),
    url: 'sirkelmarker.png'
};




