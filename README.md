# Interview Questions

## 1. What are some differences between Interfaces and Types in TypeScript?

In TypeScript, both `interface` and `type` are used to define custom types. Although they often serve similar purposes, But they have some key differences.

### Interfaces

1. We can redeclare the same interface multiple times, and TypeScript will merge them.

```ts
interface Employee {
  name: string;
  age: number;
}

interface Employee {
  address: string;
  city: string;
}
// The final type Employee includes: name, age, address, city
```

2. Interfaces are mainly used to describe the shape of objects.

3. Interfaces supports inheritance using the `extends` keyword.

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  role: string;
}
```

### Types

1. We can't redeclare the same interface multiple times.

```ts
type Employee = {
  name: string;
  age: number;
};

type Employee = {
  address: string;
  city: string;
};

// Error: Duplicate identifier 'Employee'.ts(2300)
```

2. Types are more flexible than interfaces.

```ts
type EmployeeID = string | number;
type Person = [string, number];
```

3. We can combine multiple types into one by using type intersection.

```ts
type Person = {
  name: string;
};

type Employee = Person & {
  role: string;
};
```

---

## 2. What is the use of the keyof keyword in TypeScript? Provide an example.

The `keyof` operator takes an object and create a union type with the object's keys.

```ts
type Car = {
  brand: string;
  model: string;
  year: number;
};

type CarKeys = keyof Car;
// Here, CarKeys is a union type: 'brand' | 'model' | 'year'
```

### Here the practical use cases of `typeof` operator

```ts
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = {
  name: "Sabbir",
  age: 25,
};

const name = getValue(person, "name");    // Output: "Sabbir"
const age = getValue(person, "age");      // Output: 25
cosnt email = getValue(person, "email");  // Error: "email" is not a key of Person
```

---

## 3. Explain the difference between any, unknown, and never types in TypeScript.

In Typescript `any`, `unknown` and `never` all are special types. They have some key differences.

### Any

1. We can assign any value to an any type, it can hold any value like `string`, `number`, `object` and so on.

```ts
let value: any;
value = 'sabbir';      // No Error
value = 25;            // No Error
value = {              // No Error
    name: 'sabbir',
    age: 25
}
value.toUpperCase();   // No Error
```

### Unknown

1. We can also assign any value to an unknown type.
2. But it is safer than any type because we can't use it directly without checking it's type.

```ts
let value: unknown;
value = "hello";       // No Error
value = 42;            // No Error
value.toUpperCase();   // Error: Object is of type 'unknown'

if (typeof value === "string") {
  console.log(value.toUpperCase());   // Safe
}
```

### Never

1. Never type indicates the value that will never occur. It is used when we are sure that something will never occur.
2. We can't assing any value.

```ts
const value : never = 'sabbir'   // Type "sabbir" is not assignable to type 'never'.ts(2322)

// We can use never for throwing error
function fail(msg: string): never {
  throw new Error(msg);
}
```