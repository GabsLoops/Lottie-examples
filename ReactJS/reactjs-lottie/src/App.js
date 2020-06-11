import React from 'react';
import LottieAnimation from './Components/Lottie'
import data from './animations/example-2'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LottieAnimation width={200} heigth={200} animationPath='https://raw.githubusercontent.com/GabsLoops/Lottie-examples/master/Pure-JS/animations/example-1.json'></LottieAnimation>
       
        <LottieAnimation width={200} heigth={200} animationData={data}></LottieAnimation>
        
      </header>
    </div>
  );
}

export default App;
