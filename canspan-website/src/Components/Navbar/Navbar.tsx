import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <div className="nav">
            <div className="nav-logo">CanSpan Construction</div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li className="nav-contact">Contact</li>
            </ul>
        </div>
    )
}

export default Navbar