mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2am9lLW1lZGlhIiwiYSI6ImNrYm5qZW1rejFzeTMyc3F2aHkwOHJsZmIifQ.8vipNmBxsg9Afq_bFkY8BA';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
center: [ 0.107379, 5.722018], // starting position [lng, lat]
zoom: 9 // starting zoom
});

var marker = new mapboxgl.Marker()
.setLngLat([ 0.107379, 5.722018])
.addTo(map);