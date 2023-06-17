import React from 'react'
import Instance from '../Instance/Instance';


function Instances(props) {

    const [instances, setInstances] = React.useState(null);

    React.useEffect(() => {
        fetch("/instances")
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setInstances(data)
          });
    }, [])

    return <>
    <h2>INSTANCES</h2>
    {(instances && instances.instances) ? instances.instances.map((instance, i) => <Instance data={instance} key={i} pos={i} />) : <p>fetching instances...</p>}
    </>
}

export default Instances