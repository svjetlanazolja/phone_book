import React from "react";
import styles from "./main.module.css";
import Button from "../Button/buttonPhone";
import Modal from "../Modal/modal";
import Table from "../Table/table";

const Main = () => {
  return (
    <div className={styles.Main}>
      <p>test main</p>
      <Button />
      <Table />
      <Modal />
    </div>
  );
};

export default Main;
