import logo from './logo.svg';
import './App.css';

const Header =() => {
  return (
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Хочу спать
    </p>
  </header>
  )
}

const Main = () => {
  return (
    <main>
      <h2>
        Стоит ли становиться программистом, если всю жизнь менеджеришь проекты?
      </h2>
    </main>
  )
}
const Footer = () =>
{
  return (
    <footer>
      <h3>
        Когда удалил лол, что бы научиться кодить на реакте и заработать денег на скин. Ps это шутка...не удалил
      </h3>
    </footer>
  )
}
function App() {
  return (
    <div className='App'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
