// NPM scripts CLI testing
import { existsSync, readdirSync } from 'fs';
import { basename, extname } from 'path';
import { echo, exec } from 'shelljs';
import { getElementNames } from '../../scripts/tools.js';
import chai from 'chai';

const expect = chai.expect;
const assert = chai.assert;

chai.use(require('chai-fs'));

const expectedFiles = componentName => {
    const folder = `${process.cwd()}/elements/${componentName}`;
    if (!existsSync(folder)) {
        echo(`${componentName} not found in ${folder}`);
        // throw Error(`${componentName} not found in the elements directory.`);
        return;
    }

    if(!existsSync(`${folder}/src/`)) return;

    // Check if it has light DOM styles in src
    let files = [];

    // @TODO: assets doesn't have the information in it that I'd expect yets
    // let assets = [];
    // const { pfelement } = require(`${folder}/package.json`);
    // if (pfelement && pfelement.assets && pfelement.assets.length > 0) {
    //     assets = pfelement.assets;
    // }
    // console.log(assets);

    let src = readdirSync(`${folder}/src/`);

    // Capture any non-embedded CSS assets
    src.filter(fileName => 
        [".scss", ".css"].includes(extname(fileName)) &&
        fileName.startsWith(`${componentName}--`)
    ).map(style => {
        let fileName = basename(style, extname(style));
        files.concat([
            `${fileName}.css`,
            `${fileName}.css.map`,
            `${fileName}.min.css`,
            `${fileName}.min.css.map`
        ]);
    });

    // Capture the map files generated by the embedded CSS
    src.filter(fileName => 
        [".scss", ".css"].includes(extname(fileName)) &&
        !fileName.startsWith(`${componentName}--`) &&
        !fileName.startsWith("_")
    ).map(style => {
        let fileName = basename(style, extname(style));
        files.concat([
            `${fileName}.css.map`,
            `${fileName}.min.css.map`
        ]);
    });

    // Capture the JS files generated
    src.filter(fileName => 
        extname(fileName) === ".js" &&
        fileName.startsWith(`${componentName}`)
    ).map(asset => {
        let fileName = basename(asset, extname(asset));
        files.concat([
            `${fileName}.js`,
            `${fileName}.js.map`,
            `${fileName}.min.js`,
            `${fileName}.min.js.map`,
            `${fileName}.umd.js`,
            `${fileName}.umd.js.map`,
            `${fileName}.umd.min.js`,
            `${fileName}.umd.min.js.map`
        ]);
    });

    console.log(files);
    return files;
}

const validateBuild = (elementsFolder, component) => {
    const folder = `${elementsFolder}/${component}`;
    // Check that ${component} was built succesfully by looking for:
    // -- elements/${component}/dist/${component}{--lightdom}*{.umd}*{.min}*.{css,js}{.map}*
    // expect(`./elements/${component}/dist`).to.be.a.directory().with.files(expectedFiles(component));
    if(component === "pfe-sass") return;
    assert.directoryIncludeFiles(`${folder}/dist`, expectedFiles(component));
};

describe('npm run build', () => {
    let elementsFolder;
    beforeEach(() => {
        exec(`npm run clean:components`);
        elementsFolder = `${process.cwd()}/elements`;
    });

    it('should build one component when a name is passed in', done => {
        const component = "pfe-navigation";
        exec(`npm run build ${component}`, { silent: true }, code => {
            // Expect the build to run successfully
            expect(code).to.equal(0);
            validateBuild(elementsFolder, component);
            done();
        });
    });

    it('should build all components by default', done => {
        const all = getElementNames();
        exec(`npm run build`, { silent: true }, code => {
            // Expect the build to run successfully
            expect(code).to.equal(0);
            all.map(component => validateBuild(elementsFolder, component));
            done();
        });
    });
});