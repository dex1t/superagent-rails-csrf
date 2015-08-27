module.exports = function (superagent) {
  superagent.Request.prototype.csrf = csrf;
  return superagent;
};

function csrf (token) {
  if (!token) {
    token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  }
  this.set('X-CSRF-Token', token);
  return this;
}
