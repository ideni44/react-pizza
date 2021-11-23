import React, { useState } from 'react'

function Categories({items,onClick}) {
    const[active,setActive] = useState(null)

    return (
        <div className="categories">
            <ul>
                <li className={active===null?'active':''} onClick={()=>setActive(null)}>Все</li>
                {
                   items.map((i,index)=>{
                      return <li 
                            className={active===index?'active':''}
                            onClick={()=>setActive(index)} 
                            key={`${i}_${index}`}>{i}</li> 
                   }) 
                }
            </ul>
          </div>
    )
}

export default Categories
