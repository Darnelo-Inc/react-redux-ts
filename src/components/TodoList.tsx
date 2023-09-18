import { useEffect } from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useActions } from "../hooks/useActions"

const TodoList = () => {
  const { todos, loading, error, page, limit } = useTypedSelector(
    (state) => state.todo
  )
  const { fetchTodos, setTodoPage } = useActions()

  const pages = [1, 2, 3, 4, 5]

  useEffect(() => {
    fetchTodos(limit, page)
  }, [limit, page]) //eslint-disable-line

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>{error}</h1>

  return (
    <div>
      <h1>Todo :</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input type="checkbox" checked={todo.completed} />
          {todo.id}. {todo.title}
        </div>
      ))}
      <div style={{ display: "flex" }}>
        {pages.map((p) => (
          <div
            key={p}
            style={{
              padding: 10,
              border: p === page ? "2px solid red" : "1px solid blue",
            }}
            onClick={() => setTodoPage(p)}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList
