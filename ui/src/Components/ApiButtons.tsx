
import * as React from "react";
import BasicQueries from "../Resources/DataService/BasicQueries";


const ApiButtons = () => {
    return (
      <div>
        <button onClick={(e:any) => (BasicQueries.create("create"))} title="Create"/> 
        <button onClick={(e:any) =>  {BasicQueries.deleteById(2)}} title="Delete by Id"/> 
        <button onClick={(e:any) =>  {BasicQueries.findAll}} title="Find All"/> 
        <button onClick={(e:any) => {BasicQueries.findById(1)}} title="Find By Id"/> 
        <button onClick={(e:any) =>  {BasicQueries.update(2, "updated")}} title="Update"/> 
      </div>
    );
  }
  
  export default ApiButtons;