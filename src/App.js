import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import HomeUser from "./home-user/HomeUser";
import HomeExam from "./home-exam/HomeExam";
import QuizPage from "./quiz-page/QuizPage";
import HomeResult from "./history-quiz/HomeResult";
import ResultPage from "./quiz-page/ResultPage";
import LoginPage from "./login/LoginPage";
import HomeAdmin from "./admin/home-admin/HomeAdmin";

function AppContent() {
  
  return (
    <div className="static">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/user" element={<HomeUser />} />
        <Route path="/history" element={<HomeResult />} />
        <Route path="/home/exam" element={<HomeExam />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home/admin" element={<HomeAdmin />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <AppContent />
      </Router>
    </MantineProvider>
  );
}

export default App;
