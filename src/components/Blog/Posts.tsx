import React from 'react'
import { usePosts } from './usePosts'
import PostCard from './PostCard'

interface PostsProps {
  setPostId: React.Dispatch<React.SetStateAction<number>>
}

function Posts({ setPostId }: PostsProps): JSX.Element {
  const { status, data, error, isFetching } = usePosts()

  return (
    <div>
      {status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <div className="posts">
            {data?.map((post) => (
              <PostCard
                id={post.id}
                body={post.body}
                title={post.title}
                key={post.id}
              />
            ))}
          </div>
          <div>{isFetching ? 'Background Updating...' : ' '}</div>
        </>
      )}
    </div>
  )
}

export default Posts
