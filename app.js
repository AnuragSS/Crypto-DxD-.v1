const express = require(`express`);
const bodyParser = require(`body-parser`);
const port =3000;
const app  = express();
const http = require(`https`);
const { parse } = require("path");
const { Http2ServerRequest } = require("http2");
app.use(express.static(`public`));
app.use(bodyParser.urlencoded({extended:true}));
app.set(`view engine`,`ejs`);

const serverMessage = () =>{
    console.log(`Server is running successfullly\nlocalhost:${port}`);
}


// ALL COINS DASH BOARD FETCHED/DISPLAY DATA


app.get(`/`,(req,res)=>{
  
   //const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,SOL,USDT,ADA,XRP,LTC,DOGE,SHIB,DOT&tsyms=USD,EUR`
   const url2 = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LTC,BNB,USDT,DOT,ATOM,LUNA&tsyms=INR`;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH,BTC,DOGE,XRP,ADA,SOL&tsyms=INR`;
    const url3 = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LINK,MATIC,XLM,EPS,XMR&tsyms=INR`
    const url4 = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=AXS,ENS,UNI&tsyms=INR'

    
    http.get(url,(response)=>{
        console.log(`Server status code response from API:${response.statusCode}`);
        response.on(`data`,(data)=>{
            const exchangeData= JSON.parse(data);
            console.log(exchangeData);
            const btcPrice = exchangeData.RAW.BTC.INR.PRICE;
            const ethPrice = exchangeData.RAW.ETH.INR.PRICE;
            const dogePrice = exchangeData.RAW.DOGE.INR.PRICE;
            const xrpPrice = exchangeData.RAW.XRP.INR.PRICE;
            const adaPrice = exchangeData.RAW.ADA.INR.PRICE;
            const solPrice = exchangeData.RAW.SOL.INR.PRICE;

            //    COIN ICONS 

            const btcIcon = exchangeData.RAW.BTC.INR.IMAGEURL;
            const ethIcon = exchangeData.RAW.ETH.INR.IMAGEURL;
            const xrpIcon = exchangeData.RAW.XRP.INR.IMAGEURL;
            const dogeIcon = exchangeData.RAW.DOGE.INR.IMAGEURL;
            const solIcon  = exchangeData.RAW.SOL.INR.IMAGEURL;
            const adaicon = exchangeData.RAW.ADA.INR.IMAGEURL;


 
            http.get(url2,(response2)=>{
                response2.on(`data`,(data)=>{
                    const exchangeData2 = JSON.parse(data);
                   console.log(`second\n\n${exchangeData2}`);
                    const bnbPrice = exchangeData2.RAW.BNB.INR.PRICE;
                    const usdtPrice =exchangeData2.RAW.USDT.INR.PRICE;
                    const ltcPrice = exchangeData2.RAW.LTC.INR.PRICE;
                    const dotPrice = exchangeData2.RAW.DOT.INR.PRICE;
                    const atomPrice = exchangeData2.RAW.ATOM.INR.PRICE;
                    const lunaPrice = exchangeData2.RAW.LUNA.INR.PRICE;

                    // COIN ICONS

                    const bnbIcon = exchangeData2.RAW.BNB.INR.IMAGEURL;
                    const usdtIcon = exchangeData2.RAW.USDT.INR.IMAGEURL;
                    const ltcIcon = exchangeData2.RAW.LTC.INR.IMAGEURL;
                    const dotIcon = exchangeData2.RAW.DOT.INR.IMAGEURL;
                    const atomIcon = exchangeData2.RAW.ATOM.INR.IMAGEURL;
                    const lunaIcon = exchangeData2.RAW.LUNA.INR.IMAGEURL;


                    

                        http.get(url3,(response3)=>{
                            response3.on(`data`,(data)=>{
                                const exchangeData3 = JSON.parse(data);

                                //coin prices
                                const linkPrice  = exchangeData3.RAW.LINK.INR.PRICE;
                                const maticPrice = exchangeData3.RAW.MATIC.INR.PRICE;
                                const xlmPrice = exchangeData3.RAW.XLM.INR.PRICE;
                                const epxPrice = exchangeData3.RAW.EPS.INR.PRICE;
                                const xmrPrice = exchangeData3.RAW.XMR.INR.PRICE;
                               


                                //coin icons
                                const linkIcon  = exchangeData3.RAW.LINK.INR.IMAGEURL;
                                const maticIcon = exchangeData3.RAW.MATIC.INR.IMAGEURL;
                                const xlmIcon = exchangeData3.RAW.XLM.INR.IMAGEURL;
                                const epxIcon = exchangeData3.RAW.EPS.INR.IMAGEURL;
                                const xmrIcon = exchangeData3.RAW.XMR.INR.IMAGEURL;
                                

                                http.get(url4,(response4)=>{
                                    response4.on(`data`,(data)=>{
                                        const exchangeData4 = JSON.parse(data);

                                        //coin prices
                                        const axsPrice = exchangeData4.RAW.AXS.INR.PRICE;
                                        const ensPrice = exchangeData4.RAW.ENS.INR.PRICE;
                                        const uniPrice = exchangeData4.RAW.UNI.INR.PRICE;

                                        // coin icon

                                        const axsIcon = exchangeData4.RAW.AXS.INR.IMAGEURL;
                                        const ensIcon = exchangeData4.RAW.ENS.INR.IMAGEURL;
                                        const uniIcon = exchangeData4.RAW.UNI.INR.IMAGEURL;


                                        // sending fetched data 
                                        res.render(`exchange`,{
                                            bitcoinPrice : btcPrice.toFixed(2),
                                            ethereumPrice : ethPrice.toFixed(3),
                                            dogePrice : dogePrice.toFixed(4),
                                            ripplePrice : xrpPrice.toFixed(4),
                                            cardanoPrice: adaPrice.toFixed(4),
                                            solanaPrice : solPrice.toFixed(4),
                                            polkadotPrice : dotPrice.toFixed(4),
                                            tetherPrice : usdtPrice.toFixed(4),
                                            litePrice  :ltcPrice.toFixed(4),
                                            bnbPrice : bnbPrice.toFixed(4),
                                            atomPrice :atomPrice.toFixed(4),
                                            lunaPrice : lunaPrice.toFixed(4),
                                            chainLinkPrice : linkPrice.toFixed(4),
                                            maticNetworkPrice : maticPrice.toFixed(4),
                                            stellarPrice : xlmPrice.toFixed(4),
                                            ellipsisPrice : epxPrice.toFixed(4),
                                            moneroPrice : xmrPrice.toFixed(4),
                                            uniSwapPrice : uniPrice.toFixed(4),
                                            axieInfinityPrice : axsPrice.toFixed(4),
                                            ethereumNsPrice : ensPrice.toFixed(4),
                                           
                                            //   coin Icon
                                            bitcoinIcon : btcIcon,
                                            ethereumIcon :ethIcon,
                                            rippleIcon : xrpIcon,
                                            cardanoIcon : adaicon,
                                            dogeIcon  : dogeIcon,
                                            solanaIcon : solIcon,
                                            binanceIcon : bnbIcon,
                                            tetherIcon : usdtIcon,
                                            litecoinIcon :ltcIcon,
                                            polkadotIcon : dotIcon,
                                            atomIcon : atomIcon,
                                            lunaIcon : lunaIcon,
                                            chainLinkIcon :linkIcon,
                                            maticNetworkIcon : maticIcon,
                                            stellarIcon :xlmIcon,
                                            ellipsisIcon : epxIcon,
                                            moneroIcon : xmrIcon,
                                            uniSwapIcon : uniIcon,
                                            axieInfinityIcon : axsIcon,
                                            ethereumNsIcon : ensIcon,

                                        });
                                        
                                    })
                                })



                            })
                        })
                });
            })
            
        })
    });
});


//   BITCOIN ALL FETCHED/DISPLAY DATA 

app.post(`/btc.ejs`,(req,res)=>{
   
    const url  = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=INR`;
    http.get(url,(response)=>{
        response.on(`data`,(data)=>{
            const btcData = JSON.parse(data);
 
            // PRICES DATA:
            const currentPrice = btcData.RAW.BTC.INR.PRICE;
            const highPrice24H = btcData.RAW.BTC.INR.HIGH24HOUR;
            const lowPrice24H = btcData.RAW.BTC.INR.LOW24HOUR;
            const openHour = btcData.RAW.BTC.INR.OPENHOUR;
            const highHour = btcData.RAW.BTC.INR.HIGHHOUR;
            const lowHour = btcData.RAW.BTC.INR.LOWHOUR;
            const changeDay = btcData.RAW.BTC.INR.CHANGE24HOUR;
            const changeHour = btcData.RAW.BTC.INR.CHANGEHOUR;

            //Market Data:
            const marketCap = btcData.RAW.BTC.INR.MKTCAP;
            const supply = btcData.RAW.BTC.INR.SUPPLY;
            const circulatingSupply = btcData.RAW.BTC.INR.CIRCULATINGSUPPLY;
            const circMktCpt = btcData.RAW.BTC.INR.CIRCULATINGSUPPLYMKTCAP;

            //Volumes Data:
            const volumesTraded24H =btcData.RAW.BTC.INR.VOLUME24HOUR;
            const lastTradedVolume = btcData.RAW.BTC.INR.LASTVOLUMETO;
            const volumeDay = btcData.RAW.BTC.INR.VOLUMEDAY;

            //Coin symbol/icon:
            const imageUrl = btcData.RAW.BTC.INR.IMAGEURL;

            //Extra details:
            const lastTradeId = btcData.RAW.BTC.INR.LASTTRADEID;
            const lastTradeMarket = btcData.RAW.BTC.INR.LASTMARKET;


            res.render(`btc`,{
                //Price details:
                cryptoCurrentPrice:currentPrice ,
                cryptoHigh24H : highPrice24H,
                cryptoLow24H : lowPrice24H,
                cryptoOpenHour : openHour,
                cryptoHighHour : highHour,
                cryptoLowHour : lowHour,
                cryptoChangeDay : changeDay,
                cryptoChangeHour: changeHour,
                // Market DETIALS;
                cryptoMktCpt : marketCap,
                cryptoSupply : supply,
                cryptoCktSup : circulatingSupply,
                cryptoCktMktCpt : circMktCpt,
                // VOlume Details:
                cryptoVolume24H : volumesTraded24H,
                cryptoLastTradedVolume : lastTradedVolume,
                cryptoVolumeDay : volumeDay,
                //Extra Details
                cryptoIcon : imageUrl,
                cryptoTradeId : lastTradeId,
                cryptoTradeMarket : lastTradeMarket


            });

        });
    })

    
});

