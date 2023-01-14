import React from "react";
import { useState } from "react";
import Button from "../UL/button/Button";
import FormInput from "../UL/forminput/FormInput";
import {
  DivbuttonExspensForm,
  DivLisConteiner,
  FormConteiner,
} from "./ExspensFormCss";
// import { Button } from "../UL/button//";


function ExspensForm({ onNewExpenseAdd, onShowForm }) {
  const [title, setTitle] = useState("");
  const [date, setdate] = useState("");
  const [price, setprice] = useState("");

  const canselHanler = (event) => {
    event.preventDefault();
    onShowForm();
  };

  const titleInputChangeHamdler = (event) => {
    setTitle(event.target.value);
  };

  const priceInputChangeHamdler = (event) => {
    setprice(event.target.value);
  };

  const dateInputChangeHamdler = (event) => {
    setdate(event.target.value);
  };

  const saveHandler = (event) => {
    event.preventDefault();

    const expenseDate = {
      title,
      date: new Date(date),
      price: +price,
    };

    onNewExpenseAdd(expenseDate);

    setTitle("");
    setprice("");
    setdate("");
  };

  return (
    <DivLisConteiner>
      <FormConteiner>
        <FormInput
          id="name"
          labelName="Заголовок"
          inputType="text"
          placeholder="Введите название"
          value={title}
          onChange={titleInputChangeHamdler}
        />

        <FormInput
          id="price"
          labelName="Количество"
          inputType="number"
          value={price}
          onChange={priceInputChangeHamdler}
        />

        <FormInput
          id="date"
          labelName="Датировать"
          inputType="date"
          placeholder="дд.мм.гггг"
          value={date}
          onChange={dateInputChangeHamdler}
        />

        <DivbuttonExspensForm>
          <Button title="Отмена" onClick={canselHanler} />
          <Button
            title="Добавить расходы"
            onClick={saveHandler}
            value={date}
          />
        </DivbuttonExspensForm>
      </FormConteiner>
    </DivLisConteiner>
  );
}

export default ExspensForm;
