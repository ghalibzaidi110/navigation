import Menu from './Components/Menu';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu 
        heroImage="/assets/hero.jpg"
        logoImage="/assets/logo.png"
        className="my-custom-menu"
      />
    </div>
  );
}

export default App;