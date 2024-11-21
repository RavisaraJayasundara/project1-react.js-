import './contact.css'
export default function Contact(props){
    return(
        <div className="con">
           <span>Contact me {props.contact} :- {props.value}</span> 
            {props.children}
        </div>
    )
} 