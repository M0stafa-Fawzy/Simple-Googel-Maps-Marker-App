import { faker } from '@faker-js/faker'

export class Company {
    name: string;
    catchPhrase: string;
    location: {
        lat: number,
        lng: number
    }

    constructor() {
        this.name = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `
        <h3> We Are ${this.name} Company </h3>
        <h4> And Our Lacation is ${this.location.lat}, ${this.location.lng}</h4>
        `
    }
}