Meteor.publish('moduleName.all', function () {
  return ModuleName.find();
});

Meteor.publish('moduleName.one', function () {
  return ModuleName.find();
})