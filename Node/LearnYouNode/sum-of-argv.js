var total = 0;
for (i = 2; i < process.argv.length; i++){
	total += +process.argv[i];
	//or total += Number(process.argv[i]);
}
console.log(total);
