import path from 'path';
import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const sharedUIDir = project.getDirectory(path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui'));
const componentsDirs = sharedUIDir?.getDirectories();

function isAbsolute(value: string) {
    const layers = ['app', 'shared', 'widgets', 'entities', 'features', 'pages'];
    return layers.some((layer) => value.startsWith(layer));
}

componentsDirs?.forEach((dir) => {
    const indexFilePath = `${dir.getPath()}/index.ts`;
    const indexFile = dir.getSourceFile(indexFilePath);

    if (!indexFile) {
        const sourceCode = `export * from './${dir.getBaseName()}';\n`;
        const file = dir.createSourceFile(indexFilePath, sourceCode, { overwrite: true });
        file.save();
    }
});

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();
        const valueWithoutAlias = value.replace('@/', '');

        const segments = valueWithoutAlias.split('/');
        const isSharedLayer = segments?.[0] === 'shared';
        const isUILayer = segments?.[1] === 'ui';

        if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUILayer) {
            const result = valueWithoutAlias.split('/').slice(0, 3).join('/');
            importDeclaration.setModuleSpecifier(`@/${result}`);
        }
    });
});

project.save();
