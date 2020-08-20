import React, {useState} from 'react';
import Tab from './tab';
import './tab.css';


export default function Tabs({children, onTabChanged}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
    onTabChanged(index);
  }

  return(
    <div className="tab-container">
      {
        children.map((child, index) => {
          return (
            <div className="tabs" key={child.props.title}>
              <a href="#" onClick={()=>handleClick(index)}>{child.props.title}</a> 
              
              { index === currentIndex && 
                <div className="tab-content">
                  {child.props.children}
                </div>
              }
            </div>
          )
        })
      }
    </div>
  )
}