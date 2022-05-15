import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { selectUser, setErr } from "redux/reducers/authReducer";
import {
  createChar,
  getCharList,
  selectChars,
  selectLoading,
} from "redux/reducers/charReducer";

const CharList = () => {
  const [showModal, setShowModal] = useState(false);

  const [charInfo, setCharInfo] = useState({
    name: "",
    species: "",
    level: 1,
  });
  const loading = useSelector(selectLoading);
  const chars = useSelector(selectChars);
  const userId = useSelector(selectUser);
  const [err, setErr] = useState("");
  const { username } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharList(username));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    setErr("");
    if (!charInfo.name || !charInfo.species)
      return setErr("please fill out name and species");
    dispatch(createChar({ charInfo, userId }));
    return <Navigate to="/char/1" />;
  };

  if (loading) return <h1>LOADING...</h1>;

  return (
    <div>
      <h1>{username}'s Characters</h1>

      <button onClick={() => setShowModal(!showModal)}>
        create a new character
      </button>
      {showModal && (
        <div className="modal">
          {err && <h4>{err}</h4>}
          <button
            onClick={() => {
              setShowModal(false);
            }}
          >
            close
          </button>
          <br />
          <label htmlFor="name">
            name:{" "}
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={charInfo.name}
            />
          </label>
          <br />
          <label htmlFor="species">
            species:{" "}
            <input
              type="text"
              name="species"
              id="species"
              onChange={handleChange}
              value={charInfo.species}
            />
          </label>
          <br />
          <label htmlFor="level">
            level:{" "}
            <input
              type="number"
              name="level"
              min="0"
              id="level"
              onChange={handleChange}
              value={charInfo.level}
            />
          </label>
          <br />
          <button onClick={handleSubmit}>Create</button>
        </div>
      )}

      {chars &&
        chars.map((each, i) => {
          const { background } = each;
          return (
            <Link key={i} to={`/char/${each._id}`}>
              <h3>{background.name}</h3>
              <h5>{background.level + " " + background.species}</h5>
            </Link>
          );
        })}
    </div>
  );
};

export default CharList;
