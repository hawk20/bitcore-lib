'use strict';

var ufocore = module.exports;

// module information
ufocore.version = 'v' + require('./package.json').version;
ufocore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of ufocore-lib found. ' +
      'Please make sure to require ufocore-lib and check that submodules do' +
      ' not also include their own ufocore-lib dependency.';
    throw new Error(message);
  }
};
ufocore.versionGuard(global._ufocore);
global._ufocore = ufocore.version;

// crypto
ufocore.crypto = {};
ufocore.crypto.BN = require('./lib/crypto/bn');
ufocore.crypto.ECDSA = require('./lib/crypto/ecdsa');
ufocore.crypto.Hash = require('./lib/crypto/hash');
ufocore.crypto.Random = require('./lib/crypto/random');
ufocore.crypto.Point = require('./lib/crypto/point');
ufocore.crypto.Signature = require('./lib/crypto/signature');

// encoding
ufocore.encoding = {};
ufocore.encoding.Base58 = require('./lib/encoding/base58');
ufocore.encoding.Base58Check = require('./lib/encoding/base58check');
ufocore.encoding.BufferReader = require('./lib/encoding/bufferreader');
ufocore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
ufocore.encoding.Varint = require('./lib/encoding/varint');

// utilities
ufocore.util = {};
ufocore.util.buffer = require('./lib/util/buffer');
ufocore.util.js = require('./lib/util/js');
ufocore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
ufocore.errors = require('./lib/errors');

// main ufocoin library
ufocore.Address = require('./lib/address');
ufocore.Block = require('./lib/block');
ufocore.MerkleBlock = require('./lib/block/merkleblock');
ufocore.BlockHeader = require('./lib/block/blockheader');
ufocore.HDPrivateKey = require('./lib/hdprivatekey.js');
ufocore.HDPublicKey = require('./lib/hdpublickey.js');
ufocore.Networks = require('./lib/networks');
ufocore.Opcode = require('./lib/opcode');
ufocore.PrivateKey = require('./lib/privatekey');
ufocore.PublicKey = require('./lib/publickey');
ufocore.Script = require('./lib/script');
ufocore.Transaction = require('./lib/transaction');
ufocore.URI = require('./lib/uri');
ufocore.Unit = require('./lib/unit');

// dependencies, subject to change
ufocore.deps = {};
ufocore.deps.bnjs = require('bn.js');
ufocore.deps.bs58 = require('bs58');
ufocore.deps.Buffer = Buffer;
ufocore.deps.elliptic = require('elliptic');
ufocore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
ufocore.Transaction.sighash = require('./lib/transaction/sighash');
