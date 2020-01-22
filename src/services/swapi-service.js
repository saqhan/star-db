
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
        return res.results;
    };

    getPerson(id){
        return this.getResource(`/people/${id}/`);
    };

    async getAllPlanet(id) {
        const res = await this.getResource(`/planets/`);
        return res.results;
    };

    getPlanet(id) {
        return this.getResource(`/planets/${id}`);
    };

    async getAllStarships(id) {
        const res = await this.getResource(`/starships/`);
        return res.results;
    };

    getStarship(id) {
        return this.getResource(`/starships/${id}`);
    };


};

// const swapi = new SwapiService();

// swapi.getAllPeople().then((people) => {
//     people.forEach((p) => {
//         console.log(p.name);
//     });
// });