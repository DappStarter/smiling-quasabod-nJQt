require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note shift promote inflict arch orange sister'; 
let testAccounts = [
"0xa9e720ce21a925cdca9bc3aa77831310fbdf6ad24042639985a4a3206db869f5",
"0x15fe677cf6842d005527b82fd97ab34fa8b935c85770eec0960cb71ae08c2cc8",
"0x39f54c937f4ca2b24f4af484f8d181685acceb8c92ff0748dac2848e26eb550b",
"0x35054ea4bf5f7cc68362a356ee6c7f22f14e21b7ecfd1d7a5f22297d0f81ccaf",
"0xc76b02cb171c5217f632dc20a362c54dda7c6c9dd6e3c8c76435f9522a851c11",
"0xcdf941d5566e8ddfaba61f615becf34f3d5742d3021d03ef16fb4dcf7776df47",
"0xb83b6f9d975f2f6b6b54730d8b15a55a45ba7e22aa42adeb909f15d8c3aa5db8",
"0x075be6c349b4e52c329008c91b4a7bd1bab64552edf23d515c2ffe28207bb693",
"0xc3c96b3eb1411951bb6107ea64ae7e27d55741aa229f3eeb05b1da6514baef5d",
"0x000e2e5e1e0409c088d48e560790753ece75f2062cf03f53e524b8edf7a8cc7c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

