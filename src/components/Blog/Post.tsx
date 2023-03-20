import React from 'react'
import { usePost } from './usePost'
// import { useQueryClient } from 'react-query'

function Post({
  postId,
  setPostId,
}: {
  postId: number
  setPostId: React.Dispatch<React.SetStateAction<number>>
}): JSX.Element {
  const { status, data, error, isFetching } = usePost(postId)
  //   const queryClient = useQueryClient()

  return (
    <div>
      <div>
        <a
          onClick={() => {
            setPostId(-1)
          }}
          href="#"
        >
          Back
        </a>
      </div>

      {postId === 0 || status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <h1>{data.title}</h1>
          <div>
            <p>{data.body}</p>
          </div>
          <div>{isFetching ? 'Background Updating...' : ' '}</div>
        </>
      )}
    </div>
  )
}

export default Post
