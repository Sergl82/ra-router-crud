import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import NewPost from './components/NewPost/NewPost';
import PostPage from './components/PostPage/PostPage';

function App() {
   return (
      <div className="App">
         <Router>
            <Link to="/posts/new">
               <div className="link">
                  <p>Создать пост</p>
               </div>
            </Link>

            <div className="page">
               <Routes>
                  <Route path="/" exact element={<HomePage />} />
                  <Route path="/posts/new" element={<NewPost />} />
                  <Route path="/posts/:id" element={<PostPage />} />
               </Routes>
            </div>
         </Router>
      </div>
   );
}

export default App;
