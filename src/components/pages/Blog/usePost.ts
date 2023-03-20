import axios from 'axios'
import { useQuery } from 'react-query'
import type { UseQueryResult } from 'react-query'

export type PostType = {
  id: number
  userId: string
  body: string
  title: string
}

const getPostById = async (id: number): Promise<any> => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )
  return data
}

export function usePost(postId: number): UseQueryResult<any, any> {
  return useQuery({
    queryKey: ['post', postId],
    queryFn: async () => await getPostById(postId),
    enabled: !(postId === 0),
  })
}
