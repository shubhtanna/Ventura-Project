import './App.css';
import IpoList from './Pages/IpoList';
import IpoDetailsPage from './Pages/IpoDetailsPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<IpoList/>}/>
        <Route path='/ipodetail/:id' element={<IpoDetailsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
