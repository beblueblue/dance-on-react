import React, { useState } from 'react';
import { PageBar } from './withComputed';
import Button from '@material-ui/core/Button'
import { names } from './names'

function Demo() {
  const [ lan, setLan ] = useState('en');
  const toggleLan = () => {
    setLan(lan === 'en' ? 'ch' : 'en');
  };

  return (
    <div>
      <PageBar {...names[lan]} />
      <Button variant="contained" onClick={toggleLan}>父组件切换语言</Button>
    </div>
  )
}

export default Demo;