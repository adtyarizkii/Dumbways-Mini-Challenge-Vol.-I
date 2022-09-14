import List from "./pages/List";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/account/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
