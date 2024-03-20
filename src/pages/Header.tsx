import Menu from "./Menu";

import "./style.css";

const Header = () => {
  return (
    <div className="headerComponent">
      <div className="menu">
        <Menu />
      </div>
      <h1 className="title">Bus Booking App</h1>
    </div>
  );
};

export default Header;
