import React from "react";

const InfoBlock = ({ char }) => {
  // const infoBlock = {
  //   ...char.background,
  //   ...char.stats,
  //   ...char.otherStats,
  //   ...char.life,
  // };
  const {
    background: {
      name,
      level,
      species,
      childhood,
      adolescence,
      avatar,
      adulthood,
      description,
    },
    stats: {
      //both of these have body mind and soul
      power,
      resilience,
    },
    otherStats: {
      advancementsEarned,
      advancementsUnspent,
      corruption,
      damageReduction,
      heroPoints,
      initialBonus,
      prestige,
      tacticalSpeed,
    },
    life: {
      //these all have max and current
      health,
      mana,
      sanity,
    },
  } = char;

  return <div>InfoBlock</div>;
};

export default InfoBlock;
