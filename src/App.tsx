import { Toaster } from "react-hot-toast";


import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="bg-gray-100 dark:bg-slate-900 h-screen">
       <Toaster />
      <Projects />
    </div>
  );
}

export default App;