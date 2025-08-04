import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import AIContent from "./pages/AIContent";
import Scheduling from "./pages/Scheduling";
import Analytics from "./pages/Analytics";
import Preview from "./pages/Preview";
import Team from "./pages/Team";
import PostHistory from "./pages/History";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ai-content" element={<AIContent />} />
          <Route path="/scheduling" element={<Scheduling />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/team" element={<Team />} />
          <Route path="/history" element={<PostHistory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
