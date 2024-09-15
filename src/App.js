import { Fragment } from "react";
import "./App.css";
import Calculator from "./main/Calculator";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <h1 className="intro">Calculator App</h1>
      <Calculator />
      <Footer/>
    </Fragment>
  );
}

export default App;
