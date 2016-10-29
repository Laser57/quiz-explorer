import DS from 'ember-data';

export default DS.Model.extend({
    code: DS.attr('string'),
    cover_img: DS.attr('string'),
    name: DS.attr('string'),
    questions: DS.hasMany('quest')
});
