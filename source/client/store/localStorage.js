import Config from '../actions/config/'

export const localStoreFN = () =>{
  let localStorage;
  if (typeof window === "undefined" ) {
    require('fs');
    let LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  } else {
    localStorage = window.localStorage;
  }
  return localStorage
}
export const saveLocalState = async (item) => {
  localStoreFN().setItem(item.key, item.value);
  const response = await fetch(`${Config.api}/api/localstore`,{
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
    body: JSON.stringify(item),
  });
  const data = await response.json();
  return data;
}

export const deleteLocalState = async () => {
  localStoreFN().clear();
  const response = await fetch(`${Config.api}/api/localstore`,{
    method: 'DELETE',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    })
  });
  const data = await response.json();
  return data;
}