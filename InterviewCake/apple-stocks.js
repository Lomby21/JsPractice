function getMaxProfit(stockPricesYesterday){
	var buyPrice=stockPricesYesterday[0], sellPrice = [0,0];
    for (x=0; x<stockPricesYesterday.length; x++){
		if (stockPricesYesterday[x] < buyPrice){
			buyPrice = stockPricesYesterday[x];
		} else {
			if (stockPricesYesterday[x] > sellPrice[1]) {
				if ((sellPrice[0]-sellPrice[1])<(stockPricesYesterday[x]-buyPrice)){
					sellPrice = [stockPricesYesterday[x], buyPrice];
				}
			}
		}
	}
return(sellPrice[0]-sellPrice[1]);
}

var stockPrices = [102, 43, 93, 23, 42];
getMaxProfit(stockPrices);
