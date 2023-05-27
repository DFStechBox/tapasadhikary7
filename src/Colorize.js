
import { useState } from 'react';

const Colorizer = () => {

  const [color, setColor] = useState('#6d0e0e');
  

    const getRandomColorCode = () => {
      const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      return random;
  };
  
  const changeColor = () => {
    const randomColor = getRandomColorCode();
    console.log('Color change with', randomColor);
    setColor(randomColor);
      }

  return (
    <div className="colorizer">
      <h1>Colorizer</h1>
      <div className="box" style={{ backgroundColor: color }}>{ color }</div>
      <button onClick={ changeColor }>Change Color</button>

    </div>
  );
}

export default Colorizer