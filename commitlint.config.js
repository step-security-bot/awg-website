module.exports = {
    extends: ['@commitlint/config-angular'],
    rules: {
        'type-case': [2, 'always', ['lower-case', 'upper-case']],
        'type-enum': [
            2,
            'always',
            [
                'ANGULAR2',
                '_DOCUMENTS',
                'ONTOLOGIES',
                'build',
                'ci',
                'docs',
                'feat',
                'fix',
                'perf',
                'refactor',
                'revert',
                'style',
                'test'
            ]
        ]
    }
};
