var fs = require( 'fs' );
var path = require( 'path' );
var process = require( 'process' );
var converter = require('widdershins');
var yaml = require('js-yaml');

function deleteExistingMd(endPath){

    //console.log('Starting from dir '+endPath+'/');

    if (!fs.existsSync(endPath)){
        console.log("no dir ",endPath);
        return;
    }

    var files=fs.readdirSync(endPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(endPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            fromDir(filename,filter); //recurse
        }
        else if (filename.indexOf('.html.md')>=0) {
            if (filename.indexOf('index')>=0) {
                console.log('Found index, continuing...');
            }
            else {
                console.log('-- found:   ',filename);
                fs.unlink(filename);
                console.log('-- deleted: ',filename);
            }
        }
    };
};

function generateMdFromSwagger(startPath, endPath){

    //console.log('Starting from dir '+startPath+'/');

    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            fromDir(filename,filter); //recurse
        }
        else if (filename.indexOf('.yaml')>=0) {
            console.log('-- found:     ',filename);
            var newFilename = filename.replace(startPath, endPath).replace('.yaml', '.html.md');
            console.log(newFilename);
            var swagger = {};
            var s = fs.readFileSync(filename,'utf8');
            swagger = yaml.safeLoad(s);

            var generated = converter.convert(swagger,options);

            // Warning: hacky bullshit
            generated = generated.replace('language_tabs:', 'layout: "layout"\nlanguage_tabs:');
            // end hacky bullshit
            
            fs.writeFileSync(newFilename, generated, 'utf8')
            console.log('-- generated: ', newFilename);
        };
    };
};

// Set up directory

var startPath = "data";
var endPath = "source/api/v3";

// Set up widdershins converter options

var options = {}; // defaults shown
options.codeSamples = true;
options.yaml = true;
options.language_tabs = [{'python': 'Python'},{'ruby': 'Ruby'}];
//options.loadedFrom = sourceUrl;
//options.user_templates = './user_templates';
options.templateCallback = function(templateName,stage,data) { return data };
options.theme = 'darkula';
options.search = true;
options.includes = [];

// Delete all existing .generated.md files
// Generate new markdown from swagger files
deleteExistingMd(endPath);
generateMdFromSwagger(startPath, endPath);
