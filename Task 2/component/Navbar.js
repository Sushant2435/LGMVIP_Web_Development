import "./Navbar.css"
const Navbar = ({ onSetIsClicked }) => {
    const clicked = () => {
        onSetIsClicked(1);
    }
    return (
        <div className="Navbar">
            <ul>
                <li className="brand">LGM Users</li>
                <button onClick={clicked}className="button button1">Get Users</button>
            </ul>
        </div>
    )
}
export default Navbar;