import './App.css';
import Navigation from './component/Navigation';
import List from "./component/List"
import { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib';

function App() {
  const [list, setList] = useState([
    {
       title:"Finish React"
    }
  ])
  const [showField, setShowField] = useState(false)
  const [fieldValue, setFieldValue] = useState({title:""})

  const handleChange = (e) =>{
    e.preventDefault()
    var name = e.target.name;
    var value = e.target.value;
    setFieldValue({...fieldValue, [name]:value})
    console.log(fieldValue)
  }
 

  // const listData = [
  //   {
  //     title:"Finish React"
  //   },

  //   {
  //     title:"Finish React"
  //   },

  //   {
  //     title:"Finish React"
  //   }
  // ]

  const submitTask = (e) =>{
    e.preventDefault()
    list.push(fieldValue)
    setShowField(false)
    console.log(list)
    
  }

  return (
    <div className='App'>
      <Navigation / >  

        <div className='mainBody'> 
            <div className='blur'>
            </div>


                {/*the create button section */}
                <div className='new-btn'>
                  <div className='create'>
                  <IconContext.Provider value={{size:"50px"}}>
                    <button onClick={()=>setShowField(!showField)} >
                    <AiFillPlusCircle />
                    </button>
                  </IconContext.Provider>

                  <p className='Dhov'>Create</p>
                  </div>
                </div>
                {/* */}

               <List data = {list}/>
        
        </div>

      { showField ? 
        (
          <div className='field'>

            <div className='inputs'>

            <p>Add task</p>

            <form className='addform'>
                <input
                type='text'
                placeholder='Enter Tasks' 
                value={fieldValue['title']}
                name="title"
                onChange={handleChange}/>

                <button onClick={submitTask}>Submit</button>
            </form>

              <button onClick={()=>setShowField(false)}>close</button>
            </div>
        </div>
        ):
        null

      }
     
    </div>
  );
}

export default App;
