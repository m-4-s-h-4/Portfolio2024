import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import WorkPage from "./pages/WorkPage/WorkPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/work/:id" element={<WorkPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
