
function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === true || toUpper === undefined) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();
    }
}



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}



function concatenateArrays<T>(...arrays: T[][]): T[] {
    return ([] as T[]).concat(...arrays);
}



class Vehicle {
    constructor(private make: string, private year: number) { }

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
        super(make, year)
    };

    getModel(): string {
        return `Model: ${this.model}`
    }
}



function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length;
    }
    else {
        return value * 2;
    }
}



interface Product {
    name: string,
    price: Number
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null
    }
    return products.reduce((acc, curr) => {
        return curr.price > acc.price ? curr : acc
    })
}



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return 'Weekend'
    }
    else {
        return 'Weekday'
    }
}



async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n > 0) {
                resolve(n * n);

            } else {
                reject(new Error("Negative number not allowed"));
            }
        }, 1000);
    });
}