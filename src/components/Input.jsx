import react, {useState} from "react";


function Input() {

    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleChangeInInput = (event) => {
        setInputValue(event.target.value);
    }

    const addTasks = () => {
        setTasks(tasks.concat(inputValue));
        setInputValue("");
    }
    return(
        <>
          <section className="container">
                <form>
                    <input type="text" value={inputValue} onChange={handleChangeInInput}/>   
                    <button type="button" onClick={addTasks}>Add</button>
                </form>

                <ul>
                    {tasks.map((task,index)  => (
                        <li className="list-items" key={index}>{task}</li>
                    )
                    )}
                </ul>
          </section>
        </>
    )

    
};

export default Input;