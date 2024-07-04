import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import WorkoutPlanner from './components/WorkoutPlanner'
import Header from './components/Header'
import Nav from './components/nav'
import Contact from './components/Contact';
import NotFoundPage from './components/NotFoundPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Nav/>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/WorkoutPlanner" element ={<WorkoutPlanner/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
