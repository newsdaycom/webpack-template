<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/newsdaycom/webpack-template">
    <img src="https://www.newsday.com/img/newsdayLogo.svg" alt="Logo" width="140" height="48">
  </a>

<h3 align="center">Webpack React Template</h3>

  <p align="center">
    A standard framework for special projects powered by react and scss
    <br />
    <a href="https://github.com/newsdaycom/webpack-template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/newsdaycom/webpack-template/issues">Report Bug</a>
    ·
    <a href="https://github.com/newsdaycom/webpack-template/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

A standard framework for special projects powered by react and scss. Webpack allows you to bundle your codebase, opening the door to using react, scss and npm packages in the browser with great ease. The webpack rules include transpiling via Babel for excellent compatibility.

This template also includes hot reload logic so that as you work, your browser will auto refresh, showing your changes. The webpack logic includes opinionated code formatting and linting to ensure your code adheres to Newsday's standards. Auto formatting helps ensure consistent formatting and clean PRs between multiple developers.

Exceptions to linting, formatting and committing can be added using the `.eslintignore`, `.gitignore`, and `.prettierignore` files.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][react.js]][react-url]
- [![SCSS][scss]][scss-url]
- [![Webpack][webpack]][webpack-url]
- [![ESLint][eslint]][eslint-url]
- [![Prettier][prettier]][prettier-url]
- [![Babel][babel]][babel-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Copy this template's contents into your project path. Once you've done that, navigate to the directory on the command line and run

```sh
yarn install
```

You can start up webpack in development mode after by doing

```sh
yarn dev
```

You can also do dev, without hot reload, by doing

```sh
yarn dev:no-serve
```

Prior committing to your repo, you stop your dev process and run

```sh
yarn build
```

This will compile all of your production-ready code, with everything minified.

## Usage

Your project needs to include some variation of

```
<script src="/path/to/dist/bundle.js">
```

React will mount inside a DOM element. By default, this template expects `#app` to exist on the page. You can change this in `src/index.jsx`. Likewise all of your code should be authored in `src/`. When creating components, you can safely duplicate the `src/components/App` directory and modify the SCSS, JSX and JS files in the dupe to reflect your components needs. This template uses `node-scss` so including your component's styles is as easy as adding the following to the top of the JSX file

```
import './path/to/styles.scss'
```

The directory also includes an index.js file, which can be used to declare the directory's default and named exports. This allows for easy imports like

```
import App from './components/App'
```

instead of

```
import App './components/App/App'
```

### Prerequisites

- node
- yarn
  ```sh
  sudo npm install yarn -g
  ```

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

TC McCarthy - [@tc_mccarthy](https://twitter.com/tc_mccarthy) - tc.mccarthy@newsday.com

Project Link: [https://github.com/newsdaycom/webpack-template](https://github.com/newsdaycom/webpack-template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/newsdaycom/webpack-template.svg?style=for-the-badge
[contributors-url]: https://github.com/newsdaycom/webpack-template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/newsdaycom/webpack-template.svg?style=for-the-badge
[forks-url]: https://github.com/newsdaycom/webpack-template/network/members
[stars-shield]: https://img.shields.io/github/stars/newsdaycom/webpack-template.svg?style=for-the-badge
[stars-url]: https://github.com/newsdaycom/webpack-template/stargazers
[issues-shield]: https://img.shields.io/github/issues/newsdaycom/webpack-template.svg?style=for-the-badge
[issues-url]: https://github.com/newsdaycom/webpack-template/issues
[license-shield]: https://img.shields.io/github/license/newsdaycom/webpack-template.svg?style=for-the-badge
[license-url]: https://github.com/newsdaycom/webpack-template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/newsday
[product-screenshot]: images/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[scss]: https://img.shields.io/badge/SCSS-20232A?style=for-the-badge&logo=sass&logoColor=61DAFB
[scss-url]: https://sass-lang.com/
[webpack]: https://img.shields.io/badge/Webpack-20232A?style=for-the-badge&logo=webpack&logoColor=61DAFB
[webpack-url]: https://webpack.js.org/
[eslint]: https://img.shields.io/badge/ESLint-20232A?style=for-the-badge&logo=eslint&logoColor=61DAFB
[eslint-url]: https://eslint.org/
[prettier]: https://img.shields.io/badge/Prettier-20232A?style=for-the-badge&logo=prettier&logoColor=61DAFB
[prettier-url]: https://prettier.io/
[babel]: https://img.shields.io/badge/Babel-20232A?style=for-the-badge&logo=babel&logoColor=61DAFB
[babel-url]: https://babeljs.io/
