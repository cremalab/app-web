# `./src/components`

This directory is intended to organize React components.

## Component Generator

This project uses [`@cremalab/scripts-web`](https://github.com/cremalab/scripts) to generate component files. Give it a try!

1. In terminal, run `npm run new:component` to generate a new React component.
2. Name your component, e.g. `ExampleComponent`
3. Choose between options regarding how much example code to generate. _The following examples are shown as if you answered `yes` to "example code" and `no` to "include useState"._
4. The following directory and files will be generated:

   ```
   src/components/ExampleComponent/
   ├── ExampleComponent.stories.tsx 👈 Component stories (`npm run test:playground`)
   ├── ExampleComponent.test.tsx 👈 Component tests (`npm run test:unit`)
   ├── ExampleComponent.tsx 👈 Component code
   ├── index.ts 👈 Component export
   └── README.md 👈 Component documentation (hey, that's me!)
   ```

5. `ExampleComponent.stories.tsx` contains component stories:

   ```tsx
   import decoratorCentered from "@storybook/addon-centered"
   import { ExampleComponent } from "./ExampleComponent"

   /**
    * See Storybook Docs: Writing Stories
    * https://storybook.js.org/docs/basics/writing-stories/
    */

   export default {
     title: "ExampleComponent",
     decorators: [decoratorCentered],
   }

   export const example = () => <ExampleComponent name="ExampleComponent" />
   ```

6. `ExampleComponent.test.tsx` contains component tests:

   ```tsx
   import { render } from "@testing-library/react"
   import { ExampleComponent } from "./ExampleComponent"

   describe("ExampleComponent", () => {
     it("name prop is rendered", () => {
       // Arrange
       const message = "Hi, my name is ExampleComponent!"

       // Act
       const { getByText } = render(
         <ExampleComponent name="ExampleComponent" />,
       )
       const received = getByText(message)

       // Assert
       expect(received).toBeDefined()
     })
   })
   ```

7. `ExampleComponent.tsx` contains component code:

   ```tsx
   interface Props {
     name: string
   }

   export function ExampleComponent({ name }: Props) {
     return (
       <div>
         <p>Hi, my name is {name}!</p>
       </div>
     )
   }
   ```

8. `index.ts` contains component export:

   ```tsx
   export { ExampleComponent } from "./ExampleComponent"
   ```

9. `README.md` contains component documentation:

   ```md
   # `<ExampleComponent />`

   DESCRIPTION_HERE

   ## Directory Structure

   - `ExampleComponent.stories.tsx`: Component stories (`npm run test:playground`)
   - `ExampleComponent.test.tsx`: Component tests (`npm run test:unit`)
   - `ExampleComponent.tsx`: Component code
   - `index.ts`: Component export
   - `README.md`: Component documentation (hey, that's me!)
   ```
