# `./src/components`

This directory is intended to organize React components.

## Usage

1. In terminal run `npm run new:component` to generate a new `component`
2. Name your component, e.g. `ExampleComponent` (names will be transformed to **Pascal Case**, i.e. `ThisIsPascalCase`)
3. Select whether or not your component will "useState"—selecting "yes" will add a hook.
4. The following directory and files will be generated:
   ```
   src/components/ExampleComponent // component directory
   ├── index.tsx // Define and export the component here
   ├── README.md // Document the component
   ├── stories.tsx // Show the component in various states
   └── test.tsx // Test the component
   ```
5. `ExampleComponent/index.tsx` contains component definition:
   ```tsx
   import React from "react"

   type Props = Readonly<{ name: string }>

   /**
    * ExampleComponent
    * ------------------------------------------------
    * DESCRIPTION_HERE
    */

   export function ExampleComponent({ name }: Props) {
     return <div className="ExampleComponent">{name}</div>
   }
   ```
6. `ExampleComponent/README.md` contains component documentation:
      
        # `<ExampleComponent />`

         DESCRIPTION_HERE

         ## Directory Structure

         - `stories.tsx`: Component playground (`npm run test:playground`)
         - `test.tsx`: Component tests (`npm run test:unit`)
         - `index.tsx`: Component code
         - `README.md`: Component documentation (hey, that's me!)

         ## Example

         ![ExampleComponent](../../../.loki/reference/chrome_ExampleComponent_example.png)

         > Image location: [`.loki/reference/chrome_ExampleComponent_example.png`](../../../.loki/reference/chrome_ExampleComponent_example.png)
         > 
         > To regenerate: 
         > 1. `npm run test:playground` (skip if running)
         > 1. `npm run test:visual:update -- --storiesFilter="^ExampleComponent example\$"`
7. `ExampleComponent/stories.tsx` contains component stories:
   ```tsx
   import React from "react"
   import decoratorCentered from "@storybook/addon-centered"
   import { ExampleComponent } from "."

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
8. `ExampleComponent/test.tsx` contains component tests:
   ```tsx      
   import { ExampleComponent } from "."
   import React from "react"
   import { render } from "@testing-library/react"

   describe("ExampleComponent", () => {
     it("name prop is rendered", () => {
       // Arrange
       const name = "ExampleComponent"

       // Act
       const { getByText } = render(<ExampleComponent name={name} />)
       const received = getByText(name)

       // Assert
       expect(received).toBeDefined()
     })
   })
   ```