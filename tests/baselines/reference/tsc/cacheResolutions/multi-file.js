Input::
//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/project/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0" assert { "resolution-mode": "import" };
import type { RequireInterface1 } from "pkg1" assert { "resolution-mode": "require" };


//// [/src/project/fileWithTypeRefs.ts]
/// <reference types="pkg2" resolution-mode="import"/>
/// <reference types="pkg3" resolution-mode="require"/>
interface LocalInterface extends ImportInterface2, RequireInterface3 {}
export {}


//// [/src/project/node_modules/@types/pkg4/index.d.ts]
export const x = 10;

//// [/src/project/node_modules/pkg0/import.d.ts]
export interface ImportInterface0 {}

//// [/src/project/node_modules/pkg0/package.json]
{"name":"pkg0","version":"0.0.1","exports":{"import":"./import.js","require":"./require.js"}}

//// [/src/project/node_modules/pkg0/require.d.ts]
export interface RequireInterface0 {}

//// [/src/project/node_modules/pkg1/import.d.ts]
export interface ImportInterface1 {}

//// [/src/project/node_modules/pkg1/package.json]
{"name":"pkg1","version":"0.0.1","exports":{"import":"./import.js","require":"./require.js"}}

//// [/src/project/node_modules/pkg2/import.d.ts]
export {};
declare global {
    interface ImportInterface2 {}
}


//// [/src/project/node_modules/pkg2/package.json]
{"name":"pkg2","version":"0.0.1","exports":{"import":"./import.js","require":"./require.js"}}

//// [/src/project/node_modules/pkg2/require.d.ts]
export {};
declare global {
    interface RequireInterface2 {}
}


//// [/src/project/node_modules/pkg3/import.d.ts]
export {};
declare global {
    interface ImportInterface3 {}
}


//// [/src/project/node_modules/pkg3/package.json]
{"name":"pkg3","version":"0.0.1","exports":{"import":"./import.js","require":"./require.js"}}

//// [/src/project/randomFileForImport.ts]
export const x = 10;

//// [/src/project/randomFileForTypeRef.ts]
export const x = 10;

//// [/src/project/tsconfig.json]
{"compilerOptions":{"moduleResolution":"node16","composite":true,"cacheResolutions":true,"traceResolution":true},"include":["*.ts"],"exclude":["*.d.ts"]}



