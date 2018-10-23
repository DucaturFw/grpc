const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const packageDef = protoLoader.loadSync('ohlcv.proto', { 
})
const ohlcvProto = grpc.loadPackageDefinition(packageDef).l2.ohlcv.OHLCV

function bars(call, callback) {
    console.log(call.request)

    callback(new Error('Hello'), null)

    /*
    callback(null, {
        bars: [{
            open: '100.45'
        }],
        huyak: {}
    })
    */
}

const server = new grpc.Server()
server.addService(ohlcvProto.service, { bars })
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
server.start()
