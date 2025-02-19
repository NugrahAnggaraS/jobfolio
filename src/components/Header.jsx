import '../styles/header.css';

function Header() {
    return(
        <div className="header">
            <div className="brand">
                <div className="logo"></div>
                <h1>JobFolio</h1>
            </div>
            <nav>
                <ol>
                    <li><a href="">Post Job</a></li>
                    <li><a href="">Salaries</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Employees</a></li>
                    <li><a href="">About Us</a></li>
                </ol>
            </nav>

            <button id='sign-up'>Sign Up</button>
        </div>
    );
}

export default Header;