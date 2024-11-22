// import Footer from '../components/Footer';
import {Link,useNavigate} from 'react-router-dom';
 function buttonClick(){
    console.log("Button is clicked");
}

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
            <hr></hr>
            <h1><i>React Event Handling</i></h1>
            <button onClick={buttonClick}>Click Here</button>
            <br></br>    
        </div>
    )
} 