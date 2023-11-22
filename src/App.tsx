import { Books } from "./components/Books/index";
import Header from "./components/Header";
import styles from "./header.module.css";
import FullPage from "./components/FullPage/Index"
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/books" element={<FullPage/>}/>
          сверху роут на 16 стр должен быть роут по айди нужно дополнить т.е. /books/booksId
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
