import React, { use } from 'react';
import fetchData from '../hooks/useFetchData';

function MyComponent() {
  const data = use(fetchData('https://jsonplaceholder.typicode.com/todos/1'));

  return (
    <div>
      <h2>MyComponent</h2>
      {data ? (
        <div>Data: {JSON.stringify(data)}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default MyComponent;



