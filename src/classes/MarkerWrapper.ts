export class MarkerWrapper {
    private marker: google.maps.Marker;
    private title: string;
    private lat: number;
    private lng: number;

    constructor(title: string, lat: number, lng: number) {
        this.title = title;
        this.lat = lat;
        this.lng = lng;

        this.marker = new google.maps.Marker({
            position: {
                lat: this.lat,
                lng: this.lng
            }
        });
    }

    buildMarker(): google.maps.Marker {
        return this.marker;
    }

    addToolTip(googleMap: google.maps.Map) {
        let infowindow = new google.maps.InfoWindow({
            content: `
            <div>
                <strong>Nome:</strong>Carmelo<br>
                <strong>Cognome:</strong>Petrella<br>
                <strong>Data di nascita:</strong>07/09/1983
            </div>
        `
        });

        google.maps.event.addListener(this.marker, 'mouseover', function () {
            console.log('dadad');
            infowindow.open(googleMap, this);
        });

        google.maps.event.addListener(this.marker, 'mouseout', function () {
            infowindow.close();
        });
    }
}
