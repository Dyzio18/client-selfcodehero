import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gameActions } from '../_actions';

function AddGame() {
  const user = useSelector((state) => state.authentication.user.user);
  const jsonEditorRef = useRef();
  const dispatch = useDispatch();
  const [game, setGame] = useState({});

  useEffect(() => {
    if (game) {
      setGame(basicGame());
    }
  }, []);

  const basicGame = () => {
    return {
      name: 'Basic Game',
      email: user.email,
      desc: 'lorem ipsum',
      badges: [
        {
          name: 'randomWords',
          desc: 'randomLoremWords',
          url: 'https:/google.com',
          data: {
            btc: 999,
          },
        },
      ],
    };
  };

  const editorGame = (e) => {
    let editorGame;
    try {
      editorGame = JSON.parse(e.target.value);
      setGame(editorGame);
    } catch (error) {
      return false;
    }
  };

  const createGame = (data) => {
    const obj = game;
    Object.assign(obj, data);
    setGame(obj);
    jsonEditorRef.current.value = JSON.stringify(game, null, 2);
    return obj;
  };

  const saveGame = () => {
    const data = game;
    dispatch(gameActions.addGame(data));
  };

  return (
    <>
      <div className="row mt-3 justify-content-end">
        <div className="col-md-12 mb-4 ">
          <button className="btn btn-primary btn-lg" onClick={() => saveGame()}>
            Save game
          </button>
        </div>

      </div>
      <p className=" ">
        Popular template:
      </p>
      <div className="row">
        <div className="col-md-6 ">
          <button className="btn btn-outline-primary" onClick={() => createGame({ name: 'Habits Rutine' })}>
            Habits
          </button>
          <button className="btn btn-outline-primary" onClick={() => createGame({ name: 'Sport Template' })}>
            Sport
          </button>
          <button className="btn btn-outline-primary" onClick={() => setGame(createGame({ name: 'Team Game' }))}>
            Team Game
          </button>
        </div>

      </div>

      <div className="row">

        <div className="accordion mt-5 col-sm-12 col-md-12" id="devToolsAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="devTools">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#devToolsCollapse" aria-expanded="false" aria-controls="devToolsCollapse">
                Details for developers
              </button>
            </h2>
            <div id="devToolsCollapse" className="accordion-collapse collapse" aria-labelledby="devTools" data-bs-parent="#devToolsAccordion">
              <div className="accordion-body row">
                <textarea
                  ref={jsonEditorRef}
                  id="noter-text-area"
                  name="textarea"
                  value={JSON.stringify(game, null, 2)}
                  cols="50"
                  rows="20"
                  onChange={editorGame}
                />
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export { AddGame };
