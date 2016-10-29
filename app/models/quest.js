import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  points: DS.attr('string'),

  test: DS.belongsTo('test')
});
