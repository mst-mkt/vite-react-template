import { IconBrandGithub } from '@tabler/icons-react'
import { PROJECT_AUTHOR, PROJECT_NAME, PROJECT_REPOSITORY_URL } from '../../constants/project'

export const Footer = () => (
  <footer className="mx-auto flex w-full max-w-[600px] flex-col gap-y-2 px-6 py-4">
    <div className="flex w-full items-center gap-x-4">
      <p className="font-bold text-lg">{PROJECT_NAME}</p>
      <div className="h-[1px] grow bg-gray-400" />
    </div>
    <ul>
      <li>
        <a
          href={PROJECT_REPOSITORY_URL}
          className="flex items-center gap-x-1 transition-colors hover:text-accent"
        >
          <IconBrandGithub size={16} /> GitHub
        </a>
      </li>
    </ul>
    <p className="text-foreground-300 text-sm">
      {/* biome-ignore lint/correctness/noUndeclaredVariables: its declared in `src/types/vite-defined.d.ts` */}
      &copy; {__UPDATED_YEAR__} {PROJECT_AUTHOR.join(', ')}
    </p>
  </footer>
)
