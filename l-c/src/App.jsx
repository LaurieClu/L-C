import "antd/dist/antd";
import { Menu } from "./components/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Soiree from './pages/soiree';
import Membres from './pages/membres';
import Budget from './pages/budget';
import Calendrier from './pages/calendrier';
import Courses from './pages/courses';
import Inventaire from './pages/inventaire';
import Messages from './pages/messages';
import Utiles from './pages/utiles';
<<<<<<< HEAD
=======
import { WrapperGlobal } from "./styles/GlobalPage";
>>>>>>> soiree

function App() {
  return (
    <div className="App">
      <Router>
<<<<<<< HEAD
=======
        <WrapperGlobal>
>>>>>>> soiree
        <Menu />
        <Routes>
          <Route path="/" element={<Soiree />} />
          <Route path='/membres'  element={<Membres />}></Route>
          <Route path='/calendrier'  element={<Calendrier />}></Route>
          <Route path='/inventaire'  element={<Inventaire />}></Route>
          <Route path='/courses'  element={<Courses />}></Route>
          <Route path='/messages' element={<Messages />}></Route>
          <Route path='/budget'  element={<Budget />}></Route>
          <Route path='/utiles'  element={<Utiles />}></Route>
        </Routes>
<<<<<<< HEAD
=======
        </WrapperGlobal>
>>>>>>> soiree
      </Router>
    </div>
  );
}

export default App;
