import React, { useEffect, useState } from "react";
import "./modal.css";
import uuid from "react-uuid";

const Modal = ({ modalSettings }) => {
  const { isOpen, action, type, initialData, buttonText } = modalSettings;

  const [formData, setFormData] = useState(
    type === "edit"
      ? { ...initialData }
      : {
          name: "",
          lastName: "",
          mail: "",
          phone: "",
        }
  );

  useEffect(() => {
    if (initialData)
      setFormData({
        ...initialData,
      });
    else
      setFormData({
        name: "",
        lastName: "",
        mail: "",
        phone: "",
      });
  }, [initialData]);

  const showModal = () => {
    return isOpen ? "open" : "closed";
  };

  const handleNameChange = (event) => {
    const val = event.target.value;
    setFormData({
      ...formData,
      name: val,
    });
  };

  const handleLastNameChange = (event) => {
    const val = event.target.value;
    setFormData({
      ...formData,
      lastName: val,
    });
  };

  const handleMailChange = (event) => {
    const val = event.target.value;
    setFormData({
      ...formData,
      mail: val,
    });
  };

  const handlePhoneChange = (event) => {
    const val = event.target.value;
    setFormData({
      ...formData,
      phone: val,
    });
  };

  const checkNullOrEmpty = () => {
    return (
      formData.lastName != null &&
      formData.lastName !== "" &&
      formData.name != null &&
      formData.name !== "" &&
      formData.mail != null &&
      formData.mail !== "" &&
      formData.phone != null &&
      formData.phone !== ""
    );
  };

  const handleAddContact = () => {
    if (checkNullOrEmpty()) {
      console.log(formData);
      const newId = uuid();
      action({
        id: newId,
        ...formData,
      });
      setFormData({
        lastName: "",
        name: "",
        mail: "",
        phone: "",
      });
    } else alert("missing some field/s");
  };

  const handleEditContact = () => {
    if (checkNullOrEmpty()) {
      action({ ...formData });
    } else alert("missing some field/s");
  };

  const handleClick = () => {
    if (type === "edit") {
      handleEditContact();
    } else {
      handleAddContact();
    }
  };

  return (
    <div className={`modal ${showModal()}`}>
      <h3>Dodaj novi zapis</h3>
      <form className="formAddNew">
        <input
          type="text"
          className="name"
          placeholder="Ime"
          value={formData.name}
          onChange={handleNameChange}
        />

        <input
          type="text"
          className="lastName"
          placeholder="Prezime"
          value={formData.lastName}
          onChange={handleLastNameChange}
        />

        <input
          type="email"
          className="mail"
          placeholder="Email"
          value={formData.mail}
          onChange={handleMailChange}
        />

        <input
          type="tel"
          className="phone"
          placeholder="Broj telefona"
          value={formData.phone}
          onChange={handlePhoneChange}
        />
      </form>

      <button className="input-submit" onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Modal;
