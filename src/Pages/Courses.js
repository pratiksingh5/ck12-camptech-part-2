import {React,useState} from 'react'
import Button from '../Components/Button'
import items from '../Data';
import Course from '../Components/Course'

function Courses() {
    const [menuItem, setMenuItem] = useState(items);
 
    return (
        <div className="pages">
            <h2>The world Best courses </h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iu</p>
          <Button/>
  
          <Course menuItem={menuItem}/>
         

        </div>
    )
}

export default Courses