//   ETHEREUM ALL FETCHED/DISPLAY DATA

app.post(`/eth.ejs`,(req,res)=>{

    const url  = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=INR`;
    http.get(url,(response)=>{
        response.on(`data`,(data)=>{
            const coinData = JSON.parse(data);
 
            // PRICES DATA:
            const currentPrice = coinData.RAW.ETH.INR.PRICE;
            const highPrice24H = coinData.RAW.ETH.INR.HIGH24HOUR;
            const lowPrice24H = coinData.RAW.ETH.INR.LOW24HOUR;
            const openHour = coinData.RAW.ETH.INR.OPENHOUR;
            const highHour = coinData.RAW.ETH.INR.HIGHHOUR;
            const lowHour = coinData.RAW.ETH.INR.LOWHOUR;
            const changeDay = coinData.RAW.ETH.INR.CHANGE24HOUR;
            const changeHour = coinData.RAW.ETH.INR.CHANGEHOUR;

            //Market Data:
            const marketCap = coinData.RAW.ETH.INR.MKTCAP;
            const supply = coinData.RAW.ETH.INR.SUPPLY;
            const circulatingSupply = coinData.RAW.ETH.INR.CIRCULATINGSUPPLY;
            const circMktCpt = coinData.RAW.ETH.INR.CIRCULATINGSUPPLYMKTCAP;

            //Volumes Data:
            const volumesTraded24H =coinData.RAW.ETH.INR.VOLUME24HOUR;
            const lastTradedVolume = coinData.RAW.ETH.INR.LASTVOLUMETO;
            const volumeDay = coinData.RAW.ETH.INR.VOLUMEDAY;

            //Coin symbol/icon:
            const imageUrl = coinData.RAW.ETH.INR.IMAGEURL;

            //Extra details:
            const lastTradeId = coinData.RAW.ETH.INR.LASTTRADEID;
            const lastTradeMarket = coinData.RAW.ETH.INR.LASTMARKET;


            res.render(`eth`,{
                //Price details:
                cryptoCurrentPrice:currentPrice ,
                cryptoHigh24H : highPrice24H,
                cryptoLow24H : lowPrice24H,
                cryptoOpenHour : openHour,
                cryptoHighHour : highHour,
                cryptoLowHour : lowHour,
                cryptoChangeDay : changeDay,
                cryptoChangeHour: changeHour,
                // Market DETIALS;
                cryptoMktCpt : marketCap,
                cryptoSupply : supply,
                cryptoCktSup : circulatingSupply,
                cryptoCktMktCpt : circMktCpt,
                // VOlume Details:
                cryptoVolume24H : volumesTraded24H,
                cryptoLastTradedVolume : lastTradedVolume,
                cryptoVolumeDay : volumeDay,
                //Extra Details
                cryptoIcon : imageUrl,
                cryptoTradeId : lastTradeId,
                cryptoTradeMarket : lastTradeMarket


            });

        });
    })


});

//  RIPPLE ALL FETCHED/DISPLAY DATA

app.post(`/xrp.ejs`,(req,res)=>{

    const url  = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XRP&tsyms=INR`;
    http.get(url,(response)=>{
        response.on(`data`,(data)=>{
            const coinData = JSON.parse(data);
 
            // PRICES DATA:
            const currentPrice = coinData.RAW.XRP.INR.PRICE;
            const highPrice24H = coinData.RAW.XRP.INR.HIGH24HOUR;
            const lowPrice24H = coinData.RAW.XRP.INR.LOW24HOUR;
            const openHour = coinData.RAW.XRP.INR.OPENHOUR;
            const highHour = coinData.RAW.XRP.INR.HIGHHOUR;
            const lowHour = coinData.RAW.XRP.INR.LOWHOUR;
            const changeDay = coinData.RAW.XRP.INR.CHANGE24HOUR;
            const changeHour = coinData.RAW.XRP.INR.CHANGEHOUR;

            //Market Data:
            const marketCap = coinData.RAW.XRP.INR.MKTCAP;
            const supply = coinData.RAW.XRP.INR.SUPPLY;
            const circulatingSupply = coinData.RAW.XRP.INR.CIRCULATINGSUPPLY;
            const circMktCpt = coinData.RAW.XRP.INR.CIRCULATINGSUPPLYMKTCAP;

            //Volumes Data:
            const volumesTraded24H =coinData.RAW.XRP.INR.VOLUME24HOUR;
            const lastTradedVolume = coinData.RAW.XRP.INR.LASTVOLUMETO;
            const volumeDay = coinData.RAW.XRP.INR.VOLUMEDAY;

            //Coin symbol/icon:
            const imageUrl = coinData.RAW.XRP.INR.IMAGEURL;

            //Extra details:
            const lastTradeId = coinData.RAW.XRP.INR.LASTTRADEID;
            const lastTradeMarket = coinData.RAW.XRP.INR.LASTMARKET;


            res.render(`xrp`,{
                //Price details:
                cryptoCurrentPrice:currentPrice ,
                cryptoHigh24H : highPrice24H,
                cryptoLow24H : lowPrice24H,
                cryptoOpenHour : openHour,
                cryptoHighHour : highHour,
                cryptoLowHour : lowHour,
                cryptoChangeDay : changeDay,
                cryptoChangeHour: changeHour,
                // Market DETIALS;
                cryptoMktCpt : marketCap,
                cryptoSupply : supply,
                cryptoCktSup : circulatingSupply,
                cryptoCktMktCpt : circMktCpt,
                // VOlume Details:
                cryptoVolume24H : volumesTraded24H,
                cryptoLastTradedVolume : lastTradedVolume,
                cryptoVolumeDay : volumeDay,
                //Extra Details
                cryptoIcon : imageUrl,
                cryptoTradeId : lastTradeId,
                cryptoTradeMarket : lastTradeMarket


            });

        });
    })

});

//  CARDANO ALL FETCHED/DISPLAY DATA

