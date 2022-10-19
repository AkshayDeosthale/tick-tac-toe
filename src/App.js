import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [usedPosition, setUsedPosition] = useState([]);
  const [moves, setSoves] = useState("X");
  const [newPosi, setnewPosi] = useState();

  useEffect(() => {
    if (usedPosition) {
      let xcount = 0;
      let ycount = 0;
      let diag = 0;
      for (let index = 0; index < usedPosition.length; index++) {
        usedPosition[index]["x"] === 0 && xcount++;
        usedPosition[index]["y"] === 0 && ycount++;
        usedPosition[index]["y"] & (usedPosition[index]["x"] === 0) && diag++;
        usedPosition[index]["y"] & (usedPosition[index]["x"] === 1) && diag++;
        usedPosition[index]["y"] & (usedPosition[index]["x"] === 2) && diag++;
      }
      if (xcount === 3 || ycount === 3 || diag === 3) {
        console.log("victory");
      }
    }
  }, [usedPosition]);

  console.log({ usedPosition });

  return (
    <div
      className="App"
      style={{
        display: "flex",
      }}
    >
      <div>
        <div
          style={{
            height: "150px",
            width: "150px",
            //border: "1px black solid",
            display: "flex",
            flexDirection: "column",
            marginRight: "20px",
          }}
        >
          {/* row 1 */}
          <div
            style={{
              height: "150px",
              width: "150px",
              border: "1px black solid",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  height: "50px",
                  width: "50px",
                  border: "1px black solid",
                }}
                onClick={() => {
                  setUsedPosition((usedPosition) => {
                    return [...usedPosition, { x: 0, y: 0, char: moves }];
                  });
                  setnewPosi({ x: 0, y: 0, char: moves });
                  setSoves(moves === "X" ? "O" : "X");
                }}
              >
                {usedPosition.map((posi) =>
                  posi["x"] === 0 && posi["y"] === 0 ? posi["char"] : null
                )}
              </div>
              <div
                style={{
                  height: "50px",
                  width: "50px",
                  border: "1px black solid",
                }}
                onClick={() => {
                  setUsedPosition((usedPosition) => {
                    return [...usedPosition, { x: 1, y: 0, char: moves }];
                  });
                  setnewPosi({ x: 1, y: 0, char: moves });
                  setSoves(moves === "X" ? "O" : "X");
                }}
              >
                {usedPosition.map((posi) =>
                  posi["x"] === 1 && posi["y"] === 0 ? posi["char"] : null
                )}
              </div>
              <div
                style={{
                  height: "50px",
                  width: "50px",
                  border: "1px black solid",
                }}
                onClick={() => {
                  setUsedPosition((usedPosition) => {
                    return [...usedPosition, { x: 2, y: 0, char: moves }];
                  });
                  setnewPosi({ x: 2, y: 0, char: moves });
                  setSoves(moves === "X" ? "O" : "X");
                }}
              >
                {" "}
                {usedPosition.map((posi) =>
                  posi["x"] === 2 && posi["y"] === 0 ? posi["char"] : null
                )}
              </div>
            </div>
          </div>
          {/* row 2 */}
          <div
            style={{
              display: "flex",
              border: "1px black solid",
            }}
          >
            <div
              style={{
                height: "50px",
                width: "50px",
                border: "1px black solid",
              }}
              onClick={() => {
                setUsedPosition((usedPosition) => {
                  return [...usedPosition, { x: 0, y: 1, char: moves }];
                });
                setnewPosi({ x: 0, y: 1, char: moves });
                setSoves(moves === "X" ? "O" : "X");
              }}
            >
              {" "}
              {usedPosition.map((posi) =>
                posi["x"] === 0 && posi["y"] === 1 ? posi["char"] : null
              )}
            </div>
            <div
              style={{
                height: "50px",
                width: "50px",
                border: "1px black solid",
              }}
              onClick={() => {
                setUsedPosition((usedPosition) => {
                  return [...usedPosition, { x: 1, y: 1, char: moves }];
                });
                setnewPosi({ x: 1, y: 1, char: moves });
                setSoves(moves === "X" ? "O" : "X");
              }}
            >
              {" "}
              {usedPosition.map((posi) =>
                posi["x"] === 1 && posi["y"] === 1 ? posi["char"] : null
              )}
            </div>
            <div
              style={{
                height: "50px",
                width: "50px",
                border: "1px black solid",
              }}
              onClick={() => {
                setUsedPosition((usedPosition) => {
                  return [...usedPosition, { x: 2, y: 1, char: moves }];
                });
                setnewPosi({ x: 2, y: 1, char: moves });
                setSoves(moves === "X" ? "O" : "X");
              }}
            >
              {" "}
              {usedPosition.map((posi) =>
                posi["x"] === 2 && posi["y"] === 1 ? posi["char"] : null
              )}
            </div>
          </div>
          {/* row 3 */}
          <div
            style={{
              height: "150px",
              width: "150px",
              border: "1px black solid",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  height: "50px",
                  width: "50px",
                  border: "1px black solid",
                }}
                onClick={() => {
                  setUsedPosition((usedPosition) => {
                    return [...usedPosition, { x: 0, y: 2, char: moves }];
                  });
                  setSoves(moves === "X" ? "O" : "X");
                }}
              >
                {" "}
                {usedPosition.map((posi) =>
                  posi["x"] === 0 && posi["y"] === 2 ? posi["char"] : null
                )}
              </div>
              <div
                style={{
                  height: "50px",
                  width: "50px",
                  border: "1px black solid",
                }}
                onClick={() => {
                  setUsedPosition((usedPosition) => {
                    return [...usedPosition, { x: 1, y: 2, char: moves }];
                  });
                  setSoves(moves === "X" ? "O" : "X");
                }}
              >
                {" "}
                {usedPosition.map((posi) =>
                  posi["x"] === 1 && posi["y"] === 2 ? posi["char"] : null
                )}
              </div>
              <div
                style={{
                  height: "50px",
                  width: "50px",
                  border: "1px black solid",
                }}
                onClick={() => {
                  setUsedPosition((usedPosition) => {
                    return [...usedPosition, { x: 2, y: 2, char: moves }];
                  });
                  setSoves(moves === "X" ? "O" : "X");
                }}
              >
                {usedPosition.map((posi) =>
                  posi["x"] === 2 && posi["y"] === 2 ? posi["char"] : null
                )}
              </div>
            </div>
          </div>
        </div>
        <button
          style={{ marginTop: "30px" }}
          onClick={() => setUsedPosition([])}
        >
          Reset
        </button>
      </div>

      {/* buttons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          next player : {moves !== "X" ? "O" : "X"}
          <button onClick={() => setSoves(moves === "X" ? moves : "X")}>
            Toggle moves
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            1.
            <button onClick={() => setUsedPosition([])}>
              Go to game start(0,0)
            </button>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            2. <button>Go to move #1 (1,1)</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
