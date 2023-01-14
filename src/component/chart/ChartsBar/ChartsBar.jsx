import React from "react";
import styled from "styled-components";
import {
  ContinerChartBar,
  ContinerChartBar_inner,
  ContinerChartBar_label,
  // ConteinerCart,
} from "./ChartBarCss";

function ChartsBar({ currentPrise, maximumPrise, label }) {
  const fillHeight = (100 * currentPrise) / maximumPrise;

  const ContinerChartBar_fill = styled.div`
    background-color: #4826b9;
    width: 100%;
    transition: all 0.3s ease-out;
    height: ${fillHeight}%;
  `;
  return (
    <ContinerChartBar>
      <ContinerChartBar_inner>
        <ContinerChartBar_fill></ContinerChartBar_fill>
      </ContinerChartBar_inner>
      <ContinerChartBar_label>{label}</ContinerChartBar_label>
    </ContinerChartBar>
  );
}

export default ChartsBar;
