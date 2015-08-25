function Observer() {}

Observer.prototype.update = function() {
  throw new Error("not implemented");
}

module.exports = Observer;
