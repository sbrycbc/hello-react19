import React from 'react';
import MyComponent from './components/MyComponent';
import OptimisticComponent from './components/OptimisticComponent';
import FormComponent from './components/FormComponent';
import ExpensiveComponent from './components/ExpensiveComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React 19 Hook </h1>
        <MyComponent />
        <OptimisticComponent />
        <FormComponent />
        <ExpensiveComponent input={5} />
      </header>
    </div>
  );
}

export default App;