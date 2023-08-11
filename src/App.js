import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState,useEffect } from "react";
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import AddMovie from "./components/AddMovie/AddMoive";
import AddSnack from "./components/AddSnack/AddSnack";
import Login from "./components/Login/Login";

const App=()=>{
  // sessionStorage에서 show 값을 가져옵니다.
  const [show, setShow] = useState(sessionStorage.getItem('show') === 'true');

  const [sidebarOpen,setSidebarOpen] = useState(false);

  const onLogin = e => {
    setShow(e);
  }


  const closeSidebar = () => {
    setSidebarOpen(false);
  }
  console.log('show=>',show);

  // show 값이 변경될 때마다 sessionStorage에 값을 저장합니다.
  useEffect(() => {
    sessionStorage.setItem('show', show);
  }, [show]);

  return (
    <div className="container">
      <Router>
      {show && <Navbar/>}
      {show && <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />}
      <Routes>
        <Route path="/main" element={<Main/>}></Route>
        <Route path="/addmovie" element={<AddMovie/>}></Route>
        <Route path="/addsnack" element={<AddSnack/>}></Route>
        <Route path="/" element={<Login onLogin={onLogin} />}></Route>
      </Routes>
      </Router>
    </div>
  );
};

export default App;