import React, {useState} from 'react'
import './list.css'

const List = ({data}) => {

const [selected, setSelected] = useState("")

  return (
    // <div className='list'>
    //    <p className='listItems' value={data.title}>{data.title}</p>      
    // </div>
    <div className='list'>
        {data.map((items, index)=>(
            <div key={index} >
                <p className='listItems' value={items.title}>{items.title}</p>
            </div>
        ))}

    </div>
  )
}

export default List