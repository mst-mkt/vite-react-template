import { createFileRoute } from '@tanstack/react-router'
import { PROJECT_NAME } from '../../constants/project'

export const Route = createFileRoute('/_app/')({
  component: () => <Home />,
})

const Home = () => (
  <div>
    <p>Hello {PROJECT_NAME} !</p>
  </div>
)
