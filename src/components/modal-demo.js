import React,{useState, useContext} from 'react';
import ModalDialog from './modal-dialog';

import { ThemeContext } from '../context/theme-context';

function ModalDemo(props) {
  const [isShowing, setIsShowing] = useState(false);
  
  const theme = useContext(ThemeContext);

  const toggle = () => {
    //setIsShowing(!isShowing);
    setIsShowing((prevState) => !prevState);
  }

  return (
    <div className={theme}>
      {isShowing.toString()}
      <button onClick={toggle}>Show Modal</button>
      { isShowing &&
        <ModalDialog show={isShowing} onClose={toggle}>
        <h2>Modal Dialog Demo</h2>
        <div>
          Some content goes here.  
        </div>
        </ModalDialog>
      }
    </div>
  )
}

export default ModalDemo;