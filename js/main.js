/*var Person = function(config) {
  this.name = config.name;
  this.age = config.age;
  this.job = config.job;
};

Person.prototype.walk = function() {

 alert(this.name + 'is walking');
};

var food = Backbone.Model.extend({
  defaults:{
  name:"food",
  stat: "lais"},
  drop: function(){this.set({stat: "falls"})}
                             });

    var nick = new Person({ name: 'Nick', age: 24, job: 'Front-end developer' });
  nick.walk();
   _.extend(nick, Backbone.Events);
  var apple = new food({name:'apple'});
   alert(apple.get('stat'));
   nick.listenToOnce (apple ,'change:stat', function(){alert(apple.get("name")+"_"+apple.get("stat"))});
apple.set({stat: 'fall', name:'apple'});
 apple.drop();
var coll = Backbone.Collection.extend({model: food});

var coll1 = new coll([
   {
        name: 'pea',
        stat: 'swims'},
    {name:'watermelon',
    stat:'melts'}
    ]);
ar m1 = coll1.at(0).clone();
m1.set({name: 'cherry'})
alert(m1.get('name'));

coll1.add([{name:'meat'}])
coll1.map(function(attr, key, list){alert(attr.get('name'));});
*/

//==========================================================================================================
//require(['tags'],function(tags){alert("tags.js loaded")});
//require(['tags'],function(Module){console.log("require ran");});


/*
require.config({
  shim:'tags',
  deps: [],
  exports: 'memo' //function(Module){alert( tag1_collection.at(0).get('type1') + "+"+  Module.memo);});
});
require(['tags'], function(Module){alert(tag1_collection.at(0).get('type1') + "+"+Module.memo)});
*/

