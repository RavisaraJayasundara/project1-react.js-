import './topicbox.css';
export default function TopicBox(){
    const topic ="Hello, ";
    const name ="I'm Ravisara Jayasundara"
    return(
        <div>
            <div className="topicBox">
                <span className="text">{topic},{name}</span>
             </div>
        </div>
    )
}