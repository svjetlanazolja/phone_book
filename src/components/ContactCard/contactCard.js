import React from "react";
import imagePen from "../../images/pen.png";
import imageBucket from "../../images/bucket.png";

const ContactCard = (props) => {
  const { id, name, lastName, mail, phone } = props.contact;
  return (
    <tr className="item">
      <td className="header">{name}</td>
      <td>{lastName}</td>
      <td>{mail}</td>
      <td>{phone}</td>
      <td>
        <img
          className="tableImagee1"
          src={imagePen}
          height={15}
          width={15}
          onClick={() => {
            props.handleEditClick({
              ...props.contact,
            });
          }}
        />
        <img
          className="tableImage2"
          src={imageBucket}
          height={15}
          width={15}
          onClick={() => props.clickHandler(id)}
        />
      </td>
    </tr>
  );
};

export default ContactCard;
