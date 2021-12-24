import React from 'react';
import logo from './logo.svg';
import './App.css';
import { mapper } from './models/automapper';
import { TestViewModel } from './models/models.vm';
import { TestDto } from './models/models.dto';
import { GeoJSONWithCRS } from './types';

// Example data from https://geojson.org/
const geoJson: GeoJSONWithCRS = {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
};

const mappedObject = mapper.map( {id:1, someGeometry: geoJson}, TestViewModel, TestDto);

console.log(mappedObject);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
