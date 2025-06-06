import React from 'react'
import ReactDom from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { App } from './App.tsx'
import { Head } from './components/shared/Head.tsx'
import { PROJECT_NAME } from './constants/project.ts'
import './styles/index.css'
import { loadTheme } from './hooks/use-theme.ts'

const rootDom = document.getElementById('root')
if (rootDom === null) throw new Error('root element not found')

loadTheme()

ReactDom.createRoot(rootDom).render(
  <React.StrictMode>
    <HelmetProvider>
      <Head title={PROJECT_NAME} />
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
