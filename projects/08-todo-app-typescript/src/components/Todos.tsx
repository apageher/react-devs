import { useState } from "react"
import { type Todo as TodoType, TodoId, type ListOfTodos } from "../types"
import { Todo } from "./Todo"

interface Props {
    todos: ListOfTodos
    onRemoveTodo: ({ id }: TodoId) => void
    onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
    setTitle: (params: Omit<TodoType, 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleteTodo, setTitle }) => {

    const [isEditing, setIsEditing] = useState('')

    return (
        <ul className='todo-list'>
            {todos.map(todo => {
                return (
                    <li key={todo.id} onDoubleClick={() => { setIsEditing(todo.id) }} className={`${todo.completed ? 'completed' : ''} ${isEditing === todo.id ? 'editing' : ''}`}>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            onRemoveTodo={onRemoveTodo}
                            onToggleCompleteTodo={onToggleCompleteTodo}
                            setTitle={setTitle}
                            isEditing={isEditing}
                            setIsEditing={setIsEditing}
                        ></Todo>
                    </li>
                )
            })}
        </ul>
    )
}