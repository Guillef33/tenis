import './App.css';
import Home from './Home'
import Post from './PostCard'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Nav from './Nav'


function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/posts/:id" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
