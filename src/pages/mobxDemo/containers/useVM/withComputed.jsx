import React from 'react';
import { useVM } from './useVM';
import { observer } from 'mobx-react';
import { WithComputedViewModel } from './withComputed.viewModel';

const PageBarComponent = (props) => {
  const { fullName } = useVM(WithComputedViewModel, props);
  return (
    <div style={{
      marginTop: '20px',
    }}>
      <p>mobx computed: { fullName }</p>
      <p>component props: { props.firstName } · { props.lastName }</p>
    </div>
  )
}

const PageBar = observer(PageBarComponent)

export { PageBar }