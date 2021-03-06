import { Token } from "../types/schema";

export function addToken(address: string): void {
  let token = Token.load(address);
  if (token != null) {
    return;
  }

  /* Mainnet */
  token = new Token(address);

  if (address == "0xb6ed7644c69416d67b522e20bc294a9a9b405b31") {
    token.name = "0xBitcoin Token";
    token.symbol = "0xBTC";
    token.decimals = 8;
  } else if (address == "0x960b236a07cf122663c4303350609a66a7b288c0") {
    token.name = "Aragon Network Token";
    token.symbol = "ANT";
    token.decimals = 18;
  } else if (address == "0x0d8775f648430679a709e98d2b0cb6250d2887ef") {
    token.name = "Basic Attention Token";
    token.symbol = "BAT";
    token.decimals = 18;
  } else if (address == "0xf67c3000943c74186b64a1bc84cb5880e5198661") {
    token.name = "CHF36 Stablecoin";
    token.symbol = "CHF36";
    token.decimals = 18;
  } else if (address == "0x06af07097c9eeb7fd685c692751d5c66db49c215") {
    token.name = "Chai";
    token.symbol = "CHAI";
    token.decimals = 18;
  } else if (address == "0x514910771af9ca656af840dff83e8264ecf986ca") {
    token.name = "ChainLink Token";
    token.symbol = "LINK";
    token.decimals = 18;
  } else if (address == "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643") {
    token.name = "Compound Dai";
    token.symbol = "cDAI";
    token.decimals = 8;
  } else if (address == "0x39aa39c021dfbae8fac545936693ac917d5e7563") {
    token.name = "Compound USD Coin";
    token.symbol = "cUSDC";
    token.decimals = 8;
  } else if (address == "0xb4272071ecadd69d933adcd19ca99fe80664fc08") {
    token.name = "Crypto Franc";
    token.symbol = "XCHF";
    token.decimals = 18;
  } else if (address == "0x6b175474e89094c44da98b954eedeac495271d0f") {
    token.name = "Dai Stablecoin";
    token.symbol = "DAI";
    token.decimals = 18;
  } else if (address == "0x0f5d2fb29fb7d3cfee444a200298f468908cc942") {
    token.name = "Decentraland MANA";
    token.symbol = "MANA";
    token.decimals = 18;
  } else if (address == "0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf") {
    token.name = "Digix Gold Token";
    token.symbol = "DGX";
    token.decimals = 9;
  } else if (address == "0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9") {
    token.name = "Donut";
    token.symbol = "DONUT";
    token.decimals = 18;
  } else if (address == "0x0cde550b066ff98da123377eeb0a149607c9ca17") {
    token.name = "EUR36 Stablecoin";
    token.symbol = "EUR36";
    token.decimals = 18;
  } else if (address == "0x4946fcea7c692606e8908002e55a582af44ac121") {
    token.name = "FOAM Token";
    token.symbol = "FOAM";
    token.decimals = 18;
  } else if (address == "0x493c57c4763932315a328269e1adad09653b9081") {
    token.name = "Fulcrum DAI iToken";
    token.symbol = "iDAI";
    token.decimals = 18;
  } else if (address == "0xf013406a0b1d544238083df0b93ad0d2cbe0f65f") {
    token.name = "Fulcrum USDC iToken";
    token.symbol = "iUSDC";
    token.decimals = 6;
  } else if (address == "0x6810e776880c02933d47db1b9fc05908e5386b96") {
    token.name = "Gnosis";
    token.symbol = "GNO";
    token.decimals = 18;
  } else if (address == "0x10ec0d497824e342bcb0edce00959142aaa766dd") {
    token.name = "IdleDAI";
    token.symbol = "IDLEDAI";
    token.decimals = 18;
  } else if (address == "0xeb66acc3d011056b00ea521f8203580c2e5d3991") {
    token.name = "IdleUSDC";
    token.symbol = "IDLEUSDC";
    token.decimals = 18;
  } else if (address == "0xdd974d5c2e2928dea5f71b9825b8b646686bd200") {
    token.name = "Kyber Network Crystal";
    token.symbol = "KNC";
    token.decimals = 18;
  } else if (address == "0x58b6a8a3302369daec383334672404ee733ab239") {
    token.name = "Livepeer Token";
    token.symbol = "LPT";
    token.decimals = 18;
  } else if (address == "0xdf2c7238198ad8b389666574f2d8bc411a4b7428") {
    token.name = "Mainframe Token";
    token.symbol = "MFT";
    token.decimals = 18;
  } else if (address == "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2") {
    token.name = "Maker";
    token.symbol = "MKR";
    token.decimals = 18;
  } else if (address == "0xec67005c4e498ec7f55e092bd1d35cbc47c91892") {
    token.name = "Melon Token";
    token.symbol = "MLN";
    token.decimals = 18;
  } else if (address == "0xc92e74b131d7b1d46e60e07f3fae5d8877dd03f0") {
    token.name = "Minereum";
    token.symbol = "MNE";
    token.decimals = 8;
  } else if (address == "0x1776e1f26f98b1a5df9cd347953a26dd3cb46671") {
    token.name = "Numeraire";
    token.symbol = "NMR";
    token.decimals = 18;
  } else if (address == "0x4575f41308ec1483f3d399aa9a2826d74da13deb") {
    token.name = "Orchid";
    token.symbol = "OXT";
    token.decimals = 18;
  } else if (address == "0x8e870d67f660d95d5be530380d0ec0bd388289e1") {
    token.name = "Paxos";
    token.symbol = "PXT";
    token.decimals = 18;
  } else if (address == "0x408e41876cccdc0f92210600ef50372656052a38") {
    token.name = "Republic Token";
    token.symbol = "REN";
    token.decimals = 18;
  } else if (address == "0x1985365e9f78359a9b6ad760e32412f4a445e862") {
    token.name = "Reputation";
    token.symbol = "REP";
    token.decimals = 18;
  } else if (address == "0x1a2d7c2b22a0b6ce314dcbc30ac236303303defa") {
    token.name = "Rupiah Token";
    token.symbol = "IDRTW";
    token.decimals = 18;
  } else if (address == "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359") {
    token.name = "Sai Stablecoin v1.0";
    token.symbol = "SAI";
    token.decimals = 18;
  } else if (address == "0xd233d1f6fd11640081abb8db125f722b5dc729dc") {
    token.name = "Seigniorage Dollars";
    token.symbol = "SeignUSD";
    token.decimals = 9;
  } else if (address == "0x6b583cf4aba7bf9d6f8a51b3f1f7c7b2ce59bf15") {
    token.name = "Seigniorage Shares";
    token.symbol = "SHARE";
    token.decimals = 9;
  } else if (address == "0x67ab11058ef23d0a19178f61a050d3c38f81ae21") {
    token.name = "Self Token";
    token.symbol = "SELF";
    token.decimals = 18;
  } else if (address == "0xa4bdb11dc0a2bec88d24a3aa1e6bb17201112ebe") {
    token.name = "Stable USD";
    token.symbol = "USDS";
    token.decimals = 6;
  } else if (address == "0x744d70fdbe2ba4cf95131626614a1763df805b9e") {
    token.name = "Status Network Token";
    token.symbol = "SNT";
    token.decimals = 18;
  } else if (address == "0x57ab1e02fee23774580c119740129eac7081e9d3") {
    token.name = "Synth sUSD";
    token.symbol = "sUSD";
    token.decimals = 18;
  } else if (address == "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f") {
    token.name = "Synthetix Network Token";
    token.symbol = "SNX";
    token.decimals = 18;
  } else if (address == "0x0000000000085d4780b73119b644ae5ecd22b376") {
    token.name = "TrueUSD";
    token.symbol = "TUSD";
    token.decimals = 18;
  } else if (address == "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48") {
    token.name = "USD Coin";
    token.symbol = "USDC";
    token.decimals = 6;
  } else if (address == "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599") {
    token.name = "Wrapped Bitcoin";
    token.symbol = "WBTC";
    token.decimals = 8;
  } else if (address == "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2") {
    token.name = "Wrapped Ether";
    token.symbol = "wETH";
    token.decimals = 18;
  } else if (address == "0x8ba6dcc667d3ff64c1a2123ce72ff5f0199e5315") {
    /** Social Money **/
    token.name = "Alex Masmej";
    token.symbol = "ALEX";
    token.decimals = 4;
  } else if (address == "0xdc8092aaf83e00ebf9b01a2e90b7b7ef867ba503") {
    token.name = "Calvin";
    token.symbol = "CALVIN";
    token.decimals = 4;
  } else if (address == "0xa809cedee9b61956c768eaa10272dd5e0fd1a985") {
    token.name = "Cami";
    token.symbol = "CAMI";
    token.decimals = 4;
  } else if (address == "0xea0bea4d852687c45fdc57f6b06a8a92302baabc") {
    token.name = "Counsel";
    token.symbol = "CNSL";
    token.decimals = 18;
  } else if (address == "0xe98b5f11897d42afd17185dd301bcb2d46389bf1") {
    token.name = "Dude";
    token.symbol = "DUDE";
    token.decimals = 4;
  } else if (address == "0xc1fb6c015fc535abd331d3029de76a62e412fb23") {
    token.name = "Forcer";
    token.symbol = "FORCER";
    token.decimals = 4;
  } else if (address == "0xdcfe18bc46f5a0cd0d3af0c2155d2bcb5ade2fc5") {
    token.name = "Hue";
    token.symbol = "HUE";
    token.decimals = 4;
  } else if (address == "0x3c35132d0b129f068fdfa65b2c4d265fa5d8cea6") {
    token.name = "Jonathan Joseph";
    token.symbol = "JJJ";
    token.decimals = 4;
  } else if (address == "0xe6710e0cda178f3d921f456902707b0d4c4a332b") {
    token.name = "Julien";
    token.symbol = "JULIEN";
    token.decimals = 4;
  } else if (address == "0x8f464bfe2292748a0fed58bb53d3838b4ce018b0") {
    token.name = "Kevin";
    token.symbol = "KEVIN";
    token.decimals = 4;
  } else if (address == "0xdb7eb3ede973665b1bb9f3016861e3255062e4ed") {
    token.name = "MNFT";
    token.symbol = "MNFT";
    token.decimals = 4;
  } else if (address == "0x8db6da2120b346faa7f206841f2fb005bbe0dfd8") {
    token.name = "Paul Razvan Berg";
    token.symbol = "PAUL";
    token.decimals = 4;
  } else if (address == "0x5a844590c5b8f40ae56190771d06c60b9ab1da1c") {
    token.name = "Ross Campbell Legal Engineering";
    token.symbol = "RCLE";
    token.decimals = 18;
  } else if (address == "0x27fd686db10e0ae047fe8fe1de9830c0e0dc3cfa") {
    token.name = "Scott";
    token.symbol = "SCOTT";
    token.decimals = 4;
  } else if (address == "0xbdbf67d9bcb35e2bb7e4951002c6d70013196972") {
    token.name = "Scott Stevenson Legal Engineering";
    token.symbol = "SSLE";
    token.decimals = 18;
  } else if (address == "0xd0bf154768b0f1f8cba50daa8960c285ce4c67f2") {
    token.name = "UrBen";
    token.symbol = "URBEN";
    token.decimals = 4;
  } else {
    token.name = null;
    token.symbol = null;
    token.decimals = 0;
  }

  /* Goerli */
  if (address == "0xf2d1f94310823fe26cfa9c9b6fd152834b8e7849") {
    token.decimals = 18;
    token.name = "TestnetDAI";
    token.symbol = "DAI";
  }

  /* Kovan */
  if (address == "0x7d669a64deb8a4a51eea755bb0e19fd39ce25ae9") {
    token.decimals = 18;
    token.name = "TestnetDAI";
    token.symbol = "DAI";
  }

  /* Rinkeby */
  if (address == "0xc3dbf84abb494ce5199d5d4d815b10ec29529ff8") {
    token.decimals = 18;
    token.name = "TestnetDAI";
    token.symbol = "DAI";
  } else if (address == "0xc778417e063141139fce010982780140aa0cd5ab") {
    token.decimals = 18;
    token.name = "Wrapped Ether";
    token.symbol = "wETH";
  }

  /* Ropsten */
  if (address == "0x2d69ad895797c880abce92437788047ba0eb7ff6") {
    token.decimals = 18;
    token.name = "TestnetDAI";
    token.symbol = "DAI";
  }

  /* xDAI */
  if (address == "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d") {
    token.decimals = 18;
    token.name = "Wrapped XDAI";
    token.symbol = "wxDAI";
  } else if (address == "0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1") {
    token.decimals = 18;
    token.name = "Wrapped ETH";
    token.symbol = "WETH";
  } else if (address == "0x44fa8e6f47987339850636f88629646662444217") {
    token.decimals = 18;
    token.name = "Dai Stablecoin";
    token.symbol = "DAI";
  } else if (address == "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83") {
    token.decimals = 18;
    token.name = "USDC";
    token.symbol = "USDC";
  } else if (address == "0xe2e73a1c69ecf83f464efce6a5be353a37ca09b2") {
    token.decimals = 18;
    token.name = "Chainlink";
    token.symbol = "LINK";
  } else if (address == "0x5fd896d248fbfa54d26855c267859eb1b4daee72") {
    token.decimals = 18;
    token.name = "Maker";
    token.symbol = "MKR";
  } else if (address == "0xb7d311e2eb55f2f68a9440da38e7989210b9a05e") {
    token.decimals = 18;
    token.name = "Stake";
    token.symbol = "STAKE";
  } else if (address == "0x4ecaba5870353805a9f068101a40e0f32ed605c6") {
    token.decimals = 18;
    token.name = "Tether";
    token.symbol = "USDT";
  } else if (address == "0x22bd2a732b39dace37ae7e8f50a186f3d9702e87") {
    token.decimals = 18;
    token.name = "yCurve";
    token.symbol = "yCRV";
  } else if (address == "0xbf65bfcb5da067446cee6a706ba3fe2fb1a9fdfd") {
    token.decimals = 18;
    token.name = "Yearn Finance";
    token.symbol = "YFI";
  } else if (address == "0xb1950fb2c9c0cbc8553578c67db52aa110a93393") {
    token.decimals = 18;
    token.name = "Synthetix";
    token.symbol = "sUSD";
  } else if (address == "0x8395f7123ba3ffad52e7414433d825931c81c879") {
    token.decimals = 18;
    token.name = "OmiseGo";
    token.symbol = "OMG";
  } else if (address == "0x9c58bacc331c9aa871afd802db6379a98e80cedb") {
    token.decimals = 18;
    token.name = "Gnosis";
    token.symbol = "GNO";
  } else if (address == "0x750ecf8c11867ce5dbc556592c5bb1e0c6d16538") {
    token.decimals = 18;
    token.name = "OWL Token";
    token.symbol = "OWL";
  } else if (address == "0xdf6ff92bfdc1e8be45177dc1f4845d391d3ad8fd") {
    token.decimals = 18;
    token.name = "Compound";
    token.symbol = "COMP";
  } else if (address == "0xc1b42bdb485deb24c74f58399288d7915a726c1d") {
    token.decimals = 18;
    token.name = "EthLend (Aave)";
    token.symbol = "LEND";
  } else if (address == "0x1e16aa4df73d29c029d94ceda3e3114ec191e25a") {
    token.decimals = 18;
    token.name = "xMOON";
    token.symbol = "XMOON";
  } else if (address == "0x7838796b6802b18d7ef58fc8b757705d6c9d12b3") {
    token.decimals = 18;
    token.name = "Decentraland";
    token.symbol = "MANA";
  } else if (address == "0x985e144eb355273c4b4d51e448b68b657f482e26") {
    token.decimals = 18;
    token.name = "POA20";
    token.symbol = "POA20";
  } else if (address == "0x71850b7e9ee3f13ab46d67167341e4bdc905eef9") {
    token.decimals = 18;
    token.name = "Honey";
    token.symbol = "HNY";
  } else if (address == "0xc439e5b1dee4f866b681e7c5e5df140aa47fbf19") {
    token.decimals = 18;
    token.name = "SAI Stablecoin";
    token.symbol = "SAI";
  } else if (address == "0x5fe9885226677f3eb5c9ad8ab6c421b4ea38535d") {
    token.decimals = 18;
    token.name = "JOON";
    token.symbol = "JOON";
  } else if (address == "0xb5d592f85ab2d955c25720ebe6ff8d4d1e1be300") {
    token.decimals = 18;
    token.name = "Particle";
    token.symbol = "PRTCLE";
  } else if (address == "0x4537e328bf7e4efa29d05caea260d7fe26af9d74") {
    token.decimals = 18;
    token.name = "Uniswap on xDai";
    token.symbol = "UNI";
  } else if (address == "0xd3b93ff74e43ba9568e5019b38addb804fef719b") {
    token.decimals = 18;
    token.name = "UniBright on xDai";
    token.symbol = "UBT";
  } else if (address == "0x437a044fb4693890e61d2c1c88e3718e928b8e90") {
    token.decimals = 18;
    token.name = "Aragon Network Token on xDai";
    token.symbol = "ANTv1";
  } else if (address == "0x14411aecA652F5131834Bf0c8fF581B5dDf3bc03") {
    token.decimals = 18;
    token.name = "coin_artist on xDai";
    token.symbol = "COIN";
  } else if (address == "0x8e5bBbb09Ed1ebdE8674Cda39A0c169401db4252") {
    token.decimals = 8;
    token.name = "Wrapped BTC on xDai";
    token.symbol = "WBTC";
  } else if (address == "0xd9fa47e33d4ff7a1aca489de1865ac36c042b07a") {
    token.decimals = 8;
    token.name = "HEX on xDai";
    token.symbol = "HEX";
  } else if (address == "0x7da0bfe9d26c5b64c7580c04bb1425364273e4b0") {
    token.decimals = 18;
    token.name = "Concentrated Voting Power on xDai";
    token.symbol = "CVP";
  } else if (address == "0x712b3d230f3c1c19db860d80619288b1f0bdd0bd") {
    token.decimals = 18;
    token.name = "Curve DAO Token on xDai";
    token.symbol = "CRV";
  } else if (address == "0xde1e70ed71936e4c249a7d43e550f0b99fccddfc") {
    token.decimals = 18;
    token.name = "FalconSwap Token on xDai";
    token.symbol = "FSW";
  } else if (address == "0x2977893f4c04bfbd6efc68d0e46598d27810d3db") {
    token.decimals = 18;
    token.name = "Bidao on xDai";
    token.symbol = "BID";
  } else if (address == "0x524B969793a64a602342d89BC2789D43a016B13A") {
    token.decimals = 18;
    token.name = "Donut on xDai";
    token.symbol = "DONUT";
  } else if (address == "0x7a7d81657a1a66b38a6ca2565433a9873c6913b2") {
    token.decimals = 8;
    token.name = "Enigma on xDai";
    token.symbol = "ENG";
  } else if (address == "0xfd4e5f45ea24ec50c4db4367380b014875caf219") {
    token.decimals = 18;
    token.name = "XY Oracle on xDai";
    token.symbol = "XYO";
  } else if (address == "0x4bc97997883c0397f556bd0f9da6fb71da22f9a2") {
    token.decimals = 18;
    token.name = "aleph.im v2 on xDai";
    token.symbol = "ALEPH";
  } else if (address == "0x0da1a02cdf84c44021671d183d616925164e08aa") {
    token.decimals = 18;
    token.name = "Republic Token on xDai";
    token.symbol = "REN";
  } else if (address == "0x6f09cf96558d44584db07f8477dd3490599aa63e") {
    token.decimals = 18;
    token.name = "Bitgear on xDai";
    token.symbol = "GEAR";
  } else if (address == "0xf99efeb34aff6d3099c41605e9ee778caec39317") {
    token.decimals = 18;
    token.name = "Meridian Network on xDai";
    token.symbol = "LOCK";
  } else if (address == "0x317eab07380d670ea814025cba40f5624354a32f") {
    token.decimals = 18;
    token.name = "DeFiPIE Token on xDai";
    token.symbol = "PIE";
  } else if (address == "0x860182180e146300df38aab8d328c6e80bec9547") {
    token.decimals = 18;
    token.name = "UniTrade on xDai";
    token.symbol = "TRADE";
  } else if (address == "0x743a991365ba94BFC90Ad0002CAD433c7a33cb4a") {
    token.decimals = 4;
    token.name = "AirSwap Token on xDai";
    token.symbol = "AST";
  } else if (address == "0x1534fB3E82849314360C267FE20Df3901A2ED3f9") {
    token.decimals = 18;
    token.name = "Kyber Network Crystal on xDai";
    token.symbol = "KNC";
  } else if (address == "0x3A00E08544d589E19a8e7D97D0294331341cdBF6") {
    token.decimals = 18;
    token.name = "Synthetix Network Token on xDai";
    token.symbol = "SNX";
  } else if (address == "0x309Bc6DbcbFB9c84D26FDF65E8924367efCCBdb9") {
    token.decimals = 18;
    token.name = "OM Token on xDai";
    token.symbol = "OM";
  } else if (address == "0x2f9ceBf5De3bc25E0643D0E66134E5bf5c48e191") {
    token.decimals = 18;
    token.name = "Bricks on xDai";
    token.symbol = "xBRICK";
  } else if (address == "0xDF613aF6B44a31299E48131e9347F034347E2F00") {
    token.decimals = 18;
    token.name = "Aave Token on xDai";
    token.symbol = "AAVE";
  } else if (address == "0x5F2852AFd20C39849f6f56F4102b8c29Ee141ADD") {
    token.decimals = 18;
    token.name = "renZEC on xDai";
    token.symbol = "renZEC";
  } else if (address == "0xB17d999E840e0c1B157Ca5Ab8039Bd958b5fA317") {
    token.decimals = 18;
    token.name = "Wrapped ETHO";
    token.symbol = "ETHO";
  } else if (address == "0x42c6b3ac30ae82d754498f56d9372f0070349409") {
    token.decimals = 18;
    token.name = "xREAP";
    token.symbol = "xREAP";
  } else if (address == "0x6099280dC5FC97CBB61B456246316a1B8f79534B") {
    token.decimals = 18;
    token.name = "Polyient Games Governance Token";
    token.symbol = "PGT";
  } else if (address == "0x30610f98b61593de963b2303aeeaee69823f561f") {
    token.decimals = 18;
    token.name = "Golden Bull Token on xDAI";
    token.symbol = "GLDB";
  } else if (address == "0xDaADd8D96D01e47ee5E4eAFEcF14cbe46909f335") {
    token.decimals = 18;
    token.name = "xDankBillz";
    token.symbol = "xdbx";
  } else if (address == "0x85886F6e9458290e7d267cB79A61c0CD7c505447") {
    token.decimals = 18;
    token.name = "ATS on xdaichain";
    token.symbol = "xATS";
  } else if (address == "0xdfc20AE04ED70bd9c7D720F449eEDAe19F659D65") {
    token.decimals = 18;
    token.name = "Badger on xDai";
    token.symbol = "BADGER";
  } else if (address == "0x6EECeab954EFDBd7A8a8D9387bC719959B04b9CA") {
    token.decimals = 18;
    token.name = "Aragon Network Token on xDai v2";
    token.symbol = "ANTv2";
  } else if (address == "0xcaE40062a887581A3d1661d0AC2b481c32e3E938") {
    token.decimals = 18;
    token.name = "Autopia Token on xDai";
    token.symbol = "AUT";
  } else if (address == "0xD51e1ddD116fFF9A71C1B8FEEb58113aFa2B4d93") {
    token.decimals = 9;
    token.name = "AMIS on xDai";
    token.symbol = "AMIS";
  } else if (address == "0x1A186E7268F3Ed5AdFEa6B9e0655f70059941E11") {
    token.decimals = 18;
    token.name = "Unifty on xDai";
    token.symbol = "NIF";
  } else if (address == "0xdbcadE285846131a5e7384685EADDBDFD9625557") {
    token.decimals = 18;
    token.name = "COLD TRUTH CASH";
    token.symbol = "COLD";
  } else if (address == "0x270DE58F54649608D316fAa795a9941b355A2Bd0") {
    token.decimals = 18;
    token.name = "Freedom Reserve on xDai";
    token.symbol = "FR";
  } else if (address == "0xEddd81E0792E764501AaE206EB432399a0268DB5") {
    token.decimals = 18;
    token.name = "Trace Token on xDai";
    token.symbol = "TRAC";
  } else if (address == "0x981fB9BA94078a2275A8fc906898ea107B9462A8") {
    token.decimals = 18;
    token.name = "Panvala pan on xDai";
    token.symbol = "PAN";
  } else if (address == "0xEaF7B3376173DF8BC0C22Ad6126943cC8353C1Ee") {
    token.decimals = 18;
    token.name = "Cheemscoin";
    token.symbol = "CHEEMS";
  } else if (address == "0x226bCf0e417428a25012d0fA2183d37f92bCeDF6") {
    token.decimals = 18;
    token.name = "0x Protocol Token on xDai";
    token.symbol = "ZRX";
  } else if (address == "0x479e32cDFF5F216f93060700C711D1cC8E811a6B") {
    token.decimals = 18;
    token.name = "Trips on xDai";
    token.symbol = "TRIPS";
  } else if (address == "0x6A8cb6714B1EE5b471a7D2eC4302cb4f5Ff25eC2") {
    token.decimals = 18;
    token.name = "Energy Web Token Bridged on xDai";
    token.symbol = "EWTB";
  } else if (address == "0x2995D1317DcD4f0aB89f4AE60F3f020A4F17C7CE") {
    token.decimals = 18;
    token.name = "SushiToken on xDai";
    token.symbol = "SUSHI";
  } else if (address == "0x79CF2029717E2E78C8927F65F079Ab8dA21781Ee") {
    token.decimals = 18;
    token.name = "LUKSO Token on xDai";
    token.symbol = "LYXe";
  } else if (address == "0xFAdc59D012Ba3c110B08A15B7755A5cb7Cbe77D7") {
    token.decimals = 18;
    token.name = "Graph Token on xDai";
    token.symbol = "GRT";
  } else if (address == "0x699D001ef13B15335193bC5FAd6CFC6747eeE8BE") {
    token.decimals = 9;
    token.name = "Base Protocol on xDai";
    token.symbol = "GRT";
  } else if (address == "0x0aCD91f92Fe07606ab51EA97d8521E29D110fD09") {
    token.decimals = 4;
    token.name = "Celsius on xDai";
    token.symbol = "CEL";
  } else if (address == "0x1939D3431CF0E44B1d63b86e2cE489E5a341B1Bf") {
    token.decimals = 18;
    token.name = "Cream on xDai";
    token.symbol = "CREAM";
  } else if (address == "0x16AFe6E6754FA3694afD0Ce48f4Bea102Efacc17") {
    token.decimals = 18;
    token.name = "Testa on xDai";
    token.symbol = "TESTA";
  } else if (address == "0xc81c785653D97766b995D867CF91F56367742eAC") {
    token.decimals = 18;
    token.name = "AriesFinancial on xDai";
    token.symbol = "AFI";
  } else if (address == "0x417602f4fbdd471A431Ae29fB5fe0A681964C11b") {
    token.decimals = 18;
    token.name = "JPY Coin on xDai";
    token.symbol = "JPYC";
  } else if (address == "0x4bE85ACC1cd711F403dC7BdE9e6caDfC5A94744b") {
    token.decimals = 18;
    token.name = "Rarible on xDai";
    token.symbol = "RARI";
  } else if (address == "0xA2FEc95B3d3feCb39098E81f108533E1abF22CcF") {
    token.decimals = 18;
    token.name = "Yield on xDai";
    token.symbol = "YLD";
  } else if (address == "0x7eA8aF7301b763451B7FB25F8Fc2406819A7E36f") {
    token.decimals = 18;
    token.name = "Phala on xDai";
    token.symbol = "PHA";
  } else if (address == "0x4A88248BAa5b39bB4A9CAa697Fb7f8ae0C3f0ddB") {
    token.decimals = 8;
    token.name = "renBTC on xDai";
    token.symbol = "renBTC";
  } else if (address == "0xf54b47B00B6916974c73B81B7d9929a4f443DB49") {
    token.decimals = 9;
    token.name = "Robonomics on xDai";
    token.symbol = "XRT";
  } else if (address == "0xC84DD5B971521B6C9fA5E10d25E6428b19710e05") {
    token.decimals = 9;
    token.name = "Ampleforth on xDai";
    token.symbol = "AMPL";
  } else if (address == "0x7122d7661c4564b7C6Cd4878B06766489a6028A2") {
    token.decimals = 18;
    token.name = "Matic Token on xDai";
    token.symbol = "MATIC";
  } else if (address == "0x5A87eaC5642BfEd4e354Ee8738DACd298E07D1Af") {
    token.decimals = 18;
    token.name = "Reserve Rights on xDai";
    token.symbol = "RSR";
  } else if (address == "0x0dCfEd2C3041e66b2D8c4Ea39782c60355716316") {
    token.decimals = 18;
    token.name = "Energi on xDai";
    token.symbol = "NRGE";
  } else if (address == "0xD27E1ECC4748F42e052331BeA917D89bEB883fc3") {
    token.decimals = 18;
    token.name = "Akropolis on xDai";
    token.symbol = "AKRO";
  } else if (address == "0xe154A435408211AC89757B76C4FbE4Dc9ED2Ef27") {
    token.decimals = 18;
    token.name = "BandToken on xDai";
    token.symbol = "BAND";
  } else if (address == "0xC6cC63f4AA25BBD4453eB5F3a0DfE546feF9b2f3") {
    token.decimals = 18;
    token.name = "Basic Attention Token on xDai";
    token.symbol = "BAT";
  } else if (address == "0x512a2Eb0277573ae9Be0d48c782590b624048fdF") {
    token.decimals = 8;
    token.name = "MEME on xDai";
    token.symbol = "MEME";
  } else if (address == "0x51732a6fC4673d1aCca4c047F5465922716508Ad") {
    token.decimals = 18;
    token.name = "Ocean Token on xDai";
    token.symbol = "OCEAN";
  } else if (address == "0x2F0E755Efe6b58238A67DB420Ff3513Ec1fb31eF") {
    token.decimals = 18;
    token.name = "Rocket Pool on xDai";
    token.symbol = "RPL";
  } else if (address == "0x8fBEDD16904B561e30ea402F459900E9D90614af") {
    token.decimals = 18;
    token.name = "Unilayer on xDai";
    token.symbol = "LAYER";
  } else if (address == "0x1479ebFe327B62bFF255C0749a242748D3e7347a") {
    token.decimals = 18;
    token.name = "Darwinia Network Native Token on xDai";
    token.symbol = "RING";
  } else if (address == "0x7C16c63684D86BaCC52e8793B08a5a1A3cB1BA1e") {
    token.decimals = 9;
    token.name = "Davincij15 Token on xDai";
    token.symbol = "DJ15";
  } else if (address == "0x82dFe19164729949fD66Da1a37BC70dD6c4746ce") {
    token.decimals = 18;
    token.name = "BaoToken on xDai";
    token.symbol = "BAO";
  } else if (address == "0x48b1B0d077b4919b65b4E4114806dD803901E1D9") {
    token.decimals = 18;
    token.name = "Decentralized Insurance Protocol on xDai";
    token.symbol = "DIP";
  } else if (address == "0x346b2968508d32f0192cD7a60Ef3D9C39a3cF549") {
    token.decimals = 18;
    token.name = "HoloToken on xDai";
    token.symbol = "HOT";
  } else if (address == "0xB4B6f80d8E573e9867c90163BFdb00E29d92716a") {
    token.decimals = 18;
    token.name = "Metronome on xDai";
    token.symbol = "MET";
  } else if (address == "0x5bbfBfB123B72A255504BE985bd2B474e481e866") {
    token.decimals = 18;
    token.name = "Sora Token on xDai";
    token.symbol = "SORA";
  } else if (address == "0x796879025A627d34042E3eDd2E239E75ba4445e6") {
    token.decimals = 18;
    token.name = "Streamr DATAcoin on xDai";
    token.symbol = "DATA";
  } else if (address == "0x76eaFffA1873a8aCd43864B66A728bd873c5E08a") {
    token.decimals = 8;
    token.name = "SwissBorg Token on xDai";
    token.symbol = "CHSB";
  } else if (address == "0x778aa03021B0CD2b798b0b506403e070125D81C9") {
    token.decimals = 18;
    token.name = "BlackDragon Token on xDai";
    token.symbol = "BDT";
  } else if (address == "0xbDB90BDAdae84Af0b07abf4cEFcC7989F909f9bD") {
    token.decimals = 18;
    token.name = "bns.finance on xDai";
    token.symbol = "BNSD";
  } else if (address == "0xEC84A3bB48D70553C2599AC2d0Db07b2DFdF6364") {
    token.decimals = 18;
    token.name = "BNS Token on xDai";
    token.symbol = "BNS";
  } else if (address == "0x12daBe79cffC1fdE82FCd3B96DBE09FA4D8cd599") {
    token.decimals = 18;
    token.name = "DAOstack on xDai";
    token.symbol = "GEN";
  } else if (address == "0x1319067e82F0b9981F19191E1C08bb6E6e055DD3") {
    token.decimals = 18;
    token.name = "DeFireX DAI on xDai";
    token.symbol = "DDAI";
  } else if (address == "0x5A757F0BcAdFDb78651B7bDBe67e44e8Fd7F7f6b") {
    token.decimals = 18;
    token.name = "Enjin Coin on xDai";
    token.symbol = "ENJ";
  } else if (address == "0x9bD5E0ce813d5172859b0b70Ff7Bb3C325CEE913") {
    token.decimals = 18;
    token.name = "Ethereum Meta on xDai";
    token.symbol = "ETHM";
  } else if (address == "0x7DB0be7A41b5395268e065776e800e27181C81AB") {
    token.decimals = 18;
    token.name = "Livepeer Token on xDai";
    token.symbol = "LPT";
  } else if (address == "0x2bE73bFeEC620aa9B67535A4D3827bB1e29436D1") {
    token.decimals = 18;
    token.name = "LoopringCoin V2 on xDai";
    token.symbol = "LRC";
  } else if (address == "0x26dD64bdCB2FaF4F7E49A73145752e8d9cb34C94") {
    token.decimals = 18;
    token.name = "Pundi X Token on xDai";
    token.symbol = "NPXS";
  } else if (address == "0x044F6ae3aEF34fdB8FdDc7c05F9cC17F19Acd516") {
    token.decimals = 18;
    token.name = "Status Network Token on xDai";
    token.symbol = "SNT";
  } else if (address == "0xB714654e905eDad1CA1940b7790A8239ece5A9ff") {
    token.decimals = 18;
    token.name = "TrueUSD on xDai";
    token.symbol = "TUSD";
  } else if (address == "0xEAaccE3E5bCC10FB32c2553f8d6Fc4C3888ffDaD") {
    token.decimals = 18;
    token.name = "TrustSwap Token on xDai";
    token.symbol = "SWAP";
  } else if (address == "0xbcfB2B889F7bAa29Dd7A7B447b6C87Aca572F4f4") {
    token.decimals = 18;
    token.name = "Aave Interest bearing DAI on xDai";
    token.symbol = "ADAI";
  } else if (address == "0x3581cc6A09DE85e9B91Ef93F2a5eF837706b84a5") {
    token.decimals = 18;
    token.name = "AllianceBlock Token on xDai";
    token.symbol = "ALBT";
  } else if (address == "0x7eF541E2a22058048904fE5744f9c7E4C57AF717") {
    token.decimals = 18;
    token.name = "Balancer on xDai";
    token.symbol = "BAL";
  } else if (address == "0x9a495a281D959192343B0e007284bf130bd05F86") {
    token.decimals = 18;
    token.name = "Bancor Network Token on xDai";
    token.symbol = "BNT";
  } else if (address == "0x248c54B3fc3bC8b20D0CDEE059E17C67e4a3299d") {
    token.decimals = 18;
    token.name = "CelerToken on xDai";
    token.symbol = "CELR";
  } else if (address == "0xff0Ce179a303F26017019acf78B951cB743B8D9b") {
    token.decimals = 18;
    token.name = "Contribute on xDai";
    token.symbol = "TRIB";
  } else if (address == "0x60e668f54106222adC1Da80c169281B3355B8e5D") {
    token.decimals = 9;
    token.name = "iEx.ec Network Token on xDai";
    token.symbol = "RLC";
  } else if (address == "0xd361c1FD663d8f2dc36ae07FF6F3623532cAbdD3") {
    token.decimals = 18;
    token.name = "MCDEX Token on xDai";
    token.symbol = "MCB";
  } else if (address == "0x5b917D4fb9B27591353211c32F1552A527987AFC") {
    token.decimals = 18;
    token.name = "MoonToken on xDai";
    token.symbol = "MOON";
  } else if (address == "0x26DC03E492763068CCfE7C39B93A22442807C360") {
    token.decimals = 18;
    token.name = "Nexo on xDai";
    token.symbol = "NEXO";
  } else if (address == "0x37b60f4E9A31A64cCc0024dce7D0fD07eAA0F7B3") {
    token.decimals = 18;
    token.name = "Pinakion on xDai";
    token.symbol = "PNK";
  } else if (address == "0x75481A953a4bBa6B3C445907dB403E4b5D222174") {
    token.decimals = 18;
    token.name = "PolkastarterToken on xDai";
    token.symbol = "POLS";
  } else if (address == "0x53ef00be819A062533a0E699077c621a28EADEd1") {
    token.decimals = 18;
    token.name = "PowerTrade Fuel Token on xDai";
    token.symbol = "PTF";
  } else if (address == "0xBc650b9cC12dB4da14b2417c60CCd6F4d77c3998") {
    token.decimals = 8;
    token.name = "StorjToken on xDai";
    token.symbol = "STORJ";
  } else if (address == "0x8F365b41B98Fe84aCB287540b4B4AB633e07EDb2") {
    token.decimals = 18;
    token.name = "Synth sETH on xDai";
    token.symbol = "SETH";
  } else if (address == "0x0811E451447D5819976a95a02f130c3b00D59346") {
    token.decimals = 18;
    token.name = "tBTC on xDai";
    token.symbol = "TBTC";
  } else if (address == "0x020Ae8FC1c19f4d1312Cf6a72291f52849791E7C") {
    token.decimals = 18;
    token.name = "VectorspaceAI on xDai";
    token.symbol = "VXV";
  } else if (address == "0x01e92E3791f8c1D6599B2F80A4bFF9b43949aC7C") {
    token.decimals = 18;
    token.name = "Wrapped NXM on xDai";
    token.symbol = "wNXM";
  } else if (address == "0x0116e28B43A358162B96f70B4De14C98A4465f25") {
    token.decimals = 18;
    token.name = "UniCrypt on xDai";
    token.symbol = "UNCX";
  } else if (address == "0xB2aE7983A8142401d45546aAb981e5fbff520991") {
    token.decimals = 18;
    token.name = "BTCCB";
    token.symbol = "BTCCB";
  } else if (address == "0xf1738912ae7439475712520797583ac784ea9033") {
    token.decimals = 18;
    token.name = "XionGlobal Token";
    token.symbol = "XGT";
  }

  /* Local */
  if (address == "0x0bd20370ce2d8da4e2471a90cae794cd7befc57a") {
    token.decimals = 18;
    token.name = "TestnetDAI";
    token.symbol = "DAI";
  }

  token.save();
}
