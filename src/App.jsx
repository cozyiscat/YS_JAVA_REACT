import { ColoredMessage } from "./components/ColoredMessage";
import { ColoredMessage2 } from "./components/ColoredMessage2";

import { useState } from "react";
export const App = ()=> {
  let aaaa = useState(0);
  console.log ('aaaa=>',aaaa);
  const [num, setNum] = useState(0);
    const divStyle= {
      border: '1px solid blue'
    }
    const aaa = ()=> {
        // alert('강아지');
        let num2 = num+1
        setNum (num2);
        alert(num2 );
    }
    const redStyle = {
        color:'red',
        backgroundColor :'yellow'
    }
    const pinkStyle={
        color: 'pink',
        fontSize: '20px'
    }
    return (
      <div style={divStyle}>
        {console.log('test')}
      <p style={{color:'blue',fontSize:'32px'}}>안냥하세요{num}</p>
      {/* <p style={redStyle}>반갑습니다. 잘지내시요?</p> */}
      <ColoredMessage color='orange' message='잘지내시죠?'/>
      <ColoredMessage color='red' message= 'How do you do>'/>
      <ColoredMessage2 color='blue'> 잘지내나요? </ColoredMessage2>
      <p style={pinkStyle}>잘 지내고 있습니다.</p>
      <button onClick={aaa}>버튼</button>
      </div>
    );
  }