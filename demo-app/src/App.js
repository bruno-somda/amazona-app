
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {BrowserRouter,Route} from 'react-router-dom';
function App() {
  return (<BrowserRouter>
    <div className="App">
       <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">amazona</a>
            </div>
            <div>
                <a href="/cart">cart</a>
                <a href="/sign">sign In</a>
            </div>
        </header>
        <main>
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/" component={HomeScreen} exact/>
       
           
        </main>
        <footer className="row center">
            <h2>all right reserve</h2>
        </footer>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
