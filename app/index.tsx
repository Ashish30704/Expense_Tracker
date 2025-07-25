import React from "react";
import "./global.css"; // Import global styles
import Home from "./Screens/Home";

const Index = () => {

  const user = 'Ashu';

  if(user){
    return (
      <Home />

    );
  } 
}
export default Index;