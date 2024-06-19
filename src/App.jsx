import React, { useState } from 'react'
import { Food } from './Food'

const App = () => {

const [food,setFood]=useState(Food)
const [filteredFood,setFilteredFood] = useState(Food)

const filteredItems =(type)=>{
  if(type==='All'){
    setFilteredFood(food)
  }else{
    setFilteredFood(food.filter(item => item.type===type))
  }
}

  return (
    <div className='container'>
      <div className="top">
        <h1>Our Menu</h1>
        <div className="green"></div>
      </div>
      <div className="nav">
        <button onClick={() => filteredItems('All')}>All</button>
        <button onClick={() => filteredItems('Breakfast')}>Breakfast</button>
        <button onClick={() => filteredItems('Lunch')}>Lunch</button>
        <button onClick={() => filteredItems('Shakes')}>Shakes</button>
      </div>
      
      <div className="menu">
        {filteredFood.map((item, index) => (
          <div className="foods" key={index}>
            <img src={item.image} alt="" />

            <div className='price'>
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
            <p className='description'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
