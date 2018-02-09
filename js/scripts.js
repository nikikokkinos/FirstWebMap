var defaultCenter = [40.811990,-73.921208];
var defaultZoom = 14;

var map = L.map('my-map').setView(defaultCenter, defaultZoom);

L.tileLayer('//b.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
