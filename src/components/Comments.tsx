



import React from 'react'
import { type Comment } from '~/hooks/useGetComments'

export default function Comments( { comments, deferredSearch }: { comments: Comment[], deferredSearch: string }) {
  return (
    <ul>
    {comments
      ?.filter((comment) => comment.name.includes(deferredSearch))
      .map((comment) => (
        <li key={comment.id}>
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
  </ul>
  )
}
