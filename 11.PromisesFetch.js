function pf_1() {
  /**
   * 1. pending  (default value)
   * 2. resolved
   * 3. rejected
   */

  const x = new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve('mydata');
      //reject('myerror');
    }, 3000);
  });

  x
    .then(data => console.log(`1 ${data}`))
    .catch(error => console.log(`err ${error}`));


  console.log(x);
}

function pf_2() {
  const url = 'https://jsonplaceholder.typicode.com/posts3123124/';

  // NOTE; fetch returns the response,
  // you have to use .json() for it
  // to send the data
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
      console.log(error);
    });

  // function needs to be async for below
  // try {
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   console.log(data);
  // } catch (err) {
  //   console.log(`failed. ${err}`);
  // }

}

pf_2();