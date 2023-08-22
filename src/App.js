import { Train } from "./component/Train";
import Delhi from "./component/Delhi";
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Train/>}/>
        <Route path ="/delhi" element={<Delhi/>}/>
      </Routes>
    </div>
  );
}

export default App;
