import './Header.css'
import Button from './Button'

function Header() {
  let buttonStyl={
  backgroundColor: "#1D4ED8", 
 color: "white",
 fontWeight: "bold",
 padding: "10px 12px",
 borderRadius: "5px",
 fontSize: "16px",
 border: "none"
  }
  return (
    <>
     <nav className="Navbar">
      <div className="navContent">
      <div className="logo">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
        <h2>GeekFoods</h2>
      </div>

      <div className="navTabs">
        <link to="/">Home</link>
        <link to="/Quote">Quote</link>
        <link to="/Restaurants">Resturants</link>
        <link to="/Foods">Foods</link>
        <link to="/Contact">Contact</link>
      </div>

      <div className="navBtn">
          <Button buttonData="Get Started" buttonStyle={buttonStyl}/>
      </div>
      </div>
     </nav>
    </>
  );
}
export default Header;
