import React from 'react' 
import { Footer, Layout } from '@saeon/saeon-ux'
import './App.scss' 
import footerConfig from '../src/config/footerConfig'


function App() {
  return (
    <div className="App">
      <Layout>
       <Footer config={footerConfig}/>
      </Layout>
     
    </div>
  ) 
}

export default App 
