# `./src/utils`

This directory is intended to organize global application utilities—functions, constants, and more.

## FAQ

1. _**Are `utils` different from `helpers`, `lib`, etc.?**_ No. It's jut the name that was chosen.
2. _**What constitutes a `util`?**_ Anything that isn't a React component, type, and doesn't belong to another project-specific grouping of code (e.g. Redux related code, etc.). Application-specific logic and type transformation code are some examples of what would make a good `util`.
3. _**Must `utils` be functions?**_ No. They can be any value you need them to be, but functions tend to be the most common kind of util (hence, we generate on by default).

## Usage

1. In terminal run `npm run new:util` to generate a new `utility`
2. Name your utility, e.g. `exampleUtil` (names will be transformed to **Camel Case**, i.e. `thisIsCamelCase`)
3. The following directory and files will be generated:

   ```
   src/utils
   ├── exampleUtil
   │   ├── exampleUtil.test.ts 👈 Test utility
   │   ├── exampleUtil.ts 👈 Define utility
   │   └── index.ts 👈 Export utility
   └── README.md 👈 You are here!
   ```

4. `exampleUtil.test.ts` contains the utility tests:

   ```ts
   import { exampleUtil } from "./exampleUtil"

   describe("exampleUtil", () => {
     it("works", () => {
       // Arrange
       const valA = 1

       // Act
       const received = exampleUtil(valA)
       const expected = 1

       // Assert
       expect(received).toEqual(expected)
     })
   })
   ```

5. `exampleUtil.ts` contains the utility definition:

   ```ts
   /**
    * exampleUtil
    * ------------------------------------------------
    * DESCRIPTION_HERE
    */

   export const exampleUtil = <A>(x: A) => x
   ```

6. `index.ts` contains the utility definition:

   ```ts
   export { exampleUtil } from "./exampleUtil"
   ```
