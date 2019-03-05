import React from "react";
import moment from "moment";
import Randomizer from "../utils/Randomizer";
import styled from "styled-components";

// Returns a random color VALUE
function randomColors() {
  const colorArr = [
    "#ce94b8",
    "#af0749",
    "#5e6ec4",
    "#1299e5",
    "#b61bac",
    "#292310"
  ];
  return colorArr[Randomizer(colorArr.length)];
}
const GreetHeader = styled.h1`
  color: ${randomColors()};
  text-align: center;
`;
const SubHeader = styled.p`
  color: ${randomColors()};
  font-size: 22px;
  margin-top: 0;
  text-align: center;
`;

function LangGreeter() {
  let greetArrMorning = ["Good Morning", `おはようございます`, `早安`];
  let greetArrPM = [`下午好`, `Good Afternoon`, `こんにちは`];
  let greetArrEvening = [`Good Evening`, `こんばんは`, `晚上好`];
  const hour = moment().format("H");

  if (hour >= 0 && hour <= 11) {
    return (
      <div>
        <GreetHeader>{greetArrMorning[Randomizer(3)]}</GreetHeader>
        <SubHeader>I am Leon Ho</SubHeader>
      </div>
    );
  } else if (hour >= 12 && hour < 17) {
    return (
      <div>
        <GreetHeader>{greetArrPM[Randomizer(3)]}</GreetHeader>
        <SubHeader>I am Leon Ho</SubHeader>
      </div>
    );
  } else {
    return (
      <div>
        <GreetHeader>{greetArrEvening[Randomizer(3)]}</GreetHeader>
        <SubHeader>I am Leon Ho</SubHeader>
      </div>
    );
  }
}

const Greeter = () => {
  return <LangGreeter />;
};

export default Greeter;
