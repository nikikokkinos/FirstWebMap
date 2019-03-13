var defaultCenter = [40.811990,-73.921208];
var defaultZoom = 14;

var map = L.map('my-map').setView(defaultCenter, defaultZoom);

L.tileLayer('//b.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Inputting Excel Data

var buildingdata = [
  {
    address: '459 EAST 149 STREET',
    buildingtype: 'Commercial',
    yearbuilt: '2015',
    residentialarea: '0',
    officearea: '41,858',
    lat: 40.825666,
    lon: -73.921505,
  },

  {
    address: '473 WILLIS AVENUE',
    buildingtype: "Mixed Use",
    yearbuilt: '2012',
    residentialarea: '2,233',
    officearea: '2,577',
    lat: 40.816333,
    lon: -73.917325,
  },

  {
    address: '820 CONCOURSE VILLAGE W',
    buildingtype: "Commercial",
    yearbuilt: '2011',
    residentialarea: '0',
    officearea: '75,352',
    lat: 40.825634,
    lon: -73.921133,
  },

  {
    address: '151 EAST 151 STREET',
    buildingtype: "Commercial",
    yearbuilt: '2008',
    residentialarea: '0',
    officearea: '76,743',
    lat: 40.821867,
    lon:  -73.927308,
  },

  {
    address: '3054 3rd AVENUE',
    buildingtype: "Mixed Use",
    yearbuilt: '2007',
    residentialarea: '2,596',
    officearea: '1,298',
    lat: 40.820664,
    lon: -73.912168,
  },

  {
    address: '432 EAST 149 STREET',
    buildingtype: "Commercial",
    yearbuilt: '2006',
    residentialarea: '0',
    officearea: '6,903',
    lat: 40.815355,
    lon: -73.915777,
  },

  {
    address: '3006 3rd AVENUE',
    buildingtype: "Commercial",
    yearbuilt: '2006',
    residentialarea: '0',
    officearea: '70,615',
    lat: 40.819355,
    lon:  -73.912689,
  },

  {
    address: '125 ST ANNS AVENUE',
    buildingtype: "Commercial",
    yearbuilt: '2003',
    residentialarea: '0',
    officearea: '5,000',
    lat: 40.804004,
    lon: -73.919192,
  },

  {
    address: '450 EAST 144 STREET',
    buildingtype: "Mixed Use",
    yearbuilt: '2003',
    residentialarea: '19,662',
    officearea: '5,000',
    lat: 40.812281,
    lon: -73.918203,
  },

  {
    address: '496 BERGEN AVENUE',
    buildingtype: "Commercial",
    yearbuilt: '2002',
    residentialarea: '0',
    officearea: '14,550',
    lat: 40.814953,
    lon: -73.917521,
  },

  {
    address: '350 GRAND CONCOURSE',
    buildingtype: "Commercial",
    yearbuilt: '2002',
    residentialarea: '0',
    officearea: '128',
    lat: 40.815845,
    lon: -73.926841,
  },

  {
    address: '270 WALTON AVENUE',
    buildingtype: "Commercial",
    yearbuilt: '2002',
    residentialarea: '0',
    officearea: '1,800',
    lat: 40.814490,
    lon: -73.929024,
  },

  {
    address: '224 EAST 163 STREET',
    buildingtype: "Commercial",
    yearbuilt: '2002',
    residentialarea: '0',
    officearea: '46,255',
    lat: 40.827637,
    lon: -73.918071,
  },

  {
    address: '411 EAST 163 STREET',
    buildingtype: "Commercial",
    yearbuilt: '2001',
    residentialarea: '0',
    officearea: '2,000',
    lat: 40.825800,
    lon:  -73.911893,
  },

  {
    address: '200 EAST 135 STREET',
    buildingtype: "Commercial",
    yearbuilt: '2000',
    residentialarea: '0',
    officearea: '2,500',
    lat: 40.809649,
    lon: -73.931099,
  },

  {
    address: '3103 3rd AVENUE',
    buildingtype: "Mixed Use",
    yearbuilt: '2000',
    residentialarea: '66,155',
    officearea: '6,050',
    lat: 40.82200,
    lon: -73.911897,
  },
]

// create an empty markers array that we can fill with markers
var markersArray = [];

// how to add a marker for each object in the array

buildingdata.forEach(function(buildingObject) {
  var latLon = [buildingObject.lat, buildingObject.lon];

  var buildingtypeColor = '#FFF';

  if (buildingObject.buildingtype === 'Commercial') buildingtypeColor = 'red';
  if (buildingObject.buildingtype === 'Mixed Use') buildingtypeColor = 'orange';

  var options = {
    radius: 10,
    opacity: 1,
    fillColor: buildingtypeColor,
    fillOpacity: 0.5,
    color: '#FFF',
    weight: .05,
  };

  var marker = L.circleMarker(latLon, options)
      .bindPopup(buildingObject.address + ' Built in ' +  buildingObject.yearbuilt, {offset: [0, -6]})
      .addTo(map)
  // add the marker to the markersArray
  markersArray.push(marker);
});

$('.fly-to-random').click(function(e) {
  var randomMarker = markersArray[Math.floor(Math.random() * markersArray.length)];
  map.setView(randomMarker._latlng);
  randomMarker.openPopup();
  e.stopPropagation();
});

$('.reset').click(function() {
  map.flyTo(defaultCenter, defaultZoom)
});
