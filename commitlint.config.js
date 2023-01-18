module.exports = {
    extends: ['@commitlint/config-angular'],
    rules: {
        'scope-case': [2, 'always', ['lower-case', 'upper-case']],
        'scope-empty': [2, 'never'],
        'scope-enum': [
            2,
            'always',
            [
                'app',
                'assets',
                'deps',
                'deps-dev',
                'core',
                'shared',
                'views',
                'project',
                'edition',
                'webern',
                'works',
                'research',
                'contact',
                'page-not-found',
                'testing',
                'README',
                'CHANGELOG',
                'LICENSE',
                'gh-actions'
            ]
        ]
    }
};
