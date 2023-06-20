import { Fragment } from "react";
import Header from "./components/UI/Header";
import Meals  from "./components/Meals/meals";
function App() {

  return (
    <Fragment>
      <Header/>
      <main>
       <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
