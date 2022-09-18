import './index.css';
import {Outlet} from "react-router-dom";
import Sidebar from '@/components/ui/Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Outlet></Outlet>
    </div>
  );
}

export default App;
