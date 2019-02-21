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
`;
const SubHeader = styled.small`
  color: ${randomColors()};
`;

function LangGreeter() {
  let greetArrMorning = ["Good Morning", `おはようございます`, `早安`];
  let greetArrPM = [`下午好`, `Good Afternoon`, `こんにちは`];
  let greetArrEvening = [`Good Evening`, `こんばんは`, `晚上好`];
  const hour = moment().format("H");

  if (hour >= 0 && hour <= 11) {
    return (
      <GreetHeader>
        {greetArrMorning[Randomizer(3)]}
        <SubHeader>I am Leon Ho</SubHeader>
      </GreetHeader>
    );
  } else if (hour >= 12 && hour < 17) {
    return (
      <GreetHeader>
        {greetArrPM[Randomizer(3)]} <SubHeader>I am Leon Ho</SubHeader>
      </GreetHeader>
    );
  } else {
    return (
      <GreetHeader>
        {greetArrEvening[Randomizer(3)]} <SubHeader>I am Leon Ho</SubHeader>
      </GreetHeader>
    );
  }
}

const Greeter = () => {
  return <LangGreeter />;
};

export default Greeter;
