import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <div className="nav">
            <a href="/" className="nav-logo">Canspan Construction</a>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a>Past Projects</a>
                </li>
                <li>
                    <a href="/aboutpage">About</a>
                </li>
                <li className="nav-contact">
                    <a href="/contactpage">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar