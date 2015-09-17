var Person = function(config) {
  this.name = config.name;
  this.age = config.age;
  this.job = config.job;
};

Person.prototype.walk = function() {
  return this.name + ' is walking';
};


var food = Backbone.Model.extend({ name:"food", type:"hot",tasty: function (hallo){alert(hallo);}});
  
