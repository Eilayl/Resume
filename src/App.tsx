import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CVPage } from "./components/CVPage/CVPage";
import { BlessPage } from "./components/BlessPage/BlessPage";

function App() {

  return (
          <Router>
      <Routes>
        <Route path="/bless" element={<BlessPage/>}/>
        <Route path="/" element={<CVPage />} />
      </Routes>
    </Router>
  );
}

export default App;
