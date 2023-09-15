import React, { useEffect, useState } from 'react';
import Header from './header/Header';
import Body from './body/Body';


function App() {

    const [data, setData] = useState("");

    useEffect(() => {
        fetch("/api").then(
          respone => respone.text()
        )
        .then(
          text => setData(text)
        )
        // .catch(
        //   err => console.log(err)
        // )
    }, []);

    return (
        <div>
          <Header/>
          <Body />
          {/* <h1>{data}</h1> */}
        </div>
      );
}

export default App;