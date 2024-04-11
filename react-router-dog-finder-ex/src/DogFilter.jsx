import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Dog from './Dog';



function DogFilter({ dogs }) {
  const { name } = useParams();

  const [dog] = dogs.filter((dog) => {
    return dog.name.toLowerCase() === name.toLowerCase();
  });

  if (dog) {
    return (
      <>
        <Dog dog={dog} />
      </>
    );
  }
  else {
    return <Navigate to="/dogs" />
  }
}
export default DogFilter