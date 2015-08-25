var Subject = function() {
  this.observers = [];
}

Subject.prototype.addObserver = function(observer) {
  this.observers.push(observer);
}

Subject.prototype.notify = function(data) {
  this.observers.forEach(function(observer) {
    observer.update(data);
  });
}

module.exports = Subject;
