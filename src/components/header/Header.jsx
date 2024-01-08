import User from "../user/User";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar brand" href="">
          TimeTable App
        </a>
        <button className="navbar toggler" type='button' data-bs-toggle='#navbarNavDropdown' aria-controls='navbarNavDropdown'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse justify-content-end' id='navbarNavDropdown'>
          <User/>
        </div>
      </div>
    </nav>
  );
};
export default Header;
