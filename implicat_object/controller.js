//UserController继承过来的数据结构如下所示
var controller = {
    ctx: {
        request: {
            method: 'GET',
            url: '/user/add',
            header: [Object]
        },
        response: {
            status: 404,
            message: 'Not Found',
            header: {}
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
    config: {
        session: {
            maxAge: 86400000,
            key: 'EGG_SESS',
            httpOnly: true,
            encrypt: true,
            overwrite: true,
            signed: true,
            autoCommit: true,
            encode: [Function],
            decode: [Function],
            genid: [Function]
        },
        security: {
            domainWhiteList: [],
            protocolWhiteList: [],
            defaultMiddleware: 'csrf,hsts,methodnoallow,noopen,nosniff,csp,xssProtection,xframe,dta',
            csrf: [Object],
            xframe: [Object],
            hsts: [Object],
            dta: [Object],
            methodnoallow: [Object],
            noopen: [Object],
            nosniff: [Object],
            referrerPolicy: [Object],
            xssProtection: [Object],
            csp: [Object],
            ssrf: [Object],
            _protocolWhiteListSet: [Object]
        },
        helper: {
            shtml: {}
        },
        jsonp: {
            limit: 50,
            callback: [Array],
            csrf: false
        },
        onerror: {
            errorPageUrl: '',
            appErrorFilter: null,
            templatePath: 'D:\\wyy\\course-eggjs\\node_modules\\egg-onerror\\lib\\onerror_page.mustache'
        },
        i18n: {
            defaultLocale: 'en_US',
            dirs: [Array],
            queryField: 'locale',
            cookieField: 'locale',
            cookieMaxAge: '1y',
            functionName: '__'
        },
        watcher: {
            type: 'development',
            eventSources: [Object]
        },
        customLogger: {
            scheduleLogger: [Object]
        },
        schedule: {
            directory: []
        },
        multipart: {
            mode: 'stream',
            autoFields: false,
            defaultCharset: 'utf8',
            fieldNameSize: 100,
            fieldSize: 102400,
            fields: 10,
            fileSize: 10485760,
            files: 10,
            fileExtensions: [],
            whitelist: null,
            tmpdir: 'C:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\egg-multipart-tmp\\course-eggjs',
            cleanSchedule: [Object]
        },
        development: {
            watchDirs: [],
            ignoreDirs: [],
            fastReady: false,
            reloadOnDebug: true,
            overrideDefault: false
        },
        logrotator: {
            filesRotateByHour: null,
            hourDelimiter: '-',
            filesRotateBySize: null,
            maxFileSize: 52428800,
            maxFiles: 10,
            rotateDuration: 60000,
            maxDays: 31
        },
        static: {
            prefix: '/public/',
            dir: 'D:\\wyy\\course-eggjs\\app\\public',
            dynamic: true,
            preload: false,
            buffer: false,
            maxFiles: 1000
        },
        view: {
            root: [Array],
            cache: false,
            defaultExtension: '.html',
            defaultViewEngine: 'nunjucks',
            mapping: [Object]
        },
        nunjucks: {
            autoescape: true,
            throwOnUndefined: false,
            trimBlocks: false,
            lstripBlocks: false,
            cache: false
        },
        mongoose: {
            url: '',
            options: {},
            loadModel: true,
            app: true,
            agent: false,
            client: [Object]
        },
        env: 'local',
        name: 'course-eggjs',
        keys: 'course-eggjs_1552470702605_7934',
        proxy: false,
        protocolHeaders: 'x-forwarded-proto',
        ipHeaders: 'x-forwarded-for',
        hostHeaders: '',
        pkg: {
            name: 'course-eggjs',
            version: '1.0.0',
            description: '',
            private: true,
            egg: [Object],
            dependencies: [Object],
            devDependencies: [Object],
            engines: [Object],
            scripts: [Object],
            ci: [Object],
            repository: [Object],
            author: 'eduabi',
            license: 'MIT'
        },
        baseDir: 'D:\\wyy\\course-eggjs',
        HOME: 'C:\\Users\\Administrator',
        rundir: 'D:\\wyy\\course-eggjs\\run',
        dump: {
            ignore: [Object]
        },
        confusedConfigurations: {
            bodyparser: 'bodyParser',
            notFound: 'notfound',
            sitefile: 'siteFile',
            middlewares: 'middleware',
            httpClient: 'httpclient'
        },
        notfound: {
            pageUrl: ''
        },
        siteFile: {
            '/favicon.ico': '< Buffer 89 50 4 e 47 0 d 0 a 1 a 0 a 00 00 00 0 d 49 48 44 52 00 00 00 ca 00 00 00 ca 08 06 00 00 00 e4 65 df a8 00 00 00 01 73 52 47 42 00 ae ce 1 c e9 00 00 18 f9... >'
        },
        bodyParser: {
            enable: true,
            encoding: 'utf8',
            formLimit: '100kb',
            jsonLimit: '100kb',
            strict: true,
            queryString: [Object],
            detectJSON: undefined,
            onerror: undefined,
            returnRawBody: true
        },
        logger: {
            dir: 'D:\\wyy\\course-eggjs\\logs\\course-eggjs',
            encoding: 'utf8',
            env: 'local',
            level: 'INFO',
            consoleLevel: 'INFO',
            disableConsoleAfterReady: false,
            outputJSON: false,
            buffer: true,
            appLogName: 'course-eggjs-web.log',
            coreLogName: 'egg-web.log',
            agentLogName: 'egg-agent.log',
            errorLogName: 'common-error.log',
            coreLogger: [Object],
            allowDebugAtProd: false,
            type: 'application'
        },
        httpclient: {
            enableDNSCache: false,
            dnsCacheLookupInterval: 10000,
            dnsCacheMaxLength: 1000,
            request: [Object],
            httpAgent: [Object],
            httpsAgent: [Object]
        },
        meta: {
            enable: true,
            logging: false
        },
        coreMiddleware: ['meta',
            'siteFile',
            'notfound',
            'static',
            'bodyParser',
            'overrideMethod',
            'session',
            'securities',
            'i18n',
            'eggLoaderTrace'
        ],
        workerStartTimeout: 600000,
        serverTimeout: null,
        cluster: {
            listen: [Object]
        },
        clusterClient: {
            maxWaitTime: 60000,
            responseTimeout: 60000
        },
        onClientError: null,
        news: {
            pageSize: 5,
            serverUrl: 'https://hacker-news.firebaseio.com/v0'
        },
        middleware: [],
        myAppName: 'egg',
        coreMiddlewares: ['meta',
            'siteFile',
            'notfound',
            'static',
            'bodyParser',
            'overrideMethod',
            'session',
            'securities',
            'i18n',
            'eggLoaderTrace'
        ],
        appMiddlewares: [],
        appMiddleware: []
    }
}