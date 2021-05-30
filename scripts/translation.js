const fs = require('fs');
const { exit } = require('process');

COMPONENTS_PATH = "./src/components";
TRANSLATIONS_PATH = "./src/translations";
FOUND_ANY = 0;


//var re = /[^\w]t\('(\w+)'\)/gm;
var re = /t\('(.+?)'\)/gm;
var reJSON = /"(.*?)":/g;

function pathJoin(parts, sep) {
    var separator = sep || '/';
    var replace = new RegExp(separator + '{1,}', 'g');
    return parts.join(separator).replace(replace, separator);
}

function getAllTranslationInTypescriptFile(typescriptFile) {
    result = []
    var regexArray = typescriptFile.match(re);
    return regexArray == null ? [] : regexArray;
}

components = fs.readdirSync(COMPONENTS_PATH);
completePath = [
    [components, COMPONENTS_PATH]
];

translations = fs.readdirSync(TRANSLATIONS_PATH);

for (var i = 0; i < translations.length; i++) {
    translations[i] = pathJoin([TRANSLATIONS_PATH, translations[i]]);
}

typeScriptArray = []
for (var indexComplete = 0; indexComplete < completePath.length; indexComplete++) {
    for (var i = 0; i < completePath[indexComplete][0].length; i++) {
        path = pathJoin([completePath[indexComplete][1], completePath[indexComplete][0][i]]);
        //console.log(completePath[indexComplete][1], completePath[indexComplete][0][i], path);
        tsxFILES = fs.readdirSync(path);
        tsxFILES.forEach(file => {
            if (file.includes(".tsx")) {
                route = pathJoin([completePath[indexComplete][1], completePath[indexComplete][0][i], file]);
                typescriptFile = fs.readFileSync(route, 'utf8');
                typeScript = getAllTranslationInTypescriptFile(typescriptFile);
                typeScript.forEach(element => {
                    if (!(typeScriptArray.includes(element))) {
                        typeScriptArray.push(element);
                    }
                });
            }
        });
    }
}

for (var i = 0; i < typeScriptArray.length; i++) {
    typeScriptArray[i] = typeScriptArray[i].substring(3, typeScriptArray[i].length - 2);
}

for (var l = 0; l < translations.length; l++) {
    console.log("\n===== FILE: " + translations[l] + " =====\n")
    fr = fs.readFileSync(translations[l], 'utf8').split('\n');
    for (var i = 0; i < fr.length; i++) {
        var str = fr[i].match(reJSON);
        if (str != null) {
            fr[i] = str[0].substring(1, str[0].length - 2);
        }
    }
    for (var i = 0; i < typeScriptArray.length; i++) {
        if (!fr.includes(typeScriptArray[i])) {
            if (typeScriptArray[i].includes('/')) {
                console.log("possible match:", typeScriptArray[i])
            } else {
                FOUND_ANY = 1;
                console.log(typeScriptArray[i]);
            }
        }
    }
}

// console.log("nulos")
// console.log(typeScriptArray)


exit(FOUND_ANY);