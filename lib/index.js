module.exports = function(superagent) {
  superagent.Request.prototype.setCsrfToken = setCsrfToken;
  return superagent;
};

function setCsrfToken(token) {
  if (!token) {
    token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  }
  this.set('X-CSRF-Token', token);
  return this;
}
