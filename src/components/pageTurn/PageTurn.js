import React, { useContext, useState } from "react";
import "./PageTurn.css";
import Pagination from "react-bootstrap/Pagination";
import PopUp from "../popUp/PopUp";
import { togglePopup } from "../useContext/PopUpContext";
import { pageNumbers } from "../useContext/PagesContext";

const PageTurn = () => {
  const [popUp, setPopUp] = useContext(togglePopup);
  const [pageNumber, setPageNumber] = useContext(pageNumbers);

  function handleClickFirst() {
    setPageNumber(pageNumber - pageNumber + 1);
    console.log("pageNumber", pageNumber);
  }

  function handleClickDown() {
    if (pageNumber - 1 < 1) {
      console.log("Nummer ist unter 1!!");
      changeStatePopup();
    } else {
      setPageNumber(pageNumber - 1);
      console.log("pageNumber", pageNumber);
    }
  }

  function handleClickUp() {
    if (pageNumber + 1 > 32) {
      console.log("Nummer ist über 32!");
      changeStatePopup();
    } else {
      setPageNumber(pageNumber + 1);
      console.log("pageNumber", pageNumber);
    }
  }

  function handleClickLast() {
    setPageNumber(pageNumber - pageNumber + 32);
    console.log("pageNumber", pageNumber);
  }

  function changeStatePopup() {
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
