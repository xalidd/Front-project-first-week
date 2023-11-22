import { Books } from "./components/Books/index";
import Header from "./components/Header";
import styles from "./header.module.css";
import FullPage from "./components/FullPage/Index"
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SingIn from "./components/SingIn";
import { useEffect } from "react";
import { getUser } from "./features/applicationSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.application.token)
  const news = useSelector(state => state.news)
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch, token, news])
  return (
    <>
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/books" element={<FullPage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SingIn/>}/>
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

