import './App.css';
import React from 'react';


const Main = () => {
  return (
    <main>
      <h2>
        Лол, кек
      </h2>
    </main>
  )
}
const Footer = () =>
{
  return (
    <footer>
      <h3>
        Чебурек
      </h3>
    </footer>
  )
}

function App() {
  return (
    <div className='App'>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
