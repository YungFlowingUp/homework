export function sum(a, b) {
    const MAX = Number.MAX_SAFE_INTEGER;
    if (typeof a == "bigint" || typeof b == "bigint") {
        a = BigInt(a);
        b = BigInt(b);
        return a + b
    }
    if (Math.abs(a) > MAX || Math.abs(b) > MAX) {        
        a = BigInt(a);
        b = BigInt(b);        
    }   
    return a + b
}

export function sub(a, b) {
    const MAX = Number.MAX_SAFE_INTEGER;
    if (typeof a == "bigint" || typeof b == "bigint") {
        a = BigInt(a);
        b = BigInt(b);
        return a - b
    }
    if (Math.abs(a) > MAX || Math.abs(b) > MAX) {        
        a = BigInt(a);
        b = BigInt(b);        
    }   
    return a - b
}

export function mul(a, b) {
    const MAX = Number.MAX_SAFE_INTEGER;
    if (typeof a == "bigint" || typeof b == "bigint") {
        a = BigInt(a);
        b = BigInt(b);
        return a * b
    }
    if (Math.abs(a) > MAX || Math.abs(b) > MAX) {        
        a = BigInt(a);
        b = BigInt(b);        
    }   
    return a * b
}

export function div(a, b) {
    const MAX = Number.MAX_SAFE_INTEGER;
    if (typeof a == "bigint" || typeof b == "bigint") {
        a = BigInt(a);
        b = BigInt(b);
        return a / b
    }
    if (Math.abs(a) > MAX || Math.abs(b) > MAX) {        
        a = BigInt(a);
        b = BigInt(b);        
    }   
    return a / b
}