app.post(`/ada.ejs`,(req,res)=>{

    const url  = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ADA&tsyms=INR`;
    http.get(url,(response)=>{
        response.on(`data`,(data)=>{
            const coinData = JSON.parse(data);
 
            // PRICES DATA:
            const currentPrice = coinData.RAW.ADA.INR.PRICE;
            const highPrice24H = coinData.RAW.ADA.INR.HIGH24HOUR;
            const lowPrice24H = coinData.RAW.ADA.INR.LOW24HOUR;
            const openHour = coinData.RAW.ADA.INR.OPENHOUR;
            const highHour = coinData.RAW.ADA.INR.HIGHHOUR;
            const lowHour = coinData.RAW.ADA.INR.LOWHOUR;
            const changeDay = coinData.RAW.ADA.INR.CHANGE24HOUR;
            const changeHour = coinData.RAW.ADA.INR.CHANGEHOUR;

            //Market Data:
            const marketCap = coinData.RAW.ADA.INR.MKTCAP;
            const supply = coinData.RAW.ADA.INR.SUPPLY;
            const circulatingSupply = coinData.RAW.ADA.INR.CIRCULATINGSUPPLY;
            const circMktCpt = coinData.RAW.ADA.INR.CIRCULATINGSUPPLYMKTCAP;

            //Volumes Data:
            const volumesTraded24H =coinData.RAW.ADA.INR.VOLUME24HOUR;
            const lastTradedVolume = coinData.RAW.ADA.INR.LASTVOLUMETO;
            const volumeDay = coinData.RAW.ADA.INR.VOLUMEDAY;

            //Coin symbol/icon:
            const imageUrl = coinData.RAW.ADA.INR.IMAGEURL;

            //Extra details:
            const lastTradeId = coinData.RAW.ADA.INR.LASTTRADEID;
            const lastTradeMarket = coinData.RAW.ADA.INR.LASTMARKET;


            res.render(`ada`,{
                //Price details:
                cryptoCurrentPrice:currentPrice ,
                cryptoHigh24H : highPrice24H,
                cryptoLow24H : lowPrice24H,
                cryptoOpenHour : openHour,
                cryptoHighHour : highHour,
                cryptoLowHour : lowHour,
                cryptoChangeDay : changeDay,
                cryptoChangeHour: changeHour,
                // Market DETIALS;
                cryptoMktCpt : marketCap,
                cryptoSupply : supply,
                cryptoCktSup : circulatingSupply,
                cryptoCktMktCpt : circMktCpt,
                // VOlume Details:
                cryptoVolume24H : volumesTraded24H,
                cryptoLastTradedVolume : lastTradedVolume,
                cryptoVolumeDay : volumeDay,
                //Extra Details
                cryptoIcon : imageUrl,
                cryptoTradeId : lastTradeId,
                cryptoTradeMarket : lastTradeMarket


            });

        });
    })

});

//  LITECOIN ALL FETCHED/DISPLAY DATA

app.post(`/ltc.ejs`,(req,res)=>{

    const url  = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LTC&tsyms=INR`;
    http.get(url,(response)=>{
        response.on(`data`,(data)=>{
            const coinData = JSON.parse(data);
 
            // PRICES DATA:
            const currentPrice = coinData.RAW.LTC.INR.PRICE;
            const highPrice24H = coinData.RAW.LTC.INR.HIGH24HOUR;
            const lowPrice24H = coinData.RAW.LTC.INR.LOW24HOUR;
            const openHour = coinData.RAW.LTC.INR.OPENHOUR;
            const highHour = coinData.RAW.LTC.INR.HIGHHOUR;
            const lowHour = coinData.RAW.LTC.INR.LOWHOUR;
            const changeDay = coinData.RAW.LTC.INR.CHANGE24HOUR;
            const changeHour = coinData.RAW.LTC.INR.CHANGEHOUR;

            //Market Data:
            const marketCap = coinData.RAW.LTC.INR.MKTCAP;
            const supply = coinData.RAW.LTC.INR.SUPPLY;
            const circulatingSupply = coinData.RAW.LTC.INR.CIRCULATINGSUPPLY;
            const circMktCpt = coinData.RAW.LTC.INR.CIRCULATINGSUPPLYMKTCAP;

            //Volumes Data:
            const volumesTraded24H =coinData.RAW.LTC.INR.VOLUME24HOUR;
            const lastTradedVolume = coinData.RAW.LTC.INR.LASTVOLUMETO;
            const volumeDay = coinData.RAW.LTC.INR.VOLUMEDAY;

            //Coin symbol/icon:
            const imageUrl = coinData.RAW.LTC.INR.IMAGEURL;

            //Extra details:
            const lastTradeId = coinData.RAW.LTC.INR.LASTTRADEID;
            const lastTradeMarket = coinData.RAW.LTC.INR.LASTMARKET;


            res.render(`ltc`,{
                //Price details:
                cryptoCurrentPrice:currentPrice ,
                cryptoHigh24H : highPrice24H,
                cryptoLow24H : lowPrice24H,
                cryptoOpenHour : openHour,
                cryptoHighHour : highHour,
                cryptoLowHour : lowHour,
                cryptoChangeDay : changeDay,
                cryptoChangeHour: changeHour,
                // Market DETIALS;
                cryptoMktCpt : marketCap,
                cryptoSupply : supply,
                cryptoCktSup : circulatingSupply,
                cryptoCktMktCpt : circMktCpt,
                // VOlume Details:
                cryptoVolume24H : volumesTraded24H,
                cryptoLastTradedVolume : lastTradedVolume,
                cryptoVolumeDay : volumeDay,
                //Extra Details
                cryptoIcon : imageUrl,
                cryptoTradeId : lastTradeId,
                cryptoTradeMarket : lastTradeMarket


            });

        });
    })

});


//  SOLANA ALL FETCHED/DISPLAY DATA

app.post(`/sol.ejs`,(req,res)=>{

    const url  = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=SOL&tsyms=INR`;
    http.get(url,(response)=>{
        response.on(`data`,(data)=>{
            const coinData = JSON.parse(data);
 
            // PRICES DATA:
            const currentPrice = coinData.RAW.SOL.INR.PRICE;
            const highPrice24H = coinData.RAW.SOL.INR.HIGH24HOUR;
            const lowPrice24H = coinData.RAW.SOL.INR.LOW24HOUR;
            const openHour = coinData.RAW.SOL.INR.OPENHOUR;
            const highHour = coinData.RAW.SOL.INR.HIGHHOUR;
            const lowHour = coinData.RAW.SOL.INR.LOWHOUR;
            const changeDay = coinData.RAW.SOL.INR.CHANGE24HOUR;
            const changeHour = coinData.RAW.SOL.INR.CHANGEHOUR;

            //Market Data:
            const marketCap = coinData.RAW.SOL.INR.MKTCAP;
            const supply = coinData.RAW.SOL.INR.SUPPLY;
            const circulatingSupply = coinData.RAW.SOL.INR.CIRCULATINGSUPPLY;
            const circMktCpt = coinData.RAW.SOL.INR.CIRCULATINGSUPPLYMKTCAP;

            //Volumes Data:
            const volumesTraded24H =coinData.RAW.SOL.INR.VOLUME24HOUR;
            const lastTradedVolume = coinData.RAW.SOL.INR.LASTVOLUMETO;
            const volumeDay = coinData.RAW.SOL.INR.VOLUMEDAY;

            //Coin symbol/icon:
            const imageUrl = coinData.RAW.SOL.INR.IMAGEURL;

            //Extra details:
            const lastTradeId = coinData.RAW.SOL.INR.LASTTRADEID;
            const lastTradeMarket = coinData.RAW.SOL.INR.LASTMARKET;


            res.render(`sol`,{
                //Price details:
                cryptoCurrentPrice:currentPrice ,
                cryptoHigh24H : highPrice24H,
                cryptoLow24H : lowPrice24H,
                cryptoOpenHour : openHour,
                cryptoHighHour : highHour,
                cryptoLowHour : lowHour,
                cryptoChangeDay : changeDay,
                cryptoChangeHour: changeHour,
                // Market DETIALS;
                cryptoMktCpt : marketCap,
                cryptoSupply : supply,
                cryptoCktSup : circulatingSupply,
                cryptoCktMktCpt : circMktCpt,
                // VOlume Details:
                cryptoVolume24H : volumesTraded24H,
                cryptoLastTradedVolume : lastTradedVolume,
                cryptoVolumeDay : volumeDay,
                //Extra Details
                cryptoIcon : imageUrl,
                cryptoTradeId : lastTradeId,
                cryptoTradeMarket : lastTradeMarket


            });

        });
    })

});

//   BINANCE ALL FETCHED/DISPLAY

app.post(`/bnb.ejs`,(req,res)=>{

    const url  = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BNB&tsyms=INR`;
    http.get(url,(response)=>{
        response.on(`data`,(data)=>{
            const coinData = JSON.parse(data);
 
            // PRICES DATA:
            const currentPrice = coinData.RAW.BNB.INR.PRICE;
            const highPrice24H = coinData.RAW.BNB.INR.HIGH24HOUR;
            const lowPrice24H = coinData.RAW.BNB.INR.LOW24HOUR;
            const openHour = coinData.RAW.BNB.INR.OPENHOUR;
            const highHour = coinData.RAW.BNB.INR.HIGHHOUR;
            const lowHour = coinData.RAW.BNB.INR.LOWHOUR;
            const changeDay = coinData.RAW.BNB.INR.CHANGE24HOUR;
            const changeHour = coinData.RAW.BNB.INR.CHANGEHOUR;

            //Market Data:
            const marketCap = coinData.RAW.BNB.INR.MKTCAP;
            const supply = coinData.RAW.BNB.INR.SUPPLY;
            const circulatingSupply = coinData.RAW.BNB.INR.CIRCULATINGSUPPLY;
            const circMktCpt = coinData.RAW.BNB.INR.CIRCULATINGSUPPLYMKTCAP;

            //Volumes Data:
            const volumesTraded24H =coinData.RAW.BNB.INR.VOLUME24HOUR;
            const lastTradedVolume = coinData.RAW.BNB.INR.LASTVOLUMETO;
            const volumeDay = coinData.RAW.BNB.INR.VOLUMEDAY;

            //Coin symbol/icon:
            const imageUrl = coinData.RAW.BNB.INR.IMAGEURL;

            //Extra details:
            const lastTradeId = coinData.RAW.BNB.INR.LASTTRADEID;
            const lastTradeMarket = coinData.RAW.BNB.INR.LASTMARKET;


            res.render(`bnb`,{
                //Price details:
                cryptoCurrentPrice:currentPrice ,
                cryptoHigh24H : highPrice24H,
                cryptoLow24H : lowPrice24H,
                cryptoOpenHour : openHour,
                cryptoHighHour : highHour,
                cryptoLowHour : lowHour,
                cryptoChangeDay : changeDay,
                cryptoChangeHour: changeHour,
                // Market DETIALS;
                cryptoMktCpt : marketCap,
                cryptoSupply : supply,
                cryptoCktSup : circulatingSupply,
                cryptoCktMktCpt : circMktCpt,
                // VOlume Details:
                cryptoVolume24H : volumesTraded24H,
                cryptoLastTradedVolume : lastTradedVolume,
                cryptoVolumeDay : volumeDay,
                //Extra Details
                cryptoIcon : imageUrl,
                cryptoTradeId : lastTradeId,
                cryptoTradeMarket : lastTradeMarket


            });

        });
    })

});

