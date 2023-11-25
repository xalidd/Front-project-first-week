import { Books } from "./components/Books/index";
import Header from "./components/Header";
import styles from "./header.module.css";
import FullPage from "./components/FullPage/Index"
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MyBooks from "./components/MyBooks";
import SignUp from "./components/SignUp";
import SingIn from "./components/SingIn";
import { useEffect } from "react";
import { getUser } from "./features/applicationSlice";
import { useDispatch, useSelector } from "react-redux";
import { Busket } from "./components/Busket/index";
import "./App.css"
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
          <Route path="/category/:categoryId" element={<Home/>}/>
          <Route path="/books/:booksId" element={<FullPage/>}/>
          <Route path="/MyBooks" element={<MyBooks/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SingIn/>}/>
          <Route path="/busket" element={<Busket/>}/>
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

