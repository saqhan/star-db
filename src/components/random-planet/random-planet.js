import React, { Component } from 'react';

import './random-planet.css';

import SwapiService from '../../services/swapi-service';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
<<<<<<< HEAD
    planet: {}
=======
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
>>>>>>> 840d5b299ebff7c883070f3ff30dbfe41811d8da
  };

  constructor() {
    super();
    this.updatePlanet();
  }
<<<<<<< HEAD
 
  onPlanetLoaded = (planet) => {
    this.setState({planet})
  }

=======
>>>>>>> 840d5b299ebff7c883070f3ff30dbfe41811d8da

  updatePlanet() {
    const id = Math.floor(Math.random()*25 )+ 2;
    this.swapiService
      .getPlanet(id)
<<<<<<< HEAD
      .then(this.onPlanetLoaded);
=======
      .then((planet) => {
        this.setState({
          id,
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_Period,
          diameter: planet.diameter
        });
      });
>>>>>>> 840d5b299ebff7c883070f3ff30dbfe41811d8da
  };
 
  render() {

<<<<<<< HEAD
    const { planet : { id, name, population,
       rotationPeriod, diameter} } = this.state;
=======
    const { id, name, population, rotationPeriod, diameter } = this.state;
>>>>>>> 840d5b299ebff7c883070f3ff30dbfe41811d8da


    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}