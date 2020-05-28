import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
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
        phone: "9715425225",
        type: "professional",
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
      {
        id: 4,
        name: "sandy",
        email: "ganesh@gmail.com",
        phone: "222-222-2222",
        type: "personal",
      },
    ],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //   Add contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //   Delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //   Set Current Contact

  //   Clear Current Contact

  //   Update Contact

  //   Filter Contact

  //   Clear Filter

  return (
    <ContactContext.Provider
      value={{ contacts: state.contacts, addContact, deleteContact }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContacState;
