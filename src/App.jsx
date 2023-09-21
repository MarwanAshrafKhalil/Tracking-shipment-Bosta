import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Homepage";
import BriefUpdate from "./BriefUpdate";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>

        <Route path="/Brief/:trackID" element={<BriefUpdate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
