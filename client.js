require('colors')

const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const packageDef = protoLoader.loadSync('ohlcv.proto')
const ohlcvProto = grpc.loadPackageDefinition(packageDef).l2.ohlcv.OHLCV

const client = new ohlcvProto('localhost:5000', grpc.credentials.createInsecure())

const ret = client.bars({ symbol: 'ETHUSDT', interval: 'MINUTE_1', from: 44343434, limit: 2000 }, function (err, res) {
    if (err) {
        console.error(err)
        return
    }

    console.log(res)
})
