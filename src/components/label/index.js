import React from 'react';


export default function Label() {
  const [label, setLabel] = useState();

  return (
    <label>
      {label}
    </label>
  )
}