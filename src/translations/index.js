import {get, merge} from 'lodash'

function getFileNames() {
  return require.context('./', true, /\.js$/)
}

const context = getFileNames();

const files = context.keys()
  .filter(fileName => fileName !== './index.js')
  .reduce((translations, fileName) => {
    const fileTranslations = context(fileName);

    const [language] = fileName.replace('./', '').replace('.js', '').split('/');

    const languageTranslations = get(translations, language, {});

    return {
      ...translations,
      [language]: {
        ...merge(languageTranslations, fileTranslations)
      }
    }
  }, {});

export default files
