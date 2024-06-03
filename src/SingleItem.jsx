import {useState} from "react";

const SingleItem = ({item, removeItem, editItem}) => {
    const [isChecked, setIsChecked] = useState(item.completed);
    return(
        <div className='grocery-item'>
            <input
                type="checkbox"
                checked={item.completed}
                onChange={() => editItem(item.id)}
            />
            <p style={
                {
                    textDecoration: item.completed && 'line-through',
                    textTransform: 'capitalize'
                }
            }>{item.name}</p>
            <button type='button' className='btn remove-btn' onClick={() => removeItem(item.id)}>
                delete
            </button>
        </div>
    )
};

export default SingleItem;