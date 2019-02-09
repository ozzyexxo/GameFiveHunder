import React, { Component } from "react";

const Chatkit_message = props => {
  return (
    <div>
      {props.msg.senderId}
      {": "}
      {props.msg.text}
    </div>
  );
};

export default Chatkit_message;
