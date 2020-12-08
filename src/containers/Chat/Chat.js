import React from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../../components/Layout";

const useStyles = makeStyles((theme) => ({


}));

export default function Chat() {

    const classes = useStyles();

    const msg = [
        {
          id: "123-456",
          text: "Hi"
        },
        {
            id: "789-456",
            text: "Hello"
        },
        {
            id: "123-456",
            text: "How are you?"
          },
      ];
    

    return (
    <div><Layout/>
      <div className="chatWindow" style={{marginLeft: "22vw", marginTop: "20vh"}}>
        <ul className="chat" id="chatList">
          {msg.map(data => (
            <div key={data.id}>
              {data.id === "123-456" ? (
                <li className="self">
                  <div className="msg">
                    <div className="message"> {data.text} </div>
                  </div>
                </li>
              ) : (
                <li className="other">
                  <div className="msg">
                   <div className="message"> {data.text} </div>
                  </div>
                </li>
              )}
            </div>
          ))}
        </ul>
        <div className="chatInputWrapper">
          <form>
            <input
              className="textarea input"
              type="text"
              placeholder="Enter your message..."
            />
          </form>
        </div>
      </div>
      </div>
    );
  }