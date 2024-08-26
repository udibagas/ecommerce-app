export interface Todo  {
  userId: number
  id: number
  title: string
  completed: boolean
}


async function getTodos() {
  const response = await fetch("http://localhost:3001/todos")
  const data = await response.json() as Todo[]
  console.log(data, "<<< data")

  await new Promise(r => setTimeout(r, 2000))

  return data
}

async function Todos() {
  const data = await getTodos()

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-semibold mb-4">Todos</h1>
      <div className="flex gap-5 flex-wrap">
        {
          data.map(todo => {
            return (
              <h1 key={todo.id}>{todo.title}</h1>
            )
          })
        }
      </div>
    </div>
  )
}

export default Todos
