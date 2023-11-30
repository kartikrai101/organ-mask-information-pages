import './App.css';
import {Route, Router, Routes} from 'react-router-dom';
import DonationInfo from './component/DonationInfo'

function App() {
  return (
    <Routes>
      <Route path="/donation/info" exact element={<DonationInfo/>}></Route>
    </Routes>
  );
}

export default App;
