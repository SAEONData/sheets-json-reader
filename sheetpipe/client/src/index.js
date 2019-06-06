import React, { Suspense } from 'react' 
import ReactDOM from 'react-dom' 
import { Footer } from '@saeon/saeon-ux'
import { useFetch } from 'react-hooks-fetch' 
import { connect } from 'react-redux'

import footerConfig from './config/footerConfig'

const Err = ({ error }) => <span>Error:{error.message}</span> 

const DisplayRemoteData = () => {
  const url = 'http://sgcdc.saeon.ac.za:8081/spreadsheet' 
  const { error, data } = useFetch(url) 
  if (error) return <Err error={error} /> 
  if (!data) return null 
  console.log(data)
  return <span>{data.map((data)=>data.title)}
  <div>{data.map((data)=>data.shortdescription)}</div> </span>
         
  
} 

const App = () => (
  <Suspense fallback={<span>Loading...</span>}>
    <DisplayRemoteData />
  </Suspense>
) 

ReactDOM.render(<App />, document.getElementById('root')) 


