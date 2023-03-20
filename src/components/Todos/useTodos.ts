import { useQuery } from 'react-query'
import type { UseQueryResult } from 'react-query'
import type { TodoType } from './useTodo'
import axios from 'axios'

// const queryClient = new QueryClient()

export type Todos = {
  items: readonly TodoType[]
  ts: number
}

async function fetchTodos(): Promise<Todos> {
  const res = await axios.get('/api/data')
  return res.data
}

export function useTodos(): UseQueryResult<Todos, unknown> {
  return useQuery({ queryKey: ['todos'], queryFn: fetchTodos })
}

// export const addTodoMutation = useMutation({
//   mutationFn: async (newTodo: string) =>
//     await axios.post('/api/data', { text: newTodo }),
//   // When mutate is called:
//   onMutate: async (newTodo: string) => {
//     // Cancel any outgoing refetches
//     // (so they don't overwrite our optimistic update)
//     await queryClient.cancelQueries({ queryKey: ['todos'] })

//     // Snapshot the previous value
//     const previousTodos = queryClient.getQueryData<Todos>(['todos'])

//     // Optimistically update to the new value
//     if (previousTodos) {
//       queryClient.setQueryData<Todos>(['todos'], {
//         ...previousTodos,
//         items: [
//           ...previousTodos.items,
//           { id: Math.random().toString(), text: newTodo },
//         ],
//       })
//     }

//     return { previousTodos }
//   },
//   // If the mutation fails,
//   // use the context returned from onMutate to roll back
//   onError: (err, variables, context) => {
//     if (context?.previousTodos) {
//       queryClient.setQueryData<Todos>(['todos'], context.previousTodos)
//     }
//   },
//   // Always refetch after error or success:
//   onSettled: () => {
//     void queryClient.invalidateQueries({ queryKey: ['todos'] })
//   },
// })
