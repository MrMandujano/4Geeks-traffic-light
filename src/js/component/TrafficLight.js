import React, { useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("");
    return (
        <div className="">
			<div className="stick"></div>
			<div className="lights">
				<div
					onClick={() => {
						setColor("red");
					}}
					className="red-light"
					style={{
						backgroundColor: color === "red" ? "black" : "red",
					}}></div>

				<div
					onClick={() => {
						setColor("yellow");
					}}
					className="yellow-light"
					style={{
						backgroundColor: color === "yellow" ? "black" : "yellow",
					}}></div>

				<div
					onClick={() => {
						setColor("green");
					}}
					className="green-light"
					style={{
						backgroundColor: color === "green" ? "black" : "green",
					}}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
 