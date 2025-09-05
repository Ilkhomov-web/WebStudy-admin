import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import StudentList from "./pages/StudentList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentList />} />
      </Routes>
    </>
  );
}

export default App;
