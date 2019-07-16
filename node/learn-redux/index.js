const { createStore } = require('redux');

function reducer() {
  return 0
}
// creatrStore 只接收reducer
const store = createStore(reducer);
console.log(store.getState())