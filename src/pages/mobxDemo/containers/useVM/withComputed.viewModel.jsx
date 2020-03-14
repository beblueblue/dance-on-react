import { observable, computed } from 'mobx';

class WithComputedViewModel {
  @observable 
  props: object;

  constructor(props){
    this.props = props;
  }

  @computed
  get fullName() {
    console.log('computed fullName');
    const { firstName, lastName } = this.props
    return `${firstName} · ${lastName}`;
  }
}

export { WithComputedViewModel }