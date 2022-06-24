import React, { useState } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';

function App() {
  const [showAutoComplete, setShowAutoComplete] = useState<boolean>(false);

  const backgroundChangeHandler = () => {
    setShowAutoComplete(false);
  };

  return (
    <main onClick={backgroundChangeHandler}>
      <Header />
      <Search
        courtsData={[]}
        showAutoComplete={showAutoComplete}
        setShowAutoComplete={setShowAutoComplete}
      />
    </main>
  );
}

export default App;
