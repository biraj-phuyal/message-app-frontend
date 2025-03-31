import UsersView from '../views/Users';
import Users from '../collections/Users';

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    const collection = new Users();
    console.log("Loading users...");
    collection.fetch().always(() => {
        console.log("Users loaded.");
        this.showView(new UsersView({ collection }));
    });
  }
});
