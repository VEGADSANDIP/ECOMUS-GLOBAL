
import './App.css';
import './index.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <main>
        <Body></Body>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
