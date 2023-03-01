class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
} 

const products = [
    new Product("iphone5", 15000, 100, "new"),
    new Product("iphone6", 16000, 45, "restored"),
    new Product("iphone6s", 18900, 65, "restored")
];

function strToClass(...str) {
    const arr = [...str];

    const matchingWords = {
        name: '"name"',
        price: '"price"',
        quantity: '"quantity"',
        description: '"description"'
    };

    for (let str of arr) {
        const digits = str.match(/\d+/g);

        str = str.replace(/-contains-|-starts-|-ends-/g, ':"');               
        str = str.replace(/-<|->|-=|-<=|->=/g, ':"');                
        str = str.replaceAll('&', '",');

        str = str.replace(/name|price|quantity|description/g, 
                          matched => matchingWords[matched]);

        for (let nums of digits) {
            str = str.replace(`"${nums}"`, +nums)
        }
                        
        str = '{' + str + '"}';        

        let check = true;
        const newProduct = new Product(...Object.values(JSON.parse(str)));

        for (let field in newProduct) {
            if (!newProduct[field]){
                check = false;
                break
            }
        }

        if (check) products.push(newProduct);        
    } 
    return products
}

console.log(strToClass("name-starts-fd&quantity-=5", "name-contains-fd&price-=2&quantity->5&description-ends-abc"));