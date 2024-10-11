import React, {useState} from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("red");
    return (
        <div className="d-flex flex-column align-items-center">
            <div className="bg-dark" style={{width:"30px", height:"200px"}}></div>
            <div className="bg-dark rounded-5 justify-content-evenly flex-column d-flex align-items-center" style={{width:"200px", height:"600px"}}>
                <div onClick={() => {
                    setColor("red")
                }} className={"bg-danger rounded-circle " + (color=="red" ? "onLightRed":"")} style={{width:"150px", height:"150px"}}></div>
                <div onClick={() => {
                    setColor("yellow")
                }} className={"bg-warning rounded-circle " + (color=="yellow" ? "onLightYellow":"")} style={{width:"150px", height:"150px"}}></div>
                <div onClick={() =>{
                    setColor("green")
                }} className={"bg-success rounded-circle " + (color=="green" ? "onLightGreen":"")} style={{width:"150px", height:"150px"}}></div>
            </div>
        </div>
    );
} 

export default TrafficLight;
