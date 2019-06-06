import React, { Suspense } from 'react' 
import ReactDOM from 'react-dom' 

import { useFetch } from 'react-hooks-fetch' 

const Err = ({ error }) => <span>Error:{error.message}</span> 

const DisplayRemoteData = () => {
  const url = 'http://192.168.112.141:8081/spreadsheet' 
  const { error, data } = useFetch(url) 
  if (error) return <Err error={error} /> 
  if (!data) return null 
  console.log(data)
  return <span>{data.map((data)=>data.title, data.uuid)}</span> 
  
} 

const App = () => (
  <Suspense fallback={<span>Loading...</span>}>
    <DisplayRemoteData />
  </Suspense>
) 

ReactDOM.render(<App />, document.getElementById('root')) 