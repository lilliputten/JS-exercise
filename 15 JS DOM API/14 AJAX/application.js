export default () => {
  // BEGIN (write your solution here)
  const form = document.querySelector('form');
  const input = document.querySelector('input');
  const urlpath = input.getAttribute('data-autocomplete');
  const url = new URL(urlpath, 'http://hexlet.io');
  
  input.addEventListener('keyup', async (e) => {
    // const inpt = e.target.value;
    // console.log("inpt= ",inpt);
    const response = await fetch(url);
    const res = await response.json();
    const ul = form.querySelector('ul');
    let li;
    const newul =  document.createElement('ul');
    if (res.length > 0) {
      for (let i=0; i < res.length; i++) {
        newul.append(li = document.createElement('li'));
        li.textContent = res[i];
      }
    } else {
      newul.append(li = document.createElement('li'));
      li.textContent = 'Nothing';
    }
    ul.replaceWith(newul);
  });
  // END
};