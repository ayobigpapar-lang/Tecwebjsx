function Header({ darkMode, onToggle }) {
    return (
        <header className="header">
            <h1 className="header__logo">🎬 Club de Videos</h1>
            <button 
                className="header__toggle"
                onClick={onToggle}
            >
                {darkMode ? '☀️' : '🌙'}
            </button>
        </header>
    );
}
export default Header;