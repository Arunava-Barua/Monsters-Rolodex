import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

export const CardList = function (props) {
  // console.log(props);
  return (
    <section className="card-list">
      {props.monsters.map((monster) => {
        // console.log(monster);
        return <Card key={monster.id} monster={monster} />;
      })}
    </section>
  );
};
