import Button from "../Button";
import './section2.css'


export default function Section(){
    let heroBtnStyle={
        color:"white",
        backgroundColor: "#4F46E5",
        border:"none",
        padding:"15px 50px",
        borderRadius:"5px",
        fontWeight:"600",
        marginRight: "20px"
      }
    return (
        <div className="section2Container">
        <div data-aos="fade-right" className="section2Img">
       <img  src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
       </div>
        
        <div className="section2TextContainer">
        <div className="section2Text">

        
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
            <Button buttonData="Get in Touch" buttonStyle={
              heroBtnStyle}/>
            </div>
            </div>

        </div>
    )
}