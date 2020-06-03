import React, { useContext, Fragment, useEffect } from "react";
import contactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";
import Spinner from "../layout/Spinner";

const Contacts = () => {
  const ContactContext = useContext(contactContext);
  const { contacts, filtered, getContacts, loading } = ContactContext;
  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);
  if (!loading && contacts.length === 0) {
    return <h4>No Contacts to show</h4>;
  }
  return (
    <Fragment>
      {contacts.length !== 0 && !loading ? (
        filtered !== null ? (
          filtered.map((contact) => (
            <ContactItem key={contact._id} contact={contact} />
          ))
        ) : (
          contacts.map((contact) => (
            <ContactItem key={contact._id} contact={contact} />
          ))
        )
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;
