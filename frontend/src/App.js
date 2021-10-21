
import './App.css';
import Signup from "./pages/Signup"
import Navbar from './static-elements/navbar';
import Homepage from './pages/Homepage';
import Footer from './static-elements/Footer';
import PageRouter from './router/PageRouter';

function App() {
  return (
    <div className="App">
        <Navbar />
        <PageRouter />
        <Footer />
    </div>
  );
}

export default App;
