import React from "react";
import './todo.css';
import { useState } from "react";
import {MdDeleteOutline} from 'react-icons/md'

export function Todo (){
    const [list,setList]=useState<string[]>([]);
    const [task,setTask]=useState("");

    const handleSubmit=()=>{
        if(task){
            setList([task,...list])
            setTask("")
        }
        else{
            window.alert("enter task in input value");
        }
        }
    
        const deleteItem=(index:number)=>{
            const newTasks:string[]= [...list];
            newTasks.splice(index, 1);
            setList(newTasks);
        }
    return(
        <div className="container">
            <div className="inputContainer">
                <input type="text" placeholder="add item" value={task} onChange={(e)=>setTask(e.target.value)} />
                <div className="addBtn" onClick={handleSubmit}>+</div>
            </div>
            <div className="listContainer">
                <ul>
                    {list.map((item,index:number)=>{
                        return(
                            <div className="listItems"  key={index}>
                                <li>{item}</li>
                                <button type="button" onClick={()=>deleteItem(index)}><MdDeleteOutline/></button>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}
