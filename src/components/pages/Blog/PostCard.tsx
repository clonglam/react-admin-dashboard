import React from 'react'
import { Link } from 'react-router-dom'

type Props = { id: number; body: string; title: string }

const PostCard = (props: Props): JSX.Element => {
  const { id, body, title } = props

  return (
    <Link
      to={`/blog/${id}`}
      key={id}
      className="post"
      onClick={() => {
        console.log('id', id)
      }}
    >
      <h3>{title}</h3>
      <p>{body}</p>
    </Link>
  )
}

export default PostCard
