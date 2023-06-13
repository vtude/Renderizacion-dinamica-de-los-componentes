import React, { useState } from 'react';
import './Input.css';
import Form from 'react-bootstrap/Form';

export const Input = ({ onChangeInput, placeholder, className }) => {

  return (
    <Form.Control
      type="text"
      className={className}
      placeholder={placeholder}
      onChange={(e) =>  onChangeInput(e)}
    />
  );

};


