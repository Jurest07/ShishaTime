import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from "./pages/MainPage";
import MainPageMobile from "./pages/MainPageMobile";
import TypeProductPage from './componentsMobile/TypeProductPage';
import TobaccoPage from './componentsMobile/TobaccoPage';
import ShishaPage from './componentsMobile/ShishaPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={window.innerWidth <= 600 ? <MainPageMobile /> : <MainPage />} />
        <Route path="/typeProduct/:id" element={<TypeProductPage />} />
        <Route path='/tobacco/:id' element={<TobaccoPage />} />
        <Route path='/shisha/:id' element={<ShishaPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
