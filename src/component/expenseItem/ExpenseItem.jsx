import React from "react";

import {
  ContinerTextDiv,
  LiTextCub,
  LiSpan1,
  LiSpan3,
  LiTitle,
  LiDol,
  LiTextDolP,
} from "./ExpenseItemCss";

function ExpenseItem(props) {
  const { date, title, price } = props;
  const dateMonth = new Date(date).toLocaleString("ru-ru", { month: "long" });

  return (
    <div>
      <ContinerTextDiv>
        <ul>
          <LiTextCub>
            <LiSpan1>{dateMonth}</LiSpan1>
            <LiSpan3>{new Date(date).getFullYear().toString()}</LiSpan3>
            <LiSpan3>{new Date(date).getDate()}</LiSpan3>
          </LiTextCub>
          <LiTitle>{title}</LiTitle>
          <LiDol>
            <LiTextDolP>$ {price}</LiTextDolP>
          </LiDol>
        </ul>
      </ContinerTextDiv>
    </div>
  );
}

export default ExpenseItem;
