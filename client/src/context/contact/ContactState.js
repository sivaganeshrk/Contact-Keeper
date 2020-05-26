import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from "../types";

const ContacState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Siva Ganesh",
        email: "sivadoog0808@gmail.com",
        phone: "97152425225",
        type: "personal",
      },
      {
        id: 2,
        name: "Siva",
        email: "siva@gmail.com",
        phone: "111-111-1111",
        type: "personal",
      },
      {
        id: 3,
        name: "Ganesh",
        email: "ganesh@gmail.com",
        phone: "222-222-2222",
        type: "personal",
      },
    ],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //   Add contact

  //   Delete contact

  //   Set Current Contact

  //   Clear Current Contact

  //   Update Contact

  //   Filter Contact

  //   Clear Filter

  return (
    <ContactContext.Provider vale={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContacState;
