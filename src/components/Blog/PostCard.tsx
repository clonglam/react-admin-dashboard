import React from 'react'
import { Link } from 'react-router-dom'

type Props = { id: number; body: string; title: string }

const PostCard = (props: Props): JSX.Element => {
  const { id, body, title } = props

  return (
    <Link
      to={`/blog/${id}`}
      key={id}
      className="post-card"
      onClick={() => {
        console.log('id', id)
      }}
    >
      <h3 className="post-card-title">{title}</h3>
      <p className="post-card-content">{body}</p>
    </Link>
  )
}

export default PostCard
