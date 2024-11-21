import Content from "../components/Content";
import TopicBox from "../components/TopicBox";
import Contact from '../components/Contact';

export default function Home(){
    return(
        <div>
            <h3>HomePage</h3>
            <TopicBox/>
            <Content/>
            <Contact contact="Whatsapp" value="071XXXXXXX"/>
            <Contact contact="Gmail" value="ravisarajayasundaraXX@gmail.com"/>
            <Contact contact="Address" value="Kurunegala">
                
            </Contact>
            <Contact contact="SMS" value="hello">
                <button className="btn">Send Message</button>
            </Contact>
        </div>
    )
} 