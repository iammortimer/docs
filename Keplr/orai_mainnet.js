var foo = async function() {
    console.log('start request add Oraichain mainnet');
  
    await window['keplr'].experimentalSuggestChain({
      chainId: "Oraichain",
      chainName: "Oraichain",
      rpc: "https://rpc.orai.io",
      rest: "https://lcd.orai.io",
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: "orai",
        bech32PrefixAccPub: "orai" + "pub",
        bech32PrefixValAddr: "orai" + "valoper",
        bech32PrefixValPub: "orai" + "valoperpub",
        bech32PrefixConsAddr: "orai" + "valcons",
        bech32PrefixConsPub: "orai" + "valconspub",
      },
      currencies: [{
        coinDenom: "ORAI",
        coinMinimalDenom: "orai",
        coinDecimals: 6,
        coinGeckoId: 'oraichain-token',
        
      }, ],
      feeCurrencies: [{
       coinDenom: 'ORAI',
       coinMinimalDenom: 'orai',
       coinDecimals: 6,
       coinGeckoId: 'oraichain-token',
                
      }, ],
      stakeCurrency: {
              coinDenom: 'ORAI',
              coinMinimalDenom: 'orai',
              coinDecimals: 6,
              coinGeckoId: 'oraichain-token',
    
          },
      coinType: 118,
      gasPriceStep: {
        low: 0,
        average: 0.0025,
        high: 0.004
      },
      features: ['stargate', 'ibc-transfer', 'cosmwasm'],
      explorerUrlToTx: 'https://scan.orai.io/txs/${txHash}',
      hdPath: "m/44'/118'/0'/0/0",
      cosmwasmVersion: '0.13.2',
    });
    console.log('finish request add Oraichain testnet');
  };
  
  setTimeout(() => {
    foo()
    console.log(window.keplr)
  }, 1001);
  
  console.log('Welcome to Oraichain Mainnet');
  