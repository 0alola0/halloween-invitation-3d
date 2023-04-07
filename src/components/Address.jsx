import React from 'react';
import Typewriter from "typewriter-effect";


const Address = () => {
    console.log("riddle on")
    return (
        <div className="invite">
          <Typewriter className=""
           onInit={(typewriter)=> {
           typewriter
           .typeString("MEET US IN THE HOUNTED HOUSE ON THE 31TH OF OCTOBER| 0AM | SCARY STR.31a ")
           .start();
           }}
           />
        </div>
      );

}

export default Address;

