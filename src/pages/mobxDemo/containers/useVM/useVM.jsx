import { useState, useEffect } from 'react';
import { useAsObservableSource } from 'mobx-react';

function useVM(
  viewModel,
  props
) {
  // component 的 props 本身是静态的？（还需要进一步理解）
  // 需要利用 useAsObservableSource 来响应 props 内部的变化
  const observableProps = useAsObservableSource(props);
  const [vm] = useState(() => new viewModel(observableProps));

  useEffect(() => {
    return () => {
      vm.dispose();
    };
  }, [vm]);

  return vm;
}

export { useVM }