import Header from './Components/Header';
import PostsPages from './Pages/Posts';
import CreatePost from './Pages/CreatePost'
import Login from './Pages/Login'
import Protected from './Components/Protected'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Protected Component={PostsPages} />} />
          <Route path="/create-post" element={<Protected Component={CreatePost} />}/>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}
