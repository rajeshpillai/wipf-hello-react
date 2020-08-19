import React,{useState, useEffect} from 'react';


export default function ModalDialog({children, show, onClose}) {
  console.log("show: ", show);
  const backdropStyle = {
    position: "fixed",
    top: 0,
    bottom:0,
    left:0,
    right:0,
    backgroundColor: 'rgba(0,0,0,0.9)',
    padding: 50
  };

  const modalStyle = {
    backgroundColor: "#fff",
    borderRadius: 5,
    maxWidth: 500,
    maxHeight: 300,
    margin: '0 auto',
    padding: 30,
    position: "relative"
  };

  const footerStyle = {
    position: "absolute",
    bottom:20
  };

  const [isOpen, setToggle] = useState(show)

  // Synching the show prop from parent
  useEffect(() => {
    setToggle(show);
  },[show])

  const handleClick = (e) => {
    setToggle(false);
    onClose();
  }

  console.log("isOpen: ", isOpen);
  if (!isOpen) {
    return null;
  }
  
  return (
    <div style={backdropStyle}>
      <div style={modalStyle}>
        {children}
        <div style={footerStyle}>
          <button onClick={handleClick}>Close</button>
        </div>
      </div>
    </div>

  )
}

// export default function ModalDialog(props) {
//   return (
//     props.children
//   )
// }