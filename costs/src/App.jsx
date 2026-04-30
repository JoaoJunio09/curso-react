import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from '../src/components/Pages/Home';
import Company from '../src/components/Pages/Company';
import Contact from '../src/components/Pages/Contact';
import NewProject from '../src/components/Pages/NewProject';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projects from './components/Pages/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass='min-height'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newproject' element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
