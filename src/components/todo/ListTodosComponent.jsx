import { useEffect, useState } from "react";
import {retrieveAllTodosForUserApi, deleteTodoApi} from "./api/TodoApiService"
import { func } from "prop-types";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";



export default function ListTodosComponent(){

    const today = new Date();

    const authContext = useAuth();

    const username = authContext.username

    const navigate = useNavigate()

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const [todos,setTodos] = useState([])
    const [message,setMessage] = useState(null)

    useEffect (()=> refreshTodos(),[])

    function refreshTodos(){}

    retrieveAllTodosForUserApi(username)
    .then(responce => {
        setTodos(responce.data)
    }
    )
    .catch(error => console.error(error))

function deleteTodo(id){
        deleteTodoApi(username,id)
        .then(
            () =>{
                setMessage(`Delete of todo with id =  ${id} successful`)
                refreshTodos()
            }
        )
    .catch(error => console.error(error))
    }

    function updateTodo(id){
        navigate(`/todo/${id}`)
    }

    function addNewTodo(){
        navigate(`/todo/-1`)
    }


    

    return(
        <div className="container">
            <h1>Things You want To Do.</h1>


            {message && <div className="alert alert-warning">{message}</div>}
           
            <div>
                <table className='table'>
                    <thead>
                            <tr>
                                <th>Description</th>
                                <th>isDone</th>
                                <th>Target Date</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo=>(
                                <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                {/* <td>{todo.targetDate.toDateString()}</td> */}
                                <td>{todo.targetDate.toString()}</td>
                                <td> <button className="btn btn-warning"
                                   onClick={()=>deleteTodo(todo.id)} >Delete</button> </td>
                                <td> <button className="btn btn-success"
                                   onClick={()=>updateTodo(todo.id)} >Update</button> </td>
                            </tr>
                            )
                        )
                    }
                        </tbody>
                </table>
            </div>
            <div className="btn btn-success m-3" onClick={addNewTodo}>Add New Todo</div>
        </div>
    )
}
 