import Ember from 'ember';

export default Ember.Route.extend({
  //nombre de la propiedad
  ajax: Ember.inject.service('ajax'),

//atrapa el id de la url
  model: function(segmento){

    //let es desechable se lo lleva el garbage collector
    let identificador=segmento.quiz_id;

    //let promise= this.store.find('test', identificador);
    let promise= this.get('ajax').request('https://dev.noblyn.com/api/gaming/tests/'+ identificador);
    //ember esperara a que se complete la promise
    return promise.then((response)=>{
      let test= this.store.createRecord('test',{
          code: response.test.code,
          cover_img: response.test.cover_img,
          name: response.test.name,
      });
        response.test.questions.forEach((respuesta)=>{
          let question = this.store.createRecord('quest', {
            id: respuesta.id,
            test: test,
            text: respuesta.text,
            points: respuesta.points,
          });
          test.get('questions').pushObject(question);
        })
      return test;
    });
    // promise.then(function({})).catch(function() {
    //
    // })
  }

});
