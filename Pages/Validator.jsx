import React from 'react'
import { isValidUsername } from '6pp'
const userNameValidator = (username) => {

    let isValid = true;
    let errorMessage = "";
    if (!isValidUsername(username)) {
        isValid = false;
        errorMessage = "Username is invalid";
      }

  return {
        isValid, errorMessage
      
  
}}

export default userNameValidator