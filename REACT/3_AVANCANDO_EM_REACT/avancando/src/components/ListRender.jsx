import { useState } from "react"

const ListRender = () => {
const [list]= useState(["Eduardo", "Pedro", "João"])

const [users, setUsers] = useState([
    {id: 1, name: "Eduardo", age: 22},
    {id: 2, name: "Pedro", age: 23},
    {id: 3, name: "João", age: 31},
])
const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)

    setUsers((prevUSers)=>  prevUSers.filter((user)=> randomNumber !== user.id))
}

  return (
    <div>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user)=> (
                <li key={user.id}>{user.name} - {user.age} anos</li>
            ))}
        </ul>
        {/* Previous state */}
        <button onClick={deleteRandom}> Delete random user</button>
    </div>
  )
}

export default ListRender