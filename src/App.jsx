import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TodosPage from "./pages/TodosPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} exact />
        <Route path="/todos" element={<TodosPage />} exact />
      </Routes>
    </div>
  );
}

export default App;
