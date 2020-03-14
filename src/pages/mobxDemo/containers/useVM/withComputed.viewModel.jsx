import { observable, computed, action } from 'mobx';
import { names } from './names';

class WithComputedViewModel {
  @observable 
  vmProps: object;

  constructor(props){
    this.vmProps = props;
  }

  @computed
  get fullName() {
    console.log('computed fullName');
    const { firstName, lastName } = names[this.vmProps.lan]
    return `${firstName} · ${lastName}`;
  }

  @action.bound
  toggleLan() {
    this.vmProps.lan = this.vmProps.lan === 'en' ? 'ch' : 'en';
  }
}

export { WithComputedViewModel }