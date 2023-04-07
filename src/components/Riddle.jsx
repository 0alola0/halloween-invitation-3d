import React from 'react';
import Typewriter from "typewriter-effect";


const Riddle = () => {
    console.log("riddle on")
    return (
        <div className="riddle">
          <Typewriter className=""
           onInit={(typewriter)=> {
           typewriter
           .typeString("CONGRATULATIONS! YOU HAVE BEEN INVITED TO THE BEST HALLOWEEN PARTY!")
           .pauseFor(1000)
           .deleteAll()
           .typeString("BUUUUT")
           .deleteAll()
           .typeString("YOU HAVE TO COMPLETE A QUEST TO RECEIVE YOUR INVITATION: I HAVE BEEN STUCK HERE FOR DECADES! PULL ME OUT AND I WILL GIVE YOU AN INVITATION!")
           .start();
           }}
           />
        </div>
      );

}

export default Riddle;

