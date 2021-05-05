import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const  Form = ( { setInputText, todos, setTodos, inputText, setStatus, message } ) => {

    const [condition, setCondition] = useState(false);

    const inputTexHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id:Math.random() * 1000 },
        ]);
        setInputText('');
    };

    const statusHandler =(e) => {
        setStatus(e.target.value);
    };

    return ( 

        <form>
            <div className='input-container'>
                <input value={inputText} onChange={inputTexHandler} type="text" className='todo-input' />
                <button onClick={submitTodoHandler} id='root' className='todo-button' type='submit' >
                    <i className='fas fa-plus-square'></i>

                    <div onClick={() => setCondition(!condition)}
                    className={condition ? 'button toggled' : 'button'}>{message}</div>

                </button>
            </div>
            <div className='select-contain'>
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
     );

     ReactDOM.render(<Form message="click here" />);
}
 
export default  Form;