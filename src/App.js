import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar';


const App =()=> {
  const pageSize=5;
  const apikey = process.env.REACT_APP_NEWS_API

   const [progress, setProgress] = useState(0);
   

    return (
      <div>
        <Router>
       <NavBar/>
       <LoadingBar
       height={3}
        color='#f11946'
        progress={progress}
      />
       <Routes>
      <Route path='/newsSpaidy' element={<News setProgress={setProgress} apikey={apikey}  key='entertainment' pageSize={pageSize} country='in' category='entertainment'/>}></Route>
      <Route path='/home' element={<News setProgress={setProgress} apikey={apikey}  key='genaral' pageSize={10} country='in' category='general' />}></Route>
      <Route path='/general' element={<News setProgress={setProgress} apikey={apikey}  key='general' pageSize={10} country='in' category='general' />}></Route>
      <Route path='/business' element={<News setProgress={setProgress} apikey={apikey}  key='business' pageSize={10} country='in' category='business' />}></Route>
      <Route path='/entertainment' element={<News setProgress={setProgress} apikey={apikey}  key='entertainment' pageSize={10} country='in' category='entertainment' />}></Route>
      <Route path='/health' element={<News setProgress={setProgress} apikey={apikey}  key='health' pageSize={10} country='in' category='health' />}></Route>
      <Route path='/science' element={<News setProgress={setProgress} apikey={apikey}  key='science' pageSize={10} country='in' category='science' />}></Route>
      <Route path='/sports' element={<News setProgress={setProgress} apikey={apikey}  key='sports' pageSize={10} country='in' category='sports' />}></Route>
      <Route path='/technology' element={<News setProgress={setProgress} apikey={apikey}  key='technology' pageSize={10} country='in' category='technology' />}></Route>
      </Routes>

  </Router>
   </div>
    )
  
}
export default App

