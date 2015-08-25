var sys = require('sys')
var exec = require('child_process').exec;
var notifier = require('node-notifier');

var Observer = require('./observer');
var Subject = require('./subject');

// Observer #1
var alwayson = Object.create(Observer.prototype);
alwayson.update = function(data) {
  exec("say -v Ya-Ling "+data, function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}

// Observer #1
var growl = Object.create(Observer.prototype);
growl.update = function(data) {
  notifier.notify({
    'title': 'Notification',
    'message': data
  });
}

// subject to be sent out
var cast = new Subject();

cast.addObserver(growl);
cast.addObserver(alwayson);

cast.notify("再不杀人，就开学了");

// Observer #3
var terminal = Object.create(Observer.prototype);
terminal.update = function(data) {
  console.log(data);
}
