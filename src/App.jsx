import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ActiveProject from "./components/ActiveProject";
import { useGlobalContext } from "./context/GlobalContext";
import { useEffect } from "react";

function App() {
  return (
    <main>
      <Header />
      <Sidebar />
      <ActiveProject />
    </main>
  );
}

export default App;
