import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css"

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);



    const click = () =>{
        setTitle("UPDATED!");
        console.log("HOLAAAAAAA");
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date = {props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${props.price}
                </div>
                <button onClick={click}>Change title</button>
            </div>
        </Card>)

}

export default ExpenseItem;