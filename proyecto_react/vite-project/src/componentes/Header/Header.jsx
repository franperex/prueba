import './Header.css'
function Header(props){
return(
    <header className="header">
        <nav className="navbar">
        {props.children}
        </nav>
     {/* <h1>Hola</h1>*/ }
    </header>
)

}

export default Header;