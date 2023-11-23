import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../features/commentsSlice';

const Comments = ({item}) => {
    
    const dispatch = useDispatch();

    const handleDeleteComment = (id) => {
        dispatch(deleteComment(id))
    }
    
  return (
    <div>
       <h4>{item.userId?.login}</h4>
      {item.text}
      <button className='delete-com' onClick={() => handleDeleteComment(item._id)}>x</button> {}
    </div>
  )
}

export default Comments
