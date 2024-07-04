import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Nav(){
    const location = useLocation()
    return (
        <nav>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}> Home </Link>
            <Link to="/WorkoutPlanner" className={location.pathname === "WorkoutPlanner" ? "active" : ""}>Workout Planner</Link>
            <Link to="/Contact" className={location.pathname === "Contact" ? "active" : ""}>Contact</Link>
        </nav>

    )
}
export default Nav

{/* <Route path="/WorkoutPlanner" element ={<WorkoutPlanner/>}/> */}
{/* <Route path="/Contact" element={<Contact/>}/> */}