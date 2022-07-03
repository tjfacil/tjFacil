import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Error from './components/UI/Error/Error';
import Spinner from './components/UI/Spinner/Spinner';
import useHttp from './hooks/use-http';
import { API_URL } from './util/config';
import { Court } from './util/lib';

interface ICourtResponse {
  total: number;
  courts: Court[];
}

const App = () => {
  const [showAutoComplete, setShowAutoComplete] = useState<boolean>(false);
  const [courtsData, setCourtsData] = useState<Court[]>([]);
  const { isLoading, error, sendRequest: fetchCourts } = useHttp();

  useEffect(() => {
    const setCourts = (courtsResponse: ICourtResponse) => {
      setCourtsData(courtsResponse.courts);
    };
    fetchCourts({ url: API_URL + 'courts' }, setCourts);
  }, [fetchCourts]);

  const backgroundChangeHandler = () => {
    setShowAutoComplete(false);
  };

  return (
    <main onClick={backgroundChangeHandler}>
      <Header />
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <Error />
      ) : (
        <Search
          courtsData={courtsData}
          showAutoComplete={showAutoComplete}
          setShowAutoComplete={setShowAutoComplete}
        />
      )}
    </main>
  );
};

export default App;
