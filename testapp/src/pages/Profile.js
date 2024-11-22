import Content from "../components/Content";
import TopicBox from "../components/TopicBox";
import {useNavigate} from 'react-router-dom';

export default function Profile(){
    const Navigate=useNavigate();

    return(
        <div>
            <h3>ProfilePage</h3>
            <button onClick={()=>Navigate('/Home')}>Back</button>         
            <TopicBox/>
            <Content/>
        </div>
    );
} 