// import React, { Component } from 'react';
// import Home from './components/Home';
// import './App.css';

// class App extends Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <Home />
//       </div>
//     );
//   }
// }

// export default App;


import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import './App.css';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
                  setData(data)
                  console.log(data)
      }
    )
  }, []);

  return (
    <div>
      <Home />
      {data && <p>{data.message}</p>}
    </div>
  );
}

export default App;