Output::
/lib/tsc -p /src/project --explainFiles
File '/src/project/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
======== Resolving module 'pkg0' from '/src/project/fileWithImports.ts'. ========
Explicitly specified module resolution kind: 'Node16'.
Resolving in ESM mode with conditions 'node', 'import', 'types'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Found 'package.json' at '/src/project/node_modules/pkg0/package.json'.
Matched 'exports' condition 'import'.
Using 'exports' subpath '.' with target './import.js'.
File name '/src/project/node_modules/pkg0/import.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg0/import.ts' does not exist.
File '/src/project/node_modules/pkg0/import.tsx' does not exist.
File '/src/project/node_modules/pkg0/import.d.ts' exist - use it as a name resolution result.
Resolving real path for '/src/project/node_modules/pkg0/import.d.ts', result '/src/project/node_modules/pkg0/import.d.ts'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'. ========
======== Resolving module 'pkg1' from '/src/project/fileWithImports.ts'. ========
Explicitly specified module resolution kind: 'Node16'.
Resolving in CJS mode with conditions 'node', 'require', 'types'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Found 'package.json' at '/src/project/node_modules/pkg1/package.json'.
Saw non-matching condition 'import'.
Matched 'exports' condition 'require'.
Using 'exports' subpath '.' with target './require.js'.
File name '/src/project/node_modules/pkg1/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg1/require.ts' does not exist.
File '/src/project/node_modules/pkg1/require.tsx' does not exist.
File '/src/project/node_modules/pkg1/require.d.ts' does not exist.
File '/src/project/node_modules/@types/pkg1.d.ts' does not exist.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
File '/src/project/node_modules/pkg1/package.json' exists according to earlier cached lookups.
Saw non-matching condition 'import'.
Matched 'exports' condition 'require'.
Using 'exports' subpath '.' with target './require.js'.
File name '/src/project/node_modules/pkg1/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg1/require.js' does not exist.
File '/src/project/node_modules/pkg1/require.jsx' does not exist.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Module name 'pkg1' was not resolved. ========
File '/src/project/node_modules/pkg0/package.json' exists according to earlier cached lookups.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
======== Resolving type reference directive 'pkg2', containing file '/src/project/fileWithTypeRefs.ts', root directory '/src/project/node_modules/@types'. ========
Resolving with primary search path '/src/project/node_modules/@types'.
Looking up in 'node_modules' folder, initial location '/src/project'.
Found 'package.json' at '/src/project/node_modules/pkg2/package.json'.
Matched 'exports' condition 'import'.
Using 'exports' subpath '.' with target './import.js'.
File name '/src/project/node_modules/pkg2/import.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg2/import.d.ts' exist - use it as a name resolution result.
Resolving real path for '/src/project/node_modules/pkg2/import.d.ts', result '/src/project/node_modules/pkg2/import.d.ts'.
======== Type reference directive 'pkg2' was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1', primary: false. ========
======== Resolving type reference directive 'pkg3', containing file '/src/project/fileWithTypeRefs.ts', root directory '/src/project/node_modules/@types'. ========
Resolving with primary search path '/src/project/node_modules/@types'.
Looking up in 'node_modules' folder, initial location '/src/project'.
Found 'package.json' at '/src/project/node_modules/pkg3/package.json'.
Saw non-matching condition 'import'.
Matched 'exports' condition 'require'.
Using 'exports' subpath '.' with target './require.js'.
File name '/src/project/node_modules/pkg3/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg3/require.d.ts' does not exist.
File '/src/project/node_modules/@types/pkg3.d.ts' does not exist.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Type reference directive 'pkg3' was not resolved. ========
File '/src/project/node_modules/pkg2/package.json' exists according to earlier cached lookups.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
======== Resolving type reference directive 'pkg4', containing file '/src/project/__inferred type names__.ts', root directory '/src/project/node_modules/@types'. ========
Resolving with primary search path '/src/project/node_modules/@types'.
File '/src/project/node_modules/@types/pkg4/package.json' does not exist.
File '/src/project/node_modules/@types/pkg4/index.d.ts' exist - use it as a name resolution result.
Resolving real path for '/src/project/node_modules/@types/pkg4/index.d.ts', result '/src/project/node_modules/@types/pkg4/index.d.ts'.
======== Type reference directive 'pkg4' was successfully resolved to '/src/project/node_modules/@types/pkg4/index.d.ts', primary: true. ========
File '/src/project/node_modules/@types/pkg4/package.json' does not exist according to earlier cached lookups.
File '/src/project/node_modules/@types/package.json' does not exist.
File '/src/project/node_modules/package.json' does not exist.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
[96msrc/project/fileWithImports.ts[0m:[93m2[0m:[93m40[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { RequireInterface1 } from "pkg1" assert { "resolution-mode": "require" };
[7m [0m [91m                                       ~~~~~~[0m

[96msrc/project/fileWithTypeRefs.ts[0m:[93m2[0m:[93m23[0m - [91merror[0m[90m TS2688: [0mCannot find type definition file for 'pkg3'.

[7m2[0m /// <reference types="pkg3" resolution-mode="require"/>
[7m [0m [91m                      ~~~~[0m

[96msrc/project/fileWithTypeRefs.ts[0m:[93m3[0m:[93m52[0m - [91merror[0m[90m TS2304: [0mCannot find name 'RequireInterface3'.

[7m3[0m interface LocalInterface extends ImportInterface2, RequireInterface3 {}
[7m [0m [91m                                                   ~~~~~~~~~~~~~~~~~[0m

lib/lib.d.ts
  Default library for target 'es5'
src/project/node_modules/pkg0/import.d.ts
  Imported via "pkg0" from file 'src/project/fileWithImports.ts' with packageId 'pkg0/import.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg0/package.json' does not have field "type"
src/project/fileWithImports.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/node_modules/pkg2/import.d.ts
  Type library referenced via 'pkg2' from file 'src/project/fileWithTypeRefs.ts' with packageId 'pkg2/import.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg2/package.json' does not have field "type"
src/project/fileWithTypeRefs.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/randomFileForImport.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/randomFileForTypeRef.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/node_modules/@types/pkg4/index.d.ts
  Entry point for implicit type library 'pkg4'
  File is CommonJS module because 'package.json' was not found

Found 3 errors in 2 files.

Errors  Files
     1  src/project/fileWithImports.ts[90m:2[0m
     2  src/project/fileWithTypeRefs.ts[90m:2[0m
exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
File: /src/project/node_modules/pkg0/import.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg0",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg0",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/fileWithImports.ts
resolvedModules:
pkg0: esnext: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/import.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true,
    "packageId": {
      "name": "pkg0",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    }
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg0/package.json"
  ]
}
pkg1: commonjs: {
  "failedLookupLocations": [
    "/src/project/package.json",
    "/src/package.json",
    "/package.json",
    "/src/project/node_modules/pkg1/require.ts",
    "/src/project/node_modules/pkg1/require.tsx",
    "/src/project/node_modules/pkg1/require.d.ts",
    "/src/project/node_modules/@types/pkg1/package.json",
    "/src/project/node_modules/@types/pkg1.d.ts",
    "/src/project/node_modules/@types/pkg1/index.d.ts",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.ts",
    "/src/node_modules/pkg1.tsx",
    "/src/node_modules/pkg1.d.ts",
    "/src/node_modules/pkg1/index.ts",
    "/src/node_modules/pkg1/index.tsx",
    "/src/node_modules/pkg1/index.d.ts",
    "/src/node_modules/@types/pkg1/package.json",
    "/src/node_modules/@types/pkg1.d.ts",
    "/src/node_modules/@types/pkg1/index.d.ts",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.ts",
    "/node_modules/pkg1.tsx",
    "/node_modules/pkg1.d.ts",
    "/node_modules/pkg1/index.ts",
    "/node_modules/pkg1/index.tsx",
    "/node_modules/pkg1/index.d.ts",
    "/node_modules/@types/pkg1/package.json",
    "/node_modules/@types/pkg1.d.ts",
    "/node_modules/@types/pkg1/index.d.ts",
    "/src/project/node_modules/pkg1/require.js",
    "/src/project/node_modules/pkg1/require.jsx",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.js",
    "/src/node_modules/pkg1.jsx",
    "/src/node_modules/pkg1/index.js",
    "/src/node_modules/pkg1/index.jsx",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.js",
    "/node_modules/pkg1.jsx",
    "/node_modules/pkg1/index.js",
    "/node_modules/pkg1/index.jsx"
  ],
  "affectingLocations": [
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1/package.json"
  ]
}

File: /src/project/node_modules/pkg2/import.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg2",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg2",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/fileWithTypeRefs.ts
resolvedTypeReferenceDirectiveNames:
pkg2: esnext: {
  "resolvedTypeReferenceDirective": {
    "primary": false,
    "resolvedFileName": "/src/project/node_modules/pkg2/import.d.ts",
    "packageId": {
      "name": "pkg2",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "isExternalLibraryImport": true
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg2/package.json"
  ]
}
pkg3: commonjs: {
  "failedLookupLocations": [
    "/src/project/node_modules/@types/pkg3/package.json",
    "/src/project/node_modules/@types/pkg3/index.d.ts",
    "/src/project/node_modules/pkg3/require.d.ts",
    "/src/project/node_modules/@types/pkg3/package.json",
    "/src/project/node_modules/@types/pkg3.d.ts",
    "/src/project/node_modules/@types/pkg3/index.d.ts",
    "/src/node_modules/pkg3/package.json",
    "/src/node_modules/pkg3.d.ts",
    "/src/node_modules/pkg3/index.d.ts",
    "/src/node_modules/@types/pkg3/package.json",
    "/src/node_modules/@types/pkg3.d.ts",
    "/src/node_modules/@types/pkg3/index.d.ts",
    "/node_modules/pkg3/package.json",
    "/node_modules/pkg3.d.ts",
    "/node_modules/pkg3/index.d.ts",
    "/node_modules/@types/pkg3/package.json",
    "/node_modules/@types/pkg3.d.ts",
    "/node_modules/@types/pkg3/index.d.ts"
  ],
  "affectingLocations": [
    "/src/project/node_modules/pkg3/package.json"
  ]
}

automaticTypeDirectiveResolutions:
pkg4: {
  "resolvedTypeReferenceDirective": {
    "primary": true,
    "resolvedFileName": "/src/project/node_modules/@types/pkg4/index.d.ts",
    "isExternalLibraryImport": true
  }
}


//// [/src/project/fileWithImports.d.ts]
export {};


//// [/src/project/fileWithImports.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


//// [/src/project/fileWithTypeRefs.d.ts]
export {};


//// [/src/project/fileWithTypeRefs.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="pkg2" resolution-mode="import"/>
/// <reference types="pkg3" resolution-mode="require"/>


//// [/src/project/randomFileForImport.d.ts]
export declare const x = 10;


//// [/src/project/randomFileForImport.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/project/randomFileForTypeRef.d.ts]
export declare const x = 10;


//// [/src/project/randomFileForTypeRef.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./node_modules/pkg0/import.d.ts","./filewithimports.ts","./node_modules/pkg2/import.d.ts","./filewithtyperefs.ts","./randomfileforimport.ts","./randomfilefortyperef.ts","./node_modules/@types/pkg4/index.d.ts","./","./node_modules/pkg0/package.json","./node_modules/pkg2/package.json"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"769951468-export interface ImportInterface0 {}","impliedFormat":1},{"version":"4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n","signature":"-4882119183-export {};\r\n","impliedFormat":1},{"version":"1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n","affectsGlobalScope":true,"impliedFormat":1},{"version":"-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n","signature":"-4882119183-export {};\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1}],"options":{"cacheResolutions":true,"composite":true,"moduleResolution":3},"fileIdsList":[[2],[4]],"referencedMap":[[3,1],[5,2]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,[3,[{"file":"./filewithimports.ts","start":124,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],[5,[{"file":"./filewithtyperefs.ts","start":162,"length":17,"messageText":"Cannot find name 'RequireInterface3'.","category":1,"code":2304}]],8,2,4,6,7],"latestChangedDtsFile":"./randomFileForTypeRef.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":2,"isExternalLibraryImport":true,"packageId":{"name":"pkg0","subModuleName":"import.d.ts","version":"0.0.1"}},"affectingLocations":[10]},{"resolvedTypeReferenceDirective":{"resolvedFileName":4,"packageId":{"name":"pkg2","subModuleName":"import.d.ts","version":"0.0.1"},"isExternalLibraryImport":true},"affectingLocations":[11]},{"resolvedTypeReferenceDirective":{"primary":true,"resolvedFileName":8,"isExternalLibraryImport":true}}],"names":["pkg0","pkg2","pkg4"],"hash":[[10,"9838425114-{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"],[11,"21696956444-{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"]],"resolutionEntries":[[1,1,99],[2,2,99],[3,3]],"modules":[[9,[1]]],"typeRefs":[[9,[2,3]]]}},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./node_modules/pkg0/import.d.ts",
      "./filewithimports.ts",
      "./node_modules/pkg2/import.d.ts",
      "./filewithtyperefs.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts",
      "./node_modules/@types/pkg4/index.d.ts",
      "./",
      "./node_modules/pkg0/package.json",
      "./node_modules/pkg2/package.json"
    ],
    "fileNamesList": [
      [
        "./node_modules/pkg0/import.d.ts"
      ],
      [
        "./node_modules/pkg2/import.d.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg0/import.d.ts": {
        "original": {
          "version": "769951468-export interface ImportInterface0 {}",
          "impliedFormat": 1
        },
        "version": "769951468-export interface ImportInterface0 {}",
        "signature": "769951468-export interface ImportInterface0 {}",
        "impliedFormat": "commonjs"
      },
      "./filewithimports.ts": {
        "original": {
          "version": "4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n",
          "signature": "-4882119183-export {};\r\n",
          "impliedFormat": 1
        },
        "version": "4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg2/import.d.ts": {
        "original": {
          "version": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "signature": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./filewithtyperefs.ts": {
        "original": {
          "version": "-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n",
          "signature": "-4882119183-export {};\r\n",
          "impliedFormat": 1
        },
        "version": "-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "commonjs"
      },
      "./randomfileforimport.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6057683066-export declare const x = 10;\r\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./randomfilefortyperef.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6057683066-export declare const x = 10;\r\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/@types/pkg4/index.d.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "moduleResolution": 3
    },
    "referencedMap": {
      "./filewithimports.ts": [
        "./node_modules/pkg0/import.d.ts"
      ],
      "./filewithtyperefs.ts": [
        "./node_modules/pkg2/import.d.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      [
        "./filewithimports.ts",
        [
          {
            "file": "./filewithimports.ts",
            "start": 124,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      [
        "./filewithtyperefs.ts",
        [
          {
            "file": "./filewithtyperefs.ts",
            "start": 162,
            "length": 17,
            "messageText": "Cannot find name 'RequireInterface3'.",
            "category": 1,
            "code": 2304
          }
        ]
      ],
      "./node_modules/@types/pkg4/index.d.ts",
      "./node_modules/pkg0/import.d.ts",
      "./node_modules/pkg2/import.d.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts"
    ],
    "latestChangedDtsFile": "./randomFileForTypeRef.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2,
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg0",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              }
            },
            "affectingLocations": [
              10
            ]
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/import.d.ts",
            "isExternalLibraryImport": true,
            "packageId": {
              "name": "pkg0",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            }
          },
          "affectingLocations": [
            "./node_modules/pkg0/package.json"
          ]
        },
        {
          "original": {
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": 4,
              "packageId": {
                "name": "pkg2",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "affectingLocations": [
              11
            ]
          },
          "resolutionId": 2,
          "resolvedTypeReferenceDirective": {
            "resolvedFileName": "./node_modules/pkg2/import.d.ts",
            "packageId": {
              "name": "pkg2",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            },
            "isExternalLibraryImport": true
          },
          "affectingLocations": [
            "./node_modules/pkg2/package.json"
          ]
        },
        {
          "original": {
            "resolvedTypeReferenceDirective": {
              "primary": true,
              "resolvedFileName": 8,
              "isExternalLibraryImport": true
            }
          },
          "resolutionId": 3,
          "resolvedTypeReferenceDirective": {
            "primary": true,
            "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
            "isExternalLibraryImport": true
          }
        }
      ],
      "names": [
        "pkg0",
        "pkg2",
        "pkg4"
      ],
      "hash": [
        [
          "./node_modules/pkg0/package.json",
          "9838425114-{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"
        ],
        [
          "./node_modules/pkg2/package.json",
          "21696956444-{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"
        ]
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1,
            99
          ],
          "resolutionEntryId": 1,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/import.d.ts",
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg0",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              }
            },
            "affectingLocations": [
              "./node_modules/pkg0/package.json"
            ]
          },
          "mode": "esnext"
        },
        {
          "original": [
            2,
            2,
            99
          ],
          "resolutionEntryId": 2,
          "name": "pkg2",
          "resolution": {
            "resolutionId": 2,
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": "./node_modules/pkg2/import.d.ts",
              "packageId": {
                "name": "pkg2",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "affectingLocations": [
              "./node_modules/pkg2/package.json"
            ]
          },
          "mode": "esnext"
        },
        {
          "original": [
            3,
            3
          ],
          "resolutionEntryId": 3,
          "name": "pkg4",
          "resolution": {
            "resolutionId": 3,
            "resolvedTypeReferenceDirective": {
              "primary": true,
              "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
              "isExternalLibraryImport": true
            }
          }
        }
      ],
      "modules": [
        {
          "dir": "./",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/import.d.ts",
                  "isExternalLibraryImport": true,
                  "packageId": {
                    "name": "pkg0",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  }
                },
                "affectingLocations": [
                  "./node_modules/pkg0/package.json"
                ]
              },
              "mode": "esnext"
            }
          ]
        }
      ],
      "typeRefs": [
        {
          "dir": "./",
          "resolutions": [
            {
              "resolutionEntryId": 2,
              "name": "pkg2",
              "resolution": {
                "resolutionId": 2,
                "resolvedTypeReferenceDirective": {
                  "resolvedFileName": "./node_modules/pkg2/import.d.ts",
                  "packageId": {
                    "name": "pkg2",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  },
                  "isExternalLibraryImport": true
                },
                "affectingLocations": [
                  "./node_modules/pkg2/package.json"
                ]
              },
              "mode": "esnext"
            },
            {
              "resolutionEntryId": 3,
              "name": "pkg4",
              "resolution": {
                "resolutionId": 3,
                "resolvedTypeReferenceDirective": {
                  "primary": true,
                  "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 3421
}



Change:: no-change-run
Input::


Output::
/lib/tsc -p /src/project --explainFiles
File '/src/project/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
Reusing resolution of module 'pkg0' from '/src/project/fileWithImports.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'.
======== Resolving module 'pkg1' from '/src/project/fileWithImports.ts'. ========
Explicitly specified module resolution kind: 'Node16'.
Resolving in CJS mode with conditions 'node', 'require', 'types'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Found 'package.json' at '/src/project/node_modules/pkg1/package.json'.
Saw non-matching condition 'import'.
Matched 'exports' condition 'require'.
Using 'exports' subpath '.' with target './require.js'.
File name '/src/project/node_modules/pkg1/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg1/require.ts' does not exist.
File '/src/project/node_modules/pkg1/require.tsx' does not exist.
File '/src/project/node_modules/pkg1/require.d.ts' does not exist.
File '/src/project/node_modules/@types/pkg1.d.ts' does not exist.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
File '/src/project/node_modules/pkg1/package.json' exists according to earlier cached lookups.
Saw non-matching condition 'import'.
Matched 'exports' condition 'require'.
Using 'exports' subpath '.' with target './require.js'.
File name '/src/project/node_modules/pkg1/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg1/require.js' does not exist.
File '/src/project/node_modules/pkg1/require.jsx' does not exist.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Module name 'pkg1' was not resolved. ========
Found 'package.json' at '/src/project/node_modules/pkg0/package.json'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg2' from '/src/project/fileWithTypeRefs.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1'.
======== Resolving type reference directive 'pkg3', containing file '/src/project/fileWithTypeRefs.ts', root directory '/src/project/node_modules/@types'. ========
Resolving with primary search path '/src/project/node_modules/@types'.
Looking up in 'node_modules' folder, initial location '/src/project'.
Found 'package.json' at '/src/project/node_modules/pkg3/package.json'.
Saw non-matching condition 'import'.
Matched 'exports' condition 'require'.
Using 'exports' subpath '.' with target './require.js'.
File name '/src/project/node_modules/pkg3/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg3/require.d.ts' does not exist.
File '/src/project/node_modules/@types/pkg3.d.ts' does not exist.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Type reference directive 'pkg3' was not resolved. ========
Found 'package.json' at '/src/project/node_modules/pkg2/package.json'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg4' from '/src/project/__inferred type names__.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/@types/pkg4/index.d.ts'.
File '/src/project/node_modules/@types/pkg4/package.json' does not exist.
File '/src/project/node_modules/@types/package.json' does not exist.
File '/src/project/node_modules/package.json' does not exist.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
[96msrc/project/fileWithImports.ts[0m:[93m2[0m:[93m40[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { RequireInterface1 } from "pkg1" assert { "resolution-mode": "require" };
[7m [0m [91m                                       ~~~~~~[0m

[96msrc/project/fileWithTypeRefs.ts[0m:[93m2[0m:[93m23[0m - [91merror[0m[90m TS2688: [0mCannot find type definition file for 'pkg3'.

[7m2[0m /// <reference types="pkg3" resolution-mode="require"/>
[7m [0m [91m                      ~~~~[0m

[96msrc/project/fileWithTypeRefs.ts[0m:[93m3[0m:[93m52[0m - [91merror[0m[90m TS2304: [0mCannot find name 'RequireInterface3'.

[7m3[0m interface LocalInterface extends ImportInterface2, RequireInterface3 {}
[7m [0m [91m                                                   ~~~~~~~~~~~~~~~~~[0m

lib/lib.d.ts
  Default library for target 'es5'
src/project/node_modules/pkg0/import.d.ts
  Imported via "pkg0" from file 'src/project/fileWithImports.ts' with packageId 'pkg0/import.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg0/package.json' does not have field "type"
src/project/fileWithImports.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/node_modules/pkg2/import.d.ts
  Type library referenced via 'pkg2' from file 'src/project/fileWithTypeRefs.ts' with packageId 'pkg2/import.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg2/package.json' does not have field "type"
src/project/fileWithTypeRefs.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/randomFileForImport.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/randomFileForTypeRef.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/node_modules/@types/pkg4/index.d.ts
  Entry point for implicit type library 'pkg4'
  File is CommonJS module because 'package.json' was not found

Found 3 errors in 2 files.

Errors  Files
     1  src/project/fileWithImports.ts[90m:2[0m
     2  src/project/fileWithTypeRefs.ts[90m:2[0m
exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
File: /src/project/node_modules/pkg0/import.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg0",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg0",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/fileWithImports.ts
resolvedModules:
pkg0: esnext: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/import.d.ts",
    "isExternalLibraryImport": true,
    "packageId": {
      "name": "pkg0",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "extension": ".d.ts"
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg0/package.json"
  ]
}
pkg1: commonjs: {
  "failedLookupLocations": [
    "/src/project/package.json",
    "/src/package.json",
    "/package.json",
    "/src/project/node_modules/pkg1/require.ts",
    "/src/project/node_modules/pkg1/require.tsx",
    "/src/project/node_modules/pkg1/require.d.ts",
    "/src/project/node_modules/@types/pkg1/package.json",
    "/src/project/node_modules/@types/pkg1.d.ts",
    "/src/project/node_modules/@types/pkg1/index.d.ts",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.ts",
    "/src/node_modules/pkg1.tsx",
    "/src/node_modules/pkg1.d.ts",
    "/src/node_modules/pkg1/index.ts",
    "/src/node_modules/pkg1/index.tsx",
    "/src/node_modules/pkg1/index.d.ts",
    "/src/node_modules/@types/pkg1/package.json",
    "/src/node_modules/@types/pkg1.d.ts",
    "/src/node_modules/@types/pkg1/index.d.ts",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.ts",
    "/node_modules/pkg1.tsx",
    "/node_modules/pkg1.d.ts",
    "/node_modules/pkg1/index.ts",
    "/node_modules/pkg1/index.tsx",
    "/node_modules/pkg1/index.d.ts",
    "/node_modules/@types/pkg1/package.json",
    "/node_modules/@types/pkg1.d.ts",
    "/node_modules/@types/pkg1/index.d.ts",
    "/src/project/node_modules/pkg1/require.js",
    "/src/project/node_modules/pkg1/require.jsx",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.js",
    "/src/node_modules/pkg1.jsx",
    "/src/node_modules/pkg1/index.js",
    "/src/node_modules/pkg1/index.jsx",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.js",
    "/node_modules/pkg1.jsx",
    "/node_modules/pkg1/index.js",
    "/node_modules/pkg1/index.jsx"
  ],
  "affectingLocations": [
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1/package.json"
  ]
}

File: /src/project/node_modules/pkg2/import.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg2",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg2",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/fileWithTypeRefs.ts
resolvedTypeReferenceDirectiveNames:
pkg2: esnext: {
  "resolvedTypeReferenceDirective": {
    "resolvedFileName": "/src/project/node_modules/pkg2/import.d.ts",
    "packageId": {
      "name": "pkg2",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "isExternalLibraryImport": true
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg2/package.json"
  ]
}
pkg3: commonjs: {
  "failedLookupLocations": [
    "/src/project/node_modules/@types/pkg3/package.json",
    "/src/project/node_modules/@types/pkg3/index.d.ts",
    "/src/project/node_modules/pkg3/require.d.ts",
    "/src/project/node_modules/@types/pkg3/package.json",
    "/src/project/node_modules/@types/pkg3.d.ts",
    "/src/project/node_modules/@types/pkg3/index.d.ts",
    "/src/node_modules/pkg3/package.json",
    "/src/node_modules/pkg3.d.ts",
    "/src/node_modules/pkg3/index.d.ts",
    "/src/node_modules/@types/pkg3/package.json",
    "/src/node_modules/@types/pkg3.d.ts",
    "/src/node_modules/@types/pkg3/index.d.ts",
    "/node_modules/pkg3/package.json",
    "/node_modules/pkg3.d.ts",
    "/node_modules/pkg3/index.d.ts",
    "/node_modules/@types/pkg3/package.json",
    "/node_modules/@types/pkg3.d.ts",
    "/node_modules/@types/pkg3/index.d.ts"
  ],
  "affectingLocations": [
    "/src/project/node_modules/pkg3/package.json"
  ]
}

automaticTypeDirectiveResolutions:
pkg4: {
  "resolvedTypeReferenceDirective": {
    "primary": true,
    "resolvedFileName": "/src/project/node_modules/@types/pkg4/index.d.ts",
    "isExternalLibraryImport": true
  }
}




Change:: modify randomFileForImport by adding import
Input::
//// [/src/project/randomFileForImport.ts]
import type { ImportInterface0 } from "pkg0" assert { "resolution-mode": "import" };
export const x = 10;



Output::
/lib/tsc -p /src/project --explainFiles
File '/src/project/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
Reusing resolution of module 'pkg0' from '/src/project/fileWithImports.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'.
======== Resolving module 'pkg1' from '/src/project/fileWithImports.ts'. ========
Explicitly specified module resolution kind: 'Node16'.
Resolving in CJS mode with conditions 'node', 'require', 'types'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Found 'package.json' at '/src/project/node_modules/pkg1/package.json'.
Saw non-matching condition 'import'.
Matched 'exports' condition 'require'.
Using 'exports' subpath '.' with target './require.js'.
File name '/src/project/node_modules/pkg1/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg1/require.ts' does not exist.
File '/src/project/node_modules/pkg1/require.tsx' does not exist.
File '/src/project/node_modules/pkg1/require.d.ts' does not exist.
File '/src/project/node_modules/@types/pkg1.d.ts' does not exist.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
File '/src/project/node_modules/pkg1/package.json' exists according to earlier cached lookups.
Saw non-matching condition 'import'.
Matched 'exports' condition 'require'.
Using 'exports' subpath '.' with target './require.js'.
File name '/src/project/node_modules/pkg1/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg1/require.js' does not exist.
File '/src/project/node_modules/pkg1/require.jsx' does not exist.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Module name 'pkg1' was not resolved. ========
Found 'package.json' at '/src/project/node_modules/pkg0/package.json'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg2' from '/src/project/fileWithTypeRefs.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1'.
======== Resolving type reference directive 'pkg3', containing file '/src/project/fileWithTypeRefs.ts', root directory '/src/project/node_modules/@types'. ========
Resolving with primary search path '/src/project/node_modules/@types'.
Looking up in 'node_modules' folder, initial location '/src/project'.
Found 'package.json' at '/src/project/node_modules/pkg3/package.json'.
Saw non-matching condition 'import'.
Matched 'exports' condition 'require'.
Using 'exports' subpath '.' with target './require.js'.
File name '/src/project/node_modules/pkg3/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg3/require.d.ts' does not exist.
File '/src/project/node_modules/@types/pkg3.d.ts' does not exist.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Type reference directive 'pkg3' was not resolved. ========
Found 'package.json' at '/src/project/node_modules/pkg2/package.json'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of module 'pkg0' from '/src/project/randomFileForImport.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg4' from '/src/project/__inferred type names__.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/@types/pkg4/index.d.ts'.
File '/src/project/node_modules/@types/pkg4/package.json' does not exist.
File '/src/project/node_modules/@types/package.json' does not exist.
File '/src/project/node_modules/package.json' does not exist.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
[96msrc/project/fileWithImports.ts[0m:[93m2[0m:[93m40[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { RequireInterface1 } from "pkg1" assert { "resolution-mode": "require" };
[7m [0m [91m                                       ~~~~~~[0m

[96msrc/project/fileWithTypeRefs.ts[0m:[93m2[0m:[93m23[0m - [91merror[0m[90m TS2688: [0mCannot find type definition file for 'pkg3'.

[7m2[0m /// <reference types="pkg3" resolution-mode="require"/>
[7m [0m [91m                      ~~~~[0m

[96msrc/project/fileWithTypeRefs.ts[0m:[93m3[0m:[93m52[0m - [91merror[0m[90m TS2304: [0mCannot find name 'RequireInterface3'.

[7m3[0m interface LocalInterface extends ImportInterface2, RequireInterface3 {}
[7m [0m [91m                                                   ~~~~~~~~~~~~~~~~~[0m

lib/lib.d.ts
  Default library for target 'es5'
src/project/node_modules/pkg0/import.d.ts
  Imported via "pkg0" from file 'src/project/fileWithImports.ts' with packageId 'pkg0/import.d.ts@0.0.1'
  Imported via "pkg0" from file 'src/project/randomFileForImport.ts' with packageId 'pkg0/import.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg0/package.json' does not have field "type"
src/project/fileWithImports.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/node_modules/pkg2/import.d.ts
  Type library referenced via 'pkg2' from file 'src/project/fileWithTypeRefs.ts' with packageId 'pkg2/import.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg2/package.json' does not have field "type"
src/project/fileWithTypeRefs.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/randomFileForImport.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/randomFileForTypeRef.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/node_modules/@types/pkg4/index.d.ts
  Entry point for implicit type library 'pkg4'
  File is CommonJS module because 'package.json' was not found

Found 3 errors in 2 files.

Errors  Files
     1  src/project/fileWithImports.ts[90m:2[0m
     2  src/project/fileWithTypeRefs.ts[90m:2[0m
exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
File: /src/project/node_modules/pkg0/import.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg0",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg0",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/fileWithImports.ts
resolvedModules:
pkg0: esnext: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/import.d.ts",
    "isExternalLibraryImport": true,
    "packageId": {
      "name": "pkg0",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "extension": ".d.ts"
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg0/package.json"
  ]
}
pkg1: commonjs: {
  "failedLookupLocations": [
    "/src/project/package.json",
    "/src/package.json",
    "/package.json",
    "/src/project/node_modules/pkg1/require.ts",
    "/src/project/node_modules/pkg1/require.tsx",
    "/src/project/node_modules/pkg1/require.d.ts",
    "/src/project/node_modules/@types/pkg1/package.json",
    "/src/project/node_modules/@types/pkg1.d.ts",
    "/src/project/node_modules/@types/pkg1/index.d.ts",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.ts",
    "/src/node_modules/pkg1.tsx",
    "/src/node_modules/pkg1.d.ts",
    "/src/node_modules/pkg1/index.ts",
    "/src/node_modules/pkg1/index.tsx",
    "/src/node_modules/pkg1/index.d.ts",
    "/src/node_modules/@types/pkg1/package.json",
    "/src/node_modules/@types/pkg1.d.ts",
    "/src/node_modules/@types/pkg1/index.d.ts",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.ts",
    "/node_modules/pkg1.tsx",
    "/node_modules/pkg1.d.ts",
    "/node_modules/pkg1/index.ts",
    "/node_modules/pkg1/index.tsx",
    "/node_modules/pkg1/index.d.ts",
    "/node_modules/@types/pkg1/package.json",
    "/node_modules/@types/pkg1.d.ts",
    "/node_modules/@types/pkg1/index.d.ts",
    "/src/project/node_modules/pkg1/require.js",
    "/src/project/node_modules/pkg1/require.jsx",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.js",
    "/src/node_modules/pkg1.jsx",
    "/src/node_modules/pkg1/index.js",
    "/src/node_modules/pkg1/index.jsx",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.js",
    "/node_modules/pkg1.jsx",
    "/node_modules/pkg1/index.js",
    "/node_modules/pkg1/index.jsx"
  ],
  "affectingLocations": [
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1/package.json"
  ]
}

File: /src/project/node_modules/pkg2/import.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg2",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg2",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/fileWithTypeRefs.ts
resolvedTypeReferenceDirectiveNames:
pkg2: esnext: {
  "resolvedTypeReferenceDirective": {
    "resolvedFileName": "/src/project/node_modules/pkg2/import.d.ts",
    "packageId": {
      "name": "pkg2",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "isExternalLibraryImport": true
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg2/package.json"
  ]
}
pkg3: commonjs: {
  "failedLookupLocations": [
    "/src/project/node_modules/@types/pkg3/package.json",
    "/src/project/node_modules/@types/pkg3/index.d.ts",
    "/src/project/node_modules/pkg3/require.d.ts",
    "/src/project/node_modules/@types/pkg3/package.json",
    "/src/project/node_modules/@types/pkg3.d.ts",
    "/src/project/node_modules/@types/pkg3/index.d.ts",
    "/src/node_modules/pkg3/package.json",
    "/src/node_modules/pkg3.d.ts",
    "/src/node_modules/pkg3/index.d.ts",
    "/src/node_modules/@types/pkg3/package.json",
    "/src/node_modules/@types/pkg3.d.ts",
    "/src/node_modules/@types/pkg3/index.d.ts",
    "/node_modules/pkg3/package.json",
    "/node_modules/pkg3.d.ts",
    "/node_modules/pkg3/index.d.ts",
    "/node_modules/@types/pkg3/package.json",
    "/node_modules/@types/pkg3.d.ts",
    "/node_modules/@types/pkg3/index.d.ts"
  ],
  "affectingLocations": [
    "/src/project/node_modules/pkg3/package.json"
  ]
}

File: /src/project/randomFileForImport.ts
resolvedModules:
pkg0: esnext: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/import.d.ts",
    "isExternalLibraryImport": true,
    "packageId": {
      "name": "pkg0",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "extension": ".d.ts"
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg0/package.json"
  ]
}

automaticTypeDirectiveResolutions:
pkg4: {
  "resolvedTypeReferenceDirective": {
    "primary": true,
    "resolvedFileName": "/src/project/node_modules/@types/pkg4/index.d.ts",
    "isExternalLibraryImport": true
  }
}


//// [/src/project/randomFileForImport.js] file written with same contents
//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./node_modules/pkg0/import.d.ts","./filewithimports.ts","./node_modules/pkg2/import.d.ts","./filewithtyperefs.ts","./randomfileforimport.ts","./randomfilefortyperef.ts","./node_modules/@types/pkg4/index.d.ts","./","./node_modules/pkg0/package.json","./node_modules/pkg2/package.json"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"769951468-export interface ImportInterface0 {}","impliedFormat":1},{"version":"4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n","signature":"-4882119183-export {};\r\n","impliedFormat":1},{"version":"1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n","affectsGlobalScope":true,"impliedFormat":1},{"version":"-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n","signature":"-4882119183-export {};\r\n","impliedFormat":1},{"version":"-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1}],"options":{"cacheResolutions":true,"composite":true,"moduleResolution":3},"fileIdsList":[[2],[4]],"referencedMap":[[3,1],[5,2],[6,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,[3,[{"file":"./filewithimports.ts","start":124,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],[5,[{"file":"./filewithtyperefs.ts","start":162,"length":17,"messageText":"Cannot find name 'RequireInterface3'.","category":1,"code":2304}]],8,2,4,6,7],"latestChangedDtsFile":"./randomFileForTypeRef.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":2,"isExternalLibraryImport":true,"packageId":{"name":"pkg0","subModuleName":"import.d.ts","version":"0.0.1"}},"affectingLocations":[10]},{"resolvedTypeReferenceDirective":{"resolvedFileName":4,"packageId":{"name":"pkg2","subModuleName":"import.d.ts","version":"0.0.1"},"isExternalLibraryImport":true},"affectingLocations":[11]},{"resolvedTypeReferenceDirective":{"primary":true,"resolvedFileName":8,"isExternalLibraryImport":true}}],"names":["pkg0","pkg2","pkg4"],"hash":[[10,"9838425114-{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"],[11,"21696956444-{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"]],"resolutionEntries":[[1,1,99],[2,2,99],[3,3]],"modules":[[9,[1]]],"typeRefs":[[9,[2,3]]]}},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./node_modules/pkg0/import.d.ts",
      "./filewithimports.ts",
      "./node_modules/pkg2/import.d.ts",
      "./filewithtyperefs.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts",
      "./node_modules/@types/pkg4/index.d.ts",
      "./",
      "./node_modules/pkg0/package.json",
      "./node_modules/pkg2/package.json"
    ],
    "fileNamesList": [
      [
        "./node_modules/pkg0/import.d.ts"
      ],
      [
        "./node_modules/pkg2/import.d.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg0/import.d.ts": {
        "original": {
          "version": "769951468-export interface ImportInterface0 {}",
          "impliedFormat": 1
        },
        "version": "769951468-export interface ImportInterface0 {}",
        "signature": "769951468-export interface ImportInterface0 {}",
        "impliedFormat": "commonjs"
      },
      "./filewithimports.ts": {
        "original": {
          "version": "4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n",
          "signature": "-4882119183-export {};\r\n",
          "impliedFormat": 1
        },
        "version": "4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg2/import.d.ts": {
        "original": {
          "version": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "signature": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./filewithtyperefs.ts": {
        "original": {
          "version": "-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n",
          "signature": "-4882119183-export {};\r\n",
          "impliedFormat": 1
        },
        "version": "-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "commonjs"
      },
      "./randomfileforimport.ts": {
        "original": {
          "version": "-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;",
          "signature": "-6057683066-export declare const x = 10;\r\n",
          "impliedFormat": 1
        },
        "version": "-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./randomfilefortyperef.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6057683066-export declare const x = 10;\r\n",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/@types/pkg4/index.d.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "moduleResolution": 3
    },
    "referencedMap": {
      "./filewithimports.ts": [
        "./node_modules/pkg0/import.d.ts"
      ],
      "./filewithtyperefs.ts": [
        "./node_modules/pkg2/import.d.ts"
      ],
      "./randomfileforimport.ts": [
        "./node_modules/pkg0/import.d.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      [
        "./filewithimports.ts",
        [
          {
            "file": "./filewithimports.ts",
            "start": 124,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      [
        "./filewithtyperefs.ts",
        [
          {
            "file": "./filewithtyperefs.ts",
            "start": 162,
            "length": 17,
            "messageText": "Cannot find name 'RequireInterface3'.",
            "category": 1,
            "code": 2304
          }
        ]
      ],
      "./node_modules/@types/pkg4/index.d.ts",
      "./node_modules/pkg0/import.d.ts",
      "./node_modules/pkg2/import.d.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts"
    ],
    "latestChangedDtsFile": "./randomFileForTypeRef.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2,
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg0",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              }
            },
            "affectingLocations": [
              10
            ]
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/import.d.ts",
            "isExternalLibraryImport": true,
            "packageId": {
              "name": "pkg0",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            }
          },
          "affectingLocations": [
            "./node_modules/pkg0/package.json"
          ]
        },
        {
          "original": {
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": 4,
              "packageId": {
                "name": "pkg2",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "affectingLocations": [
              11
            ]
          },
          "resolutionId": 2,
          "resolvedTypeReferenceDirective": {
            "resolvedFileName": "./node_modules/pkg2/import.d.ts",
            "packageId": {
              "name": "pkg2",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            },
            "isExternalLibraryImport": true
          },
          "affectingLocations": [
            "./node_modules/pkg2/package.json"
          ]
        },
        {
          "original": {
            "resolvedTypeReferenceDirective": {
              "primary": true,
              "resolvedFileName": 8,
              "isExternalLibraryImport": true
            }
          },
          "resolutionId": 3,
          "resolvedTypeReferenceDirective": {
            "primary": true,
            "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
            "isExternalLibraryImport": true
          }
        }
      ],
      "names": [
        "pkg0",
        "pkg2",
        "pkg4"
      ],
      "hash": [
        [
          "./node_modules/pkg0/package.json",
          "9838425114-{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"
        ],
        [
          "./node_modules/pkg2/package.json",
          "21696956444-{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"
        ]
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1,
            99
          ],
          "resolutionEntryId": 1,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/import.d.ts",
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg0",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              }
            },
            "affectingLocations": [
              "./node_modules/pkg0/package.json"
            ]
          },
          "mode": "esnext"
        },
        {
          "original": [
            2,
            2,
            99
          ],
          "resolutionEntryId": 2,
          "name": "pkg2",
          "resolution": {
            "resolutionId": 2,
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": "./node_modules/pkg2/import.d.ts",
              "packageId": {
                "name": "pkg2",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "affectingLocations": [
              "./node_modules/pkg2/package.json"
            ]
          },
          "mode": "esnext"
        },
        {
          "original": [
            3,
            3
          ],
          "resolutionEntryId": 3,
          "name": "pkg4",
          "resolution": {
            "resolutionId": 3,
            "resolvedTypeReferenceDirective": {
              "primary": true,
              "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
              "isExternalLibraryImport": true
            }
          }
        }
      ],
      "modules": [
        {
          "dir": "./",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/import.d.ts",
                  "isExternalLibraryImport": true,
                  "packageId": {
                    "name": "pkg0",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  }
                },
                "affectingLocations": [
                  "./node_modules/pkg0/package.json"
                ]
              },
              "mode": "esnext"
            }
          ]
        }
      ],
      "typeRefs": [
        {
          "dir": "./",
          "resolutions": [
            {
              "resolutionEntryId": 2,
              "name": "pkg2",
              "resolution": {
                "resolutionId": 2,
                "resolvedTypeReferenceDirective": {
                  "resolvedFileName": "./node_modules/pkg2/import.d.ts",
                  "packageId": {
                    "name": "pkg2",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  },
                  "isExternalLibraryImport": true
                },
                "affectingLocations": [
                  "./node_modules/pkg2/package.json"
                ]
              },
              "mode": "esnext"
            },
            {
              "resolutionEntryId": 3,
              "name": "pkg4",
              "resolution": {
                "resolutionId": 3,
                "resolvedTypeReferenceDirective": {
                  "primary": true,
                  "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 3518
}



Change:: modify randomFileForTypeRef by adding typeRef
Input::
//// [/src/project/randomFileForTypeRef.ts]
/// <reference types="pkg2" resolution-mode="import"/>
export const x = 10;



Output::
/lib/tsc -p /src/project --explainFiles
File '/src/project/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
Reusing resolution of module 'pkg0' from '/src/project/fileWithImports.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'.
======== Resolving module 'pkg1' from '/src/project/fileWithImports.ts'. ========
Explicitly specified module resolution kind: 'Node16'.
Resolving in CJS mode with conditions 'node', 'require', 'types'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Found 'package.json' at '/src/project/node_modules/pkg1/package.json'.
Saw non-matching condition 'import'.
Matched 'exports' condition 'require'.
Using 'exports' subpath '.' with target './require.js'.
File name '/src/project/node_modules/pkg1/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg1/require.ts' does not exist.
File '/src/project/node_modules/pkg1/require.tsx' does not exist.
File '/src/project/node_modules/pkg1/require.d.ts' does not exist.
File '/src/project/node_modules/@types/pkg1.d.ts' does not exist.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
File '/src/project/node_modules/pkg1/package.json' exists according to earlier cached lookups.
Saw non-matching condition 'import'.
Matched 'exports' condition 'require'.
Using 'exports' subpath '.' with target './require.js'.
File name '/src/project/node_modules/pkg1/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg1/require.js' does not exist.
File '/src/project/node_modules/pkg1/require.jsx' does not exist.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Module name 'pkg1' was not resolved. ========
Found 'package.json' at '/src/project/node_modules/pkg0/package.json'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg2' from '/src/project/fileWithTypeRefs.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1'.
======== Resolving type reference directive 'pkg3', containing file '/src/project/fileWithTypeRefs.ts', root directory '/src/project/node_modules/@types'. ========
Resolving with primary search path '/src/project/node_modules/@types'.
Looking up in 'node_modules' folder, initial location '/src/project'.
Found 'package.json' at '/src/project/node_modules/pkg3/package.json'.
Saw non-matching condition 'import'.
Matched 'exports' condition 'require'.
Using 'exports' subpath '.' with target './require.js'.
File name '/src/project/node_modules/pkg3/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg3/require.d.ts' does not exist.
File '/src/project/node_modules/@types/pkg3.d.ts' does not exist.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Type reference directive 'pkg3' was not resolved. ========
Found 'package.json' at '/src/project/node_modules/pkg2/package.json'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of module 'pkg0' from '/src/project/randomFileForImport.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg2' from '/src/project/randomFileForTypeRef.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1'.
Reusing resolution of type reference directive 'pkg4' from '/src/project/__inferred type names__.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/@types/pkg4/index.d.ts'.
File '/src/project/node_modules/@types/pkg4/package.json' does not exist.
File '/src/project/node_modules/@types/package.json' does not exist.
File '/src/project/node_modules/package.json' does not exist.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
[96msrc/project/fileWithImports.ts[0m:[93m2[0m:[93m40[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg1' or its corresponding type declarations.

[7m2[0m import type { RequireInterface1 } from "pkg1" assert { "resolution-mode": "require" };
[7m [0m [91m                                       ~~~~~~[0m

[96msrc/project/fileWithTypeRefs.ts[0m:[93m2[0m:[93m23[0m - [91merror[0m[90m TS2688: [0mCannot find type definition file for 'pkg3'.

[7m2[0m /// <reference types="pkg3" resolution-mode="require"/>
[7m [0m [91m                      ~~~~[0m

[96msrc/project/fileWithTypeRefs.ts[0m:[93m3[0m:[93m52[0m - [91merror[0m[90m TS2304: [0mCannot find name 'RequireInterface3'.

[7m3[0m interface LocalInterface extends ImportInterface2, RequireInterface3 {}
[7m [0m [91m                                                   ~~~~~~~~~~~~~~~~~[0m

lib/lib.d.ts
  Default library for target 'es5'
src/project/node_modules/pkg0/import.d.ts
  Imported via "pkg0" from file 'src/project/fileWithImports.ts' with packageId 'pkg0/import.d.ts@0.0.1'
  Imported via "pkg0" from file 'src/project/randomFileForImport.ts' with packageId 'pkg0/import.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg0/package.json' does not have field "type"
src/project/fileWithImports.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/node_modules/pkg2/import.d.ts
  Type library referenced via 'pkg2' from file 'src/project/fileWithTypeRefs.ts' with packageId 'pkg2/import.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg2/package.json' does not have field "type"
src/project/fileWithTypeRefs.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/randomFileForImport.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/randomFileForTypeRef.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/node_modules/@types/pkg4/index.d.ts
  Entry point for implicit type library 'pkg4'
  File is CommonJS module because 'package.json' was not found

Found 3 errors in 2 files.

Errors  Files
     1  src/project/fileWithImports.ts[90m:2[0m
     2  src/project/fileWithTypeRefs.ts[90m:2[0m
exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
File: /src/project/node_modules/pkg0/import.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg0",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg0",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/fileWithImports.ts
resolvedModules:
pkg0: esnext: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/import.d.ts",
    "isExternalLibraryImport": true,
    "packageId": {
      "name": "pkg0",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "extension": ".d.ts"
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg0/package.json"
  ]
}
pkg1: commonjs: {
  "failedLookupLocations": [
    "/src/project/package.json",
    "/src/package.json",
    "/package.json",
    "/src/project/node_modules/pkg1/require.ts",
    "/src/project/node_modules/pkg1/require.tsx",
    "/src/project/node_modules/pkg1/require.d.ts",
    "/src/project/node_modules/@types/pkg1/package.json",
    "/src/project/node_modules/@types/pkg1.d.ts",
    "/src/project/node_modules/@types/pkg1/index.d.ts",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.ts",
    "/src/node_modules/pkg1.tsx",
    "/src/node_modules/pkg1.d.ts",
    "/src/node_modules/pkg1/index.ts",
    "/src/node_modules/pkg1/index.tsx",
    "/src/node_modules/pkg1/index.d.ts",
    "/src/node_modules/@types/pkg1/package.json",
    "/src/node_modules/@types/pkg1.d.ts",
    "/src/node_modules/@types/pkg1/index.d.ts",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.ts",
    "/node_modules/pkg1.tsx",
    "/node_modules/pkg1.d.ts",
    "/node_modules/pkg1/index.ts",
    "/node_modules/pkg1/index.tsx",
    "/node_modules/pkg1/index.d.ts",
    "/node_modules/@types/pkg1/package.json",
    "/node_modules/@types/pkg1.d.ts",
    "/node_modules/@types/pkg1/index.d.ts",
    "/src/project/node_modules/pkg1/require.js",
    "/src/project/node_modules/pkg1/require.jsx",
    "/src/node_modules/pkg1/package.json",
    "/src/node_modules/pkg1.js",
    "/src/node_modules/pkg1.jsx",
    "/src/node_modules/pkg1/index.js",
    "/src/node_modules/pkg1/index.jsx",
    "/node_modules/pkg1/package.json",
    "/node_modules/pkg1.js",
    "/node_modules/pkg1.jsx",
    "/node_modules/pkg1/index.js",
    "/node_modules/pkg1/index.jsx"
  ],
  "affectingLocations": [
    "/src/project/node_modules/pkg1/package.json",
    "/src/project/node_modules/pkg1/package.json"
  ]
}

File: /src/project/node_modules/pkg2/import.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg2",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg2",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/fileWithTypeRefs.ts
resolvedTypeReferenceDirectiveNames:
pkg2: esnext: {
  "resolvedTypeReferenceDirective": {
    "resolvedFileName": "/src/project/node_modules/pkg2/import.d.ts",
    "packageId": {
      "name": "pkg2",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "isExternalLibraryImport": true
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg2/package.json"
  ]
}
pkg3: commonjs: {
  "failedLookupLocations": [
    "/src/project/node_modules/@types/pkg3/package.json",
    "/src/project/node_modules/@types/pkg3/index.d.ts",
    "/src/project/node_modules/pkg3/require.d.ts",
    "/src/project/node_modules/@types/pkg3/package.json",
    "/src/project/node_modules/@types/pkg3.d.ts",
    "/src/project/node_modules/@types/pkg3/index.d.ts",
    "/src/node_modules/pkg3/package.json",
    "/src/node_modules/pkg3.d.ts",
    "/src/node_modules/pkg3/index.d.ts",
    "/src/node_modules/@types/pkg3/package.json",
    "/src/node_modules/@types/pkg3.d.ts",
    "/src/node_modules/@types/pkg3/index.d.ts",
    "/node_modules/pkg3/package.json",
    "/node_modules/pkg3.d.ts",
    "/node_modules/pkg3/index.d.ts",
    "/node_modules/@types/pkg3/package.json",
    "/node_modules/@types/pkg3.d.ts",
    "/node_modules/@types/pkg3/index.d.ts"
  ],
  "affectingLocations": [
    "/src/project/node_modules/pkg3/package.json"
  ]
}

File: /src/project/randomFileForImport.ts
resolvedModules:
pkg0: esnext: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/import.d.ts",
    "isExternalLibraryImport": true,
    "packageId": {
      "name": "pkg0",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "extension": ".d.ts"
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg0/package.json"
  ]
}

File: /src/project/randomFileForTypeRef.ts
resolvedTypeReferenceDirectiveNames:
pkg2: esnext: {
  "resolvedTypeReferenceDirective": {
    "resolvedFileName": "/src/project/node_modules/pkg2/import.d.ts",
    "packageId": {
      "name": "pkg2",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "isExternalLibraryImport": true
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg2/package.json"
  ]
}

automaticTypeDirectiveResolutions:
pkg4: {
  "resolvedTypeReferenceDirective": {
    "primary": true,
    "resolvedFileName": "/src/project/node_modules/@types/pkg4/index.d.ts",
    "isExternalLibraryImport": true
  }
}


//// [/src/project/randomFileForTypeRef.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
/// <reference types="pkg2" resolution-mode="import"/>
exports.x = 10;


//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./node_modules/pkg0/import.d.ts","./filewithimports.ts","./node_modules/pkg2/import.d.ts","./filewithtyperefs.ts","./randomfileforimport.ts","./randomfilefortyperef.ts","./node_modules/@types/pkg4/index.d.ts","./","./node_modules/pkg0/package.json","./node_modules/pkg2/package.json"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"769951468-export interface ImportInterface0 {}","impliedFormat":1},{"version":"4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n","signature":"-4882119183-export {};\r\n","impliedFormat":1},{"version":"1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n","affectsGlobalScope":true,"impliedFormat":1},{"version":"-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n","signature":"-4882119183-export {};\r\n","impliedFormat":1},{"version":"-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-8191038086-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\nexport const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1}],"options":{"cacheResolutions":true,"composite":true,"moduleResolution":3},"fileIdsList":[[2],[4]],"referencedMap":[[3,1],[5,2],[6,1],[7,2]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,[3,[{"file":"./filewithimports.ts","start":124,"length":6,"messageText":"Cannot find module 'pkg1' or its corresponding type declarations.","category":1,"code":2307}]],[5,[{"file":"./filewithtyperefs.ts","start":162,"length":17,"messageText":"Cannot find name 'RequireInterface3'.","category":1,"code":2304}]],8,2,4,6,7],"latestChangedDtsFile":"./randomFileForTypeRef.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":2,"isExternalLibraryImport":true,"packageId":{"name":"pkg0","subModuleName":"import.d.ts","version":"0.0.1"}},"affectingLocations":[10]},{"resolvedTypeReferenceDirective":{"resolvedFileName":4,"packageId":{"name":"pkg2","subModuleName":"import.d.ts","version":"0.0.1"},"isExternalLibraryImport":true},"affectingLocations":[11]},{"resolvedTypeReferenceDirective":{"primary":true,"resolvedFileName":8,"isExternalLibraryImport":true}}],"names":["pkg0","pkg2","pkg4"],"hash":[[10,"9838425114-{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"],[11,"21696956444-{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"]],"resolutionEntries":[[1,1,99],[2,2,99],[3,3]],"modules":[[9,[1]]],"typeRefs":[[9,[2,3]]]}},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./node_modules/pkg0/import.d.ts",
      "./filewithimports.ts",
      "./node_modules/pkg2/import.d.ts",
      "./filewithtyperefs.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts",
      "./node_modules/@types/pkg4/index.d.ts",
      "./",
      "./node_modules/pkg0/package.json",
      "./node_modules/pkg2/package.json"
    ],
    "fileNamesList": [
      [
        "./node_modules/pkg0/import.d.ts"
      ],
      [
        "./node_modules/pkg2/import.d.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg0/import.d.ts": {
        "original": {
          "version": "769951468-export interface ImportInterface0 {}",
          "impliedFormat": 1
        },
        "version": "769951468-export interface ImportInterface0 {}",
        "signature": "769951468-export interface ImportInterface0 {}",
        "impliedFormat": "commonjs"
      },
      "./filewithimports.ts": {
        "original": {
          "version": "4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n",
          "signature": "-4882119183-export {};\r\n",
          "impliedFormat": 1
        },
        "version": "4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg2/import.d.ts": {
        "original": {
          "version": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "signature": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./filewithtyperefs.ts": {
        "original": {
          "version": "-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n",
          "signature": "-4882119183-export {};\r\n",
          "impliedFormat": 1
        },
        "version": "-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "commonjs"
      },
      "./randomfileforimport.ts": {
        "original": {
          "version": "-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;",
          "signature": "-6057683066-export declare const x = 10;\r\n",
          "impliedFormat": 1
        },
        "version": "-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./randomfilefortyperef.ts": {
        "original": {
          "version": "-8191038086-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\nexport const x = 10;",
          "signature": "-6057683066-export declare const x = 10;\r\n",
          "impliedFormat": 1
        },
        "version": "-8191038086-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\nexport const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/@types/pkg4/index.d.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "moduleResolution": 3
    },
    "referencedMap": {
      "./filewithimports.ts": [
        "./node_modules/pkg0/import.d.ts"
      ],
      "./filewithtyperefs.ts": [
        "./node_modules/pkg2/import.d.ts"
      ],
      "./randomfileforimport.ts": [
        "./node_modules/pkg0/import.d.ts"
      ],
      "./randomfilefortyperef.ts": [
        "./node_modules/pkg2/import.d.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      [
        "./filewithimports.ts",
        [
          {
            "file": "./filewithimports.ts",
            "start": 124,
            "length": 6,
            "messageText": "Cannot find module 'pkg1' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      [
        "./filewithtyperefs.ts",
        [
          {
            "file": "./filewithtyperefs.ts",
            "start": 162,
            "length": 17,
            "messageText": "Cannot find name 'RequireInterface3'.",
            "category": 1,
            "code": 2304
          }
        ]
      ],
      "./node_modules/@types/pkg4/index.d.ts",
      "./node_modules/pkg0/import.d.ts",
      "./node_modules/pkg2/import.d.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts"
    ],
    "latestChangedDtsFile": "./randomFileForTypeRef.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2,
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg0",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              }
            },
            "affectingLocations": [
              10
            ]
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/import.d.ts",
            "isExternalLibraryImport": true,
            "packageId": {
              "name": "pkg0",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            }
          },
          "affectingLocations": [
            "./node_modules/pkg0/package.json"
          ]
        },
        {
          "original": {
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": 4,
              "packageId": {
                "name": "pkg2",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "affectingLocations": [
              11
            ]
          },
          "resolutionId": 2,
          "resolvedTypeReferenceDirective": {
            "resolvedFileName": "./node_modules/pkg2/import.d.ts",
            "packageId": {
              "name": "pkg2",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            },
            "isExternalLibraryImport": true
          },
          "affectingLocations": [
            "./node_modules/pkg2/package.json"
          ]
        },
        {
          "original": {
            "resolvedTypeReferenceDirective": {
              "primary": true,
              "resolvedFileName": 8,
              "isExternalLibraryImport": true
            }
          },
          "resolutionId": 3,
          "resolvedTypeReferenceDirective": {
            "primary": true,
            "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
            "isExternalLibraryImport": true
          }
        }
      ],
      "names": [
        "pkg0",
        "pkg2",
        "pkg4"
      ],
      "hash": [
        [
          "./node_modules/pkg0/package.json",
          "9838425114-{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"
        ],
        [
          "./node_modules/pkg2/package.json",
          "21696956444-{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"
        ]
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1,
            99
          ],
          "resolutionEntryId": 1,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/import.d.ts",
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg0",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              }
            },
            "affectingLocations": [
              "./node_modules/pkg0/package.json"
            ]
          },
          "mode": "esnext"
        },
        {
          "original": [
            2,
            2,
            99
          ],
          "resolutionEntryId": 2,
          "name": "pkg2",
          "resolution": {
            "resolutionId": 2,
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": "./node_modules/pkg2/import.d.ts",
              "packageId": {
                "name": "pkg2",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "affectingLocations": [
              "./node_modules/pkg2/package.json"
            ]
          },
          "mode": "esnext"
        },
        {
          "original": [
            3,
            3
          ],
          "resolutionEntryId": 3,
          "name": "pkg4",
          "resolution": {
            "resolutionId": 3,
            "resolvedTypeReferenceDirective": {
              "primary": true,
              "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
              "isExternalLibraryImport": true
            }
          }
        }
      ],
      "modules": [
        {
          "dir": "./",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/import.d.ts",
                  "isExternalLibraryImport": true,
                  "packageId": {
                    "name": "pkg0",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  }
                },
                "affectingLocations": [
                  "./node_modules/pkg0/package.json"
                ]
              },
              "mode": "esnext"
            }
          ]
        }
      ],
      "typeRefs": [
        {
          "dir": "./",
          "resolutions": [
            {
              "resolutionEntryId": 2,
              "name": "pkg2",
              "resolution": {
                "resolutionId": 2,
                "resolvedTypeReferenceDirective": {
                  "resolvedFileName": "./node_modules/pkg2/import.d.ts",
                  "packageId": {
                    "name": "pkg2",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  },
                  "isExternalLibraryImport": true
                },
                "affectingLocations": [
                  "./node_modules/pkg2/package.json"
                ]
              },
              "mode": "esnext"
            },
            {
              "resolutionEntryId": 3,
              "name": "pkg4",
              "resolution": {
                "resolutionId": 3,
                "resolvedTypeReferenceDirective": {
                  "primary": true,
                  "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 3583
}



Change:: write file not resolved by import
Input::
//// [/src/project/node_modules/pkg1/require.d.ts]
export interface RequireInterface1 {}



Output::
/lib/tsc -p /src/project --explainFiles
File '/src/project/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
Reusing resolution of module 'pkg0' from '/src/project/fileWithImports.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'.
======== Resolving module 'pkg1' from '/src/project/fileWithImports.ts'. ========
Explicitly specified module resolution kind: 'Node16'.
Resolving in CJS mode with conditions 'node', 'require', 'types'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Loading module 'pkg1' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Found 'package.json' at '/src/project/node_modules/pkg1/package.json'.
Saw non-matching condition 'import'.
Matched 'exports' condition 'require'.
Using 'exports' subpath '.' with target './require.js'.
File name '/src/project/node_modules/pkg1/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg1/require.ts' does not exist.
File '/src/project/node_modules/pkg1/require.tsx' does not exist.
File '/src/project/node_modules/pkg1/require.d.ts' exist - use it as a name resolution result.
Resolving real path for '/src/project/node_modules/pkg1/require.d.ts', result '/src/project/node_modules/pkg1/require.d.ts'.
======== Module name 'pkg1' was successfully resolved to '/src/project/node_modules/pkg1/require.d.ts' with Package ID 'pkg1/require.d.ts@0.0.1'. ========
Found 'package.json' at '/src/project/node_modules/pkg0/package.json'.
File '/src/project/node_modules/pkg1/package.json' exists according to earlier cached lookups.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg2' from '/src/project/fileWithTypeRefs.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1'.
======== Resolving type reference directive 'pkg3', containing file '/src/project/fileWithTypeRefs.ts', root directory '/src/project/node_modules/@types'. ========
Resolving with primary search path '/src/project/node_modules/@types'.
Looking up in 'node_modules' folder, initial location '/src/project'.
Found 'package.json' at '/src/project/node_modules/pkg3/package.json'.
Saw non-matching condition 'import'.
Matched 'exports' condition 'require'.
Using 'exports' subpath '.' with target './require.js'.
File name '/src/project/node_modules/pkg3/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg3/require.d.ts' does not exist.
File '/src/project/node_modules/@types/pkg3.d.ts' does not exist.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Type reference directive 'pkg3' was not resolved. ========
Found 'package.json' at '/src/project/node_modules/pkg2/package.json'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of module 'pkg0' from '/src/project/randomFileForImport.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg2' from '/src/project/randomFileForTypeRef.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1'.
Reusing resolution of type reference directive 'pkg4' from '/src/project/__inferred type names__.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/@types/pkg4/index.d.ts'.
File '/src/project/node_modules/@types/pkg4/package.json' does not exist.
File '/src/project/node_modules/@types/package.json' does not exist.
File '/src/project/node_modules/package.json' does not exist.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
[96msrc/project/fileWithTypeRefs.ts[0m:[93m2[0m:[93m23[0m - [91merror[0m[90m TS2688: [0mCannot find type definition file for 'pkg3'.

[7m2[0m /// <reference types="pkg3" resolution-mode="require"/>
[7m [0m [91m                      ~~~~[0m

[96msrc/project/fileWithTypeRefs.ts[0m:[93m3[0m:[93m52[0m - [91merror[0m[90m TS2304: [0mCannot find name 'RequireInterface3'.

[7m3[0m interface LocalInterface extends ImportInterface2, RequireInterface3 {}
[7m [0m [91m                                                   ~~~~~~~~~~~~~~~~~[0m

lib/lib.d.ts
  Default library for target 'es5'
src/project/node_modules/pkg0/import.d.ts
  Imported via "pkg0" from file 'src/project/fileWithImports.ts' with packageId 'pkg0/import.d.ts@0.0.1'
  Imported via "pkg0" from file 'src/project/randomFileForImport.ts' with packageId 'pkg0/import.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg0/package.json' does not have field "type"
src/project/node_modules/pkg1/require.d.ts
  Imported via "pkg1" from file 'src/project/fileWithImports.ts' with packageId 'pkg1/require.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg1/package.json' does not have field "type"
src/project/fileWithImports.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/node_modules/pkg2/import.d.ts
  Type library referenced via 'pkg2' from file 'src/project/fileWithTypeRefs.ts' with packageId 'pkg2/import.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg2/package.json' does not have field "type"
src/project/fileWithTypeRefs.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/randomFileForImport.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/randomFileForTypeRef.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/node_modules/@types/pkg4/index.d.ts
  Entry point for implicit type library 'pkg4'
  File is CommonJS module because 'package.json' was not found

Found 2 errors in the same file, starting at: src/project/fileWithTypeRefs.ts[90m:2[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
File: /src/project/node_modules/pkg0/import.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg0",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg0",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/node_modules/pkg1/require.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg1",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg1\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg1",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/fileWithImports.ts
resolvedModules:
pkg0: esnext: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/import.d.ts",
    "isExternalLibraryImport": true,
    "packageId": {
      "name": "pkg0",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "extension": ".d.ts"
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg0/package.json"
  ]
}
pkg1: commonjs: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg1/require.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true,
    "packageId": {
      "name": "pkg1",
      "subModuleName": "require.d.ts",
      "version": "0.0.1"
    }
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg1/package.json"
  ]
}

File: /src/project/node_modules/pkg2/import.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg2",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg2",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/fileWithTypeRefs.ts
resolvedTypeReferenceDirectiveNames:
pkg2: esnext: {
  "resolvedTypeReferenceDirective": {
    "resolvedFileName": "/src/project/node_modules/pkg2/import.d.ts",
    "packageId": {
      "name": "pkg2",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "isExternalLibraryImport": true
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg2/package.json"
  ]
}
pkg3: commonjs: {
  "failedLookupLocations": [
    "/src/project/node_modules/@types/pkg3/package.json",
    "/src/project/node_modules/@types/pkg3/index.d.ts",
    "/src/project/node_modules/pkg3/require.d.ts",
    "/src/project/node_modules/@types/pkg3/package.json",
    "/src/project/node_modules/@types/pkg3.d.ts",
    "/src/project/node_modules/@types/pkg3/index.d.ts",
    "/src/node_modules/pkg3/package.json",
    "/src/node_modules/pkg3.d.ts",
    "/src/node_modules/pkg3/index.d.ts",
    "/src/node_modules/@types/pkg3/package.json",
    "/src/node_modules/@types/pkg3.d.ts",
    "/src/node_modules/@types/pkg3/index.d.ts",
    "/node_modules/pkg3/package.json",
    "/node_modules/pkg3.d.ts",
    "/node_modules/pkg3/index.d.ts",
    "/node_modules/@types/pkg3/package.json",
    "/node_modules/@types/pkg3.d.ts",
    "/node_modules/@types/pkg3/index.d.ts"
  ],
  "affectingLocations": [
    "/src/project/node_modules/pkg3/package.json"
  ]
}

File: /src/project/randomFileForImport.ts
resolvedModules:
pkg0: esnext: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/import.d.ts",
    "isExternalLibraryImport": true,
    "packageId": {
      "name": "pkg0",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "extension": ".d.ts"
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg0/package.json"
  ]
}

File: /src/project/randomFileForTypeRef.ts
resolvedTypeReferenceDirectiveNames:
pkg2: esnext: {
  "resolvedTypeReferenceDirective": {
    "resolvedFileName": "/src/project/node_modules/pkg2/import.d.ts",
    "packageId": {
      "name": "pkg2",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "isExternalLibraryImport": true
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg2/package.json"
  ]
}

automaticTypeDirectiveResolutions:
pkg4: {
  "resolvedTypeReferenceDirective": {
    "primary": true,
    "resolvedFileName": "/src/project/node_modules/@types/pkg4/index.d.ts",
    "isExternalLibraryImport": true
  }
}


//// [/src/project/fileWithImports.js] file written with same contents
//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./node_modules/pkg0/import.d.ts","./node_modules/pkg1/require.d.ts","./filewithimports.ts","./node_modules/pkg2/import.d.ts","./filewithtyperefs.ts","./randomfileforimport.ts","./randomfilefortyperef.ts","./node_modules/@types/pkg4/index.d.ts","./","./node_modules/pkg0/package.json","./node_modules/pkg1/package.json","./node_modules/pkg2/package.json"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"769951468-export interface ImportInterface0 {}","impliedFormat":1},{"version":"-3547817137-export interface RequireInterface1 {}","impliedFormat":1},{"version":"4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n","signature":"-4882119183-export {};\r\n","impliedFormat":1},{"version":"1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n","affectsGlobalScope":true,"impliedFormat":1},{"version":"-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n","signature":"-4882119183-export {};\r\n","impliedFormat":1},{"version":"-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-8191038086-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\nexport const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1}],"options":{"cacheResolutions":true,"composite":true,"moduleResolution":3},"fileIdsList":[[2,3],[5],[2]],"referencedMap":[[4,1],[6,2],[7,3],[8,2]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,4,[6,[{"file":"./filewithtyperefs.ts","start":162,"length":17,"messageText":"Cannot find name 'RequireInterface3'.","category":1,"code":2304}]],9,2,3,5,7,8],"latestChangedDtsFile":"./randomFileForTypeRef.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":2,"isExternalLibraryImport":true,"packageId":{"name":"pkg0","subModuleName":"import.d.ts","version":"0.0.1"}},"affectingLocations":[11]},{"resolvedModule":{"resolvedFileName":3,"isExternalLibraryImport":true,"packageId":{"name":"pkg1","subModuleName":"require.d.ts","version":"0.0.1"}},"affectingLocations":[12]},{"resolvedTypeReferenceDirective":{"resolvedFileName":5,"packageId":{"name":"pkg2","subModuleName":"import.d.ts","version":"0.0.1"},"isExternalLibraryImport":true},"affectingLocations":[13]},{"resolvedTypeReferenceDirective":{"primary":true,"resolvedFileName":9,"isExternalLibraryImport":true}}],"names":["pkg0","pkg1","pkg2","pkg4"],"hash":[[11,"9838425114-{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"],[12,"-10002112997-{\"name\":\"pkg1\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"],[13,"21696956444-{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"]],"resolutionEntries":[[1,1,99],[2,2,1],[3,3,99],[4,4]],"modules":[[10,[1,2]]],"typeRefs":[[10,[3,4]]]}},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./node_modules/pkg0/import.d.ts",
      "./node_modules/pkg1/require.d.ts",
      "./filewithimports.ts",
      "./node_modules/pkg2/import.d.ts",
      "./filewithtyperefs.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts",
      "./node_modules/@types/pkg4/index.d.ts",
      "./",
      "./node_modules/pkg0/package.json",
      "./node_modules/pkg1/package.json",
      "./node_modules/pkg2/package.json"
    ],
    "fileNamesList": [
      [
        "./node_modules/pkg0/import.d.ts",
        "./node_modules/pkg1/require.d.ts"
      ],
      [
        "./node_modules/pkg2/import.d.ts"
      ],
      [
        "./node_modules/pkg0/import.d.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg0/import.d.ts": {
        "original": {
          "version": "769951468-export interface ImportInterface0 {}",
          "impliedFormat": 1
        },
        "version": "769951468-export interface ImportInterface0 {}",
        "signature": "769951468-export interface ImportInterface0 {}",
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg1/require.d.ts": {
        "original": {
          "version": "-3547817137-export interface RequireInterface1 {}",
          "impliedFormat": 1
        },
        "version": "-3547817137-export interface RequireInterface1 {}",
        "signature": "-3547817137-export interface RequireInterface1 {}",
        "impliedFormat": "commonjs"
      },
      "./filewithimports.ts": {
        "original": {
          "version": "4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n",
          "signature": "-4882119183-export {};\r\n",
          "impliedFormat": 1
        },
        "version": "4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg2/import.d.ts": {
        "original": {
          "version": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "signature": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./filewithtyperefs.ts": {
        "original": {
          "version": "-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n",
          "signature": "-4882119183-export {};\r\n",
          "impliedFormat": 1
        },
        "version": "-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "commonjs"
      },
      "./randomfileforimport.ts": {
        "original": {
          "version": "-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;",
          "signature": "-6057683066-export declare const x = 10;\r\n",
          "impliedFormat": 1
        },
        "version": "-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./randomfilefortyperef.ts": {
        "original": {
          "version": "-8191038086-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\nexport const x = 10;",
          "signature": "-6057683066-export declare const x = 10;\r\n",
          "impliedFormat": 1
        },
        "version": "-8191038086-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\nexport const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/@types/pkg4/index.d.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "moduleResolution": 3
    },
    "referencedMap": {
      "./filewithimports.ts": [
        "./node_modules/pkg0/import.d.ts",
        "./node_modules/pkg1/require.d.ts"
      ],
      "./filewithtyperefs.ts": [
        "./node_modules/pkg2/import.d.ts"
      ],
      "./randomfileforimport.ts": [
        "./node_modules/pkg0/import.d.ts"
      ],
      "./randomfilefortyperef.ts": [
        "./node_modules/pkg2/import.d.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./filewithimports.ts",
      [
        "./filewithtyperefs.ts",
        [
          {
            "file": "./filewithtyperefs.ts",
            "start": 162,
            "length": 17,
            "messageText": "Cannot find name 'RequireInterface3'.",
            "category": 1,
            "code": 2304
          }
        ]
      ],
      "./node_modules/@types/pkg4/index.d.ts",
      "./node_modules/pkg0/import.d.ts",
      "./node_modules/pkg1/require.d.ts",
      "./node_modules/pkg2/import.d.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts"
    ],
    "latestChangedDtsFile": "./randomFileForTypeRef.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2,
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg0",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              }
            },
            "affectingLocations": [
              11
            ]
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/import.d.ts",
            "isExternalLibraryImport": true,
            "packageId": {
              "name": "pkg0",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            }
          },
          "affectingLocations": [
            "./node_modules/pkg0/package.json"
          ]
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 3,
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg1",
                "subModuleName": "require.d.ts",
                "version": "0.0.1"
              }
            },
            "affectingLocations": [
              12
            ]
          },
          "resolutionId": 2,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg1/require.d.ts",
            "isExternalLibraryImport": true,
            "packageId": {
              "name": "pkg1",
              "subModuleName": "require.d.ts",
              "version": "0.0.1"
            }
          },
          "affectingLocations": [
            "./node_modules/pkg1/package.json"
          ]
        },
        {
          "original": {
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": 5,
              "packageId": {
                "name": "pkg2",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "affectingLocations": [
              13
            ]
          },
          "resolutionId": 3,
          "resolvedTypeReferenceDirective": {
            "resolvedFileName": "./node_modules/pkg2/import.d.ts",
            "packageId": {
              "name": "pkg2",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            },
            "isExternalLibraryImport": true
          },
          "affectingLocations": [
            "./node_modules/pkg2/package.json"
          ]
        },
        {
          "original": {
            "resolvedTypeReferenceDirective": {
              "primary": true,
              "resolvedFileName": 9,
              "isExternalLibraryImport": true
            }
          },
          "resolutionId": 4,
          "resolvedTypeReferenceDirective": {
            "primary": true,
            "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
            "isExternalLibraryImport": true
          }
        }
      ],
      "names": [
        "pkg0",
        "pkg1",
        "pkg2",
        "pkg4"
      ],
      "hash": [
        [
          "./node_modules/pkg0/package.json",
          "9838425114-{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"
        ],
        [
          "./node_modules/pkg1/package.json",
          "-10002112997-{\"name\":\"pkg1\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"
        ],
        [
          "./node_modules/pkg2/package.json",
          "21696956444-{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"
        ]
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1,
            99
          ],
          "resolutionEntryId": 1,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/import.d.ts",
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg0",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              }
            },
            "affectingLocations": [
              "./node_modules/pkg0/package.json"
            ]
          },
          "mode": "esnext"
        },
        {
          "original": [
            2,
            2,
            1
          ],
          "resolutionEntryId": 2,
          "name": "pkg1",
          "resolution": {
            "resolutionId": 2,
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg1/require.d.ts",
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg1",
                "subModuleName": "require.d.ts",
                "version": "0.0.1"
              }
            },
            "affectingLocations": [
              "./node_modules/pkg1/package.json"
            ]
          },
          "mode": "commonjs"
        },
        {
          "original": [
            3,
            3,
            99
          ],
          "resolutionEntryId": 3,
          "name": "pkg2",
          "resolution": {
            "resolutionId": 3,
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": "./node_modules/pkg2/import.d.ts",
              "packageId": {
                "name": "pkg2",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "affectingLocations": [
              "./node_modules/pkg2/package.json"
            ]
          },
          "mode": "esnext"
        },
        {
          "original": [
            4,
            4
          ],
          "resolutionEntryId": 4,
          "name": "pkg4",
          "resolution": {
            "resolutionId": 4,
            "resolvedTypeReferenceDirective": {
              "primary": true,
              "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
              "isExternalLibraryImport": true
            }
          }
        }
      ],
      "modules": [
        {
          "dir": "./",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/import.d.ts",
                  "isExternalLibraryImport": true,
                  "packageId": {
                    "name": "pkg0",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  }
                },
                "affectingLocations": [
                  "./node_modules/pkg0/package.json"
                ]
              },
              "mode": "esnext"
            },
            {
              "resolutionEntryId": 2,
              "name": "pkg1",
              "resolution": {
                "resolutionId": 2,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg1/require.d.ts",
                  "isExternalLibraryImport": true,
                  "packageId": {
                    "name": "pkg1",
                    "subModuleName": "require.d.ts",
                    "version": "0.0.1"
                  }
                },
                "affectingLocations": [
                  "./node_modules/pkg1/package.json"
                ]
              },
              "mode": "commonjs"
            }
          ]
        }
      ],
      "typeRefs": [
        {
          "dir": "./",
          "resolutions": [
            {
              "resolutionEntryId": 3,
              "name": "pkg2",
              "resolution": {
                "resolutionId": 3,
                "resolvedTypeReferenceDirective": {
                  "resolvedFileName": "./node_modules/pkg2/import.d.ts",
                  "packageId": {
                    "name": "pkg2",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  },
                  "isExternalLibraryImport": true
                },
                "affectingLocations": [
                  "./node_modules/pkg2/package.json"
                ]
              },
              "mode": "esnext"
            },
            {
              "resolutionEntryId": 4,
              "name": "pkg4",
              "resolution": {
                "resolutionId": 4,
                "resolvedTypeReferenceDirective": {
                  "primary": true,
                  "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 3904
}



Change:: write file not resolved by typeRef
Input::
//// [/src/project/node_modules/pkg3/require.d.ts]
export {};
declare global {
    interface RequireInterface3 {}
}




Output::
/lib/tsc -p /src/project --explainFiles
File '/src/project/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
Reusing resolution of module 'pkg0' from '/src/project/fileWithImports.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'.
Reusing resolution of module 'pkg1' from '/src/project/fileWithImports.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg1/require.d.ts' with Package ID 'pkg1/require.d.ts@0.0.1'.
Found 'package.json' at '/src/project/node_modules/pkg0/package.json'.
Found 'package.json' at '/src/project/node_modules/pkg1/package.json'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg2' from '/src/project/fileWithTypeRefs.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1'.
======== Resolving type reference directive 'pkg3', containing file '/src/project/fileWithTypeRefs.ts', root directory '/src/project/node_modules/@types'. ========
Resolving with primary search path '/src/project/node_modules/@types'.
Looking up in 'node_modules' folder, initial location '/src/project'.
Found 'package.json' at '/src/project/node_modules/pkg3/package.json'.
Saw non-matching condition 'import'.
Matched 'exports' condition 'require'.
Using 'exports' subpath '.' with target './require.js'.
File name '/src/project/node_modules/pkg3/require.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg3/require.d.ts' exist - use it as a name resolution result.
Resolving real path for '/src/project/node_modules/pkg3/require.d.ts', result '/src/project/node_modules/pkg3/require.d.ts'.
======== Type reference directive 'pkg3' was successfully resolved to '/src/project/node_modules/pkg3/require.d.ts' with Package ID 'pkg3/require.d.ts@0.0.1', primary: false. ========
Found 'package.json' at '/src/project/node_modules/pkg2/package.json'.
File '/src/project/node_modules/pkg3/package.json' exists according to earlier cached lookups.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of module 'pkg0' from '/src/project/randomFileForImport.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg2' from '/src/project/randomFileForTypeRef.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1'.
Reusing resolution of type reference directive 'pkg4' from '/src/project/__inferred type names__.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/@types/pkg4/index.d.ts'.
File '/src/project/node_modules/@types/pkg4/package.json' does not exist.
File '/src/project/node_modules/@types/package.json' does not exist.
File '/src/project/node_modules/package.json' does not exist.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
lib/lib.d.ts
  Default library for target 'es5'
src/project/node_modules/pkg0/import.d.ts
  Imported via "pkg0" from file 'src/project/fileWithImports.ts' with packageId 'pkg0/import.d.ts@0.0.1'
  Imported via "pkg0" from file 'src/project/randomFileForImport.ts' with packageId 'pkg0/import.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg0/package.json' does not have field "type"
src/project/node_modules/pkg1/require.d.ts
  Imported via "pkg1" from file 'src/project/fileWithImports.ts' with packageId 'pkg1/require.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg1/package.json' does not have field "type"
src/project/fileWithImports.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/node_modules/pkg2/import.d.ts
  Type library referenced via 'pkg2' from file 'src/project/fileWithTypeRefs.ts' with packageId 'pkg2/import.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg2/package.json' does not have field "type"
src/project/node_modules/pkg3/require.d.ts
  Type library referenced via 'pkg3' from file 'src/project/fileWithTypeRefs.ts' with packageId 'pkg3/require.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg3/package.json' does not have field "type"
src/project/fileWithTypeRefs.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/randomFileForImport.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/randomFileForTypeRef.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/node_modules/@types/pkg4/index.d.ts
  Entry point for implicit type library 'pkg4'
  File is CommonJS module because 'package.json' was not found
exitCode:: ExitStatus.Success
File: /src/project/node_modules/pkg0/import.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg0",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg0",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/node_modules/pkg1/require.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg1",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg1\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg1",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/fileWithImports.ts
resolvedModules:
pkg0: esnext: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/import.d.ts",
    "isExternalLibraryImport": true,
    "packageId": {
      "name": "pkg0",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "extension": ".d.ts"
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg0/package.json"
  ]
}
pkg1: commonjs: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg1/require.d.ts",
    "isExternalLibraryImport": true,
    "packageId": {
      "name": "pkg1",
      "subModuleName": "require.d.ts",
      "version": "0.0.1"
    },
    "extension": ".d.ts"
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg1/package.json"
  ]
}

File: /src/project/node_modules/pkg2/import.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg2",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg2",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/node_modules/pkg3/require.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg3",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg3\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg3",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/fileWithTypeRefs.ts
resolvedTypeReferenceDirectiveNames:
pkg2: esnext: {
  "resolvedTypeReferenceDirective": {
    "resolvedFileName": "/src/project/node_modules/pkg2/import.d.ts",
    "packageId": {
      "name": "pkg2",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "isExternalLibraryImport": true
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg2/package.json"
  ]
}
pkg3: commonjs: {
  "resolvedTypeReferenceDirective": {
    "primary": false,
    "resolvedFileName": "/src/project/node_modules/pkg3/require.d.ts",
    "packageId": {
      "name": "pkg3",
      "subModuleName": "require.d.ts",
      "version": "0.0.1"
    },
    "isExternalLibraryImport": true
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg3/package.json"
  ]
}

File: /src/project/randomFileForImport.ts
resolvedModules:
pkg0: esnext: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/import.d.ts",
    "isExternalLibraryImport": true,
    "packageId": {
      "name": "pkg0",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "extension": ".d.ts"
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg0/package.json"
  ]
}

File: /src/project/randomFileForTypeRef.ts
resolvedTypeReferenceDirectiveNames:
pkg2: esnext: {
  "resolvedTypeReferenceDirective": {
    "resolvedFileName": "/src/project/node_modules/pkg2/import.d.ts",
    "packageId": {
      "name": "pkg2",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "isExternalLibraryImport": true
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg2/package.json"
  ]
}

automaticTypeDirectiveResolutions:
pkg4: {
  "resolvedTypeReferenceDirective": {
    "primary": true,
    "resolvedFileName": "/src/project/node_modules/@types/pkg4/index.d.ts",
    "isExternalLibraryImport": true
  }
}


//// [/src/project/fileWithImports.js] file written with same contents
//// [/src/project/fileWithTypeRefs.js] file written with same contents
//// [/src/project/randomFileForImport.js] file written with same contents
//// [/src/project/randomFileForTypeRef.js] file written with same contents
//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./node_modules/pkg0/import.d.ts","./node_modules/pkg1/require.d.ts","./filewithimports.ts","./node_modules/pkg2/import.d.ts","./node_modules/pkg3/require.d.ts","./filewithtyperefs.ts","./randomfileforimport.ts","./randomfilefortyperef.ts","./node_modules/@types/pkg4/index.d.ts","./","./node_modules/pkg0/package.json","./node_modules/pkg1/package.json","./node_modules/pkg2/package.json","./node_modules/pkg3/package.json"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"769951468-export interface ImportInterface0 {}","impliedFormat":1},{"version":"-3547817137-export interface RequireInterface1 {}","impliedFormat":1},{"version":"4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n","signature":"-4882119183-export {};\r\n","impliedFormat":1},{"version":"1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n","affectsGlobalScope":true,"impliedFormat":1},{"version":"-6568745979-export {};\ndeclare global {\n    interface RequireInterface3 {}\n}\n","affectsGlobalScope":true,"impliedFormat":1},{"version":"-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n","signature":"-4882119183-export {};\r\n","impliedFormat":1},{"version":"-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-8191038086-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\nexport const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1}],"options":{"cacheResolutions":true,"composite":true,"moduleResolution":3},"fileIdsList":[[2,3],[5,6],[2],[5]],"referencedMap":[[4,1],[7,2],[8,3],[9,4]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,4,7,10,2,3,5,6,8,9],"latestChangedDtsFile":"./randomFileForTypeRef.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":2,"isExternalLibraryImport":true,"packageId":{"name":"pkg0","subModuleName":"import.d.ts","version":"0.0.1"}},"affectingLocations":[12]},{"resolvedModule":{"resolvedFileName":3,"isExternalLibraryImport":true,"packageId":{"name":"pkg1","subModuleName":"require.d.ts","version":"0.0.1"}},"affectingLocations":[13]},{"resolvedTypeReferenceDirective":{"resolvedFileName":5,"packageId":{"name":"pkg2","subModuleName":"import.d.ts","version":"0.0.1"},"isExternalLibraryImport":true},"affectingLocations":[14]},{"resolvedTypeReferenceDirective":{"resolvedFileName":6,"packageId":{"name":"pkg3","subModuleName":"require.d.ts","version":"0.0.1"},"isExternalLibraryImport":true},"affectingLocations":[15]},{"resolvedTypeReferenceDirective":{"primary":true,"resolvedFileName":10,"isExternalLibraryImport":true}}],"names":["pkg0","pkg1","pkg2","pkg3","pkg4"],"hash":[[12,"9838425114-{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"],[13,"-10002112997-{\"name\":\"pkg1\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"],[14,"21696956444-{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"],[15,"1856418333-{\"name\":\"pkg3\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"]],"resolutionEntries":[[1,1,99],[2,2,1],[3,3,99],[4,4,1],[5,5]],"modules":[[11,[1,2]]],"typeRefs":[[11,[3,4,5]]]}},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./node_modules/pkg0/import.d.ts",
      "./node_modules/pkg1/require.d.ts",
      "./filewithimports.ts",
      "./node_modules/pkg2/import.d.ts",
      "./node_modules/pkg3/require.d.ts",
      "./filewithtyperefs.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts",
      "./node_modules/@types/pkg4/index.d.ts",
      "./",
      "./node_modules/pkg0/package.json",
      "./node_modules/pkg1/package.json",
      "./node_modules/pkg2/package.json",
      "./node_modules/pkg3/package.json"
    ],
    "fileNamesList": [
      [
        "./node_modules/pkg0/import.d.ts",
        "./node_modules/pkg1/require.d.ts"
      ],
      [
        "./node_modules/pkg2/import.d.ts",
        "./node_modules/pkg3/require.d.ts"
      ],
      [
        "./node_modules/pkg0/import.d.ts"
      ],
      [
        "./node_modules/pkg2/import.d.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg0/import.d.ts": {
        "original": {
          "version": "769951468-export interface ImportInterface0 {}",
          "impliedFormat": 1
        },
        "version": "769951468-export interface ImportInterface0 {}",
        "signature": "769951468-export interface ImportInterface0 {}",
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg1/require.d.ts": {
        "original": {
          "version": "-3547817137-export interface RequireInterface1 {}",
          "impliedFormat": 1
        },
        "version": "-3547817137-export interface RequireInterface1 {}",
        "signature": "-3547817137-export interface RequireInterface1 {}",
        "impliedFormat": "commonjs"
      },
      "./filewithimports.ts": {
        "original": {
          "version": "4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n",
          "signature": "-4882119183-export {};\r\n",
          "impliedFormat": 1
        },
        "version": "4079531109-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nimport type { RequireInterface1 } from \"pkg1\" assert { \"resolution-mode\": \"require\" };\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg2/import.d.ts": {
        "original": {
          "version": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "signature": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg3/require.d.ts": {
        "original": {
          "version": "-6568745979-export {};\ndeclare global {\n    interface RequireInterface3 {}\n}\n",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "-6568745979-export {};\ndeclare global {\n    interface RequireInterface3 {}\n}\n",
        "signature": "-6568745979-export {};\ndeclare global {\n    interface RequireInterface3 {}\n}\n",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./filewithtyperefs.ts": {
        "original": {
          "version": "-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n",
          "signature": "-4882119183-export {};\r\n",
          "impliedFormat": 1
        },
        "version": "-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "commonjs"
      },
      "./randomfileforimport.ts": {
        "original": {
          "version": "-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;",
          "signature": "-6057683066-export declare const x = 10;\r\n",
          "impliedFormat": 1
        },
        "version": "-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./randomfilefortyperef.ts": {
        "original": {
          "version": "-8191038086-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\nexport const x = 10;",
          "signature": "-6057683066-export declare const x = 10;\r\n",
          "impliedFormat": 1
        },
        "version": "-8191038086-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\nexport const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/@types/pkg4/index.d.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "moduleResolution": 3
    },
    "referencedMap": {
      "./filewithimports.ts": [
        "./node_modules/pkg0/import.d.ts",
        "./node_modules/pkg1/require.d.ts"
      ],
      "./filewithtyperefs.ts": [
        "./node_modules/pkg2/import.d.ts",
        "./node_modules/pkg3/require.d.ts"
      ],
      "./randomfileforimport.ts": [
        "./node_modules/pkg0/import.d.ts"
      ],
      "./randomfilefortyperef.ts": [
        "./node_modules/pkg2/import.d.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./filewithimports.ts",
      "./filewithtyperefs.ts",
      "./node_modules/@types/pkg4/index.d.ts",
      "./node_modules/pkg0/import.d.ts",
      "./node_modules/pkg1/require.d.ts",
      "./node_modules/pkg2/import.d.ts",
      "./node_modules/pkg3/require.d.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts"
    ],
    "latestChangedDtsFile": "./randomFileForTypeRef.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2,
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg0",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              }
            },
            "affectingLocations": [
              12
            ]
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/import.d.ts",
            "isExternalLibraryImport": true,
            "packageId": {
              "name": "pkg0",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            }
          },
          "affectingLocations": [
            "./node_modules/pkg0/package.json"
          ]
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 3,
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg1",
                "subModuleName": "require.d.ts",
                "version": "0.0.1"
              }
            },
            "affectingLocations": [
              13
            ]
          },
          "resolutionId": 2,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg1/require.d.ts",
            "isExternalLibraryImport": true,
            "packageId": {
              "name": "pkg1",
              "subModuleName": "require.d.ts",
              "version": "0.0.1"
            }
          },
          "affectingLocations": [
            "./node_modules/pkg1/package.json"
          ]
        },
        {
          "original": {
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": 5,
              "packageId": {
                "name": "pkg2",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "affectingLocations": [
              14
            ]
          },
          "resolutionId": 3,
          "resolvedTypeReferenceDirective": {
            "resolvedFileName": "./node_modules/pkg2/import.d.ts",
            "packageId": {
              "name": "pkg2",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            },
            "isExternalLibraryImport": true
          },
          "affectingLocations": [
            "./node_modules/pkg2/package.json"
          ]
        },
        {
          "original": {
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": 6,
              "packageId": {
                "name": "pkg3",
                "subModuleName": "require.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "affectingLocations": [
              15
            ]
          },
          "resolutionId": 4,
          "resolvedTypeReferenceDirective": {
            "resolvedFileName": "./node_modules/pkg3/require.d.ts",
            "packageId": {
              "name": "pkg3",
              "subModuleName": "require.d.ts",
              "version": "0.0.1"
            },
            "isExternalLibraryImport": true
          },
          "affectingLocations": [
            "./node_modules/pkg3/package.json"
          ]
        },
        {
          "original": {
            "resolvedTypeReferenceDirective": {
              "primary": true,
              "resolvedFileName": 10,
              "isExternalLibraryImport": true
            }
          },
          "resolutionId": 5,
          "resolvedTypeReferenceDirective": {
            "primary": true,
            "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
            "isExternalLibraryImport": true
          }
        }
      ],
      "names": [
        "pkg0",
        "pkg1",
        "pkg2",
        "pkg3",
        "pkg4"
      ],
      "hash": [
        [
          "./node_modules/pkg0/package.json",
          "9838425114-{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"
        ],
        [
          "./node_modules/pkg1/package.json",
          "-10002112997-{\"name\":\"pkg1\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"
        ],
        [
          "./node_modules/pkg2/package.json",
          "21696956444-{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"
        ],
        [
          "./node_modules/pkg3/package.json",
          "1856418333-{\"name\":\"pkg3\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"
        ]
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1,
            99
          ],
          "resolutionEntryId": 1,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/import.d.ts",
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg0",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              }
            },
            "affectingLocations": [
              "./node_modules/pkg0/package.json"
            ]
          },
          "mode": "esnext"
        },
        {
          "original": [
            2,
            2,
            1
          ],
          "resolutionEntryId": 2,
          "name": "pkg1",
          "resolution": {
            "resolutionId": 2,
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg1/require.d.ts",
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg1",
                "subModuleName": "require.d.ts",
                "version": "0.0.1"
              }
            },
            "affectingLocations": [
              "./node_modules/pkg1/package.json"
            ]
          },
          "mode": "commonjs"
        },
        {
          "original": [
            3,
            3,
            99
          ],
          "resolutionEntryId": 3,
          "name": "pkg2",
          "resolution": {
            "resolutionId": 3,
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": "./node_modules/pkg2/import.d.ts",
              "packageId": {
                "name": "pkg2",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "affectingLocations": [
              "./node_modules/pkg2/package.json"
            ]
          },
          "mode": "esnext"
        },
        {
          "original": [
            4,
            4,
            1
          ],
          "resolutionEntryId": 4,
          "name": "pkg3",
          "resolution": {
            "resolutionId": 4,
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": "./node_modules/pkg3/require.d.ts",
              "packageId": {
                "name": "pkg3",
                "subModuleName": "require.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "affectingLocations": [
              "./node_modules/pkg3/package.json"
            ]
          },
          "mode": "commonjs"
        },
        {
          "original": [
            5,
            5
          ],
          "resolutionEntryId": 5,
          "name": "pkg4",
          "resolution": {
            "resolutionId": 5,
            "resolvedTypeReferenceDirective": {
              "primary": true,
              "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
              "isExternalLibraryImport": true
            }
          }
        }
      ],
      "modules": [
        {
          "dir": "./",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/import.d.ts",
                  "isExternalLibraryImport": true,
                  "packageId": {
                    "name": "pkg0",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  }
                },
                "affectingLocations": [
                  "./node_modules/pkg0/package.json"
                ]
              },
              "mode": "esnext"
            },
            {
              "resolutionEntryId": 2,
              "name": "pkg1",
              "resolution": {
                "resolutionId": 2,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg1/require.d.ts",
                  "isExternalLibraryImport": true,
                  "packageId": {
                    "name": "pkg1",
                    "subModuleName": "require.d.ts",
                    "version": "0.0.1"
                  }
                },
                "affectingLocations": [
                  "./node_modules/pkg1/package.json"
                ]
              },
              "mode": "commonjs"
            }
          ]
        }
      ],
      "typeRefs": [
        {
          "dir": "./",
          "resolutions": [
            {
              "resolutionEntryId": 3,
              "name": "pkg2",
              "resolution": {
                "resolutionId": 3,
                "resolvedTypeReferenceDirective": {
                  "resolvedFileName": "./node_modules/pkg2/import.d.ts",
                  "packageId": {
                    "name": "pkg2",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  },
                  "isExternalLibraryImport": true
                },
                "affectingLocations": [
                  "./node_modules/pkg2/package.json"
                ]
              },
              "mode": "esnext"
            },
            {
              "resolutionEntryId": 4,
              "name": "pkg3",
              "resolution": {
                "resolutionId": 4,
                "resolvedTypeReferenceDirective": {
                  "resolvedFileName": "./node_modules/pkg3/require.d.ts",
                  "packageId": {
                    "name": "pkg3",
                    "subModuleName": "require.d.ts",
                    "version": "0.0.1"
                  },
                  "isExternalLibraryImport": true
                },
                "affectingLocations": [
                  "./node_modules/pkg3/package.json"
                ]
              },
              "mode": "commonjs"
            },
            {
              "resolutionEntryId": 5,
              "name": "pkg4",
              "resolution": {
                "resolutionId": 5,
                "resolvedTypeReferenceDirective": {
                  "primary": true,
                  "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 4323
}



Change:: modify package.json and that should re-resolve
Input::
//// [/src/project/node_modules/pkg1/package.json]
{"name":"pkg1","version":"0.0.1","exports":{"import":"./import.js","require":"./require1.js"}}



Output::
/lib/tsc -p /src/project --explainFiles
File '/src/project/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
Reusing resolution of module 'pkg0' from '/src/project/fileWithImports.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'.
Reusing resolution of module 'pkg1' from '/src/project/fileWithImports.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg1/require.d.ts' with Package ID 'pkg1/require.d.ts@0.0.1'.
Found 'package.json' at '/src/project/node_modules/pkg0/package.json'.
Found 'package.json' at '/src/project/node_modules/pkg1/package.json'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg2' from '/src/project/fileWithTypeRefs.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1'.
Reusing resolution of type reference directive 'pkg3' from '/src/project/fileWithTypeRefs.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg3/require.d.ts' with Package ID 'pkg3/require.d.ts@0.0.1'.
Found 'package.json' at '/src/project/node_modules/pkg2/package.json'.
Found 'package.json' at '/src/project/node_modules/pkg3/package.json'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of module 'pkg0' from '/src/project/randomFileForImport.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg2' from '/src/project/randomFileForTypeRef.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1'.
Reusing resolution of type reference directive 'pkg4' from '/src/project/__inferred type names__.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/@types/pkg4/index.d.ts'.
File '/src/project/node_modules/@types/pkg4/package.json' does not exist.
File '/src/project/node_modules/@types/package.json' does not exist.
File '/src/project/node_modules/package.json' does not exist.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
lib/lib.d.ts
  Default library for target 'es5'
src/project/node_modules/pkg0/import.d.ts
  Imported via "pkg0" from file 'src/project/fileWithImports.ts' with packageId 'pkg0/import.d.ts@0.0.1'
  Imported via "pkg0" from file 'src/project/randomFileForImport.ts' with packageId 'pkg0/import.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg0/package.json' does not have field "type"
src/project/node_modules/pkg1/require.d.ts
  Imported via "pkg1" from file 'src/project/fileWithImports.ts' with packageId 'pkg1/require.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg1/package.json' does not have field "type"
src/project/fileWithImports.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/node_modules/pkg2/import.d.ts
  Type library referenced via 'pkg2' from file 'src/project/fileWithTypeRefs.ts' with packageId 'pkg2/import.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg2/package.json' does not have field "type"
src/project/node_modules/pkg3/require.d.ts
  Type library referenced via 'pkg3' from file 'src/project/fileWithTypeRefs.ts' with packageId 'pkg3/require.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg3/package.json' does not have field "type"
src/project/fileWithTypeRefs.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/randomFileForImport.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/randomFileForTypeRef.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/node_modules/@types/pkg4/index.d.ts
  Entry point for implicit type library 'pkg4'
  File is CommonJS module because 'package.json' was not found
exitCode:: ExitStatus.Success
File: /src/project/node_modules/pkg0/import.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg0",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg0",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/node_modules/pkg1/require.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg1",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg1\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require1.js\"}}",
    "packageJsonContent": {
      "name": "pkg1",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require1.js"
      }
    }
  }
}

File: /src/project/fileWithImports.ts
resolvedModules:
pkg0: esnext: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/import.d.ts",
    "isExternalLibraryImport": true,
    "packageId": {
      "name": "pkg0",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "extension": ".d.ts"
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg0/package.json"
  ]
}
pkg1: commonjs: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg1/require.d.ts",
    "isExternalLibraryImport": true,
    "packageId": {
      "name": "pkg1",
      "subModuleName": "require.d.ts",
      "version": "0.0.1"
    },
    "extension": ".d.ts"
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg1/package.json"
  ]
}

File: /src/project/node_modules/pkg2/import.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg2",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg2",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/node_modules/pkg3/require.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg3",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg3\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg3",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/fileWithTypeRefs.ts
resolvedTypeReferenceDirectiveNames:
pkg2: esnext: {
  "resolvedTypeReferenceDirective": {
    "resolvedFileName": "/src/project/node_modules/pkg2/import.d.ts",
    "packageId": {
      "name": "pkg2",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "isExternalLibraryImport": true
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg2/package.json"
  ]
}
pkg3: commonjs: {
  "resolvedTypeReferenceDirective": {
    "resolvedFileName": "/src/project/node_modules/pkg3/require.d.ts",
    "packageId": {
      "name": "pkg3",
      "subModuleName": "require.d.ts",
      "version": "0.0.1"
    },
    "isExternalLibraryImport": true
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg3/package.json"
  ]
}

File: /src/project/randomFileForImport.ts
resolvedModules:
pkg0: esnext: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/import.d.ts",
    "isExternalLibraryImport": true,
    "packageId": {
      "name": "pkg0",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "extension": ".d.ts"
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg0/package.json"
  ]
}

File: /src/project/randomFileForTypeRef.ts
resolvedTypeReferenceDirectiveNames:
pkg2: esnext: {
  "resolvedTypeReferenceDirective": {
    "resolvedFileName": "/src/project/node_modules/pkg2/import.d.ts",
    "packageId": {
      "name": "pkg2",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "isExternalLibraryImport": true
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg2/package.json"
  ]
}

automaticTypeDirectiveResolutions:
pkg4: {
  "resolvedTypeReferenceDirective": {
    "primary": true,
    "resolvedFileName": "/src/project/node_modules/@types/pkg4/index.d.ts",
    "isExternalLibraryImport": true
  }
}




Change:: write file not resolved by import
Input::
//// [/src/project/node_modules/pkg1/require1.d.ts]
export interface RequireInterface1 {}



Output::
/lib/tsc -p /src/project --explainFiles
File '/src/project/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
Reusing resolution of module 'pkg0' from '/src/project/fileWithImports.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'.
Reusing resolution of module 'pkg1' from '/src/project/fileWithImports.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg1/require.d.ts' with Package ID 'pkg1/require.d.ts@0.0.1'.
Found 'package.json' at '/src/project/node_modules/pkg0/package.json'.
Found 'package.json' at '/src/project/node_modules/pkg1/package.json'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg2' from '/src/project/fileWithTypeRefs.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1'.
Reusing resolution of type reference directive 'pkg3' from '/src/project/fileWithTypeRefs.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg3/require.d.ts' with Package ID 'pkg3/require.d.ts@0.0.1'.
Found 'package.json' at '/src/project/node_modules/pkg2/package.json'.
Found 'package.json' at '/src/project/node_modules/pkg3/package.json'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of module 'pkg0' from '/src/project/randomFileForImport.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg2' from '/src/project/randomFileForTypeRef.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1'.
Reusing resolution of type reference directive 'pkg4' from '/src/project/__inferred type names__.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/@types/pkg4/index.d.ts'.
File '/src/project/node_modules/@types/pkg4/package.json' does not exist.
File '/src/project/node_modules/@types/package.json' does not exist.
File '/src/project/node_modules/package.json' does not exist.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
lib/lib.d.ts
  Default library for target 'es5'
src/project/node_modules/pkg0/import.d.ts
  Imported via "pkg0" from file 'src/project/fileWithImports.ts' with packageId 'pkg0/import.d.ts@0.0.1'
  Imported via "pkg0" from file 'src/project/randomFileForImport.ts' with packageId 'pkg0/import.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg0/package.json' does not have field "type"
src/project/node_modules/pkg1/require.d.ts
  Imported via "pkg1" from file 'src/project/fileWithImports.ts' with packageId 'pkg1/require.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg1/package.json' does not have field "type"
src/project/fileWithImports.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/node_modules/pkg2/import.d.ts
  Type library referenced via 'pkg2' from file 'src/project/fileWithTypeRefs.ts' with packageId 'pkg2/import.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg2/package.json' does not have field "type"
src/project/node_modules/pkg3/require.d.ts
  Type library referenced via 'pkg3' from file 'src/project/fileWithTypeRefs.ts' with packageId 'pkg3/require.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg3/package.json' does not have field "type"
src/project/fileWithTypeRefs.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/randomFileForImport.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/randomFileForTypeRef.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/node_modules/@types/pkg4/index.d.ts
  Entry point for implicit type library 'pkg4'
  File is CommonJS module because 'package.json' was not found
exitCode:: ExitStatus.Success
File: /src/project/node_modules/pkg0/import.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg0",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg0",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/node_modules/pkg1/require.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg1",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg1\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require1.js\"}}",
    "packageJsonContent": {
      "name": "pkg1",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require1.js"
      }
    }
  }
}

File: /src/project/fileWithImports.ts
resolvedModules:
pkg0: esnext: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/import.d.ts",
    "isExternalLibraryImport": true,
    "packageId": {
      "name": "pkg0",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "extension": ".d.ts"
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg0/package.json"
  ]
}
pkg1: commonjs: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg1/require.d.ts",
    "isExternalLibraryImport": true,
    "packageId": {
      "name": "pkg1",
      "subModuleName": "require.d.ts",
      "version": "0.0.1"
    },
    "extension": ".d.ts"
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg1/package.json"
  ]
}

File: /src/project/node_modules/pkg2/import.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg2",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg2",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/node_modules/pkg3/require.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg3",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg3\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg3",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/fileWithTypeRefs.ts
resolvedTypeReferenceDirectiveNames:
pkg2: esnext: {
  "resolvedTypeReferenceDirective": {
    "resolvedFileName": "/src/project/node_modules/pkg2/import.d.ts",
    "packageId": {
      "name": "pkg2",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "isExternalLibraryImport": true
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg2/package.json"
  ]
}
pkg3: commonjs: {
  "resolvedTypeReferenceDirective": {
    "resolvedFileName": "/src/project/node_modules/pkg3/require.d.ts",
    "packageId": {
      "name": "pkg3",
      "subModuleName": "require.d.ts",
      "version": "0.0.1"
    },
    "isExternalLibraryImport": true
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg3/package.json"
  ]
}

File: /src/project/randomFileForImport.ts
resolvedModules:
pkg0: esnext: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/import.d.ts",
    "isExternalLibraryImport": true,
    "packageId": {
      "name": "pkg0",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "extension": ".d.ts"
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg0/package.json"
  ]
}

File: /src/project/randomFileForTypeRef.ts
resolvedTypeReferenceDirectiveNames:
pkg2: esnext: {
  "resolvedTypeReferenceDirective": {
    "resolvedFileName": "/src/project/node_modules/pkg2/import.d.ts",
    "packageId": {
      "name": "pkg2",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "isExternalLibraryImport": true
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg2/package.json"
  ]
}

automaticTypeDirectiveResolutions:
pkg4: {
  "resolvedTypeReferenceDirective": {
    "primary": true,
    "resolvedFileName": "/src/project/node_modules/@types/pkg4/index.d.ts",
    "isExternalLibraryImport": true
  }
}




Change:: delete file with imports
Input::
//// [/src/project/fileWithImports.ts] unlink


Output::
/lib/tsc -p /src/project --explainFiles
File '/src/project/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
Reusing resolution of type reference directive 'pkg2' from '/src/project/fileWithTypeRefs.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1'.
Reusing resolution of type reference directive 'pkg3' from '/src/project/fileWithTypeRefs.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg3/require.d.ts' with Package ID 'pkg3/require.d.ts@0.0.1'.
Found 'package.json' at '/src/project/node_modules/pkg2/package.json'.
Found 'package.json' at '/src/project/node_modules/pkg3/package.json'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of module 'pkg0' from '/src/project/randomFileForImport.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'.
Found 'package.json' at '/src/project/node_modules/pkg0/package.json'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg2' from '/src/project/randomFileForTypeRef.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1'.
Reusing resolution of type reference directive 'pkg4' from '/src/project/__inferred type names__.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/@types/pkg4/index.d.ts'.
File '/src/project/node_modules/@types/pkg4/package.json' does not exist.
File '/src/project/node_modules/@types/package.json' does not exist.
File '/src/project/node_modules/package.json' does not exist.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
lib/lib.d.ts
  Default library for target 'es5'
src/project/node_modules/pkg2/import.d.ts
  Type library referenced via 'pkg2' from file 'src/project/fileWithTypeRefs.ts' with packageId 'pkg2/import.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg2/package.json' does not have field "type"
src/project/node_modules/pkg3/require.d.ts
  Type library referenced via 'pkg3' from file 'src/project/fileWithTypeRefs.ts' with packageId 'pkg3/require.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg3/package.json' does not have field "type"
src/project/fileWithTypeRefs.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/node_modules/pkg0/import.d.ts
  Imported via "pkg0" from file 'src/project/randomFileForImport.ts' with packageId 'pkg0/import.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg0/package.json' does not have field "type"
src/project/randomFileForImport.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/randomFileForTypeRef.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/node_modules/@types/pkg4/index.d.ts
  Entry point for implicit type library 'pkg4'
  File is CommonJS module because 'package.json' was not found
exitCode:: ExitStatus.Success
File: /src/project/node_modules/pkg2/import.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg2",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg2",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/node_modules/pkg3/require.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg3",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg3\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg3",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/fileWithTypeRefs.ts
resolvedTypeReferenceDirectiveNames:
pkg2: esnext: {
  "resolvedTypeReferenceDirective": {
    "resolvedFileName": "/src/project/node_modules/pkg2/import.d.ts",
    "packageId": {
      "name": "pkg2",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "isExternalLibraryImport": true
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg2/package.json"
  ]
}
pkg3: commonjs: {
  "resolvedTypeReferenceDirective": {
    "resolvedFileName": "/src/project/node_modules/pkg3/require.d.ts",
    "packageId": {
      "name": "pkg3",
      "subModuleName": "require.d.ts",
      "version": "0.0.1"
    },
    "isExternalLibraryImport": true
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg3/package.json"
  ]
}

File: /src/project/node_modules/pkg0/import.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg0",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg0",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/randomFileForImport.ts
resolvedModules:
pkg0: esnext: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/import.d.ts",
    "isExternalLibraryImport": true,
    "packageId": {
      "name": "pkg0",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "extension": ".d.ts"
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg0/package.json"
  ]
}

File: /src/project/randomFileForTypeRef.ts
resolvedTypeReferenceDirectiveNames:
pkg2: esnext: {
  "resolvedTypeReferenceDirective": {
    "resolvedFileName": "/src/project/node_modules/pkg2/import.d.ts",
    "packageId": {
      "name": "pkg2",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "isExternalLibraryImport": true
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg2/package.json"
  ]
}

automaticTypeDirectiveResolutions:
pkg4: {
  "resolvedTypeReferenceDirective": {
    "primary": true,
    "resolvedFileName": "/src/project/node_modules/@types/pkg4/index.d.ts",
    "isExternalLibraryImport": true
  }
}


//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./node_modules/pkg2/import.d.ts","./node_modules/pkg3/require.d.ts","./filewithtyperefs.ts","./node_modules/pkg0/import.d.ts","./randomfileforimport.ts","./randomfilefortyperef.ts","./node_modules/@types/pkg4/index.d.ts","./","./node_modules/pkg0/package.json","./node_modules/pkg2/package.json","./node_modules/pkg3/package.json"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n","affectsGlobalScope":true,"impliedFormat":1},{"version":"-6568745979-export {};\ndeclare global {\n    interface RequireInterface3 {}\n}\n","affectsGlobalScope":true,"impliedFormat":1},{"version":"-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n","signature":"-4882119183-export {};\r\n","impliedFormat":1},{"version":"769951468-export interface ImportInterface0 {}","impliedFormat":1},{"version":"-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-8191038086-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\nexport const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1}],"options":{"cacheResolutions":true,"composite":true,"moduleResolution":3},"fileIdsList":[[2,3],[5],[2]],"referencedMap":[[4,1],[6,2],[7,3]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,4,8,5,2,3,6,7],"latestChangedDtsFile":"./randomFileForTypeRef.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":5,"isExternalLibraryImport":true,"packageId":{"name":"pkg0","subModuleName":"import.d.ts","version":"0.0.1"}},"affectingLocations":[10]},{"resolvedTypeReferenceDirective":{"resolvedFileName":2,"packageId":{"name":"pkg2","subModuleName":"import.d.ts","version":"0.0.1"},"isExternalLibraryImport":true},"affectingLocations":[11]},{"resolvedTypeReferenceDirective":{"resolvedFileName":3,"packageId":{"name":"pkg3","subModuleName":"require.d.ts","version":"0.0.1"},"isExternalLibraryImport":true},"affectingLocations":[12]},{"resolvedTypeReferenceDirective":{"primary":true,"resolvedFileName":8,"isExternalLibraryImport":true}}],"names":["pkg0","pkg2","pkg3","pkg4"],"hash":[[10,"9838425114-{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"],[11,"21696956444-{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"],[12,"1856418333-{\"name\":\"pkg3\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"]],"resolutionEntries":[[1,1,99],[2,2,99],[3,3,1],[4,4]],"modules":[[9,[1]]],"typeRefs":[[9,[2,3,4]]]}},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./node_modules/pkg2/import.d.ts",
      "./node_modules/pkg3/require.d.ts",
      "./filewithtyperefs.ts",
      "./node_modules/pkg0/import.d.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts",
      "./node_modules/@types/pkg4/index.d.ts",
      "./",
      "./node_modules/pkg0/package.json",
      "./node_modules/pkg2/package.json",
      "./node_modules/pkg3/package.json"
    ],
    "fileNamesList": [
      [
        "./node_modules/pkg2/import.d.ts",
        "./node_modules/pkg3/require.d.ts"
      ],
      [
        "./node_modules/pkg0/import.d.ts"
      ],
      [
        "./node_modules/pkg2/import.d.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg2/import.d.ts": {
        "original": {
          "version": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "signature": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg3/require.d.ts": {
        "original": {
          "version": "-6568745979-export {};\ndeclare global {\n    interface RequireInterface3 {}\n}\n",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "-6568745979-export {};\ndeclare global {\n    interface RequireInterface3 {}\n}\n",
        "signature": "-6568745979-export {};\ndeclare global {\n    interface RequireInterface3 {}\n}\n",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./filewithtyperefs.ts": {
        "original": {
          "version": "-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n",
          "signature": "-4882119183-export {};\r\n",
          "impliedFormat": 1
        },
        "version": "-20622778057-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\n/// <reference types=\"pkg3\" resolution-mode=\"require\"/>\ninterface LocalInterface extends ImportInterface2, RequireInterface3 {}\nexport {}\n",
        "signature": "-4882119183-export {};\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg0/import.d.ts": {
        "original": {
          "version": "769951468-export interface ImportInterface0 {}",
          "impliedFormat": 1
        },
        "version": "769951468-export interface ImportInterface0 {}",
        "signature": "769951468-export interface ImportInterface0 {}",
        "impliedFormat": "commonjs"
      },
      "./randomfileforimport.ts": {
        "original": {
          "version": "-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;",
          "signature": "-6057683066-export declare const x = 10;\r\n",
          "impliedFormat": 1
        },
        "version": "-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./randomfilefortyperef.ts": {
        "original": {
          "version": "-8191038086-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\nexport const x = 10;",
          "signature": "-6057683066-export declare const x = 10;\r\n",
          "impliedFormat": 1
        },
        "version": "-8191038086-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\nexport const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/@types/pkg4/index.d.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "moduleResolution": 3
    },
    "referencedMap": {
      "./filewithtyperefs.ts": [
        "./node_modules/pkg2/import.d.ts",
        "./node_modules/pkg3/require.d.ts"
      ],
      "./randomfileforimport.ts": [
        "./node_modules/pkg0/import.d.ts"
      ],
      "./randomfilefortyperef.ts": [
        "./node_modules/pkg2/import.d.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./filewithtyperefs.ts",
      "./node_modules/@types/pkg4/index.d.ts",
      "./node_modules/pkg0/import.d.ts",
      "./node_modules/pkg2/import.d.ts",
      "./node_modules/pkg3/require.d.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts"
    ],
    "latestChangedDtsFile": "./randomFileForTypeRef.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 5,
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg0",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              }
            },
            "affectingLocations": [
              10
            ]
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/import.d.ts",
            "isExternalLibraryImport": true,
            "packageId": {
              "name": "pkg0",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            }
          },
          "affectingLocations": [
            "./node_modules/pkg0/package.json"
          ]
        },
        {
          "original": {
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": 2,
              "packageId": {
                "name": "pkg2",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "affectingLocations": [
              11
            ]
          },
          "resolutionId": 2,
          "resolvedTypeReferenceDirective": {
            "resolvedFileName": "./node_modules/pkg2/import.d.ts",
            "packageId": {
              "name": "pkg2",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            },
            "isExternalLibraryImport": true
          },
          "affectingLocations": [
            "./node_modules/pkg2/package.json"
          ]
        },
        {
          "original": {
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": 3,
              "packageId": {
                "name": "pkg3",
                "subModuleName": "require.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "affectingLocations": [
              12
            ]
          },
          "resolutionId": 3,
          "resolvedTypeReferenceDirective": {
            "resolvedFileName": "./node_modules/pkg3/require.d.ts",
            "packageId": {
              "name": "pkg3",
              "subModuleName": "require.d.ts",
              "version": "0.0.1"
            },
            "isExternalLibraryImport": true
          },
          "affectingLocations": [
            "./node_modules/pkg3/package.json"
          ]
        },
        {
          "original": {
            "resolvedTypeReferenceDirective": {
              "primary": true,
              "resolvedFileName": 8,
              "isExternalLibraryImport": true
            }
          },
          "resolutionId": 4,
          "resolvedTypeReferenceDirective": {
            "primary": true,
            "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
            "isExternalLibraryImport": true
          }
        }
      ],
      "names": [
        "pkg0",
        "pkg2",
        "pkg3",
        "pkg4"
      ],
      "hash": [
        [
          "./node_modules/pkg0/package.json",
          "9838425114-{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"
        ],
        [
          "./node_modules/pkg2/package.json",
          "21696956444-{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"
        ],
        [
          "./node_modules/pkg3/package.json",
          "1856418333-{\"name\":\"pkg3\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"
        ]
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1,
            99
          ],
          "resolutionEntryId": 1,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/import.d.ts",
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg0",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              }
            },
            "affectingLocations": [
              "./node_modules/pkg0/package.json"
            ]
          },
          "mode": "esnext"
        },
        {
          "original": [
            2,
            2,
            99
          ],
          "resolutionEntryId": 2,
          "name": "pkg2",
          "resolution": {
            "resolutionId": 2,
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": "./node_modules/pkg2/import.d.ts",
              "packageId": {
                "name": "pkg2",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "affectingLocations": [
              "./node_modules/pkg2/package.json"
            ]
          },
          "mode": "esnext"
        },
        {
          "original": [
            3,
            3,
            1
          ],
          "resolutionEntryId": 3,
          "name": "pkg3",
          "resolution": {
            "resolutionId": 3,
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": "./node_modules/pkg3/require.d.ts",
              "packageId": {
                "name": "pkg3",
                "subModuleName": "require.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "affectingLocations": [
              "./node_modules/pkg3/package.json"
            ]
          },
          "mode": "commonjs"
        },
        {
          "original": [
            4,
            4
          ],
          "resolutionEntryId": 4,
          "name": "pkg4",
          "resolution": {
            "resolutionId": 4,
            "resolvedTypeReferenceDirective": {
              "primary": true,
              "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
              "isExternalLibraryImport": true
            }
          }
        }
      ],
      "modules": [
        {
          "dir": "./",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/import.d.ts",
                  "isExternalLibraryImport": true,
                  "packageId": {
                    "name": "pkg0",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  }
                },
                "affectingLocations": [
                  "./node_modules/pkg0/package.json"
                ]
              },
              "mode": "esnext"
            }
          ]
        }
      ],
      "typeRefs": [
        {
          "dir": "./",
          "resolutions": [
            {
              "resolutionEntryId": 2,
              "name": "pkg2",
              "resolution": {
                "resolutionId": 2,
                "resolvedTypeReferenceDirective": {
                  "resolvedFileName": "./node_modules/pkg2/import.d.ts",
                  "packageId": {
                    "name": "pkg2",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  },
                  "isExternalLibraryImport": true
                },
                "affectingLocations": [
                  "./node_modules/pkg2/package.json"
                ]
              },
              "mode": "esnext"
            },
            {
              "resolutionEntryId": 3,
              "name": "pkg3",
              "resolution": {
                "resolutionId": 3,
                "resolvedTypeReferenceDirective": {
                  "resolvedFileName": "./node_modules/pkg3/require.d.ts",
                  "packageId": {
                    "name": "pkg3",
                    "subModuleName": "require.d.ts",
                    "version": "0.0.1"
                  },
                  "isExternalLibraryImport": true
                },
                "affectingLocations": [
                  "./node_modules/pkg3/package.json"
                ]
              },
              "mode": "commonjs"
            },
            {
              "resolutionEntryId": 4,
              "name": "pkg4",
              "resolution": {
                "resolutionId": 4,
                "resolvedTypeReferenceDirective": {
                  "primary": true,
                  "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 3532
}



Change:: delete file with typeRefs
Input::
//// [/src/project/fileWithTypeRefs.ts] unlink


Output::
/lib/tsc -p /src/project --explainFiles
File '/src/project/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
Reusing resolution of module 'pkg0' from '/src/project/randomFileForImport.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg0/import.d.ts' with Package ID 'pkg0/import.d.ts@0.0.1'.
Found 'package.json' at '/src/project/node_modules/pkg0/package.json'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg2' from '/src/project/randomFileForTypeRef.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1'.
Found 'package.json' at '/src/project/node_modules/pkg2/package.json'.
Reusing resolution of type reference directive 'pkg4' from '/src/project/__inferred type names__.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/@types/pkg4/index.d.ts'.
File '/src/project/node_modules/@types/pkg4/package.json' does not exist.
File '/src/project/node_modules/@types/package.json' does not exist.
File '/src/project/node_modules/package.json' does not exist.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
lib/lib.d.ts
  Default library for target 'es5'
src/project/node_modules/pkg0/import.d.ts
  Imported via "pkg0" from file 'src/project/randomFileForImport.ts' with packageId 'pkg0/import.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg0/package.json' does not have field "type"
src/project/randomFileForImport.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/node_modules/pkg2/import.d.ts
  Type library referenced via 'pkg2' from file 'src/project/randomFileForTypeRef.ts' with packageId 'pkg2/import.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg2/package.json' does not have field "type"
src/project/randomFileForTypeRef.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/node_modules/@types/pkg4/index.d.ts
  Entry point for implicit type library 'pkg4'
  File is CommonJS module because 'package.json' was not found
exitCode:: ExitStatus.Success
File: /src/project/node_modules/pkg0/import.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg0",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg0",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/randomFileForImport.ts
resolvedModules:
pkg0: esnext: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/import.d.ts",
    "isExternalLibraryImport": true,
    "packageId": {
      "name": "pkg0",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "extension": ".d.ts"
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg0/package.json"
  ]
}

File: /src/project/node_modules/pkg2/import.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg2",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg2",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/randomFileForTypeRef.ts
resolvedTypeReferenceDirectiveNames:
pkg2: esnext: {
  "resolvedTypeReferenceDirective": {
    "resolvedFileName": "/src/project/node_modules/pkg2/import.d.ts",
    "packageId": {
      "name": "pkg2",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "isExternalLibraryImport": true
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg2/package.json"
  ]
}

automaticTypeDirectiveResolutions:
pkg4: {
  "resolvedTypeReferenceDirective": {
    "primary": true,
    "resolvedFileName": "/src/project/node_modules/@types/pkg4/index.d.ts",
    "isExternalLibraryImport": true
  }
}


//// [/src/project/randomFileForImport.js] file written with same contents
//// [/src/project/randomFileForTypeRef.js] file written with same contents
//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./node_modules/pkg0/import.d.ts","./randomfileforimport.ts","./node_modules/pkg2/import.d.ts","./randomfilefortyperef.ts","./node_modules/@types/pkg4/index.d.ts","./","./node_modules/pkg0/package.json","./node_modules/pkg2/package.json"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"769951468-export interface ImportInterface0 {}","impliedFormat":1},{"version":"-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n","affectsGlobalScope":true,"impliedFormat":1},{"version":"-8191038086-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\nexport const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1}],"options":{"cacheResolutions":true,"composite":true,"moduleResolution":3},"fileIdsList":[[2],[4]],"referencedMap":[[3,1],[5,2]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,6,2,4,3,5],"latestChangedDtsFile":"./randomFileForTypeRef.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":2,"isExternalLibraryImport":true,"packageId":{"name":"pkg0","subModuleName":"import.d.ts","version":"0.0.1"}},"affectingLocations":[8]},{"resolvedTypeReferenceDirective":{"resolvedFileName":4,"packageId":{"name":"pkg2","subModuleName":"import.d.ts","version":"0.0.1"},"isExternalLibraryImport":true},"affectingLocations":[9]},{"resolvedTypeReferenceDirective":{"primary":true,"resolvedFileName":6,"isExternalLibraryImport":true}}],"names":["pkg0","pkg2","pkg4"],"hash":[[8,"9838425114-{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"],[9,"21696956444-{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"]],"resolutionEntries":[[1,1,99],[2,2,99],[3,3]],"modules":[[7,[1]]],"typeRefs":[[7,[2,3]]]}},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./node_modules/pkg0/import.d.ts",
      "./randomfileforimport.ts",
      "./node_modules/pkg2/import.d.ts",
      "./randomfilefortyperef.ts",
      "./node_modules/@types/pkg4/index.d.ts",
      "./",
      "./node_modules/pkg0/package.json",
      "./node_modules/pkg2/package.json"
    ],
    "fileNamesList": [
      [
        "./node_modules/pkg0/import.d.ts"
      ],
      [
        "./node_modules/pkg2/import.d.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg0/import.d.ts": {
        "original": {
          "version": "769951468-export interface ImportInterface0 {}",
          "impliedFormat": 1
        },
        "version": "769951468-export interface ImportInterface0 {}",
        "signature": "769951468-export interface ImportInterface0 {}",
        "impliedFormat": "commonjs"
      },
      "./randomfileforimport.ts": {
        "original": {
          "version": "-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;",
          "signature": "-6057683066-export declare const x = 10;\r\n",
          "impliedFormat": 1
        },
        "version": "-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg2/import.d.ts": {
        "original": {
          "version": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "signature": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./randomfilefortyperef.ts": {
        "original": {
          "version": "-8191038086-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\nexport const x = 10;",
          "signature": "-6057683066-export declare const x = 10;\r\n",
          "impliedFormat": 1
        },
        "version": "-8191038086-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\nexport const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/@types/pkg4/index.d.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "moduleResolution": 3
    },
    "referencedMap": {
      "./randomfileforimport.ts": [
        "./node_modules/pkg0/import.d.ts"
      ],
      "./randomfilefortyperef.ts": [
        "./node_modules/pkg2/import.d.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./node_modules/@types/pkg4/index.d.ts",
      "./node_modules/pkg0/import.d.ts",
      "./node_modules/pkg2/import.d.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts"
    ],
    "latestChangedDtsFile": "./randomFileForTypeRef.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2,
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg0",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              }
            },
            "affectingLocations": [
              8
            ]
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/import.d.ts",
            "isExternalLibraryImport": true,
            "packageId": {
              "name": "pkg0",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            }
          },
          "affectingLocations": [
            "./node_modules/pkg0/package.json"
          ]
        },
        {
          "original": {
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": 4,
              "packageId": {
                "name": "pkg2",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "affectingLocations": [
              9
            ]
          },
          "resolutionId": 2,
          "resolvedTypeReferenceDirective": {
            "resolvedFileName": "./node_modules/pkg2/import.d.ts",
            "packageId": {
              "name": "pkg2",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            },
            "isExternalLibraryImport": true
          },
          "affectingLocations": [
            "./node_modules/pkg2/package.json"
          ]
        },
        {
          "original": {
            "resolvedTypeReferenceDirective": {
              "primary": true,
              "resolvedFileName": 6,
              "isExternalLibraryImport": true
            }
          },
          "resolutionId": 3,
          "resolvedTypeReferenceDirective": {
            "primary": true,
            "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
            "isExternalLibraryImport": true
          }
        }
      ],
      "names": [
        "pkg0",
        "pkg2",
        "pkg4"
      ],
      "hash": [
        [
          "./node_modules/pkg0/package.json",
          "9838425114-{\"name\":\"pkg0\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"
        ],
        [
          "./node_modules/pkg2/package.json",
          "21696956444-{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"
        ]
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1,
            99
          ],
          "resolutionEntryId": 1,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/import.d.ts",
              "isExternalLibraryImport": true,
              "packageId": {
                "name": "pkg0",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              }
            },
            "affectingLocations": [
              "./node_modules/pkg0/package.json"
            ]
          },
          "mode": "esnext"
        },
        {
          "original": [
            2,
            2,
            99
          ],
          "resolutionEntryId": 2,
          "name": "pkg2",
          "resolution": {
            "resolutionId": 2,
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": "./node_modules/pkg2/import.d.ts",
              "packageId": {
                "name": "pkg2",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "affectingLocations": [
              "./node_modules/pkg2/package.json"
            ]
          },
          "mode": "esnext"
        },
        {
          "original": [
            3,
            3
          ],
          "resolutionEntryId": 3,
          "name": "pkg4",
          "resolution": {
            "resolutionId": 3,
            "resolvedTypeReferenceDirective": {
              "primary": true,
              "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
              "isExternalLibraryImport": true
            }
          }
        }
      ],
      "modules": [
        {
          "dir": "./",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/import.d.ts",
                  "isExternalLibraryImport": true,
                  "packageId": {
                    "name": "pkg0",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  }
                },
                "affectingLocations": [
                  "./node_modules/pkg0/package.json"
                ]
              },
              "mode": "esnext"
            }
          ]
        }
      ],
      "typeRefs": [
        {
          "dir": "./",
          "resolutions": [
            {
              "resolutionEntryId": 2,
              "name": "pkg2",
              "resolution": {
                "resolutionId": 2,
                "resolvedTypeReferenceDirective": {
                  "resolvedFileName": "./node_modules/pkg2/import.d.ts",
                  "packageId": {
                    "name": "pkg2",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  },
                  "isExternalLibraryImport": true
                },
                "affectingLocations": [
                  "./node_modules/pkg2/package.json"
                ]
              },
              "mode": "esnext"
            },
            {
              "resolutionEntryId": 3,
              "name": "pkg4",
              "resolution": {
                "resolutionId": 3,
                "resolvedTypeReferenceDirective": {
                  "primary": true,
                  "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 2647
}



Change:: delete resolved import file
Input::
//// [/src/project/node_modules/pkg0/import.d.ts] unlink


Output::
/lib/tsc -p /src/project --explainFiles
File '/src/project/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
======== Resolving module 'pkg0' from '/src/project/randomFileForImport.ts'. ========
Explicitly specified module resolution kind: 'Node16'.
Resolving in ESM mode with conditions 'node', 'import', 'types'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Found 'package.json' at '/src/project/node_modules/pkg0/package.json'.
Matched 'exports' condition 'import'.
Using 'exports' subpath '.' with target './import.js'.
File name '/src/project/node_modules/pkg0/import.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg0/import.ts' does not exist.
File '/src/project/node_modules/pkg0/import.tsx' does not exist.
File '/src/project/node_modules/pkg0/import.d.ts' does not exist.
Saw non-matching condition 'require'.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
File '/src/project/node_modules/pkg0/package.json' exists according to earlier cached lookups.
Matched 'exports' condition 'import'.
Using 'exports' subpath '.' with target './import.js'.
File name '/src/project/node_modules/pkg0/import.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg0/import.js' does not exist.
File '/src/project/node_modules/pkg0/import.jsx' does not exist.
Saw non-matching condition 'require'.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Module name 'pkg0' was not resolved. ========
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Reusing resolution of type reference directive 'pkg2' from '/src/project/randomFileForTypeRef.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/pkg2/import.d.ts' with Package ID 'pkg2/import.d.ts@0.0.1'.
Found 'package.json' at '/src/project/node_modules/pkg2/package.json'.
Reusing resolution of type reference directive 'pkg4' from '/src/project/__inferred type names__.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/@types/pkg4/index.d.ts'.
File '/src/project/node_modules/@types/pkg4/package.json' does not exist.
File '/src/project/node_modules/@types/package.json' does not exist.
File '/src/project/node_modules/package.json' does not exist.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
[96msrc/project/randomFileForImport.ts[0m:[93m1[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg0' or its corresponding type declarations.

[7m1[0m import type { ImportInterface0 } from "pkg0" assert { "resolution-mode": "import" };
[7m [0m [91m                                      ~~~~~~[0m

lib/lib.d.ts
  Default library for target 'es5'
src/project/randomFileForImport.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/node_modules/pkg2/import.d.ts
  Type library referenced via 'pkg2' from file 'src/project/randomFileForTypeRef.ts' with packageId 'pkg2/import.d.ts@0.0.1'
  File is CommonJS module because 'src/project/node_modules/pkg2/package.json' does not have field "type"
src/project/randomFileForTypeRef.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/node_modules/@types/pkg4/index.d.ts
  Entry point for implicit type library 'pkg4'
  File is CommonJS module because 'package.json' was not found

Found 1 error in src/project/randomFileForImport.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
File: /src/project/randomFileForImport.ts
resolvedModules:
pkg0: esnext: {
  "failedLookupLocations": [
    "/src/project/package.json",
    "/src/package.json",
    "/package.json",
    "/src/project/node_modules/pkg0/import.ts",
    "/src/project/node_modules/pkg0/import.tsx",
    "/src/project/node_modules/pkg0/import.d.ts",
    "/src/project/node_modules/@types/pkg0/package.json",
    "/src/node_modules/pkg0/package.json",
    "/src/node_modules/@types/pkg0/package.json",
    "/node_modules/pkg0/package.json",
    "/node_modules/@types/pkg0/package.json",
    "/src/project/node_modules/pkg0/import.js",
    "/src/project/node_modules/pkg0/import.jsx",
    "/src/node_modules/pkg0/package.json",
    "/node_modules/pkg0/package.json"
  ],
  "affectingLocations": [
    "/src/project/node_modules/pkg0/package.json",
    "/src/project/node_modules/pkg0/package.json"
  ]
}

File: /src/project/node_modules/pkg2/import.d.ts
packageJsonScope:: {
  "packageDirectory": "/src/project/node_modules/pkg2",
  "contents": {
    "packageJsonText": "{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}",
    "packageJsonContent": {
      "name": "pkg2",
      "version": "0.0.1",
      "exports": {
        "import": "./import.js",
        "require": "./require.js"
      }
    }
  }
}

File: /src/project/randomFileForTypeRef.ts
resolvedTypeReferenceDirectiveNames:
pkg2: esnext: {
  "resolvedTypeReferenceDirective": {
    "resolvedFileName": "/src/project/node_modules/pkg2/import.d.ts",
    "packageId": {
      "name": "pkg2",
      "subModuleName": "import.d.ts",
      "version": "0.0.1"
    },
    "isExternalLibraryImport": true
  },
  "affectingLocations": [
    "/src/project/node_modules/pkg2/package.json"
  ]
}

automaticTypeDirectiveResolutions:
pkg4: {
  "resolvedTypeReferenceDirective": {
    "primary": true,
    "resolvedFileName": "/src/project/node_modules/@types/pkg4/index.d.ts",
    "isExternalLibraryImport": true
  }
}


//// [/src/project/randomFileForImport.js] file written with same contents
//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./randomfileforimport.ts","./node_modules/pkg2/import.d.ts","./randomfilefortyperef.ts","./node_modules/@types/pkg4/index.d.ts","./","./node_modules/pkg2/package.json"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n","affectsGlobalScope":true,"impliedFormat":1},{"version":"-8191038086-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\nexport const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1}],"options":{"cacheResolutions":true,"composite":true,"moduleResolution":3},"fileIdsList":[[3]],"referencedMap":[[4,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,5,3,[2,[{"file":"./randomfileforimport.ts","start":38,"length":6,"messageText":"Cannot find module 'pkg0' or its corresponding type declarations.","category":1,"code":2307}]],4],"latestChangedDtsFile":"./randomFileForTypeRef.d.ts","cacheResolutions":{"resolutions":[{"resolvedTypeReferenceDirective":{"resolvedFileName":3,"packageId":{"name":"pkg2","subModuleName":"import.d.ts","version":"0.0.1"},"isExternalLibraryImport":true},"affectingLocations":[7]},{"resolvedTypeReferenceDirective":{"primary":true,"resolvedFileName":5,"isExternalLibraryImport":true}}],"names":["pkg2","pkg4"],"hash":[[7,"21696956444-{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"]],"resolutionEntries":[[1,1,99],[2,2]],"typeRefs":[[6,[1,2]]]}},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./randomfileforimport.ts",
      "./node_modules/pkg2/import.d.ts",
      "./randomfilefortyperef.ts",
      "./node_modules/@types/pkg4/index.d.ts",
      "./",
      "./node_modules/pkg2/package.json"
    ],
    "fileNamesList": [
      [
        "./node_modules/pkg2/import.d.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./randomfileforimport.ts": {
        "original": {
          "version": "-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;",
          "signature": "-6057683066-export declare const x = 10;\r\n",
          "impliedFormat": 1
        },
        "version": "-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/pkg2/import.d.ts": {
        "original": {
          "version": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "signature": "1714206242-export {};\ndeclare global {\n    interface ImportInterface2 {}\n}\n",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./randomfilefortyperef.ts": {
        "original": {
          "version": "-8191038086-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\nexport const x = 10;",
          "signature": "-6057683066-export declare const x = 10;\r\n",
          "impliedFormat": 1
        },
        "version": "-8191038086-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\nexport const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/@types/pkg4/index.d.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "moduleResolution": 3
    },
    "referencedMap": {
      "./randomfilefortyperef.ts": [
        "./node_modules/pkg2/import.d.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./node_modules/@types/pkg4/index.d.ts",
      "./node_modules/pkg2/import.d.ts",
      [
        "./randomfileforimport.ts",
        [
          {
            "file": "./randomfileforimport.ts",
            "start": 38,
            "length": 6,
            "messageText": "Cannot find module 'pkg0' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      "./randomfilefortyperef.ts"
    ],
    "latestChangedDtsFile": "./randomFileForTypeRef.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": 3,
              "packageId": {
                "name": "pkg2",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "affectingLocations": [
              7
            ]
          },
          "resolutionId": 1,
          "resolvedTypeReferenceDirective": {
            "resolvedFileName": "./node_modules/pkg2/import.d.ts",
            "packageId": {
              "name": "pkg2",
              "subModuleName": "import.d.ts",
              "version": "0.0.1"
            },
            "isExternalLibraryImport": true
          },
          "affectingLocations": [
            "./node_modules/pkg2/package.json"
          ]
        },
        {
          "original": {
            "resolvedTypeReferenceDirective": {
              "primary": true,
              "resolvedFileName": 5,
              "isExternalLibraryImport": true
            }
          },
          "resolutionId": 2,
          "resolvedTypeReferenceDirective": {
            "primary": true,
            "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
            "isExternalLibraryImport": true
          }
        }
      ],
      "names": [
        "pkg2",
        "pkg4"
      ],
      "hash": [
        [
          "./node_modules/pkg2/package.json",
          "21696956444-{\"name\":\"pkg2\",\"version\":\"0.0.1\",\"exports\":{\"import\":\"./import.js\",\"require\":\"./require.js\"}}"
        ]
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1,
            99
          ],
          "resolutionEntryId": 1,
          "name": "pkg2",
          "resolution": {
            "resolutionId": 1,
            "resolvedTypeReferenceDirective": {
              "resolvedFileName": "./node_modules/pkg2/import.d.ts",
              "packageId": {
                "name": "pkg2",
                "subModuleName": "import.d.ts",
                "version": "0.0.1"
              },
              "isExternalLibraryImport": true
            },
            "affectingLocations": [
              "./node_modules/pkg2/package.json"
            ]
          },
          "mode": "esnext"
        },
        {
          "original": [
            2,
            2
          ],
          "resolutionEntryId": 2,
          "name": "pkg4",
          "resolution": {
            "resolutionId": 2,
            "resolvedTypeReferenceDirective": {
              "primary": true,
              "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
              "isExternalLibraryImport": true
            }
          }
        }
      ],
      "typeRefs": [
        {
          "dir": "./",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg2",
              "resolution": {
                "resolutionId": 1,
                "resolvedTypeReferenceDirective": {
                  "resolvedFileName": "./node_modules/pkg2/import.d.ts",
                  "packageId": {
                    "name": "pkg2",
                    "subModuleName": "import.d.ts",
                    "version": "0.0.1"
                  },
                  "isExternalLibraryImport": true
                },
                "affectingLocations": [
                  "./node_modules/pkg2/package.json"
                ]
              },
              "mode": "esnext"
            },
            {
              "resolutionEntryId": 2,
              "name": "pkg4",
              "resolution": {
                "resolutionId": 2,
                "resolvedTypeReferenceDirective": {
                  "primary": true,
                  "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 2317
}



Change:: delete resolved typeRef file
Input::
//// [/src/project/node_modules/pkg2/import.d.ts] unlink


Output::
/lib/tsc -p /src/project --explainFiles
File '/src/project/package.json' does not exist.
File '/src/package.json' does not exist.
File '/package.json' does not exist.
======== Resolving module 'pkg0' from '/src/project/randomFileForImport.ts'. ========
Explicitly specified module resolution kind: 'Node16'.
Resolving in ESM mode with conditions 'node', 'import', 'types'.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, JavaScript, Declaration.
Found 'package.json' at '/src/project/node_modules/pkg0/package.json'.
Matched 'exports' condition 'import'.
Using 'exports' subpath '.' with target './import.js'.
File name '/src/project/node_modules/pkg0/import.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg0/import.ts' does not exist.
File '/src/project/node_modules/pkg0/import.tsx' does not exist.
File '/src/project/node_modules/pkg0/import.d.ts' does not exist.
Saw non-matching condition 'require'.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
File '/src/project/node_modules/pkg0/package.json' exists according to earlier cached lookups.
Matched 'exports' condition 'import'.
Using 'exports' subpath '.' with target './import.js'.
File name '/src/project/node_modules/pkg0/import.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg0/import.js' does not exist.
File '/src/project/node_modules/pkg0/import.jsx' does not exist.
Saw non-matching condition 'require'.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Module name 'pkg0' was not resolved. ========
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
======== Resolving type reference directive 'pkg2', containing file '/src/project/randomFileForTypeRef.ts', root directory '/src/project/node_modules/@types'. ========
Resolving with primary search path '/src/project/node_modules/@types'.
Looking up in 'node_modules' folder, initial location '/src/project'.
Found 'package.json' at '/src/project/node_modules/pkg2/package.json'.
Matched 'exports' condition 'import'.
Using 'exports' subpath '.' with target './import.js'.
File name '/src/project/node_modules/pkg2/import.js' has a '.js' extension - stripping it.
File '/src/project/node_modules/pkg2/import.d.ts' does not exist.
Saw non-matching condition 'require'.
Directory '/src/node_modules' does not exist, skipping all lookups in it.
Directory '/node_modules' does not exist, skipping all lookups in it.
======== Type reference directive 'pkg2' was not resolved. ========
Reusing resolution of type reference directive 'pkg4' from '/src/project/__inferred type names__.ts' found in cache from location '/src/project', it was successfully resolved to '/src/project/node_modules/@types/pkg4/index.d.ts'.
File '/src/project/node_modules/@types/pkg4/package.json' does not exist.
File '/src/project/node_modules/@types/package.json' does not exist.
File '/src/project/node_modules/package.json' does not exist.
File '/src/project/package.json' does not exist according to earlier cached lookups.
File '/src/package.json' does not exist according to earlier cached lookups.
File '/package.json' does not exist according to earlier cached lookups.
File '/lib/package.json' does not exist.
File '/package.json' does not exist according to earlier cached lookups.
[96msrc/project/randomFileForImport.ts[0m:[93m1[0m:[93m39[0m - [91merror[0m[90m TS2307: [0mCannot find module 'pkg0' or its corresponding type declarations.

[7m1[0m import type { ImportInterface0 } from "pkg0" assert { "resolution-mode": "import" };
[7m [0m [91m                                      ~~~~~~[0m

[96msrc/project/randomFileForTypeRef.ts[0m:[93m1[0m:[93m23[0m - [91merror[0m[90m TS2688: [0mCannot find type definition file for 'pkg2'.

[7m1[0m /// <reference types="pkg2" resolution-mode="import"/>
[7m [0m [91m                      ~~~~[0m

lib/lib.d.ts
  Default library for target 'es5'
src/project/randomFileForImport.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/randomFileForTypeRef.ts
  Matched by include pattern '*.ts' in 'src/project/tsconfig.json'
  File is CommonJS module because 'package.json' was not found
src/project/node_modules/@types/pkg4/index.d.ts
  Entry point for implicit type library 'pkg4'
  File is CommonJS module because 'package.json' was not found

Found 2 errors in 2 files.

Errors  Files
     1  src/project/randomFileForImport.ts[90m:1[0m
     1  src/project/randomFileForTypeRef.ts[90m:1[0m
exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated
File: /src/project/randomFileForImport.ts
resolvedModules:
pkg0: esnext: {
  "failedLookupLocations": [
    "/src/project/package.json",
    "/src/package.json",
    "/package.json",
    "/src/project/node_modules/pkg0/import.ts",
    "/src/project/node_modules/pkg0/import.tsx",
    "/src/project/node_modules/pkg0/import.d.ts",
    "/src/project/node_modules/@types/pkg0/package.json",
    "/src/node_modules/pkg0/package.json",
    "/src/node_modules/@types/pkg0/package.json",
    "/node_modules/pkg0/package.json",
    "/node_modules/@types/pkg0/package.json",
    "/src/project/node_modules/pkg0/import.js",
    "/src/project/node_modules/pkg0/import.jsx",
    "/src/node_modules/pkg0/package.json",
    "/node_modules/pkg0/package.json"
  ],
  "affectingLocations": [
    "/src/project/node_modules/pkg0/package.json",
    "/src/project/node_modules/pkg0/package.json"
  ]
}

File: /src/project/randomFileForTypeRef.ts
resolvedTypeReferenceDirectiveNames:
pkg2: esnext: {
  "failedLookupLocations": [
    "/src/project/node_modules/@types/pkg2/package.json",
    "/src/project/node_modules/pkg2/import.d.ts",
    "/src/project/node_modules/@types/pkg2/package.json",
    "/src/node_modules/pkg2/package.json",
    "/src/node_modules/@types/pkg2/package.json",
    "/node_modules/pkg2/package.json",
    "/node_modules/@types/pkg2/package.json"
  ],
  "affectingLocations": [
    "/src/project/node_modules/pkg2/package.json"
  ]
}

automaticTypeDirectiveResolutions:
pkg4: {
  "resolvedTypeReferenceDirective": {
    "primary": true,
    "resolvedFileName": "/src/project/node_modules/@types/pkg4/index.d.ts",
    "isExternalLibraryImport": true
  }
}


//// [/src/project/randomFileForImport.js] file written with same contents
//// [/src/project/randomFileForTypeRef.js] file written with same contents
//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./randomfileforimport.ts","./randomfilefortyperef.ts","./node_modules/@types/pkg4/index.d.ts","./"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-8191038086-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\nexport const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n","impliedFormat":1},{"version":"-10726455937-export const x = 10;","impliedFormat":1}],"options":{"cacheResolutions":true,"composite":true,"moduleResolution":3},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,4,[2,[{"file":"./randomfileforimport.ts","start":38,"length":6,"messageText":"Cannot find module 'pkg0' or its corresponding type declarations.","category":1,"code":2307}]],3],"latestChangedDtsFile":"./randomFileForTypeRef.d.ts","cacheResolutions":{"resolutions":[{"resolvedTypeReferenceDirective":{"primary":true,"resolvedFileName":4,"isExternalLibraryImport":true}}],"names":["pkg4"],"resolutionEntries":[[1,1]],"typeRefs":[[5,[1]]]}},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./randomfileforimport.ts",
      "./randomfilefortyperef.ts",
      "./node_modules/@types/pkg4/index.d.ts",
      "./"
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true,
          "impliedFormat": 1
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "commonjs"
      },
      "./randomfileforimport.ts": {
        "original": {
          "version": "-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;",
          "signature": "-6057683066-export declare const x = 10;\r\n",
          "impliedFormat": 1
        },
        "version": "-8633945300-import type { ImportInterface0 } from \"pkg0\" assert { \"resolution-mode\": \"import\" };\nexport const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./randomfilefortyperef.ts": {
        "original": {
          "version": "-8191038086-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\nexport const x = 10;",
          "signature": "-6057683066-export declare const x = 10;\r\n",
          "impliedFormat": 1
        },
        "version": "-8191038086-/// <reference types=\"pkg2\" resolution-mode=\"import\"/>\nexport const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "impliedFormat": "commonjs"
      },
      "./node_modules/@types/pkg4/index.d.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "impliedFormat": 1
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-10726455937-export const x = 10;",
        "impliedFormat": "commonjs"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true,
      "moduleResolution": 3
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./node_modules/@types/pkg4/index.d.ts",
      [
        "./randomfileforimport.ts",
        [
          {
            "file": "./randomfileforimport.ts",
            "start": 38,
            "length": 6,
            "messageText": "Cannot find module 'pkg0' or its corresponding type declarations.",
            "category": 1,
            "code": 2307
          }
        ]
      ],
      "./randomfilefortyperef.ts"
    ],
    "latestChangedDtsFile": "./randomFileForTypeRef.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedTypeReferenceDirective": {
              "primary": true,
              "resolvedFileName": 4,
              "isExternalLibraryImport": true
            }
          },
          "resolutionId": 1,
          "resolvedTypeReferenceDirective": {
            "primary": true,
            "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
            "isExternalLibraryImport": true
          }
        }
      ],
      "names": [
        "pkg4"
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1
          ],
          "resolutionEntryId": 1,
          "name": "pkg4",
          "resolution": {
            "resolutionId": 1,
            "resolvedTypeReferenceDirective": {
              "primary": true,
              "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
              "isExternalLibraryImport": true
            }
          }
        }
      ],
      "typeRefs": [
        {
          "dir": "./",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg4",
              "resolution": {
                "resolutionId": 1,
                "resolvedTypeReferenceDirective": {
                  "primary": true,
                  "resolvedFileName": "./node_modules/@types/pkg4/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 1736
}

