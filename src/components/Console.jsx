import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";

function System(props) {
  const { id } = props;
  const [system, setSystem] = useState(null);

  useEffect(() => {
    axios.get('http://csc225.mockable.io/consoles/' + id).then((response) => {
      setSystem(response.data);
    });
  }, []);

  if (!system) {
    
    return (
      <div className="d-flex justify-content-center">
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80} 
        timeout={3000} //3 secs
        />
      </div>
      );
  }

  return (
    <div className="card d-flex text-center border border-4 border border-dark">
    <p>
      <div className="my-3"><img src={system.image} alt={system.name} /></div>
      <div className="card-body">
      <h5 className="card-title h3 py-2">System Specs</h5>
      <p className="h5"><strong>{system.name}</strong></p>
      <p>Price: {system.price}</p> 
      <p>Year of Release: {system.releaseYear}</p>
      <p>Country of Release: {system.country}</p>
      </div>
    </p>
    </div>
  );
}
export default System;