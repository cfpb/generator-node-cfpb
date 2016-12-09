'use strict';

var chalk = require('chalk');
var path = require('path');
var yosay = require('yosay');
var yeoman = require('yeoman-generator');

var NodeGenerator = module.exports = yeoman.generators.Base.extend({
    init: function() {
        this.pkg = require('../package.json');
    },

    askFor: function() {
        var done = this.async();

        this.log(yosay('Welcome to CFPB\'s node module generator!'));

        var prompts = [{
            name: 'name',
            message: 'Module Name',
            default: path.basename(process.cwd()),
        }, {
            name: 'description',
            message: 'Description',
            default: 'The best module ever.'
        }, {
            name: 'keywords',
            message: 'Key your keywords (comma to split)'
        }, {
            name: 'browser',
            message: 'Will this module be used in the browser? (Do you need browserify?)',
            default: 'yes'
        }];

        this.currentYear = (new Date()).getFullYear();

        this.prompt(prompts, function(props) {

            this.slugname = this._.slugify(props.name);
            this.safeSlugname = this.slugname.replace(
                /-+([a-zA-Z0-9])/g,
                function(g) {
                    return g[1].toUpperCase();
                }
            );

            this.repoUrl = 'https://github.com/cfpb/' + this.slugname;

            this.keywords = props.keywords.split(',');

            this.props = props;

            done();
        }.bind(this));
    },

    app: function() {
        this.config.save();
        this.copy('jshintrc', '.jshintrc');
        this.copy('gitignore', '.gitignore');
        this.copy('travis.yml', '.travis.yml');

        this.template('_README.md', 'README.md');
        this.template('_package.json', 'package.json');
        this.template('TERMS.md', 'TERMS.md');
        this.template('CONTRIBUTING.md', 'CONTRIBUTING.md');
        this.template('LICENSE', 'LICENSE');
    },

    projectfiles: function() {
        this.template('index.js', 'index.js');
        this.mkdir('test');
        this.template('test/name-tests.js', 'test/' + this.slugname + '-tests.js');
    },

    install: function() {
        this.installDependencies({
            bower: false,
            skipInstall: this.options['skip-install']
        });
    }
});
