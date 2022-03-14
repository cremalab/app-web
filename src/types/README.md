# `./src/types`

This directory is intended to organize global application [types](http://www.typescriptlang.org/docs/handbook/basic-types.html).

## Usage

1. In terminal run `npm run new:type` to generate a new `type`
2. Name your type, e.g. `ExampleType` (names will be transformed to **Pascal Case**, i.e. `ThisIsPascalCase`)
3. `./src/types/ExampleType.ts` will be generated with the following content:

   ```ts
   /**
    * ExampleType
    * ------------------------------------------------
    * DESCRIPTION_HERE
    */

   export interface ExampleType {}
   ```

4. Add a description to the comment block. This will be important documentation and useful context for yourself whenever you hover over the reference (in VSCode at least).
5. Add some fields to your interface:

   ```ts
   /**
    * ExampleType
    * ------------------------------------------------
    * A type intended for example use only 👍
    */

   export interface ExampleType {
     name: string
     age: number
   }
   ```

6. Import elsewhere for use:

   ```ts
   import { ExampleType } from "../../types/ExampleType"

   /**
    * exampleUtil
    * ------------------------------------------------
    * A util function intended for example use only 👍
    */

   export const exampleUtil = (x: ExampleType) => x
   ```
