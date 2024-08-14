import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Discover from './Component/Discover/Discover';
import Menu  from './Component/Menubar/Menubar';
import Aboutpage from './Component/Recruitment/Aboutpage/Aboutpage';
import Banner from './Component/Recruitment/Banner/Banner';
import Clientpage from './Component/Recruitment/Clientpage/Clientpage';
import Corevalues from './Component/Recruitment/Corevalues/Corevalues';
import { FooterIT } from './Component/Recruitment/footer/footer';
import Hrfooter from './Component/Recruitment/hrfooter/Hrfooter';
import Ourteam from './Component/Recruitment/Ourteam/Ourteam';
import Sectors from './Component/Recruitment/Sectors/Sectors';
import Teamfeatures from './Component/Teamfeatures/Teamfeatures';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={[ <Menu/> ,<Banner/>,<Aboutpage/>,<Teamfeatures/>,<Sectors/>,<Clientpage/>,<Corevalues/>,<Discover/>,<Hrfooter/>,<FooterIT/>]}/>
        </Routes> 
      </BrowserRouter>
    

{/* <Ourteam/> */}



    </div>
  );
}

export default App;
