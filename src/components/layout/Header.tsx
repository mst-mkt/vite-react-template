import { IconBrightness } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'
import { PROJECT_NAME } from '../../constants/project'
import { useTheme } from '../../hooks/useTheme'

export const Header = () => {
  const { toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 border-b bg-[#fff2] backdrop-blur-md">
      <div className="mx-auto flex max-w-[600px] items-center gap-y-4 px-6 py-4 font-bold text-2xl">
        <Link to="/" className="grow transition-colors hover:text-[#4c6]">
          {PROJECT_NAME}
        </Link>
        <button
          type="button"
          onClick={toggleTheme}
          className="w-fit rounded-md p-2 transition-colors hover:bg-gray-200 focus:outline-none"
        >
          <IconBrightness size={20} />
        </button>
      </div>
    </header>
  )
}
