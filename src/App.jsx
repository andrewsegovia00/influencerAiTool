import { Home } from './Pages';
import { SignUp, Auth } from './Components'
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';

const App = () => {
  return (
  <>
    <Router>
      <div>
        <section>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Auth/>}/>
          </Routes>
        </section>
      </div>
    </Router>
  </>
  );
};

export default App;
