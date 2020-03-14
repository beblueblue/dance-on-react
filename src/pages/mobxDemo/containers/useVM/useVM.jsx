import { useState, useEffect } from 'react';
import { useAsObservableSource } from 'mobx-react';

function useVM(
  viewModel,
  props
) {
  // const observableProps = useAsObservableSource(props);
  const [vm] = useState(() => new viewModel(props));

  // useEffect(() => {
  //   return () => {
  //     vm.dispose();
  //   };
  // }, [vm]);

  return vm;
}

export { useVM }