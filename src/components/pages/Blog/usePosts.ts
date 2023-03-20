import axios from 'axios'
import { useQuery } from 'react-query'
import type { UseQueryResult } from 'react-query'
import type { PostType } from './usePost'

function usePosts(): UseQueryResult<PostType[], { message: string }> {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      return res.data as PostType[]
    },
  })
}

export { usePosts }
