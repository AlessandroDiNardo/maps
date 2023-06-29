import { Delivery } from "./Delivery";
import { Person } from "./Person";
import { Vehicle } from "./Vehicle";

export class MarkerWrapper {
    private marker: google.maps.Marker;
    private delivery: Delivery;
    private lat: number;
    private lng: number;

    constructor(delivery: Delivery, lat: number, lng: number) {
        this.delivery = delivery;
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

        let infowindow;
        let iconObj: any = {};

        if (this.delivery instanceof Person) {
            let personDownCast = this.delivery as Person;
            infowindow = new google.maps.InfoWindow({
                content: `
                <div>
                    <strong>Nome: </strong>${personDownCast.name}<br>
                    <strong>Cognome: </strong> ${personDownCast.surname}<br>
                    <strong>Data di nascita: ${personDownCast.birthdate}</strong>
                </div>
            `
            });

            iconObj = {
                url: (require('../assets/markerPerson.png')),
                fillColor: '#EB00FF',
                scale: 1,
            };

           
        } else {

            let vehicleDownCast = this.delivery as Vehicle;
            infowindow = new google.maps.InfoWindow({
                content: `
                <div>
                    <strong>Modello: </strong>${vehicleDownCast.model}<br>
                    <strong>Cilindrata: </strong> ${vehicleDownCast.cc}<br>
                    <strong>Immatricolazione: ${vehicleDownCast.matriculation}</strong>
                </div>
            `
            });

             iconObj = {
                url: (require('../assets/markerCar.png')),
                fillColor: '#EB00FF',
                scale: 1,
            };

        }

        this.marker.setIcon(iconObj);

        google.maps.event.addListener(this.marker, 'mouseover', function () {
            console.log('dadad');
            infowindow.open(googleMap, this);
        });

        google.maps.event.addListener(this.marker, 'mouseout', function () {
            infowindow.close();
        });
    }
}
