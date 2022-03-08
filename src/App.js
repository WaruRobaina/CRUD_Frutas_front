import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import ShowFruits from './components/ShowFruits';
import AddFruit from './components/AddFruit';
import EditFruit from './components/EditFruit';
import { FruitContextProvider } from './contexts/FruitContext';

function App() {
  return (
    <div>
      <FruitContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ShowFruits/>}/>
            <Route path='/add' element={<AddFruit/>}/>
            <Route path='/edit/:id' element={<EditFruit/>}/>
          </Routes>
        </BrowserRouter>
      </FruitContextProvider>
    </div>
  );
}

export default App;
