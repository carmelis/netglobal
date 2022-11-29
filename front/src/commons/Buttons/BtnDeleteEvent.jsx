import React from "react";
import { Button } from "react-bootstrap";
import style from "../../assets/styles/commons/BtnDeleteEvent.module.scss";
import { BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { eventDeleted, setUiOpen } from "../../store/slices";

export default function BtnDeleteEvent() {
  const dispatch = useDispatch();
  const { activeEvent } = useSelector((state) => state.calendar);

  const handleDelete = () => {
    dispatch(eventDeleted(activeEvent));
    dispatch(setUiOpen(false));
  };

  return (
    <Button className={`btn btn-danger `} onClick={handleDelete}>
      <BiTrash />
      <span>Borrar </span>
    </Button>
  );
}
