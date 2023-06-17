import React, {useState} from 'react'
import './StateButton.css'

function StateButton(props) {
    const [loading, setLoading] = useState(false);
    const status = props.status
    const URL = props.URL

    function startInstance() {
        fetch(URL+'/start').then((response) => {
            // Handle the response from the server
            if (response.ok) {
                console.log('Instance started successfully');
            } else {
                console.error('Failed to start instance');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        })
        .finally(() => {
            setLoading(false);
        });
    }

    function stopInstance() {
        fetch(URL+'/stop').then((response) => {
            // Handle the response from the server
            if (response.ok) {
                console.log('Instance stopped successfully');
            } else {
                console.error('Failed to stop instance');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        })
        .finally(() => {
            setLoading(false);
        });
    }
    
    const isStopped = (status === "TERMINATED")
    const buttonTextStart = loading ? 'Starting' : 'Start'
    const buttonTextStop = loading ? 'Stopping' : 'Stop'
    const className = isStopped ? "state-btn" : "state-btn running"
    const usedFunction = isStopped ? startInstance : stopInstance
    const usedText = isStopped ? buttonTextStart : buttonTextStop 

    return <button className={className} onClick={usedFunction}>{usedText}</button>
}

export default StateButton