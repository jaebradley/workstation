// https://github.com/chentsulin/electron-react-boilerplate/issues/1321#issuecomment-349767539

const path = require('path');

module.exports = {
  extensions: ['.js', '.jsx'],
  alias: {
    Todos: path.resolve(__dirname, '.', 'src', 'config'),
  },
};
