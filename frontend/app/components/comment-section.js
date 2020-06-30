import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { computed } from '@ember/object';

export default class CommentSectionComponent extends Component {

  @service
  me

  profileImage = "/images/profile-placeholder.gif"


  @service
  session;



  @service
  store;



  get commentModel() {
    return this.store.createRecord('comment', {
      creator: this.me.get('user')
    });
  }
  @computed
  get chapterComments() {

    return this.store.query('comment', { "chapterId": this.args.selectedChapter });

  }

  @action
  async saveComment(model) {
    let chap = await this.store.findRecord('chapter', this.args.selectedChapter);
    model.setProperties({
      chapter: chap
    });
    model.save();
  }



}




