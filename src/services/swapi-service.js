
export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    async getResource(url) {

        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + `Received ${res.status}`)
        }    
        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    };

    async getPerson(id){
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    };

    async getAllPlanet(id) {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    };

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    };

    async getAllStarships(id) {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship)
    };

    async getStarship(id) {
        const starship = this.getResource(`/starships/${id}`);
        return this._transformStarship(starship);
    };

    _extraId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        const id = item.url.match(idRegExp)[1];
    }
    _transformPlanet(planet) {
        return  {
            id: this._extraId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_Period,
            diameter: planet.diameter
          };
    };

    _transformStarship(starship) {
        return {
            id: this.extractId(starship),
            name: starship.name,
            model:starship.model,
            manufacturer: starship.manufacterer,
            costInCredits: starship.constInCredit,
            lenth: starship.length,
            crew: starship.cres,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }

    _transformPerson(person) {
        return {
            id: this._extraId(person),
            name: person.name,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }

};

// const swapi = new SwapiService();

// swapi.getAllPeople().then((people) => {
//     people.forEach((p) => {
//         console.log(p.name);
//     });
// });