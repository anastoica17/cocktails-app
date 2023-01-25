import './App.css';
import MainMenu from './mainMenu/MainMenu';
import SearchComponent from './search/SearchComponent';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <div>Cocktails</div>
        </header>
      </div>
      <main>
          <nav><MainMenu/></nav>
          <div><SearchComponent/></div>
      </main>
    </>
  );
}

export default App;
