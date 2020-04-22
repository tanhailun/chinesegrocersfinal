console. log ("use strict")
console. log ("Loaded map.js")
mapboxgl.accessToken = "pk.eyJ1IjoidGFuaGFpbHVuIiwiYSI6ImNrN3h5NDVjcDAweGYzbG83YTdvcjhjYmIifQ.CMP3ZyJYJOCVhum1Mu3vmw"
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [-91.05450, 33.40133],
    zoom: 13,
    pitch: 0.00,
    bearing: 34.40
})
let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})
map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})
map.addControl(geolocate, 'top-left')

geolocate.on('geolocate', function(event) {
	let lng = event.coords.longitude
    let lat = event.coords.latitude
    console.log('geolocated:', lng, lat)
     document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)
})
 map.on('click', function(event) {

    let lng = event.lngLat.lng
    let lat = event.lngLat.lat

    console.log("clicked:", lng, lat)

    document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)

})
let marker = new mapboxgl.Marker()
marker.setLngLat([-91.06336, 33.41344])

marker.addTo(map)

let popup = new mapboxgl.Popup()
popup.setHTML('200 Washington Ave in Greenville, MS. Joe Gow Nue - chain migration of Joe family to open second location (refer to page 64 of Jung) <br /><img src="https://i.redd.it/cb69rpwselk31.jpg" />')
marker.setPopup(popup)

let data = [
    {
        location: [-91.05505, 33.41444],
        content: 'Joe Gow Nue #2 second store'
    },
    {
        location: [-91.06148, 33.40924],
        content: 'Chinese Baptist Church'
    },
    {
        location: [-91.06088, 33.41424],
        content: 'Commercial national bank'
    },
    ]
    data.forEach(function(d) {

    let marker = new mapboxgl.Marker()    
    marker.setLngLat(d.location)
    marker.addTo(map)  

    let popup = new mapboxgl.Popup()
    popup.setHTML(d.content)
    marker.setPopup(popup)

})