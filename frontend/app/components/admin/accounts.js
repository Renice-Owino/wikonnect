import Component from '@glimmer/component';
import { inject } from '@ember/service';


export default class AdminAccountsComponent extends Component {

  @inject
  me;

  @inject
  session

  // isExpanded = false

  // @action
  // toggleBody() {
  //   this.toggleProperty('isExpanded');
  // }

}
