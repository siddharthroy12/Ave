import './index.css';
import AppLogo from '@/assets/AppLogo.svg';
import {
  GridOutline,
  CheckmarkDoneOutline,
  WalletOutline,
  PencilOutline,
  CalendarOutline,
  CalculatorOutline,
  HeadsetOutline
} from 'react-ionicons'
import {
  Link
} from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <img src={AppLogo} alt="App Logo" className="sidebar__app-logo"/>
      </div>
      <Link to="/app" className="sidebar__item selected">
        <GridOutline />
      </Link>
      <Link to="/app/todo" className="sidebar__item">
        <CheckmarkDoneOutline />
      </Link>
      <Link to="/app/expense" className="sidebar__item">
        <WalletOutline />
      </Link>
      <Link to="/app/notes" className="sidebar__item">
        <PencilOutline />
      </Link>
      <Link to="/app/calendar" className="sidebar__item">
        <CalendarOutline />
      </Link>
      <Link to="/app/calculator" className="sidebar__item">
        <CalculatorOutline />
      </Link>
      <Link to="/app/noise" className="sidebar__item">
        <HeadsetOutline />
      </Link>
    </div>
  );
}

export default Sidebar;