// DOGE COIN ALL FETCHED/DISPLAY DATA

app.post(`/doge.ejs`,(req,res)=>{

    const url  = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOGE&tsyms=INR`;
    http.get(url,(response)=>{
        response.on(`data`,(data)=>{
            const coinData = JSON.parse(data);
 
            // PRICES DATA:
            const currentPrice = coinData.RAW.DOGE.INR.PRICE;
            const highPrice24H = coinData.RAW.DOGE.INR.HIGH24HOUR;
            const lowPrice24H = coinData.RAW.DOGE.INR.LOW24HOUR;
            const openHour = coinData.RAW.DOGE.INR.OPENHOUR;
            const highHour = coinData.RAW.DOGE.INR.HIGHHOUR;
            const lowHour = coinData.RAW.DOGE.INR.LOWHOUR;
            const changeDay = coinData.RAW.DOGE.INR.CHANGE24HOUR;
            const changeHour = coinData.RAW.DOGE.INR.CHANGEHOUR;

            //Market Data:
            const marketCap = coinData.RAW.DOGE.INR.MKTCAP;
            const supply = coinData.RAW.DOGE.INR.SUPPLY;
            const circulatingSupply = coinData.RAW.DOGE.INR.CIRCULATINGSUPPLY;
            const circMktCpt = coinData.RAW.DOGE.INR.CIRCULATINGSUPPLYMKTCAP;

            //Volumes Data:
            const volumesTraded24H =coinData.RAW.DOGE.INR.VOLUME24HOUR;
            const lastTradedVolume = coinData.RAW.DOGE.INR.LASTVOLUMETO;
            const volumeDay = coinData.RAW.DOGE.INR.VOLUMEDAY;

            //Coin symbol/icon:
            const imageUrl = coinData.RAW.DOGE.INR.IMAGEURL;

            //Extra details:
            const lastTradeId = coinData.RAW.DOGE.INR.LASTTRADEID;
            const lastTradeMarket = coinData.RAW.DOGE.INR.LASTMARKET;


            res.render(`doge`,{
                //Price details:
                cryptoCurrentPrice:currentPrice ,
                cryptoHigh24H : highPrice24H,
                cryptoLow24H : lowPrice24H,
                cryptoOpenHour : openHour,
                cryptoHighHour : highHour,
                cryptoLowHour : lowHour,
                cryptoChangeDay : changeDay,
                cryptoChangeHour: changeHour,
                // Market DETIALS;
                cryptoMktCpt : marketCap,
                cryptoSupply : supply,
                cryptoCktSup : circulatingSupply,
                cryptoCktMktCpt : circMktCpt,
                // VOlume Details:
                cryptoVolume24H : volumesTraded24H,
                cryptoLastTradedVolume : lastTradedVolume,
                cryptoVolumeDay : volumeDay,
                //Extra Details
                cryptoIcon : imageUrl,
                cryptoTradeId : lastTradeId,
                cryptoTradeMarket : lastTradeMarket


            });

        });
    })

});


// TETHER COIN ALL FETCEHED/DISPLAY DATA

app.post(`/tether.ejs`,(req,res)=>{

    const url  = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDT&tsyms=INR`;
    http.get(url,(response)=>{
        response.on(`data`,(data)=>{
            const coinData = JSON.parse(data);
 
            // PRICES DATA:
            const currentPrice = coinData.RAW.USDT.INR.PRICE;
            const highPrice24H = coinData.RAW.USDT.INR.HIGH24HOUR;
            const lowPrice24H = coinData.RAW.USDT.INR.LOW24HOUR;
            const openHour = coinData.RAW.USDT.INR.OPENHOUR;
            const highHour = coinData.RAW.USDT.INR.HIGHHOUR;
            const lowHour = coinData.RAW.USDT.INR.LOWHOUR;
            const changeDay = coinData.RAW.USDT.INR.CHANGE24HOUR;
            const changeHour = coinData.RAW.USDT.INR.CHANGEHOUR;

            //Market Data:
            const marketCap = coinData.RAW.USDT.INR.MKTCAP;
            const supply = coinData.RAW.USDT.INR.SUPPLY;
            const circulatingSupply = coinData.RAW.USDT.INR.CIRCULATINGSUPPLY;
            const circMktCpt = coinData.RAW.USDT.INR.CIRCULATINGSUPPLYMKTCAP;

            //Volumes Data:
            const volumesTraded24H =coinData.RAW.USDT.INR.VOLUME24HOUR;
            const lastTradedVolume = coinData.RAW.USDT.INR.LASTVOLUMETO;
            const volumeDay = coinData.RAW.USDT.INR.VOLUMEDAY;

            //Coin symbol/icon:
            const imageUrl = coinData.RAW.USDT.INR.IMAGEURL;

            //Extra details:
            const lastTradeId = coinData.RAW.USDT.INR.LASTTRADEID;
            const lastTradeMarket = coinData.RAW.USDT.INR.LASTMARKET;


            res.render(`tether`,{
                //Price details:
                cryptoCurrentPrice:currentPrice ,
                cryptoHigh24H : highPrice24H,
                cryptoLow24H : lowPrice24H,
                cryptoOpenHour : openHour,
                cryptoHighHour : highHour,
                cryptoLowHour : lowHour,
                cryptoChangeDay : changeDay,
                cryptoChangeHour: changeHour,
                // Market DETIALS;
                cryptoMktCpt : marketCap,
                cryptoSupply : supply,
                cryptoCktSup : circulatingSupply,
                cryptoCktMktCpt : circMktCpt,
                // VOlume Details:
                cryptoVolume24H : volumesTraded24H,
                cryptoLastTradedVolume : lastTradedVolume,
                cryptoVolumeDay : volumeDay,
                //Extra Details
                cryptoIcon : imageUrl,
                cryptoTradeId : lastTradeId,
                cryptoTradeMarket : lastTradeMarket


            });

        });
    })

});


//  POLKADOT COIN ALL FETCHED/DISPLAY DATA

