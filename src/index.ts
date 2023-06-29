import { MarkerWrapper } from './classes/MarkerWrapper'
import { faker } from "@faker-js/faker";


// new marker object
const marker = new MarkerWrapper('bello', faker.location.latitude(), faker.location.longitude());
const marker1 = new MarkerWrapper('bello1', faker.location.latitude(), faker.location.longitude());
const marker2 = new MarkerWrapper('bello2', faker.location.latitude(), faker.location.longitude());
console.log(marker);

// create markers on map
import { CustomMap } from "./classes/CustomMap";
const customMap = new CustomMap('map');
customMap.addMarker(marker);
customMap.addMarker(marker1);
customMap.addMarker(marker2);
