function dfa_1() {
  function makeAjaxRequest(url, method = 'GET') {
    // if (!method) {
    //   method = 'GET';
    // }
    // logic to make the request
  }

  makeAjaxRequest('google.com', null);
  // use 'undefined' means the value is not initialized
  // therefore if you pass 'undefined' in an argument with
  // a default value, the default value gets assigned

  // use 'null' whenever you want to have a value that pertains to no actual value


}

function dfa_2() {
  function User() {
    this.id = generateId();

  }

  function generateId() {
    return Math.random() * 999999;
  }

  function createAdminUser(user = new User()) {
    user.admin = true;
    return user;
  }

  console.log(createAdminUser());


}

dfa_2();
