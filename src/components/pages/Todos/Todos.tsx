import * as React from 'react'
import { useTodos } from './useTodos'

export default function Todos(): JSX.Element {
  const [text, setText] = React.useState('')
  const { isFetching, ...queryInfo } = useTodos()

  return (
    <div>
      <p>
        In this example, new items can be created using a mutation. The new item
        will be optimistically added to the list in hopes that the server
        accepts the item. If it does, the list is refetched with the true items
        from the list. Every now and then, the mutation may fail though. When
        that happens, the previous list of items is restored and the list is
        again refetched from the server.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          // addTodoMutation.mutate(text)
        }}
      >
        <input
          type="text"
          onChange={(event) => {
            setText(event.target.value)
          }}
          value={text}
        />
        {/* <button disabled={addTodoMutation.isLoading}>Create</button> */}
      </form>
      <br />
      {queryInfo.isSuccess && (
        <>
          <div>
            {/* The type of queryInfo.data will be narrowed because we check for isSuccess first */}
            Updated At: {new Date(queryInfo.data.ts).toLocaleTimeString()}
          </div>
          <ul>
            {queryInfo.data.items.map((todo) => (
              <li key={todo.id}>{todo.text}</li>
            ))}
          </ul>
          {isFetching && <div>Updating in background...</div>}
        </>
      )}
      {queryInfo.isLoading && 'Loading'}
      {queryInfo.error instanceof Error && queryInfo.error.message}
    </div>
  )
}