app.post(`/dot.ejs`,(req,res)=>{

    const url  = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DOT&tsyms=INR`;
    http.get(url,(response)=>{
        response.on(`data`,(data)=>{
            const coinData = JSON.parse(data);
 
            // PRICES DATA:
            const currentPrice = coinData.RAW.DOT.INR.PRICE;
            const highPrice24H = coinData.RAW.DOT.INR.HIGH24HOUR;
            const lowPrice24H = coinData.RAW.DOT.INR.LOW24HOUR;
            const openHour = coinData.RAW.DOT.INR.OPENHOUR;
            const highHour = coinData.RAW.DOT.INR.HIGHHOUR;
            const lowHour = coinData.RAW.DOT.INR.LOWHOUR;
            const changeDay = coinData.RAW.DOT.INR.CHANGE24HOUR;
            const changeHour = coinData.RAW.DOT.INR.CHANGEHOUR;

            //Market Data:
            const marketCap = coinData.RAW.DOT.INR.MKTCAP;
            const supply = coinData.RAW.DOT.INR.SUPPLY;
            const circulatingSupply = coinData.RAW.DOT.INR.CIRCULATINGSUPPLY;
            const circMktCpt = coinData.RAW.DOT.INR.CIRCULATINGSUPPLYMKTCAP;

            //Volumes Data:
            const volumesTraded24H =coinData.RAW.DOT.INR.VOLUME24HOUR;
            const lastTradedVolume = coinData.RAW.DOT.INR.LASTVOLUMETO;
            const volumeDay = coinData.RAW.DOT.INR.VOLUMEDAY;

            //Coin symbol/icon:
            const imageUrl = coinData.RAW.DOT.INR.IMAGEURL;

            //Extra details:
            const lastTradeId = coinData.RAW.DOT.INR.LASTTRADEID;
            const lastTradeMarket = coinData.RAW.DOT.INR.LASTMARKET;


            res.render(`dot`,{
                //Price details:
                cryptoCurrentPrice:currentPrice ,
                cryptoHigh24H : highPrice24H,
                cryptoLow24H : lowPrice24H,
                cryptoOpenHour : openHour,
                cryptoHighHour : highHour,
                cryptoLowHour : lowHour,
                cryptoChangeDay : changeDay,
                cryptoChangeHour: changeHour,
                // Market DETIALS;
                cryptoMktCpt : marketCap,
                cryptoSupply : supply,
                cryptoCktSup : circulatingSupply,
                cryptoCktMktCpt : circMktCpt,
                // VOlume Details:
                cryptoVolume24H : volumesTraded24H,
                cryptoLastTradedVolume : lastTradedVolume,
                cryptoVolumeDay : volumeDay,
                //Extra Details
                cryptoIcon : imageUrl,
                cryptoTradeId : lastTradeId,
                cryptoTradeMarket : lastTradeMarket


            });

        });
    })

});


//    COSMOS COIN ALL FETCHED/DISPLAY DATA


app.post(`/atom.ejs`,(req,res)=>{

    const url  = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ATOM&tsyms=INR`;
    http.get(url,(response)=>{
        response.on(`data`,(data)=>{
            const coinData = JSON.parse(data);
 
            // PRICES DATA:
            const currentPrice = coinData.RAW.ATOM.INR.PRICE;
            const highPrice24H = coinData.RAW.ATOM.INR.HIGH24HOUR;
            const lowPrice24H = coinData.RAW.ATOM.INR.LOW24HOUR;
            const openHour = coinData.RAW.ATOM.INR.OPENHOUR;
            const highHour = coinData.RAW.ATOM.INR.HIGHHOUR;
            const lowHour = coinData.RAW.ATOM.INR.LOWHOUR;
            const changeDay = coinData.RAW.ATOM.INR.CHANGE24HOUR;
            const changeHour = coinData.RAW.ATOM.INR.CHANGEHOUR;

            //Market Data:
            const marketCap = coinData.RAW.ATOM.INR.MKTCAP;
            const supply = coinData.RAW.ATOM.INR.SUPPLY;
            const circulatingSupply = coinData.RAW.ATOM.INR.CIRCULATINGSUPPLY;
            const circMktCpt = coinData.RAW.ATOM.INR.CIRCULATINGSUPPLYMKTCAP;

            //Volumes Data:
            const volumesTraded24H =coinData.RAW.ATOM.INR.VOLUME24HOUR;
            const lastTradedVolume = coinData.RAW.ATOM.INR.LASTVOLUMETO;
            const volumeDay = coinData.RAW.ATOM.INR.VOLUMEDAY;

            //Coin symbol/icon:
            const imageUrl = coinData.RAW.ATOM.INR.IMAGEURL;

            //Extra details:
            const lastTradeId = coinData.RAW.ATOM.INR.LASTTRADEID;
            const lastTradeMarket = coinData.RAW.ATOM.INR.LASTMARKET;


            res.render(`atom`,{
                //Price details:
                cryptoCurrentPrice:currentPrice ,
                cryptoHigh24H : highPrice24H,
                cryptoLow24H : lowPrice24H,
                cryptoOpenHour : openHour,
                cryptoHighHour : highHour,
                cryptoLowHour : lowHour,
                cryptoChangeDay : changeDay,
                cryptoChangeHour: changeHour,
                // Market DETIALS;
                cryptoMktCpt : marketCap,
                cryptoSupply : supply,
                cryptoCktSup : circulatingSupply,
                cryptoCktMktCpt : circMktCpt,
                // VOlume Details:
                cryptoVolume24H : volumesTraded24H,
                cryptoLastTradedVolume : lastTradedVolume,
                cryptoVolumeDay : volumeDay,
                //Extra Details
                cryptoIcon : imageUrl,
                cryptoTradeId : lastTradeId,
                cryptoTradeMarket : lastTradeMarket


            });

        });
    })

});


//     TERRA COIN ALL FETCHED/DISPLAY DATA

