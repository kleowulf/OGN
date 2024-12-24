
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage';
import Blog from './pages/Blog';
import GameRecsPage from './pages/GameRecsPage';


const App = () => {

return (


<BrowserRouter>
   <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/aboutUs' element={<AboutUsPage/>} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/gameRecs' element={<GameRecsPage />}/>
   </Routes>
</BrowserRouter>

  
)
};
export default App;
