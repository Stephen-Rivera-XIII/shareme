import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'seagreen-pheasant',

  projectId: '4dsshrzd',
  dataset: 'shareme_jsm',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
