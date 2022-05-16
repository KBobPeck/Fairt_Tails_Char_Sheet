import EquipBlock from "Components/EquipBlock";
import InfoBlock from "Components/InfoBlock";
import SkillsBlock from "Components/SkillsBlock";
import StatsBlock from "Components/StatsBlock";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getChar, selectChar } from "redux/reducers/charReducer";

const Char = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const char = useSelector(selectChar);
  const tabs = ["info", "equipment", "stats", "skills"];
  // const [err, setErr] = useState(false);
  const [tab, setTab] = useState("info");

  useEffect(() => {
    if (char !== {}) dispatch(getChar(id));
    //eslint-disable-next-line
  }, []);

  // if (err) return <div>404 CHAR NOT FOUND</div>;

  return (
    <div>
      <div className="tabs">
        {tabs.map((each, i) => (
          <button onClick={() => setTab(each)} key={i}>
            {each}
          </button>
        ))}
      </div>
      {tab === "info" && <InfoBlock char={char} />}
      {tab === "equipment" && <EquipBlock char={char} />}
      {tab === "stats" && <StatsBlock char={char} />}
      {tab === "skills" && <SkillsBlock char={char} />}
    </div>
  );
};

export default Char;
