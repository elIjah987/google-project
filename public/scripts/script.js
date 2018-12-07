const mapURL = `https://maps.googleapis.com/maps/api/js?key=${googleMapsKey}&callback=initMap`;



$(document).ready(function () {
    $('#showMap').click(function () {
        let user = gapi.auth2.getAuthInstance().currentUser.get();
        let oauthToken = user.getAuthResponse().access_token;
        let xhr = new XMLHttpRequest();
        xhr.open('GET',
            'https://people.googleapis.com/v1/people/me/connections' +
            '?access_token=' + encodeURIComponent(oauthToken));
        xhr.send();

        $.ajax({
            url: mapURL,
            type: "GET",

            success: function (result) {
                function initMap() {
                    map = new google.maps.Map(document.getElementById('map'), {
                        center: { lat: -34.397, lng: 150.644 },
                        zoom: 8
                    });
                }
            },
            error: function (error) {
                console.log(`Error ${error}`)
            }
        })
    })



})