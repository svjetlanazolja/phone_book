import React from "react";
import styles from "./table.css";
// import imagePen from "../../images/pen.png";
// import imageBucket from "../../images/bucket.png";
import ContactCard from "../ContactCard/contactCard";

const Table = (props) => {
  const renderContactList = () => {
    return props.contacts.map((contact) => {
      return (
        <ContactCard
          key={contact.id}
          contact={contact}
          clickHandler={deleteContact}
          clickEdit={handleEditing}
          handleEditClick={props.openEditModal}
        />
      );
    });
  };

  const deleteContact = (id) => {
    props.getContactId(id);
  };

  const handleEditing = () => {};

  return (
    // <div className={styles.table}>
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>Ime</th>
            <th>Prezime</th>
            <th>Email</th>
            <th>Broj Telefona</th>
            <th>Akcija</th>
          </tr>
        </thead>
        <tbody>{renderContactList()}</tbody>
      </table>
    </div>
  );
};

export default Table;
