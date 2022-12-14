### Update state using existing state

Make a new state from a function

` setCount( (newCount) => count + 1);`

Now we have a newCOunt number, as count might not have been updated if only `SetCount(count +1)`

### Immutability

It adds to a better performace.

Value vs Reference Equality

With value, it checks if each value is equal so that if it is not then it updates.

Reference asks: do both vars reference the same spot in memory?

##### How to change update inmmutable states?

- Object.assign => `Object.assign({}, state, { role: "admin});`
- Spread syntax { ...obj } => `{ ...state, role: "admin"};` careful: if nested object it needs to double spread => `const userCOpy = { ...user, address: {user...address}};`
- Some array methods map() =>

#### Tip for useState

if you want to parse or do a function once in useState you can just add an empty function:

```const [cart, setCart] = useState(() => {
try {
return JSON.parse(localStorage.getItem("cart")) ?? [];
} catch {
console.error("The cart could not be parsed into JSON.");
return [];
}
});
```

#### useFetchAll (in the code, or useFetch in internet search)

Useful if you need to fetch multiple at the same time

### Web storage

- Cookie
- localStorage
- sessionStorage
- IndexedDb
- Cache Storage

```

```
