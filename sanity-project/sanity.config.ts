import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {withDocumentI18nPlugin} from '@sanity/document-internationalization'

const languages = [
  {id: 'en-us', title: 'English (US)'},
  {id: 'vi-vi', title: 'Tiếng Việt'},
]

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: '8eyalshv',
  dataset: 'production',

  plugins: withDocumentI18nPlugin([deskTool(), visionTool()], {
    base: languages[0].id,
    languages,
    withTranslationsMaintenance: false,
    fieldNames: {
      lang: '__i18n_lang',
      references: '__i18n_refs',
      baseReference: '__i18n_base',
    },
  }),

  schema: {
    types: schemaTypes,
  },
})
