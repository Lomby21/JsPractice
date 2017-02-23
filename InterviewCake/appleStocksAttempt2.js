function getMaxProfit(stockPrices){
    if (stockPrices.length>=2){
        var bestProfit = stockPrices[1]-stockPrices[0];
        var buyPrice = stockPrices[0];
        var sellPrice = [stockPrices[1], buyPrice];
        for (x=1;x<stockPrices.length;x++){
            if ((stockPrices[x]-buyPrice)>bestProfit){
                sellPrice = [stockPrices[x], buyPrice];
                bestProfit = stockPrices[x] - buyPrice;
            }
            if (stockPrices[x] < buyPrice){
                buyPrice = stockPrices[x];
            }
        }
        console.log('The best possible profit was ', bestProfit, ' buying at ', sellPrice[1], ' and selling at ', sellPrice[0])
    } else {
        throw 'Function needs at least 2 prices to calculate the bestProfit';
    }
}



var stockPrices = [];
var numberOfPrices = Math.floor(Math.random()*100);
for (x=0;x<numberOfPrices;x++){
    stockPrices.push(Math.floor(Math.random()*1000));
}
console.log(stockPrices);
getMaxProfit(stockPrices);
