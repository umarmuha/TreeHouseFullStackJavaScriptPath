
const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');
const ul = document.querySelector('ul');


button.addEventListener('click', () => {
    p.innerHTML = `${input.value}:`
} )

ul.innerHTML = `
<li>eggs</li>
<li>peanutes</li>
<li>cups</li>
<li>water</li>
`
