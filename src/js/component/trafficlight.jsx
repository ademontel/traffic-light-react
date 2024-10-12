import React, {useState} from "react";

const TrafficLight = () => {
    const [colorSelected, setColorSelected] = useState("red");
    const [colorList, setColorList] = useState(['red','yellow','green']);
    const generateColor = () => {
        const hexColors = "0123456789ABCDEF"
        let color = '#';

        for (let i = 0; i < 6; i++){
            color = color + hexColors[Math.floor(Math.random()*hexColors.length)];
            console.log(colorList);
        }
        return color;
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="bg-dark" style={{width:"30px", height:"200px"}}></div>
            <div className="bg-dark rounded-5 justify-content-evenly flex-column d-flex align-items-center" style={{width:"200px", height:"600px"}}>
                {
                    colorList.map( (color, indexColor) => {
                        return (
                            <div key={indexColor} onClick={() => {
                                setColorSelected(color)
                                }} 
                                className={"rounded-circle " + (colorSelected==color ? "onLight":"")} 
                                style={{width:"150px", height:"150px", backgroundColor: color}}></div>
                        );
                    })
                }
            </div>
            <button className="btn btn-success mt-3" onClick={() => {
                if (colorList.length < 4) {
                    setColorList([...colorList, generateColor() ])
                }
            }}> Generate
            </button>
        </div>
    );
} 

export default TrafficLight;
