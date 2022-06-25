import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import useHttp from './hooks/use-http';
import { Court } from './util/lib';

interface ICourtResponse {
  total: number;
  courts: Court[];
}

function App() {
  const [showAutoComplete, setShowAutoComplete] = useState<boolean>(false);
  const [courtsData, setCourtsData] = useState<Court[]>([]);
  const { isLoading, error, sendRequest: fetchCourts } = useHttp();

  useEffect(() => {
    const setCourts = (courtsResponse: ICourtResponse) => {
      setCourtsData(courtsResponse.courts);
    };
    fetchCourts(
      { url: 'https://api-tribunais.herokuapp.com/courts' },
      setCourts
    );
  }, []);

  const backgroundChangeHandler = () => {
    setShowAutoComplete(false);
  };

  return (
    <main onClick={backgroundChangeHandler}>
      <Header />
      <Search
        courtsData={courtsData}
        showAutoComplete={showAutoComplete}
        setShowAutoComplete={setShowAutoComplete}
      />
    </main>
  );
}

export default App;
