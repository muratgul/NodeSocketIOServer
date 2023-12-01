const Service = require('node-windows').Service

const svc = new Service({
    name: "NodeSocket.IO",
    description: "Operasyon Socket.IO",
    script: 'E:\\VueApps\\vuesocketioserver\\server.js'
})

svc.on('install', function(){
    svc.start()
})

svc.install()