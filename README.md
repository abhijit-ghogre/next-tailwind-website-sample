Dev notes:

- I added prettier to the project to make sure the code is formatted correctly.
- I also like to add `react/jsx-curly-brace-presence` to my eslint rules to make sure I use curly braces in my JSX only when actually required. It keeps my code clean and readable.
- Since we are using tailwind, I also like to have `eslint-plugin-tailwindcss` installed. It provides bunch of useful rules to make sure our tailwind code remains readable and consistent.
- I like to keep extension for nextjs pages as `.page.tsx` instead of `.tsx`. It makes it easier to distinguish between pages and components. It also makes it possible to keep my single use components collocated with the page components without nextjs creating an extra route for it.
- I added an additional spacings in tailwind config for matching figma dimensions where required.
