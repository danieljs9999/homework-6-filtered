import React from "react";
import ChartsBar from "./ChartsBar/ChartsBar";
import styled from "styled-components";

function Chart({ items }) {
  const maximumPrise = 2000;

  const months = [
    { label: "Январь", currentPrise: 0 },
    { label: "Февраль", currentPrise: 0 },
    { label: "Март", currentPrise: 0 },
    { label: "Апрель", currentPrise: 0 },
    { label: "Май", currentPrise: 0 },
    { label: "Июнь", currentPrise: 0 },
    { label: "Июль", currentPrise: 0 },
    { label: "Август", currentPrise: 0 },
    { label: "Сентябрь", currentPrise: 0 },
    { label: "Октябрь", currentPrise: 0 },
    { label: "Ноябрь", currentPrise: 0 },
    { label: "Декабрь", currentPrise: 0 },
  ];

  items.forEach((item) => {
    const monthNumber = new Date(item.date).getMonth();
    months[monthNumber].currentPrise += item.price;
  });

  return (
    <ConteinerCart>
      {months.map((item) => {
        return (
          <ChartsBar
            key={item.label}
            label={item.label}
            currentPrise={item.currentPrise}
            maximumPrise={maximumPrise}
          />
        );
      })}
    </ConteinerCart>
  );
}

export default Chart;

const ConteinerCart = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
  margin: 0px 10px 0px 10px;
`;
