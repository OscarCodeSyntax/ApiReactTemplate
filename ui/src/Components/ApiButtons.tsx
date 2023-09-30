import * as React from "react";
import BasicQueries from "../Resources/DataService/BasicQueries";
import { useState } from "react";

const ApiButtons = () => {

  const [screenValue, setscreenValue] = useState<String>("Null");

  async function deleteOnClick()  {
   if(await BasicQueries.deleteById(2)){
    setscreenValue("Deleted")
   }
  }

  async function findAllOnClick () {
    if(await BasicQueries.deleteById(2)) {
    setscreenValue("Found All")
    }
  }

  async function updateOnClick () {
    if(await BasicQueries.update(2, "updated")) {
    setscreenValue("Updated")
    }
  }


  
  return (
    <>
    {screenValue}
      <div>
        <button
          onClick={(e: any) => BasicQueries.create("create").then(setscreenValue)}
          title="Create"
          value= "Create"
        >Create </button>
        <button
          onClick={(e: any) => {
            deleteOnClick()
          }}
          title="Delete By Id"
          value="Delete By Id"
        >Delete By Id </button>
        <button
          onClick={(e: any) => {
            findAllOnClick()
          }}
          title="Find All"
          value="Find All"
        >Find All </button>
        <button
          onClick={(e: any) => {
            BasicQueries.findById(1).then(setscreenValue);
          }}
          title="Find By Id"
          value="Find By Id"
        >Find By Id </button>
        <button
          onClick={(e: any) => {
            updateOnClick()
          }}
          title="Update"
          value="Update"
        >Update </button>
      </div>
      <div></div>
    </>
  );
};

export default ApiButtons;
