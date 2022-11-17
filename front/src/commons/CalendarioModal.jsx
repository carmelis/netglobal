import React, { useState } from "react";

import ReactDOM from "react-dom";
import moment from "moment";
import Modal from "react-modal";
import DateTimePicker from "react-datetime-picker";
import style from "../assets/styles/commons/CalendarioModal.css";
import { Button } from "react-bootstrap";
import { useModalContext } from "../context/ModalContext";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
const startDate = moment().minutes(0).seconds(0);
export const CalendarioModal = () => {
  const { uiOpen, setUiOpen } = useModalContext();
  const [date, setDate] = useState(startDate.toDate());

  const closeModal = () => {
    setUiOpen(false);
    //Todo: Cerrar el modal, esta fn la voy a usar al final del handleSubmit
  };

  const handleSubmit = () => {
    //Validar fecha e inputs
  };

  const handleDate = (e) => {
    setDate(e);
  };

  return (
    <>
      <Modal
        isOpen={uiOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={200}
        // className="modal"
        overlayClassName="modal-fondo"
      >
        <form>
          <div className="mb-3">
            <label className="form-label">Fecha</label>
            <DateTimePicker
              className="form-control"
              minDate={date}
              onChange={handleDate}
              value={date}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Turno</label>
            <select className="form-select">
              <option value={"Turno Mañana"}>Mañana</option>
              <option value={"Turno Tarde"}>Tarde</option>
              <option value={"Turno Noche"}>Noche</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Estado</label>
            <select className="form-select">
              <option value={"Cancelado"}>Cancelado</option>
              <option value={"pendiente"}>Pendiente</option>
              <option value={"Confirmado"}>Confirmado</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Vigilador</label>
            <select className="form-select">
              {/* aca tengo que mapear los vigiladores  */}

              <option value={"Vigilador 1"}>Juan</option>
              <option value={"Vigilador 2"}>Carlos</option>
              <option value={"Vigilador 3"}>Pablo</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Notas:</label>
            <textarea className="form-control" rows={5} placeholder="Notas.." />
          </div>
          <Button>Guardar</Button>
        </form>
      </Modal>
    </>
  );
};
