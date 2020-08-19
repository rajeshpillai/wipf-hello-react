import React,{useState} from 'react';
import ModalDialog from './modal-dialog';

function ModalDemo(props) {
  const [isShowing, setIsShowing] = useState(false);
  
  const toggle = () => {
    setIsShowing(!isShowing);
  }

  const show = () => {
    setIsShowing(true);
  }

  const hide = () => {
    setIsShowing(false);
  }

  return (
    <div>
      {isShowing.toString()}
      <button onClick={toggle}>Show Modal</button>
      <ModalDialog show={isShowing} onClose={toggle}>
        <h2>Modal Dialog Demo</h2>
        <div>
          Some content goes here.  
        </div>
      </ModalDialog>
    </div>
  )
}

export default ModalDemo;