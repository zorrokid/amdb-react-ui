import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await (await fetch(`/api/message`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: 'Zarra'
        })
      }
      )).json();
      setData(text);
    })();
  });

  return <div>{data}</div>;
}

export default App;
