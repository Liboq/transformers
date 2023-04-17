import * as React from "react";
import { useState } from "react";

function TrButton(props) {
  const [name, setName] = useState(() => "Alex");

  return (
    <>
      <>
        <div className="button-container">
          <button
            className={` button-color--${props.type} button-size--${props.size}`}
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
          color: white;
          box-shadow: 1px 1px 5px 0px #078afe;
          border-radius: 2px;
        }
        .button-color--primary {
          background: linear-gradient(209deg, #0ebbff 0%, #0685fe 100%);
        }
        .button-color--danger {
          background: #d40000;
        }
        .button-color--normal {
          background: #ffffff;
          color: #000;
        }
        .button-color--info {
          background: #ed6a0c;
        }
        .button-size--samll {
          padding: 3px 8px;
        }
        .button-size--middle {
          padding: 6px 16px;
        }
        .button-size--middle {
          padding: 9px 24px;
        }
      `}</style>
    </>
  );
}

TrButton.defaultProps = { type: "primary", size: "middle" };

export default TrButton;
