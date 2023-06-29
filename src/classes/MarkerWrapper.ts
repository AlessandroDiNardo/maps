import { Person } from "./Person";

export class MarkerWrapper {
    private marker: google.maps.Marker;
    private person: Person;
    private lat: number;
    private lng: number;

    constructor(person: Person, lat: number, lng: number) {
        this.person = person;
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
                <strong>Nome: </strong>${this.person.name}<br>
                <strong>Cognome: </strong>${this.person.surname}<br>
                <strong>Data di nascita: </strong>${this.person.birthdate}
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