app.post(`/luna.ejs`,(req,res)=>{

    const url  = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LUNA&tsyms=INR`;
    http.get(url,(response)=>{
        response.on(`data`,(data)=>{
            const coinData = JSON.parse(data);
 
            // PRICES DATA:
            const currentPrice = coinData.RAW.LUNA.INR.PRICE;
            const highPrice24H = coinData.RAW.LUNA.INR.HIGH24HOUR;
            const lowPrice24H = coinData.RAW.LUNA.INR.LOW24HOUR;
            const openHour = coinData.RAW.LUNA.INR.OPENHOUR;
            const highHour = coinData.RAW.LUNA.INR.HIGHHOUR;
            const lowHour = coinData.RAW.LUNA.INR.LOWHOUR;
            const changeDay = coinData.RAW.LUNA.INR.CHANGE24HOUR;
            const changeHour = coinData.RAW.LUNA.INR.CHANGEHOUR;

            //Market Data:
            const marketCap = coinData.RAW.LUNA.INR.MKTCAP;
            const supply = coinData.RAW.LUNA.INR.SUPPLY;
            const circulatingSupply = coinData.RAW.LUNA.INR.CIRCULATINGSUPPLY;
            const circMktCpt = coinData.RAW.LUNA.INR.CIRCULATINGSUPPLYMKTCAP;

            //Volumes Data:
            const volumesTraded24H =coinData.RAW.LUNA.INR.VOLUME24HOUR;
            const lastTradedVolume = coinData.RAW.LUNA.INR.LASTVOLUMETO;
            const volumeDay = coinData.RAW.LUNA.INR.VOLUMEDAY;

            //Coin symbol/icon:
            const imageUrl = coinData.RAW.LUNA.INR.IMAGEURL;

            //Extra details:
            const lastTradeId = coinData.RAW.LUNA.INR.LASTTRADEID;
            const lastTradeMarket = coinData.RAW.LUNA.INR.LASTMARKET;


            res.render(`luna`,{
                //Price details:
                cryptoCurrentPrice:currentPrice ,
                cryptoHigh24H : highPrice24H,
                cryptoLow24H : lowPrice24H,
                cryptoOpenHour : openHour,
                cryptoHighHour : highHour,
                cryptoLowHour : lowHour,
                cryptoChangeDay : changeDay,
                cryptoChangeHour: changeHour,
                // Market DETIALS;
                cryptoMktCpt : marketCap,
                cryptoSupply : supply,
                cryptoCktSup : circulatingSupply,
                cryptoCktMktCpt : circMktCpt,
                // VOlume Details:
                cryptoVolume24H : volumesTraded24H,
                cryptoLastTradedVolume : lastTradedVolume,
                cryptoVolumeDay : volumeDay,
                //Extra Details
                cryptoIcon : imageUrl,
                cryptoTradeId : lastTradeId,
                cryptoTradeMarket : lastTradeMarket


            });

        });
    })

});


//  CHAINLINK COIN ALL FETCHED/DISPLAY DATA

app.post(`/link.ejs`,(req,res)=>{

    const url  = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LINK&tsyms=INR`;
    http.get(url,(response)=>{
        response.on(`data`,(data)=>{
            const coinData = JSON.parse(data);
 
            // PRICES DATA:
            const currentPrice = coinData.RAW.LINK.INR.PRICE;
            const highPrice24H = coinData.RAW.LINK.INR.HIGH24HOUR;
            const lowPrice24H = coinData.RAW.LINK.INR.LOW24HOUR;
            const openHour = coinData.RAW.LINK.INR.OPENHOUR;
            const highHour = coinData.RAW.LINK.INR.HIGHHOUR;
            const lowHour = coinData.RAW.LINK.INR.LOWHOUR;
            const changeDay = coinData.RAW.LINK.INR.CHANGE24HOUR;
            const changeHour = coinData.RAW.LINK.INR.CHANGEHOUR;

            //Market Data:
            const marketCap = coinData.RAW.LINK.INR.MKTCAP;
            const supply = coinData.RAW.LINK.INR.SUPPLY;
            const circulatingSupply = coinData.RAW.LINK.INR.CIRCULATINGSUPPLY;
            const circMktCpt = coinData.RAW.LINK.INR.CIRCULATINGSUPPLYMKTCAP;

            //Volumes Data:
            const volumesTraded24H =coinData.RAW.LINK.INR.VOLUME24HOUR;
            const lastTradedVolume = coinData.RAW.LINK.INR.LASTVOLUMETO;
            const volumeDay = coinData.RAW.LINK.INR.VOLUMEDAY;

            //Coin symbol/icon:
            const imageUrl = coinData.RAW.LINK.INR.IMAGEURL;

            //Extra details:
            const lastTradeId = coinData.RAW.LINK.INR.LASTTRADEID;
            const lastTradeMarket = coinData.RAW.LINK.INR.LASTMARKET;


            res.render(`link`,{
                //Price details:
                cryptoCurrentPrice:currentPrice ,
                cryptoHigh24H : highPrice24H,
                cryptoLow24H : lowPrice24H,
                cryptoOpenHour : openHour,
                cryptoHighHour : highHour,
                cryptoLowHour : lowHour,
                cryptoChangeDay : changeDay,
                cryptoChangeHour: changeHour,
                // Market DETIALS;
                cryptoMktCpt : marketCap,
                cryptoSupply : supply,
                cryptoCktSup : circulatingSupply,
                cryptoCktMktCpt : circMktCpt,
                // VOlume Details:
                cryptoVolume24H : volumesTraded24H,
                cryptoLastTradedVolume : lastTradedVolume,
                cryptoVolumeDay : volumeDay,
                //Extra Details
                cryptoIcon : imageUrl,
                cryptoTradeId : lastTradeId,
                cryptoTradeMarket : lastTradeMarket


            });

        });
    })

});


//   MATIC NETWORK COIN ALL FETCHED/DISPLAY DATA

app.post(`/matic.ejs`,(req,res)=>{

    const url  = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=MATIC&tsyms=INR`;
    http.get(url,(response)=>{
        response.on(`data`,(data)=>{
            const coinData = JSON.parse(data);
 
            // PRICES DATA:
            const currentPrice = coinData.RAW.MATIC.INR.PRICE;
            const highPrice24H = coinData.RAW.MATIC.INR.HIGH24HOUR;
            const lowPrice24H = coinData.RAW.MATIC.INR.LOW24HOUR;
            const openHour = coinData.RAW.MATIC.INR.OPENHOUR;
            const highHour = coinData.RAW.MATIC.INR.HIGHHOUR;
            const lowHour = coinData.RAW.MATIC.INR.LOWHOUR;
            const changeDay = coinData.RAW.MATIC.INR.CHANGE24HOUR;
            const changeHour = coinData.RAW.MATIC.INR.CHANGEHOUR;

            //Market Data:
            const marketCap = coinData.RAW.MATIC.INR.MKTCAP;
            const supply = coinData.RAW.MATIC.INR.SUPPLY;
            const circulatingSupply = coinData.RAW.MATIC.INR.CIRCULATINGSUPPLY;
            const circMktCpt = coinData.RAW.MATIC.INR.CIRCULATINGSUPPLYMKTCAP;

            //Volumes Data:
            const volumesTraded24H =coinData.RAW.MATIC.INR.VOLUME24HOUR;
            const lastTradedVolume = coinData.RAW.MATIC.INR.LASTVOLUMETO;
            const volumeDay = coinData.RAW.MATIC.INR.VOLUMEDAY;

            //Coin symbol/icon:
            const imageUrl = coinData.RAW.MATIC.INR.IMAGEURL;

            //Extra details:
            const lastTradeId = coinData.RAW.MATIC.INR.LASTTRADEID;
            const lastTradeMarket = coinData.RAW.MATIC.INR.LASTMARKET;


            res.render(`matic`,{
                //Price details:
                cryptoCurrentPrice:currentPrice ,
                cryptoHigh24H : highPrice24H,
                cryptoLow24H : lowPrice24H,
                cryptoOpenHour : openHour,
                cryptoHighHour : highHour,
                cryptoLowHour : lowHour,
                cryptoChangeDay : changeDay,
                cryptoChangeHour: changeHour,
                // Market DETIALS;
                cryptoMktCpt : marketCap,
                cryptoSupply : supply,
                cryptoCktSup : circulatingSupply,
                cryptoCktMktCpt : circMktCpt,
                // VOlume Details:
                cryptoVolume24H : volumesTraded24H,
                cryptoLastTradedVolume : lastTradedVolume,
                cryptoVolumeDay : volumeDay,
                //Extra Details
                cryptoIcon : imageUrl,
                cryptoTradeId : lastTradeId,
                cryptoTradeMarket : lastTradeMarket


            });

        });
    })

});


//    STELLAR COIN ALL FETCHED/DISPLAY DATA

app.post(`/xlm.ejs`,(req,res)=>{

    const url  = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XLM&tsyms=INR`;
    http.get(url,(response)=>{
        response.on(`data`,(data)=>{
            const coinData = JSON.parse(data);
 
            // PRICES DATA:
            const currentPrice = coinData.RAW.XLM.INR.PRICE;
            const highPrice24H = coinData.RAW.XLM.INR.HIGH24HOUR;
            const lowPrice24H = coinData.RAW.XLM.INR.LOW24HOUR;
            const openHour = coinData.RAW.XLM.INR.OPENHOUR;
            const highHour = coinData.RAW.XLM.INR.HIGHHOUR;
            const lowHour = coinData.RAW.XLM.INR.LOWHOUR;
            const changeDay = coinData.RAW.XLM.INR.CHANGE24HOUR;
            const changeHour = coinData.RAW.XLM.INR.CHANGEHOUR;

            //Market Data:
            const marketCap = coinData.RAW.XLM.INR.MKTCAP;
            const supply = coinData.RAW.XLM.INR.SUPPLY;
            const circulatingSupply = coinData.RAW.XLM.INR.CIRCULATINGSUPPLY;
            const circMktCpt = coinData.RAW.XLM.INR.CIRCULATINGSUPPLYMKTCAP;

            //Volumes Data:
            const volumesTraded24H =coinData.RAW.XLM.INR.VOLUME24HOUR;
            const lastTradedVolume = coinData.RAW.XLM.INR.LASTVOLUMETO;
            const volumeDay = coinData.RAW.XLM.INR.VOLUMEDAY;

            //Coin symbol/icon:
            const imageUrl = coinData.RAW.XLM.INR.IMAGEURL;

            //Extra details:
            const lastTradeId = coinData.RAW.XLM.INR.LASTTRADEID;
            const lastTradeMarket = coinData.RAW.XLM.INR.LASTMARKET;


            res.render(`xlm`,{
                //Price details:
                cryptoCurrentPrice:currentPrice ,
                cryptoHigh24H : highPrice24H,
                cryptoLow24H : lowPrice24H,
                cryptoOpenHour : openHour,
                cryptoHighHour : highHour,
                cryptoLowHour : lowHour,
                cryptoChangeDay : changeDay,
                cryptoChangeHour: changeHour,
                // Market DETIALS;
                cryptoMktCpt : marketCap,
                cryptoSupply : supply,
                cryptoCktSup : circulatingSupply,
                cryptoCktMktCpt : circMktCpt,
                // VOlume Details:
                cryptoVolume24H : volumesTraded24H,
                cryptoLastTradedVolume : lastTradedVolume,
                cryptoVolumeDay : volumeDay,
                //Extra Details
                cryptoIcon : imageUrl,
                cryptoTradeId : lastTradeId,
                cryptoTradeMarket : lastTradeMarket


            });

        });
    })

});


