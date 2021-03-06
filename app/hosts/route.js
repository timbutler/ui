import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.get('store').findAll('host');
  },

  activate: function() {
    this.send('setPageLayout', {label: 'Hosts'});
  },
});
