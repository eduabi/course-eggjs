var controller = {
    app: {  //app结构
        session: {
            maxAge: 86400000,
            key: 'EGG_SESS',
            httpOnly: true,
            encrypt: true,
            overwrite: true,
            signed: true,
            autoCommit: true
        },
        security: {
            domainWhiteList: [],
            protocolWhiteList: [],
            defaultMiddleware: 'csrf,hsts,methodnoallow,noopen,nosniff,csp,xssProtection,xframe,dta',
            csrf: {
                enable: true,
                useSession: false,
                ignoreJSON: false,
                cookieName: 'csrfToken',
                sessionName: 'csrfToken',
                headerName: 'x-csrf-token',
                bodyName: '_csrf',
                queryName: '_csrf',
                matching: [Function]
            },
            xframe: {
                enable: true,
                value: 'SAMEORIGIN',
                matching: [Function]
            },
            hsts: {
                enable: false,
                maxAge: 31536000,
                includeSubdomains: false
            },
            dta: {
                enable: true,
                matching: [Function]
            },
            methodnoallow: {
                enable: true,
                matching: [Function]
            },
            noopen: {
                enable: true,
                matching: [Function]
            },
            nosniff: {
                enable: true,
                matching: [Function]
            },
            referrerPolicy: {
                enable: false,
                value: 'no-referrer-when-downgrade'
            },
            xssProtection: {
                enable: true,
                value: '1; mode=block',
                matching: [Function]
            },
            csp: {
                enable: false,
                policy: {}
            },
            ssrf: {
                ipBlackList: null,
                checkAddress: null
            }
        },
        helper: {
            shtml: {}
        },
        jsonp: {
            limit: 50,
            callback: ['_callback', 'callback'],
            csrf: false
        },
        onerror: {
            errorPageUrl: '',
            appErrorFilter: null,
            templatePath: 'D:\\wyy\\course-eggjs\\node_modules\\egg-onerror\\lib\\onerror_page.mustache'
        },
        i18n: {
            defaultLocale: 'en_US',
            dirs: ['D:\\wyy\\course-eggjs\\node_modules\\egg-session\\config\\locales',
                'D:\\wyy\\course-eggjs\\node_modules\\egg-security\\config\\locales',
                'D:\\wyy\\course-eggjs\\node_modules\\egg-jsonp\\config\\locales',
                'D:\\wyy\\course-eggjs\\node_modules\\egg-onerror\\config\\locales',
                'D:\\wyy\\course-eggjs\\node_modules\\egg-i18n\\config\\locales',
                'D:\\wyy\\course-eggjs\\node_modules\\egg-watcher\\config\\locales',
                'D:\\wyy\\course-eggjs\\node_modules\\egg-schedule\\config\\locales',
                'D:\\wyy\\course-eggjs\\node_modules\\egg-multipart\\config\\locales',
                'D:\\wyy\\course-eggjs\\node_modules\\egg-development\\config\\locales',
                'D:\\wyy\\course-eggjs\\node_modules\\egg-logrotator\\config\\locales',
                'D:\\wyy\\course-eggjs\\node_modules\\egg-static\\config\\locales',
                'D:\\wyy\\course-eggjs\\node_modules\\egg-view\\config\\locales',
                'D:\\wyy\\course-eggjs\\node_modules\\egg-view-nunjucks\\config\\locales',
                'D:\\wyy\\course-eggjs\\node_modules\\egg-mongoose\\config\\locales',
                'D:\\wyy\\course-eggjs\\node_modules\\egg\\config\\locales',
                'D:\\wyy\\course-eggjs\\config\\locales'
            ],
            queryField: 'locale',
            cookieField: 'locale',
            cookieMaxAge: '1y',
            functionName: '__'
        },
        watcher: {
            type: 'development',
            eventSources: {
                default: 'D:\\wyy\\course-eggjs\\node_modules\\egg-watcher\\lib\\event-sources\\default',
                development: 'D:\\wyy\\course-eggjs\\node_modules\\egg-watcher\\lib\\event-sources\\development'
            }
        },
        customLogger: {
            scheduleLogger: {
                consoleLevel: 'NONE',
                file: 'D:\\wyy\\course-eggjs\\logs\\course-eggjs\\egg-schedule.log'
            }
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
            cleanSchedule: {
                cron: '0 30 4 * * *'
            }
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
            root: ['D:\\wyy\\course-eggjs\\app\\view'],
            cache: false,
            defaultExtension: '.html',
            defaultViewEngine: 'nunjucks',
            mapping: {
                '.tpl': 'nunjucks'
            }
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
            client: {
                url: 'mongodb://127.0.0.1:27019/wyy',
                options: [Object]
            }
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
            egg: {
                declarations: true
            },
            dependencies: {
                egg: '^2.15.1',
                'egg-mongoose': '^3.1.1',
                'egg-scripts': '^2.11.0',
                'egg-view-nunjucks': '^2.2.0',
                mongoose: '^5.4.19'
            },
            devDependencies: {
                autod: '^3.0.1',
                'autod-egg': '^1.1.0',
                'egg-bin': '^4.11.0',
                'egg-ci': '^1.11.0',
                'egg-mock': '^3.21.0',
                eslint: '^5.13.0',
                'eslint-config-egg': '^7.1.0',
                'webstorm-disable-index': '^1.2.0'
            },
            engines: {
                node: '>=8.9.0'
            },
            scripts: {
                start: 'egg-scripts start --daemon --title=egg-server-course-eggjs',
                stop: 'egg-scripts stop --title=egg-server-course-eggjs',
                dev: 'egg-bin dev',
                debug: 'egg-bin debug',
                test: 'npm run lint -- --fix && npm run test-local',
                'test-local': 'egg-bin test',
                cov: 'egg-bin cov',
                lint: 'eslint .',
                ci: 'npm run lint && npm run cov',
                autod: 'autod'
            },
            ci: {
                version: '8'
            },
            repository: {
                type: 'git',
                url: ''
            },
            author: 'eduabi',
            license: 'MIT'
        },
        baseDir: 'D:\\wyy\\course-eggjs',
        HOME: 'C:\\Users\\Administrator',
        rundir: 'D:\\wyy\\course-eggjs\\run',
        bodyParser: {
            enable: true,
            encoding: 'utf8',
            formLimit: '100kb',
            jsonLimit: '100kb',
            strict: true,
            queryString: {
                arrayLimit: 100,
                depth: 5,
                parameterLimit: 1000
            },
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
            coreLogger: {
                consoleLevel: 'WARN'
            },
            allowDebugAtProd: false,
            type: 'application'
        },
        httpclient: {
            enableDNSCache: false,
            dnsCacheLookupInterval: 10000,
            dnsCacheMaxLength: 1000,
            request: {
                timeout: 5000
            },
            httpAgent: {
                keepAlive: true,
                freeSocketTimeout: 4000,
                maxSockets: 9007199254740991,
                maxFreeSockets: 256
            },
            httpsAgent: {
                keepAlive: true,
                freeSocketTimeout: 4000,
                maxSockets: 9007199254740991,
                maxFreeSockets: 256
            }
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
            listen: {
                path: '',
                port: 7001,
                hostname: ''
            }
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
        appMiddleware: [],
        multipartParseOptions: {
            autoFields: false,
            defCharset: 'utf8',
            limits: {
                fieldNameSize: 100,
                fieldSize: 102400,
                fields: 10,
                fileSize: 10485760,
                files: 10
            }
        }
    }
}