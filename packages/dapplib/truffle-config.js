require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone street deny night umbrella inner praise army general'; 
let testAccounts = [
"0x617f28f6003d153dff3b6499e717bed3f7277013571ef93df2c97cb0d584e781",
"0x3366f2d44e0a15e54e4c246c0da7d0cc00c98159c9451e8048e14944b7d98096",
"0xa92075a9f695c433f564aa45dfec5e9f9a85bc49916e0f3e4fbbbb8c34351496",
"0xa5e42ce439dc176ad96749dd9d4d2b9b8681e24042db207bf04bc632052f7dc7",
"0x78888687c43e02273b94cec9193032c356ab9a37e6539a52465a15069fecaa5f",
"0x3c552fdb89da5020b8bb211b165ac84e453c4aac9cc08623b63a706aca376d9f",
"0xc03720e5ca816bb2d35a7173f1bb20244d055eed31dd8949d9bcc02781a8d23f",
"0x1b39b31c3df901862f6bc7e237a52596930b2c2aa7fbfbfd561811c14b08c435",
"0x5b5bef6ab6b4972c6dfc584e618a6dbbdafddcaf59c71410ded24e00f889d550",
"0x5434139672e472f2ef2e3da13a5ec216541036a1a8496288bab150fbf28085ba"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

