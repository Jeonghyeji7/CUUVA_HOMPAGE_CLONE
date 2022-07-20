import React from 'react'
import './TechBox.css'

function TechBox(props){

    let array =props.content.split(',')

    const content =array.map((line) => (<div className='pf__tech'>{line}</div>))
    return(
        <>
        {content}
        </>
    )
}

export default TechBox