import React from 'react';

function App({src, name}) {
  return (
    <li>
      <img src={src} alt={name} />
    </li>
  );
}

export default App;
