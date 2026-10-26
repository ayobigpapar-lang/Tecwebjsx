function Header({ darkMode, onToggle }) {
  return (
    <header className="header">
      <h1 className="header__logo">Club de videos</h1>
      <button 
        className="header__toggle"
        onClick={onToggle}
      >{darkMode ? 'claro' :'oscuro'}  Dark Mode</button>
    </header>
  );
}

export default Header;
