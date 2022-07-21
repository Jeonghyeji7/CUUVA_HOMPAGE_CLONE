import React from 'react'
import { v4 as uuid } from "uuid";
import './TechBox.css'

function TechBox(props){

    let array = props.content.split(',')

    const content = array.map((line) => (<div key={uuid()} className='pf__tech'>{line}</div>))
    return(
        <>
            {content}
        </>
    )
}

export default TechBox
