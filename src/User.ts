import { faker } from '@faker-js/faker'

export class User {
    name: string;
    location: {
        lat: number,
        lng: number
    }

    constructor() {
        this.name = faker.name.firstName("male");
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `
        <h3> Hi There! My Name is ${this.name} </h3>
        <h4> And My Lacation is ${this.location.lat}, ${this.location.lng}</h4>
        `
    }
}