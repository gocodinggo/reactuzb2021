// Stateless functional Components // SFC
const NavBar = ({ numbers }) => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <h1 className='navbar-brend'>
        NavBar
        <span className='badge badge-dark m-2'>{numbers}</span>
      </h1>
    </nav>
  );
};

export default NavBar;
