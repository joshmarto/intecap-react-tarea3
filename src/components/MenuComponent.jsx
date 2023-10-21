import { useState } from 'react';
import '../styles/components/Menu.css'

export const MenuComponent = () => {
  const [ open, setOpen ] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    setOpen( !open );
  };

  return (
    <div className='menu'>
        <div className="subcontainer" onClick={ handleClick }>
            <span>Option 1</span>
            <span>Option 2</span>
            <span>Option 3</span>
        </div>
    </div>
  )
}
