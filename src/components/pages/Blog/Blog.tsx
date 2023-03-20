import React from 'react'
import Post from './Post'
import Posts from './Posts'

function Blog(): JSX.Element {
  const [postId, setPostId] = React.useState(-1)

  return (
    <div className="blog">
      <h1>Blog</h1>
      <p>
        As you visit the posts below, you will notice them in a loading state
        the first time you load them. However, after you return to this list and
        click on any posts you have already visited again, you will see them
        load instantly and background refresh right before your eyes!
      </p>
      {postId > -1 ? (
        <Post postId={postId} setPostId={setPostId} />
      ) : (
        <Posts setPostId={setPostId} />
      )}
    </div>
  )
}

export default Blog
