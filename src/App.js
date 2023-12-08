
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Categories from './components/Categories';
import BestReceipe from './components/BestReceipe';
import Review from './components/Review';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Header />
      <Home />
     <About />
     <Categories />
     <BestReceipe />
     <Review />

     <Contact />
     <Blogs />

     <Footer />
    </div>
  );
}

export default App;
