import React from "react";
import "../preauth";


const Signup= () => {
    if(intern){
  return (
    <>
      <Common head="Want to become intern" />
    </>
  );
}else if(member){
    return (
        <>
       <Common head="Want to become member" />
       </>
   );
}
else{
    return (
        <>
          <Common head="Want to become volunteer" />
        </>
      );
}
export default Signup;
