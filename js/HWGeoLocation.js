function myLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(myPosition);
    } else {

        alert('GeoLocation is NOT supported ');
    }

}
function myPosition(position) {
    var location = {
        lat: 43.0718,
        lng: 12.6135
        //TESTING DIFFERENT COORDINATES LOCATIONA - ITALY
    };

    //map
    var map = new google.maps.Map(
        document.getElementById('map'),
        { zoom: 20, center: location }

    );

    //marker
    var marker = new google.maps.Marker(
        {
            position: location,
            map: map
        }

    )
}
