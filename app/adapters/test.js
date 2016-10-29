import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  host: 'https://dev.noblyn.com',
  namespaces:'/api/gaming/'

});
