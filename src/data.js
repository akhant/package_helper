const data = [
  {
    tabKey: "1",
    name: "Webpack",
    value: [
      {
        name: "webpack",
        dev: true,
        key: 1
      },
      {
        name: "webpack-dev-server",
        dev: true,
        key: 2
      },
      {
        name: "html-webpack-plugin",
        dev: true,
        key: 3
      },
      {
        name: "file-loader",
        dev: true,
        key: 4
      },
      {
        name: "url-loader",
        dev: true,
        key: 5
      },
      {
        name: "css-loader",
        dev: true,
        key: 6
      },
      {
        name: "style-loader",
        dev: true,
        key: 7
      },
      {
        name: "sass-loader",
        dev: true,
        key: 8
      },
      {
        name: "node-sass",
        dev: true,
        key: 9
      },
      {
        name: "postcss-loader",
        dev: true,
        key: 10
      },
    {
        name: "autoprefixer",
        dev: true,
        key: 11
      }
    ]
  },
  {
    tabKey: "2",
    name: "React",
    value: [
      {
        name: "react",
        dev: false,
        key: 1
      },
      {
        name: "react-dom",
        dev: false,
        key: 2
      },
      {
        name: "prop-types",
        dev: true,
        key: 3
      },
      {
        name: "react-hot-loader",
        dev: true,
        key: 4
      },
      {
        name: "react-router-dom",
        dev: false,
        key: 5
      },
      {
        name: "history",
        dev: false,
        key: 6
      },
      {
        name: "react-bootstrap",
        dev: false,
        key: 7
      }
    ]
  },
  {
    tabKey: "3",
    name: "Babel",
    value: [
      {
        name: "babel-core",
        dev: true,
        key: 1
      },
      {
        name: "babel-preset-react",
        dev: true,
        key: 2
      },
      {
        name: "babel-preset-es2015",
        dev: true,
        key: 3
      },
      {
        name: "babel-preset-stage-0",
        dev: true,
        key: 4
      },
      {
        name: "babel-preset-react-hmre",
        dev: true,
        key: 5
      },
      {
        name: "babel-eslint",
        dev: true,
        key: 6
      },
      {
        name: "babel-loader",
        dev: true,
        key: 7
      }
    ]
  },
  {
    tabKey: "4",
    name: "Eslint",
    value: [
      {
        name: "eslint",
        dev: false,
        key: 1
      },
      {
        name: "eslint-plugin-import",
        dev: false,
        key: 2
      },
      {
        name: "eslint-plugin-jsx-a11y",
        dev: true,
        key: 3
      },
      {
        name: "eslint-config-airbnb",
        dev: true,
        key: 4
      },
      {
        name: "eslint-plugin-react",
        dev: true,
        key: 5
      }
    ]
  },
  {
    tabKey: "5",
    name: "Redux",
    value: [
      {
        name: "redux",
        dev: false,
        key: 1
      },
      {
        name: "react-redux",
        dev: false,
        key: 2
      },
      {
        name: "react-router-redux",
        dev: false,
        key: 3
      },
      {
        name: "redux-thunk",
        dev: false,
        key: 4
      },
      {
        name: "redux-form",
        dev: false,
        key: 5
      }
    ]
  },
  {
    tabKey: "6",
    name: "Helpers",
    value: [
      {
        name: "lodash",
        dev: false,
        key: 1
      },
      {
        name: "concurrently",
        dev: true,
        key: 2
      },
      {
        name: "immutable",
        dev: false,
        key: 3
      },
      {
        name: "faker",
        dev: true,
        key: 4
      },
      {
        name: "reselect",
        dev: true,
        key: 5
      },
      {
        name: "cookie-session",
        dev: true,
        key: 6
      }
    ]
  },
  {
    tabKey: "7",
    name: "Node",
    value: [
      {
        name: "express",
        dev: false,
        key: 1
      },
      {
        name: "body-parser",
        dev: false,
        key: 2
      },
      {
        name: "cors",
        dev: false,
        key: 3
      },
      {
        name: "jsonwebtoken",
        dev: false,
        key: 4
      },
      {
        name: "bcrypt",
        dev: false,
        key: 5
      },
      {
        name: "nodemon",
        dev: true,
        key: 6
      },
      {
        name: "babel-cli",
        dev: false,
        key: 7
      },
      {
        name: "express-session",
        dev: false,
        key: 8
      },
      {
        name: "express-handlebars",
        dev: false,
        key: 9
      },
      {
        name: "handlebars-helpers",
        dev: false,
        key: 10
      },
      {
        name: "passport",
        dev: false,
        key: 11
      },
      {
        name: "passport-local",
        dev: false,
        key: 12
      },
      {
        name: "express-flash",
        dev: false,
        key: 13
      }
    ]
  },
  {
    tabKey: "8",
    name: "MongoDB",
    value: [
      {
        name: "mongoose",
        dev: false,
        key: 1
      },
      {
        name: "mongoose-unique-validator",
        dev: true,
        key: 2
      }
    ]
  },
];

export default data;
