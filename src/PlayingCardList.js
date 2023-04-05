import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import PlayingCard from "./PlayingCard";
import useAxios from "./hooks/useAxios";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [responses, getData] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/")


  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => getData()}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {responses.map(response => (
          <PlayingCard key={uuid()} front={response.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
