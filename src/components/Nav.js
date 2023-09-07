import { Link } from 'react-router-dom';

const Nav = ()=>{
    return (
    <nav>
         <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/order-here">Order Here</Link></li>
                <li><Link to="/book-table">Book Table</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
    </nav>);
}

export default Nav;