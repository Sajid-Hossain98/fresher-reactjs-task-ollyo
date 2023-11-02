# Hello!

Hi! My name is B M Sajid Hossain. And I have applied to Ollyo for the post of Fresher React JS Developer. I have completed the given assessment task. Some details about what I have done so far.

## What I've Done

1. **Gallery Layout:**
   - Implemented a grid layout using tailwind css
   - The gallery displays one feature image larger than others.
2. **Sorting:**
   - Enabled reordering functionality to reorder any image.
   - Implemented the drag and drop functionality for reordering.
3. **Deleting Multiple Images:**
   - Implemented functionalities for users to select multiples images and delete them.
   - Given a clear visual indication of selected images.
4. **Setting Feature Image:**
   - Users can set feature image by sorting.
   - The first image is the feature image and it is visually distinct from other images.
5. **User Experience:**
   - It has a completely responsive and smooth interface.
6. **Live Demo:**
   - [Live Demo of the application](https://fresher-reactjs-task-ollyo.vercel.app/)

## Additionally I've done

1. **Image Upload**
   - I've added functionality to upload images to Cloudinary by utilizing the Cloudinary API to upload.
   - Users can select multiple image files to upload at the same time.
   - I've used 'Redux Toolkit' to manage the image URLs and the states.
   - Integrated 'redux-persist' with Redux Toolkit for persisting Redux store across sessions, which uses the browsers localstorage as storage.

## React + TypeScript + Vite

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
