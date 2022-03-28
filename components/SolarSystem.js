import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div>
        <div className="container-system" data-testid="solar-system" />
        <div>
          <Title headline="Planetas" />
        </div>

        <div className="container-planet">
          {
            planets.map((planet) => (
              <PlanetCard
                key={ planet.name }
                planetName={ planet.name }
                planetImage={ planet.image }
              />
            ))
          }
        </div>

      </div>
    );
  }
}

export default SolarSystem;
