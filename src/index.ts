import { MarkerWrapper } from './classes/MarkerWrapper'
import { Person } from './classes/Person';
import { Veichle } from './classes/Veichle';
import { faker } from "@faker-js/faker";
import { CustomMap } from "./classes/CustomMap";
import { Delivery } from './classes/Delivery';


// new person object
const persone1: Delivery = new Person(321178, 'Luigi', 'Di Nardo', '18/01/2003')
const marker = new MarkerWrapper(persone1, faker.location.latitude(), faker.location.longitude());

// veichle
const veicolo1: Delivery = new Veichle(214312, 'Ford Mustang', '2000', '02/06/2020')
const marker2 = new MarkerWrapper(veicolo1, faker.location.latitude(), faker.location.longitude());

// create markers on map
const customMap = new CustomMap('map');
customMap.addMarker(marker);
customMap.addMarker(marker2);

