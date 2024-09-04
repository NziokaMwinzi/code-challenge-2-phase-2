import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const addToArmy = (bot) => {
    if (!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const deleteBot = (bot) => {
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setBots(bots.filter((b) => b.id !== bot.id));
      removeFromArmy(bot);
    });
  };

  return (
    <div>
      <YourBotArmy bots={army} removeFromArmy={removeFromArmy} deleteBot={deleteBot} />
      <BotCollection bots={bots} addToArmy={addToArmy} />
    </div>
  );
}

export default BotsPage;
