# Assignment-01

### 1. What are some differences between Interfaces and Types in TypeScript?

In TypeScript, both `interface` and `type` are used to define custom types. While they often serve similar purposes, there are some key differences between them.

---

### Interfaces

1. **Supports declaration merging** — You can redeclare the same interface multiple times, and TypeScript will merge them.

```ts
interface A {
  name: string;
  age: number;
}

interface A {
  address: string;
  city: string;
}
// The final type A includes: name, age, address, city
```

2. **Can only define object types** — Interfaces are mainly used to describe the shape of objects.

3. **Can extend other interfaces** — Interfaces support inheritance using the `extends` keyword.

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  role: string;
}
```

---

### Types

1. **Does not support declaration merging** — Declaring the same type alias more than once results in an error.

```ts
type B = {
  name: string;
  age: number;
};

type B = {
  address: string;
  city: string;
};

// Error: Duplicate identifier 'B'.ts(2300)
```

2. **Can define primitives, tuples, unions, and objects** — Types are more flexible than interfaces.

```ts
type ID = string | number;
type Pair = [string, number];
```

3. **Can extend other types using intersection (`&`)** — You can combine multiple types into one.

```ts
type Person = {
  name: string;
};

type Employee = Person & {
  role: string;
};
```

---

### Summary Table

| Feature                   | Interface         | Type                             |
| ------------------------- | ----------------- | -------------------------------- |
| Declaration Merging       | Yes               | No                               |
| Can Extend Others         | Yes (`extends`)   | Yes (`&` intersection)           |
| Defines Primitives/Unions | No                | Yes                              |
| Best Suited For           | Object structures | Complex or mixed-type structures |

---
