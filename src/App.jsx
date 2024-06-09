import React, {useState} from 'react';
import Ratings from './components/Ratings';
import Success from './components/Success';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selected, setSelected] = useState(0);

  function handleSubmit() {
    setIsSubmitted(prev => !prev);
  }

  function handleSelect(value) {
    setSelected(prev => value);
  }

  return (
    <div className={` ${isSubmitted ? 'container success' : 'container'} `}>
      {!isSubmitted ? (
        <Ratings handleSubmit={handleSubmit} handleSelect={handleSelect} selected={selected} />
      ) : (
        <Success selected={selected} />
      )}
    </div>
  );
}

export default App;
