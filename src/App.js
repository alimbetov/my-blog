
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AuthProvider} from "./AuthContext";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Form from "./pages/Form";
function App() {
  return (
    <div className="App">
       <div>
          <AuthProvider> 
                <BrowserRouter>
                <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="form" element={<Form />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
                </Routes>
                </BrowserRouter>
          </AuthProvider>
      </div>
    </div>
  );
}
export default App;
