import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style.css'
import Search from './components/Search.js';
import { useState } from 'react';
import ImageSearch from './components/ImageSearch';

function App() {

  const [keyword, setKeyword] = useState("")

  const handleSearch = (input) => {
    setKeyword(input)
    console.log(input)
  }
  return (
    <div className="App d-flex justify-content-center">

      <div className='wrapper d-flex align-items-center flex-column'>
        <div className="title ">
          <span>SnapShot</span>
        </div>

        <Search handleSearch = {handleSearch}/>

        <span className='fs-2 my-5' style={{fontFamily: 'FontName, Arima'}}>Us image</span>

       
        <ImageSearch searchTerm={keyword}/>
        
        </div>
      
      
    </div>
  );
}

export default App;
