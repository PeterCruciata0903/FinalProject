import React, { useEffect, useState } from 'react';
import axios from 'axios';
import System from './Console';
import Loader from "react-loader-spinner";

function Systems() {
  const [systems, setSystems] = useState([]);
  const [selectedSystem, setSelectedSystem] = useState(null);

  useEffect(() => {
    
    axios.get('http://csc225.mockable.io/consoles').then((response) => {
      setSystems(response.data);
    });
  }, []);

  if (systems.length === 0) {
    return (
    <div className="d-flex justify-content-center"> <Loader
      type="ThreeDots"
      color="#00BFFF"
      height={80}
      width={80} 
      timeout={3000} //3 secs
      />
    </div>
    );
  }

  if (!!selectedSystem) {
    return (
      <div>
        <System id={selectedSystem} />
        <div className="d-flex">
          <button type="button" className="btn btn-secondary " onClick={() => setSelectedSystem(null)}>Return Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container d-flex-columns">
      {systems.map((system) => {
        return (
          <div className="row row-cols-4 justify-content-center">
          <div className= "card my-2"><p key={system.id}>
            <img src={system.image} alt={system.name}  class="card-img-top pt-2"></img>
            <button type="button" className="btn btn-primary d-grid col-6 mx-auto my-2" onClick={() => setSelectedSystem(system.id)}>
            {system.name}
          </button>
        </p></div>
        </div>
        );
      })}
    </div>
  );
}
export default Systems;