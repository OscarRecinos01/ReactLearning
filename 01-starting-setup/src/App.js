import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const cars = [
    { title: "Honda civic", price: 8700, date: new Date(2020, 5, 12) },
    { title: "Mazda CX-5", price: 19000, date: new Date(2021, 5, 12) },
    { title: "Toyota rav4", price: 6500, date: new Date(2022, 5, 12) }
  ];

  const addExpenseHandler = (expenses) => {
    console.log("IN APP.JS");
    
    let newArray = {...cars ,expenses}

    console.log(newArray);

  }




  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onSaveExpense = {addExpenseHandler}/>
      <Expenses item = {cars} />
    </div>
  );
}

export default App;