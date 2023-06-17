import { React, useState } from 'react'
import Label from '../label/Label'
import StateButton from '../StateButton/StateButton'
import './Instance.css'


function Instance(props) {
    const { data, pos } = props;
    const { zone, status, name, labels, id, networkInterfaces } = data;
    const { networkIP } = networkInterfaces[0];
    
    const URL = `/instance/${zone.split('/').pop()}/${id}`;
    const labelComponents = Object.entries(labels).map(([label, value], i) => (
        <Label className="vm-label" key={i} name={label} value={value} />
    ));
    const className = pos % 2 === 0 ? "instance odd" : "instance even";
    
    return (
    <div className={className}>
        <StateButton URL={URL} status={status} />
        <div className="vm-text-info">
            <p className="vm-name">{name}</p>
            <p className="vm-ip">{networkIP}</p>
        </div>
        <div className="vm-labels">{labelComponents}</div>
    </div>
    );
    
}


export default Instance