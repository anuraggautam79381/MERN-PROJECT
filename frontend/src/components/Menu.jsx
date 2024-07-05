// eslint-disable-next-line no-unused-vars
import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
               
<p>
Brijwasi restaurant is well-known for its delicious vegetarian dishes, particularly in Indian cuisine. They have a reputation for serving a variety of traditional Indian sweets, snacks, and main courses that are popular among both locals and tourists. The restaurant is often praised for its rich flavors, quality ingredients, and the authenticity of its dishes. If you have specific questions about their menu, location, or anything else related to Brijwasi restaurant, feel free to ask!
           </p> </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu