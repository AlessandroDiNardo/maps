import { MarkerWrapper } from './classes/MarkerWrapper'
import { Person } from './classes/Person';
import { Vehicle } from './classes/Vehicle';
import { faker } from "@faker-js/faker";
import { CustomMap } from "./classes/CustomMap";
import { Delivery } from './classes/Delivery';


// new person object
const person1: Delivery = new Person(321178, 'Luigi', 'Di Nardo', '18/01/2003')
person1.printId();
const marker = new MarkerWrapper(person1, faker.location.latitude(), faker.location.longitude());

// Vehicle
const vehicle1: Delivery = new Vehicle(214312, 'Ford Mustang', '2000', '02/06/2020')
vehicle1.printId();
const marker2 = new MarkerWrapper(vehicle1, faker.location.latitude(), faker.location.longitude());

// create markers on map
const customMap = new CustomMap('map');
customMap.addMarker(marker);
customMap.addMarker(marker2);

