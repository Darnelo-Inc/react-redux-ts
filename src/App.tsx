import UserList from "./components/UserList"
import "./App.css"
import TodoList from "./components/TodoList"

function App() {
  return (
    <div className="App">
      <UserList />
      <hr />
      <TodoList />
    </div>
  )
}

export default App
