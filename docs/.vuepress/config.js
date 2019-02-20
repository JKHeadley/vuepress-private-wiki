module.exports = {
    title: 'Arch Wiki',
    description: "Arch technical knowledgebase",
    themeConfig:{
        nav: [
            { text: 'COUNTER', link: '/counter/' },
            { text: 'GUIDE', link: '/guide/' },
            { text: 'LOGIN', link: '/login/' },
        ],
        sidebar: [
            {
              title: 'Counter',
              collapsable: false,
              children: [
                '/counter/counter-app'
              ]
            },
            {
              title: 'API Guide',
              collapsable: false,
              children: [
                  '/guide/guide',
                  '/guide/api'
              ]
            }
          ]
    },

    serverURI: 'http://localhost:8081/',
    // websocketURI: 'ws://localhost:8080',
    // serverURI: 'http://192.168.86.42:8080',
    // websocketURI: 'ws://192.168.86.42:8080',
    appURI: 'http://localhost:8080',
    // appURI: 'http://192.168.86.42:3000',
    // serverURI: process.env.SERVER_URI,
    // websocketURI: process.env.WEBSOCKET_URI,
    // appURI: process.env.APP_URI,

    RESPONSE_MESSAGES: {
      EXPIRED_ACCESS_TOKEN: 'Expired Access Token',
      EXPIRED_REFRESH_TOKEN: 'Expired Refresh Token'
    }
}