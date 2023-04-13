import * as React from "react";
import { useState, useEffect } from "react";

function TrButton(props) {
  const [name, setName] = useState(() => "Alex");

  useEffect(() => {
    console.log(props.onLog);
  }, []);

  return (
    <>
      <>
        <div className="button-container">
          <button
            className={`button-color-${props.type}`}
            onClick={(event) => props.onLog()}
          >
            {props.children}
          </button>
        </div>
      </>
      <style jsx>{`
        .button-container {
          display: inline-block;
        }
        .button-container + .button-container {
          margin-left: 20px;
        }
        button {
          padding: 6px 16px;
          color: white;
          box-shadow: 1px 1px 5px 0px #078afe;
          border-radius: 2px;
        }
        .button-color-primary {
          background: linear-gradient(209deg, #0ebbff 0%, #0685fe 100%);
        }
        .button-color-danger {
          background: #d40000;
        }
        .button-color-normal {
          background: #ffffff;
          color: #000;
        }
        .button-color-info {
          background: #ed6a0c;
        }
      `}</style>
    </>
  );
}

TrButton.defaultProps = { type: "primary", onLog: () => console.log(777) };

export default TrButton;
