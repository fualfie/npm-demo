const pkg = require('@fualfie/easy-server').pkg

pkg(__dirname + '/package.json',
    'server.js',
    [
        'routes/'
    ],
    [
        'public/',
        'node_modules/@fualfie/easy-server/browser/',
        'node_modules/@fualfie/easy-server/common/'
    ])
pkg.build('windows')