//    ELLIPSIS X COIN ALL FETCHED/DISPLAY DATA

app.post(`/eps.ejs`,(req,res)=>{

    const url  = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=EPS&tsyms=INR`;
    http.get(url,(response)=>{
        response.on(`data`,(data)=>{
            const coinData = JSON.parse(data);
 
            // PRICES DATA:
            const currentPrice = coinData.RAW.EPS.INR.PRICE;
            const highPrice24H = coinData.RAW.EPS.INR.HIGH24HOUR;
            const lowPrice24H = coinData.RAW.EPS.INR.LOW24HOUR;
            const openHour = coinData.RAW.EPS.INR.OPENHOUR;
            const highHour = coinData.RAW.EPS.INR.HIGHHOUR;
            const lowHour = coinData.RAW.EPS.INR.LOWHOUR;
            const changeDay = coinData.RAW.EPS.INR.CHANGE24HOUR;
            const changeHour = coinData.RAW.EPS.INR.CHANGEHOUR;

            //Market Data:
            const marketCap = coinData.RAW.EPS.INR.MKTCAP;
            const supply = coinData.RAW.EPS.INR.SUPPLY;
            const circulatingSupply = coinData.RAW.EPS.INR.CIRCULATINGSUPPLY;
            const circMktCpt = coinData.RAW.EPS.INR.CIRCULATINGSUPPLYMKTCAP;

            //Volumes Data:
            const volumesTraded24H =coinData.RAW.EPS.INR.VOLUME24HOUR;
            const lastTradedVolume = coinData.RAW.EPS.INR.LASTVOLUMETO;
            const volumeDay = coinData.RAW.EPS.INR.VOLUMEDAY;

            //Coin symbol/icon:
            const imageUrl = coinData.RAW.EPS.INR.IMAGEURL;

            //Extra details:
            const lastTradeId = coinData.RAW.EPS.INR.LASTTRADEID;
            const lastTradeMarket = coinData.RAW.EPS.INR.LASTMARKET;


            res.render(`eps`,{
                //Price details:
                cryptoCurrentPrice:currentPrice ,
                cryptoHigh24H : highPrice24H,
                cryptoLow24H : lowPrice24H,
                cryptoOpenHour : openHour,
                cryptoHighHour : highHour,
                cryptoLowHour : lowHour,
                cryptoChangeDay : changeDay,
                cryptoChangeHour: changeHour,
                // Market DETIALS;
                cryptoMktCpt : marketCap,
                cryptoSupply : supply,
                cryptoCktSup : circulatingSupply,
                cryptoCktMktCpt : circMktCpt,
                // VOlume Details:
                cryptoVolume24H : volumesTraded24H,
                cryptoLastTradedVolume : lastTradedVolume,
                cryptoVolumeDay : volumeDay,
                //Extra Details
                cryptoIcon : imageUrl,
                cryptoTradeId : lastTradeId,
                cryptoTradeMarket : lastTradeMarket


            });

        });
    })

});


//    MONERO COIN ALL FETCHED/DISPLAY DATA

app.post(`/xmr.ejs`,(req,res)=>{

    const url  = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XMR&tsyms=INR`;
    http.get(url,(response)=>{
        response.on(`data`,(data)=>{
            const coinData = JSON.parse(data);
 
            // PRICES DATA:
            const currentPrice = coinData.RAW.XMR.INR.PRICE;
            const highPrice24H = coinData.RAW.XMR.INR.HIGH24HOUR;
            const lowPrice24H = coinData.RAW.XMR.INR.LOW24HOUR;
            const openHour = coinData.RAW.XMR.INR.OPENHOUR;
            const highHour = coinData.RAW.XMR.INR.HIGHHOUR;
            const lowHour = coinData.RAW.XMR.INR.LOWHOUR;
            const changeDay = coinData.RAW.XMR.INR.CHANGE24HOUR;
            const changeHour = coinData.RAW.XMR.INR.CHANGEHOUR;

            //Market Data:
            const marketCap = coinData.RAW.XMR.INR.MKTCAP;
            const supply = coinData.RAW.XMR.INR.SUPPLY;
            const circulatingSupply = coinData.RAW.XMR.INR.CIRCULATINGSUPPLY;
            const circMktCpt = coinData.RAW.XMR.INR.CIRCULATINGSUPPLYMKTCAP;

            //Volumes Data:
            const volumesTraded24H =coinData.RAW.XMR.INR.VOLUME24HOUR;
            const lastTradedVolume = coinData.RAW.XMR.INR.LASTVOLUMETO;
            const volumeDay = coinData.RAW.XMR.INR.VOLUMEDAY;

            //Coin symbol/icon:
            const imageUrl = coinData.RAW.XMR.INR.IMAGEURL;

            //Extra details:
            const lastTradeId = coinData.RAW.XMR.INR.LASTTRADEID;
            const lastTradeMarket = coinData.RAW.XMR.INR.LASTMARKET;


            res.render(`xmr`,{
                //Price details:
                cryptoCurrentPrice:currentPrice ,
                cryptoHigh24H : highPrice24H,
                cryptoLow24H : lowPrice24H,
                cryptoOpenHour : openHour,
                cryptoHighHour : highHour,
                cryptoLowHour : lowHour,
                cryptoChangeDay : changeDay,
                cryptoChangeHour: changeHour,
                // Market DETIALS;
                cryptoMktCpt : marketCap,
                cryptoSupply : supply,
                cryptoCktSup : circulatingSupply,
                cryptoCktMktCpt : circMktCpt,
                // VOlume Details:
                cryptoVolume24H : volumesTraded24H,
                cryptoLastTradedVolume : lastTradedVolume,
                cryptoVolumeDay : volumeDay,
                //Extra Details
                cryptoIcon : imageUrl,
                cryptoTradeId : lastTradeId,
                cryptoTradeMarket : lastTradeMarket


            });

        });
    })

});



//      UNISWAP COIN ALL FETCHED/DISPLAY DATA

