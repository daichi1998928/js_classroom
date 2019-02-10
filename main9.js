const cat = {
    name: "hana",
    age: 14,
    sex: "オス"
}

console.log(cat);

cat.owner = "daichi";

console.log(cat);
cat.age = 19;

console.log(cat);

delete cat.owner;

console.log(cat);