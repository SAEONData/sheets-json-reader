import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { useFetch } from 'react-hooks-fetch';

const Err = ({ error }) => <span>Error:{error.message}</span>;

const DisplayRemoteData = () => {
  const url = 'http://localhost:8081/spreadsheet';
  const { error, data } = useFetch(url);
  if (error) return <Err error={error} />;
  if (!data) return null;
  return <span>RemoteData:{data.title}</span>;
};

const App = () => (
  <Suspense fallback={<span>Loading...</span>}>
    <DisplayRemoteData />
  </Suspense>
);

ReactDOM.render(<App />, document.getElementById('root'));