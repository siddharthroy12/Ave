import ReactDOM from 'react-dom/client'
import App from './components/screens/App';
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div className="dark-theme">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Homepage</>}/>
        <Route path="/app" element={<App/>}>
          <Route index element={<>Dashboard</>}/>
          <Route path="todo" element={<>Todo</>}/>
          <Route path="expense" element={<>Expense</>}/>
          <Route path="notes" element={<>Notes</>}/>
          <Route path="calendar" element={<>Calendar</>} />
          <Route path="calculator" element={<>Calculator</>} />
          <Route path="noise" element={<>Noise</>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
)
