import React from 'react';
import { useVM } from './useVM';
import { observer } from 'mobx-react';
import { WithComputedViewModel } from './withComputed.viewModel';
import { names } from './names';
import Button from '@material-ui/core/Button';

const PageBarComponent = (props) => {
  const { vmProps, fullName, toggleLan } = useVM(WithComputedViewModel, props);
  return (
    <div style={{
      marginTop: '20px',
    }}>
      <p>computed: { fullName }</p>
      <p>raw: { names[vmProps.lan].firstName } · { names[vmProps.lan].lastName }</p>
      <p>normal: { names[props.lan].firstName } · { names[props.lan].lastName }</p>
      <Button variant="contained" onClick={toggleLan}>父组件切换语言</Button>
    </div>
  )
}

const PageBar = observer(PageBarComponent)

export { PageBar }