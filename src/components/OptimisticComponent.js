import React, { useState } from 'react';
import { useOptimistic } from 'react';

function OptimisticComponent() {
  const [list, setList] = useState(['Item 1', 'Item 2']);

  // Assuming the useOptimistic hook usage; it hasn't been officially introduced yet.
  // This is a hypothetical example of how it might be used.
  const [optimisticList, addOptimisticItem] = useOptimistic((optimistic, newItem) => {
    // Optimistic update: Add the new item to the current list
    return [...optimistic, newItem];
  }, list);

  const addItem = (newItem) => {
    // Optimistic update: Add the new item
    addOptimisticItem(newItem);
    // Real update: Update the list after a delay
    setTimeout(() => {
      setList((prevList) => [...prevList, newItem]);
    }, 1000);
  };

  return (
    <div>
      <ul>
        {optimisticList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => addItem('New Item')}>Add Item</button>
    </div>
  );
}

export default OptimisticComponent;



