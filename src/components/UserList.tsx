import { useTypedSelector } from "../hooks/useTypedSelector"
import { useEffect } from "react"
import { useActions } from "../hooks/useActions"

const UserList = () => {
  const { fetchUsers } = useActions()
  const { users, loading, error } = useTypedSelector((state) => state.user)

  useEffect(() => {
    fetchUsers()
  }, []) //eslint-disable-line

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>{error}</h1>

  return (
    <div>
      <h1>Users:</h1>
      {users.map((user) => (
        <div key={user.id}>
          {user.id}. {user.name}
        </div>
      ))}
    </div>
  )
}

export default UserList
