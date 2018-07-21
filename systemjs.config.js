System.config({
    // map tells the System loader where to look for things
    map: {
        // our app is within the app folder
        app: 'app',
        '@angular': 'node_modules/@angular',
        // other libraries
        'rxjs': 'node_modules/rxjs',
        'typescript': 'node_modules/typescript/lib/typescript.js',
        'ts': 'node_modules/plugin-typescript/lib/plugin.js'
    },
    paths: {
        'node_modules/@angular/*': 'node_modules/@angular/*/bundles'
    },
    transpiler: 'ts',
    typescriptOptions: {
        tsconfig: true
    },
    meta: {
        'typescript': {
            "exports": "ts"
        }
    },

    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
        'app'                              : {main: 'main', defaultExtension: 'ts'},
        'rxjs'                             : {main: 'Rx'},
        '@angular/core'                    : {main: 'core.umd.min.js'},
        '@angular/common'                  : {main: 'common.umd.min.js'},
        '@angular/compiler'                : {main: 'compiler.umd.min.js'},
        '@angular/platform-browser'        : {main: 'platform-browser.umd.min.js'},
        '@angular/platform-browser-dynamic': {main: 'platform-browser-dynamic.umd.min.js'}
    }
});