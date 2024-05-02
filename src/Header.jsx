import logo from "/public/vite.svg";
import "./styles/Header.css";
import Button from "./components/Button";

function Header() {
  const buttonName = "Get Started";
  return (
    <header>
      <img src={logo} alt="logo" />

      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        <a href="#">Gallery</a>

        <Button bg={"bg-blue-500"} name={buttonName} />
        <Button bg={"bg-blue-500"} name={"Login"} />
      </nav>
    </header>
  );
}

export default Header;
