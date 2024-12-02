
import React, {useState, useEffect} from 'react'



function App(){

    const [data, setData] = useState()

    useEffect(() => {
        fetch('/api/data')
        .then(response => response.json())
        .then(data => setData(data),
                      console.log(data))
    }, [])

    return (
        <div>
            {(typeof data.message === 'undefined') ? (
                <p>Loading...</p>
            ) : (
              data.message.map((message, i) => (
                <p key={i}>{message}</p>
              ))
            )}

        </div>

    )

}


export default App