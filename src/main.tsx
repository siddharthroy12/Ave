import ReactDOM from 'react-dom/client'
import App from './components/screens/App';
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
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
  </Provider>
)
