import React, {Component} from "react";

import './chat.css';
import Layout from "../../components/Layout";


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

class Chat extends Component {
    render() {
        return (<div>
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
        </div>);
    }
}


export default Chat;
