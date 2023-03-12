function hashCode(str) {
    let hash = 0;
    if (str.length === 0) {
        return hash;
    }
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        console.log(char);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

// Example usage:
console.log(hashCode("ab"));
console.log(hashCode("ba"));
console.log(hashCode("56"));
console.log(hashCode("0"));
console.log(hashCode("fahim"));
