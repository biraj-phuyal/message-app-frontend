import UserView from './User';

export default Marionette.CollectionView.extend({
    tagName: 'ul',
    childView: UserView,
  
    initialize(options = {}) {
        this.collection = options.collection;
    }
});