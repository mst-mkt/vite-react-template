import { createFileRoute } from '@tanstack/react-router'
import { Head } from '../../components/shared/Head'
import { PROJECT_NAME } from '../../constants/project'

export const Route = createFileRoute('/_layout/')({
  component: () => <Home />,
})

const Home = () => (
  <div>
    <Head title="Home" description={`Top Page of ${PROJECT_NAME}`} />
    <p>Hello {PROJECT_NAME} !</p>
  </div>
)
