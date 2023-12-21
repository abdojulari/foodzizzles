# Foodzizzles Web Application

Foodzizzles is a web application powered with Vite, React, Typescript, and some additional libraries to enhance the user experience.

## Technologies Used

- **Vite**: A fast frontend build tool that provides a lightning-fast development server.
- **React**: A popular JavaScript library for building user interfaces.
- **Typescript**: A superset of JavaScript that adds static typing to the language.
- **React-awesome-reveal**: A React library for animating elements as they enter the viewport.
- **React Spring**: A spring-physics based animation library for React.
- **React Query**: A library for managing, caching, and syncing asynchronous and remote data.

## Getting Started

To begin with, follow these steps:

1. Install project dependencies:

   ```bash
   npm install
   ```
2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:5173/](http://localhost:5173/) in your browser to view the application.

## Folder Structure

The project follows a structured organization for better maintainability. Here's an overview of the main folders:

- **src**: Contains the source code of the application.
  - **components**: Reusable React components.
  - **pages**: Top-level pages for the application.
  - **styles**: Stylesheets and design-related files.

## Usage

- The application features a responsive design, ensuring a seamless experience across various devices.
- Explore different sections, and don't forget to check out the exciting features powered by React-awesome-reveal, React Spring, and React Query.
- The Cart functionality is yet to be implemented, so stay tuned for updates!

## Contributing

Contributions are welcome! If you have suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request. Please follow the existing coding style and commit message conventions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

A big thank you to the open-source community and the creators of the libraries used in this project. Your contributions make projects like these possible.

Happy coding!


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
