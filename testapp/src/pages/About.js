//import Footer from '../components/Footer';
import Contact from '../components/Contact';

export default function About(){
    
    return(
        <div>
            <h3>AboutPage</h3>
            
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