import airbnb_logo from '../airbnb_logo.png';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="airbnb_Title">
                <a className="navbar-brand" href="airbnb.com">
                    <img className="airbnb_Logo" src={airbnb_logo} alt="airbnb Logo"/>airbnb
                </a>
            </span>
        </nav>
    )
}