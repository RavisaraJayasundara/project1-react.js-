import '../components/firstpage.css' ;
import {useState} from 'react';
import Button from 'react-bootstrap/Button';

export default function Firstpage(){
    const[count,setCount]=useState(0);
    //const count =0;
    const increment=()=>{
        //count +=1;
        setCount(count+1)
    };
    const decrement=() =>{
        setCount (count-1);
    }
    return(
        <div>
            <h1>Welcome</h1>
            

    

            <span className="title">My Counter</span>
             <p className="subTitle">The count is {count}</p>
             <button onClick = {decrement} className="button">-</button>
             <button onClick = {increment} className="button">+</button>
             <br/><br/>
             <Button variant="primary">Primary</Button>
    <Button variant="danger">Danger</Button>
        </div>
    )
}