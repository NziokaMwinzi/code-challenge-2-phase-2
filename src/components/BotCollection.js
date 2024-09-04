import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, addToArmy }) {
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleClick={() => addToArmy(bot)} />
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
