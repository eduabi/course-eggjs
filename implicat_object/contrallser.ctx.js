var controller = {
    ctx: {
        request: {
            method: 'GET',
            url: '/user/add',
            header: {
                host: '127.0.0.1:7001',
                connection: 'keep-alive',
                'cache-control': 'max-age=0',
                'upgrade-insecure-requests': '1',
                'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36',
                accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
                cookie: 'csrfToken=2m4XKpYVsvH_m3tuInZepmrP'
            }
        },
        response: {
            status: 404,    //http状态码
            message: 'Not Found',   //返回的数据
            header: {},
            body: 'undefined'
        },
        app: {
            env: 'local',
            name: 'course-eggjs',
            baseDir: 'D:\\wyy\\course-eggjs',
            subdomainOffset: 2,
            config: '<egg config>',
            controller: '<egg controller>',
            httpclient: '<egg httpclient>',
            loggers: '<egg loggers>',
            middlewares: '<egg middlewares>',
            router: '<egg router>',
            serviceClasses: '<egg serviceClasses>'
        },
        originalUrl: '/user/add',
        req: '<original node req>',
        res: '<original node res>',
        socket: '<original node socket>'
    }
}