import React, { useState, useEffect } from 'react'
import {
  FourZeroFourContainer,
  FourZeroFourImg,
  FourZeroFourOops,
} from "./styles"

function App() {
  const [state, setState] = useState(1);

  useEffect(() => {
    let index = Math.floor(Math.random() * 20 + 1);
    setState(index);
  }, []);
  return (
    <FourZeroFourContainer>
      <FourZeroFourOops>
        The page is either broken or no longer availabe. <br/>
        You should get to see a different image when you reload the page or everytime you visit. <br />
      </FourZeroFourOops>
      <FourZeroFourImg src={`/assets/${state}.svg`} />
    </FourZeroFourContainer>
  )
}
export default App