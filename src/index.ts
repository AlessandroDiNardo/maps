import { MarkerWrapper } from './classes/MarkerWrapper'
import { Person } from './classes/Person';
import { Vehicle } from './classes/Vehicle';
import { faker } from "@faker-js/faker";
import { CustomMap } from "./classes/CustomMap";
import { Delivery } from './classes/Delivery';


// new person object
const person1: Delivery = new Person(321178, 'Luigi', 'Di Nardo', '18/01/2003')
person1.printId();
const marker1= new MarkerWrapper(person1, faker.location.latitude(), faker.location.longitude());

const person2: Delivery = new Person(321178, 'Mario', 'Rossi', '30/12/2003')
person2.printId();
const marker2= new MarkerWrapper(person2, faker.location.latitude(), faker.location.longitude());

// Vehicle
const vehicle1: Delivery = new Vehicle(214312, 'Ford Mustang', '2000', '02/06/2020')
vehicle1.printId();
const marker3 = new MarkerWrapper(vehicle1, faker.location.latitude(), faker.location.longitude());

// create markers on map
const customMap = new CustomMap('map');
customMap.addMarker(marker1);
customMap.addMarker(marker2);
customMap.addMarker(marker3);

