import Footer from './components/home/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      {/* <!-- Scroll Up Button --> */}
      <a href="#" className="scrollup" id="scroll-up">
        <i className='bx bx-up-arrow-alt scrollup__icon'></i>
      </a>
      <Footer />
    </>
  );
}

export default App;
