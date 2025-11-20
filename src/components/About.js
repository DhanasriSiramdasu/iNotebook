import React,{useContext} from 'react';
import { useEffect } from 'react';
import noteContext from '../context/noteContext';

const About = () => {
  const a=useContext(noteContext);
  // useEffect is used beacause that we used update changes in the about component
  useEffect(()=>{
    a.update();
    // eslint-disable-next-line
  },[])
  return (
    <div>
       {/* Here a.state.name i.e state is used because we used usestate in notestate.js to perform update function */}
      <h1>This is About {a.state.name} and of age {a.state.age}</h1>
    </div>
  )
}

export default About;
