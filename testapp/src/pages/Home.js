// import Footer from '../components/Footer';
import Content from "../components/Content";
import {Link,useNavigate} from 'react-router-dom';

export default function Home(){
    const Navigate = useNavigate();
    return(
        <div>
            <h3>HomePage</h3>
            
            <Link to="/Profile">Go to Profile page</Link>
            <button onClick={()=>Navigate("/Profile")}>
                Profile
            </button><br/>
            <Link to="/About">Go to About Page</Link>
            <button onClick={()=>Navigate("/About")}>
                About
            </button> 
                       
        </div>
    )
} 