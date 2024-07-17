import { createFileRoute } from '@tanstack/react-router'
import { PROJECT_NAME } from '../constants/project'

export const Route = createFileRoute('/')({
  component: () => <div>Hello {PROJECT_NAME} !</div>,
})