app.post(`/uni.ejs`,(req,res)=>{

    const url  = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=UNI&tsyms=INR`;
    http.get(url,(response)=>{
        response.on(`data`,(data)=>{
            const coinData = JSON.parse(data);
 
            // PRICES DATA:
            const currentPrice = coinData.RAW.UNI.INR.PRICE;
            const highPrice24H = coinData.RAW.UNI.INR.HIGH24HOUR;
            const lowPrice24H = coinData.RAW.UNI.INR.LOW24HOUR;
            const openHour = coinData.RAW.UNI.INR.OPENHOUR;
            const highHour = coinData.RAW.UNI.INR.HIGHHOUR;
            const lowHour = coinData.RAW.UNI.INR.LOWHOUR;
            const changeDay = coinData.RAW.UNI.INR.CHANGE24HOUR;
            const changeHour = coinData.RAW.UNI.INR.CHANGEHOUR;

            //Market Data:
            const marketCap = coinData.RAW.UNI.INR.MKTCAP;
            const supply = coinData.RAW.UNI.INR.SUPPLY;
            const circulatingSupply = coinData.RAW.UNI.INR.CIRCULATINGSUPPLY;
            const circMktCpt = coinData.RAW.UNI.INR.CIRCULATINGSUPPLYMKTCAP;

            //Volumes Data:
            const volumesTraded24H =coinData.RAW.UNI.INR.VOLUME24HOUR;
            const lastTradedVolume = coinData.RAW.UNI.INR.LASTVOLUMETO;
            const volumeDay = coinData.RAW.UNI.INR.VOLUMEDAY;

            //Coin symbol/icon:
            const imageUrl = coinData.RAW.UNI.INR.IMAGEURL;

            //Extra details:
            const lastTradeId = coinData.RAW.UNI.INR.LASTTRADEID;
            const lastTradeMarket = coinData.RAW.UNI.INR.LASTMARKET;


            res.render(`uni`,{
                //Price details:
                cryptoCurrentPrice:currentPrice ,
                cryptoHigh24H : highPrice24H,
                cryptoLow24H : lowPrice24H,
                cryptoOpenHour : openHour,
                cryptoHighHour : highHour,
                cryptoLowHour : lowHour,
                cryptoChangeDay : changeDay,
                cryptoChangeHour: changeHour,
                // Market DETIALS;
                cryptoMktCpt : marketCap,
                cryptoSupply : supply,
                cryptoCktSup : circulatingSupply,
                cryptoCktMktCpt : circMktCpt,
                // VOlume Details:
                cryptoVolume24H : volumesTraded24H,
                cryptoLastTradedVolume : lastTradedVolume,
                cryptoVolumeDay : volumeDay,
                //Extra Details
                cryptoIcon : imageUrl,
                cryptoTradeId : lastTradeId,
                cryptoTradeMarket : lastTradeMarket


            });

        });
    })

});


//   AXIE INFINITY COIN AL FETCHED/DISPLAY DATA

app.post(`/axs.ejs`,(req,res)=>{

    const url  = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=AXS&tsyms=INR`;
    http.get(url,(response)=>{
        response.on(`data`,(data)=>{
            const coinData = JSON.parse(data);
 
            // PRICES DATA:
            const currentPrice = coinData.RAW.AXS.INR.PRICE;
            const highPrice24H = coinData.RAW.AXS.INR.HIGH24HOUR;
            const lowPrice24H = coinData.RAW.AXS.INR.LOW24HOUR;
            const openHour = coinData.RAW.AXS.INR.OPENHOUR;
            const highHour = coinData.RAW.AXS.INR.HIGHHOUR;
            const lowHour = coinData.RAW.AXS.INR.LOWHOUR;
            const changeDay = coinData.RAW.AXS.INR.CHANGE24HOUR;
            const changeHour = coinData.RAW.AXS.INR.CHANGEHOUR;

            //Market Data:
            const marketCap = coinData.RAW.AXS.INR.MKTCAP;
            const supply = coinData.RAW.AXS.INR.SUPPLY;
            const circulatingSupply = coinData.RAW.AXS.INR.CIRCULATINGSUPPLY;
            const circMktCpt = coinData.RAW.AXS.INR.CIRCULATINGSUPPLYMKTCAP;

            //Volumes Data:
            const volumesTraded24H =coinData.RAW.AXS.INR.VOLUME24HOUR;
            const lastTradedVolume = coinData.RAW.AXS.INR.LASTVOLUMETO;
            const volumeDay = coinData.RAW.AXS.INR.VOLUMEDAY;

            //Coin symbol/icon:
            const imageUrl = coinData.RAW.AXS.INR.IMAGEURL;

            //Extra details:
            const lastTradeId = coinData.RAW.AXS.INR.LASTTRADEID;
            const lastTradeMarket = coinData.RAW.AXS.INR.LASTMARKET;


            res.render(`axs`,{
                //Price details:
                cryptoCurrentPrice:currentPrice ,
                cryptoHigh24H : highPrice24H,
                cryptoLow24H : lowPrice24H,
                cryptoOpenHour : openHour,
                cryptoHighHour : highHour,
                cryptoLowHour : lowHour,
                cryptoChangeDay : changeDay,
                cryptoChangeHour: changeHour,
                // Market DETIALS;
                cryptoMktCpt : marketCap,
                cryptoSupply : supply,
                cryptoCktSup : circulatingSupply,
                cryptoCktMktCpt : circMktCpt,
                // VOlume Details:
                cryptoVolume24H : volumesTraded24H,
                cryptoLastTradedVolume : lastTradedVolume,
                cryptoVolumeDay : volumeDay,
                //Extra Details
                cryptoIcon : imageUrl,
                cryptoTradeId : lastTradeId,
                cryptoTradeMarket : lastTradeMarket


            });

        });
    })

});



//   ETHEREUM NAME SERVICE COIN ALL FETCHED/DISPLAY DATA


app.post(`/ens.ejs`,(req,res)=>{

    const url  = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ENS&tsyms=INR`;
    http.get(url,(response)=>{
        response.on(`data`,(data)=>{
            const coinData = JSON.parse(data);
 
            // PRICES DATA:
            const currentPrice = coinData.RAW.ENS.INR.PRICE;
            const highPrice24H = coinData.RAW.ENS.INR.HIGH24HOUR;
            const lowPrice24H = coinData.RAW.ENS.INR.LOW24HOUR;
            const openHour = coinData.RAW.ENS.INR.OPENHOUR;
            const highHour = coinData.RAW.ENS.INR.HIGHHOUR;
            const lowHour = coinData.RAW.ENS.INR.LOWHOUR;
            const changeDay = coinData.RAW.ENS.INR.CHANGE24HOUR;
            const changeHour = coinData.RAW.ENS.INR.CHANGEHOUR;

            //Market Data:
            const marketCap = coinData.RAW.ENS.INR.MKTCAP;
            const supply = coinData.RAW.ENS.INR.SUPPLY;
            const circulatingSupply = coinData.RAW.ENS.INR.CIRCULATINGSUPPLY;
            const circMktCpt = coinData.RAW.ENS.INR.CIRCULATINGSUPPLYMKTCAP;

            //Volumes Data:
            const volumesTraded24H =coinData.RAW.ENS.INR.VOLUME24HOUR;
            const lastTradedVolume = coinData.RAW.ENS.INR.LASTVOLUMETO;
            const volumeDay = coinData.RAW.ENS.INR.VOLUMEDAY;

            //Coin symbol/icon:
            const imageUrl = coinData.RAW.ENS.INR.IMAGEURL;

            //Extra details:
            const lastTradeId = coinData.RAW.ENS.INR.LASTTRADEID;
            const lastTradeMarket = coinData.RAW.ENS.INR.LASTMARKET;


            res.render(`ens`,{
                //Price details:
                cryptoCurrentPrice:currentPrice ,
                cryptoHigh24H : highPrice24H,
                cryptoLow24H : lowPrice24H,
                cryptoOpenHour : openHour,
                cryptoHighHour : highHour,
                cryptoLowHour : lowHour,
                cryptoChangeDay : changeDay,
                cryptoChangeHour: changeHour,
                // Market DETIALS;
                cryptoMktCpt : marketCap,
                cryptoSupply : supply,
                cryptoCktSup : circulatingSupply,
                cryptoCktMktCpt : circMktCpt,
                // VOlume Details:
                cryptoVolume24H : volumesTraded24H,
                cryptoLastTradedVolume : lastTradedVolume,
                cryptoVolumeDay : volumeDay,
                //Extra Details
                cryptoIcon : imageUrl,
                cryptoTradeId : lastTradeId,
                cryptoTradeMarket : lastTradeMarket


            });

        });
    })

});



//  SEARCHED COIN ALL DETAILS 

app.post(`/search.ejs`,(req,res)=>{
    coin = req.body.searchCoin;
   
    const url = `https://cryptingup.com/api/assets/${coin.toUpperCase()}`
    http.get(url,(response)=>{
        response.on(`data`,(data)=>{
            console.log(`Coin data ${coin}`);
            const coinData = JSON.parse(data);

            // PRICE DETAILS
            const currentPrice = coinData.asset.price;
            const change1H  = coinData.asset.change_1h;
            const change24H  = coinData.asset.change_24h;
            const change7d = coinData.asset.change_7d;
              
            // MARKET DETAILS

            const supply = coinData.asset.total_supply;
            const cktsupp = coinData.asset.circulating_supply;
            const maxSupply = coinData.asset.max_supply;
            const marketCap = coinData.asset.market_cap;
            const fullDilutedMktCpt = coinData.asset.fully_diluted_market_cap;


            // VOLUME DETAILS
            const volume24H = coinData.asset.volume_24h;

            // extra details:
            const description = coinData.asset.description;
            const coinName = coinData.asset.name;
            const assetId = coinData.asset.asset_id;

        
            // SENDING ALL DATA TO SEARCH.EJS

            res.render(`search`,{
                //  HEADER SECTION ALL DETAILS:
                coinIdName : coinName,
                assetName : assetId,
                coinDescription : description,
                //  PRICE DETAILS:
                coinCurrentPrice : currentPrice,
                coinChange1H : change1H,
                coinChange24H : change24H,
                coinChange7D : change7d,
                // VOLUME DETAILS:
                coinVolume24H : volume24H,
                // MARKET DETAILS:
                coinSupply : supply,
                coinCktSup : cktsupp,
                coinMaxSupply : maxSupply,
                coinMktCap : marketCap,
                coinFulDilMktCap : fullDilutedMktCpt,
            });


            
        })
    })
});



app.listen(port || process.env.PORT,serverMessage);










 