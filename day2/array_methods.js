const numbers=[1,2,3,4,5];
const doubled = numbers.map(n => n*2);
console.log(doubled); 


const users = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Brenda'},
];
const userList = users.map(user => 
    <li key={user.id}>
        {user.name}
    </li>
);

console.log(userList); 

const products = [
  {id: 1, name: 'Laptop', category: 'Electronics'},
  {id: 2, name: 'Shirt', category: 'Apparel'},
  {id: 3, name: 'Mouse', category: 'Electronics'},
];

const electronics = products.filter(product => product.category === 'Electronics');
console.log(electronics);
