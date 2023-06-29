import { MarkerWrapper } from "./MarkerWrapper";

export class CustomMap {

    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId)! as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(marker: MarkerWrapper) {
        marker.buildMarker().setMap(this.googleMap);
        marker.addToolTip(this.googleMap);
    }
}