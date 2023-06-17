import React from 'react'
import './Label.css'

function Label(props) {

    return <span className='vm-label'>{props.name}: {props.value}</span>
}

export default Label