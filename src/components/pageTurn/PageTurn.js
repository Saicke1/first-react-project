import React, { useContext, useState } from "react";
import "./PageTurn.css";
import Pagination from "react-bootstrap/Pagination";
import { storedStates } from "../useContext/UseContext";
import PopUp from "../popUp/PopUp";

const PageTurn = () => {
  const { page } = useContext(storedStates);
  const pageNumber = page[0];
  const setPageNumber = page[1];

  const { popping } = useContext(storedStates);
  const popUp = popping[0];
  const setPopUp = popping[1];
  /*   console.log("popUp", popUp); */

  function handleClickFirst() {
    setPageNumber(pageNumber - pageNumber + 1);
    console.log("pageNumber", pageNumber);
  }

  function handleClickDown() {
    if (pageNumber - 1 < 1) {
      console.log("Nummer ist unter 1!!");
      togglePopup();
    } else {
      setPageNumber(pageNumber - 1);
      console.log("pageNumber", pageNumber);
    }
  }

  function handleClickUp() {
    if (pageNumber + 1 > 32) {
      console.log("Nummer ist über 32!");
      togglePopup();
    } else {
      setPageNumber(pageNumber + 1);
      console.log("pageNumber", pageNumber);
    }
  }

  function handleClickLast() {
    setPageNumber(pageNumber - pageNumber + 32);
    console.log("pageNumber", pageNumber);
  }

  function togglePopup() {
    console.log("This page doesn't exist!");
    setPopUp(true);
  }

  return (
    <div>
      <Pagination size="sm" className="paginationSizing">
        <Pagination.First onClick={() => handleClickFirst()} />
        <Pagination.Prev onClick={() => handleClickDown()} />
        ...
        <Pagination.Item active>{pageNumber}</Pagination.Item>
        ...
        <Pagination.Next onClick={() => handleClickUp()} />
        <Pagination.Last onClick={() => handleClickLast()} />
      </Pagination>

      {popUp && <PopUp />}

      {console.log("Invinite loop?")}
    </div>
  );
};

export default PageTurn;
