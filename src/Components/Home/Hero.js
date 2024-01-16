import Button from "./Button";
import "./Hero.css";

export default function Hero() {
  let heroBtnStyle = {
    color: "#FFA200",
    backgroundColor: "white",
    border: "none",
    padding: "15px 50px",
    borderRadius: "5px",
    fontWeight: "600",
    marginRight: "20px",
  };
  let heroBtnStyle2 = {
    ...heroBtnStyle,
    backgroundColor: "#FFA200",
    color: "white",
  };

  return (
    <>
      <div className="heroSection">
        <div className="bgLayer"></div>
        <div className="heroContent">
          <h1>
            <span>Let us find your</span>  
            <span> Forever Food.</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            incidunt quos quia error itaque sequi recusandae enim voluptas
            eaque. Quaerat culpa rem maiores pariatur consequuntur inventore,
            sapiente molestias mollitia illum!
          </p>
          <div className="heroContentBtn">
            <Button buttonData="Search Now" buttonStyle={heroBtnStyle2} />
            <Button buttonData="Know More" buttonStyle={heroBtnStyle} />
          </div>
        </div>
      </div>
    </>
  );
}
