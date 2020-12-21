import React from 'react';

const Todo = ({ setTodos, todos, todo, text }) => {

    // Events

    const completeHandler = () => {
        setTodos(todos.map( (item) => {
            if(item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }))
    };

    const deleteHandler = () => {
        setTodos(todos.filter( (el) => el.id !== todo.id));
    };


    return ( 

        <div className='todo'>
            {/* <li className={`todo-item ${ todo.completed ? 'completed' : '' } `}>
                {text}
            </li> */}

            {/* <button onClick={completeHandler} className='complete-btn'>
                <i className='fas fa-check'></i>
            </button> */}

            <section onClick={completeHandler} className='todo-checkbox-contain'>
                <input id='one' className='todo-checkbox' type='checkbox'/>
                <label htmlFor='one' className='todo-checkbox-label'>
                    <span className='todo-checkbox-span, complete-btn'></span>
                      <li className={`todo-item ${ todo.completed ? 'completed' : '' } `}>
                         {text}
                      </li>
                    <ins className='todo-checkbox-ins'>
                        <i className='todo-checkbox-i'>{text}</i>
                    </ins>
                </label>
            </section>

            <section>
                <input id='one' type='checkbox' />
                <label for='one'>
                    <span></span>
                    Off with your head
                    <ins><i>Off with your head</i></ins>
                </label>
            </section>
            
            <button onClick={deleteHandler} className='trash-btn'>
                {/* <i className='fas fa-trash'></i> */}
                <span className='trash'>
                    <span></span>
                    <i></i>
                </span>
            </button>
            
        </div>
     );
}
 
export default Todo;
