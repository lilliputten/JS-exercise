export default () => {
  // BEGIN (write your solution here)
  const form = document.querySelector('form');
  const input = document.querySelector('input');
  const urlpath = input.getAttribute('data-autocomplete');

  input.addEventListener('keyup', async (e) => {
    const term = e.target.value;
    //console.log("term= ",term);
    const url = new URL(urlpath, window.location.origin);
    url.searchParams.append('term', term);
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