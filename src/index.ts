import { MarkerWrapper } from './classes/MarkerWrapper'
import { Person } from './classes/Person';
import { faker } from "@faker-js/faker";


// new marker object
const persone1 = new Person('Luigi', 'Di Nardo', '18/01/2003')
const marker = new MarkerWrapper(persone1, faker.location.latitude(), faker.location.longitude());
console.log(marker);

// create markers on map
import { CustomMap } from "./classes/CustomMap";
const customMap = new CustomMap('map');
customMap.addMarker(marker);
