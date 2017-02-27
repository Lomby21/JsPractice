var total = 0;
for (x = 1; x < 1000; x++){
    if (x%5 == 0 || x%3 == 0){
        total += x;
    }
}
console.log(total);
