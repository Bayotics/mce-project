import './App.css';
import mainLogo from "./assets/images/moi-full-logo-transformed.png";
import fbLogo from "./assets/images/fb-logo.png";
import twitterLogo from './assets/images/twitter-logo.png';
import igLogo from "./assets/images/ig-logo.png";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/AboutUs';
import Contact from './pages/Contact';
import Service from './pages/Services';
import Portfolio from './pages/Portfolio';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <div className=" main-nav flex px-8">
            <div className="w-2/6  justify-center pt-4 pl-10">
                <img className="h-4/6" src = {mainLogo} alt="moi logo"/>
            </div>
            <div className="w-4/6 pt-8 ">
                <div className=" flex ">
                    <div className="flex  text-white font-semibold w-10/12 justify-between">
                        <Link to= "/"><div className="nav-item">HOME</div></Link>
                        
                        <Link to= "/aboutus"> <div className="nav-item">ABOUT</div></Link>
                        
                        <Link to= "/portfolio"><div className="nav-item">PORTFOLIO</div></Link>
                        
                        <Link to= "/services"><div className="nav-item">SERVICES</div></Link>
                        
                        <Link to= "/contact"><div className="nav-item">CONTACT US</div></Link>
                        
                    </div>
                    <div className="nav-socials  justify-between flex w-2/12 px-8 pt-0 ">
                        <div className="facebook-ico">
                            <i class="fa fa-facebook text-white" aria-hidden="true"></i>
                        </div>
                        <div className="twitter-ico">
                            <i class="fa fa-twitter text-white" aria-hidden="true"></i>
                        </div>
                        <div className="instagram-ico">
                            <i class="fa fa-linkedin text-white" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        {/* animations on scroll */}
        <Routes>
          <Route path = '/' element = {<HomePage />} />
          <Route path = '/aboutus' element = {<About/>} />
          <Route path = '/contact' element = {<Contact/>} />
          <Route path = '/services' element = {<Service/>} />    
          <Route path = '/portfolio' element = {<Portfolio/>} />    
        </Routes>
        <footer className='border'>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
