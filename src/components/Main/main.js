import React, { useState, useEffect } from "react";
import Modal from "../Modal/modal";
import Table from "../Table/table";
import ImageVector from "../../images/Vector.png";
import "./main.css";
import Button from "../Button/button";

// const contacts = [
//   {
//     id: "1",
//     name: "Svjetlana",
//     lastName: "Žolja",
//     mail: "svjetlanazolja@gmail.com",
//     phone: 4567890987654,
//   },
//   {
//     id: "2",
//     name: "Svjetlanaaaaa",
//     lastName: "Žoljaaaaa",
//     mail: "svjetlanazoljaaaaaa@gmail.com",
//     phone: 4444444444444,
//   },
// ];

const Main = () => {
  const [modalSettings, setModalSettings] = useState({
    isOpen: false,
    action: null,
    type: null,
    initialData: null,
    buttonText: null,
  });

  const [contacts, setContacts] = useState(getInitialContacts, []);

  const resetModal = () => {
    setModalSettings({
      isOpen: false,
      action: null,
      type: null,
      initialData: null,
      buttonText: null,
    });
  };

  const addContact = (contact) => {
    setContacts((previousState) => [contact, ...previousState]);
    resetModal();
  };

  // const myContacts = [
  //   { name: "MILOS", number: 1 },
  //   { name: "CECA", number: 2 },
  //   { name: "MICKO", number: 3 },
  // ];
  // const filteredContacts = myContacts.filter((contact) => contact.number != 1);
  // console.log("myContacts", myContacts);
  // console.log("filteredContacts", filteredContacts);

  function getInitialContacts() {
    const temp = localStorage.getItem("contacts");
    const savedContacts = JSON.parse(temp);
    return savedContacts || [];
  }

  useEffect(() => {
    const temp = JSON.stringify(contacts);
    localStorage.setItem("contacts", temp);
  }, [contacts]);

  const removeContact = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  const editContact = (contact) => {
    setContacts(
      contacts.map((c) => {
        if (c.id === contact.id) {
          return contact;
        }
        return c;
      })
    );
    resetModal();
  };

  const openAddModal = () => {
    setModalSettings({
      isOpen: true,
      action: addContact,
      buttonText: "Dodaj",
      initialData: null,
      type: "add",
    });
  };

  const openEditModal = (initialData) => {
    setModalSettings({
      isOpen: true,
      action: editContact,
      buttonText: "Izmijeni",
      initialData,
      type: "edit",
    });
  };

  return (
    <div className="mainFlex">
      <div className="mainHeaderContainer">
        <div className="mainHeader">
          <div className="contactImage">
            <img src={ImageVector} height={20} width={33} />
            <h1>Kontakti</h1>
          </div>
          {/* <button className={styles.addNewButton}>Dodaj Novi</button> */}

          <Button action={openAddModal} text="Dodaj novi" />
        </div>

        <div className="table">
          <Table
            contacts={contacts}
            getContactId={removeContact}
            openEditModal={openEditModal}
          />
        </div>
      </div>

      <div className="mainContainer">
        {modalSettings.isOpen && <Modal modalSettings={modalSettings} />}
      </div>
    </div>
  );
};

export default Main;
