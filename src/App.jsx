import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div className="bg-light min-h-screen">
      <Header />
      <Sidebar />
      <Dashboard />
    </div>
  );
}
