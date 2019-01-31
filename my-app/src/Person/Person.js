import React from 'react';
import './Person.css';

const person = (props) => { // function() { ...}
    return (
        <div className='Person'>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
    
    //<p>I'm {props.name} and I am {props.age} years old!</p>
};

export default person;