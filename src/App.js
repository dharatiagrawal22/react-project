import "./styles.css";
import List from "./component/List";
import Store from "./component/Store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Actor from "./component/Actor";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={Store}>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/actor" element={<Actor />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}
export default App;
