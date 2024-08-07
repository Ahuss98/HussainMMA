import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import WorkoutPlanner from './components/WorkoutPlanner'
import Nav from './components/nav'
import Contact from './components/Contact';
import NotFoundPage from './components/NotFoundPage';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/WorkoutPlanner" element ={<WorkoutPlanner/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
