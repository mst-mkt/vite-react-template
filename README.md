# Vite and React template

Template for Vite and React projects.

> [!NOTE]
> This Template is basically for my personal use, but you can use it if you want. \
> If you have any suggestions or improvements, feel free to open an issue or a pull request.

## Tech Stack

| Name                   | Purpose                   |
| ---------------------- | ------------------------- |
| Vite                   | Build tool                |
| React                  | UI library                |
| Tailwind CSS           | CSS framework             |
| @tanstack/react-router | Routing library           |
| Jotai                  | State management library  |
| zod                    | Schema validation library |
| react-helmet-async     | Dynamic meta tags         |
| @tabler/icons-react    | Icon component library    |

### For development

| Name        | Purpose                     |
| ----------- | --------------------------- |
| pnpm        | Package manager             |
| biome       | Formatter and linter        |
| husky       | Git hooks                   |
| lint-staged | Run linters on staged files |

## Development

### Install dependencies

```sh
pnpm i
```

### Run development server

```sh
pnpm dev
```

### Build

```sh
pnpm build
```

### Lint and format

```sh
pnpm check
```

with applying fixes:

```sh
pnpm fix
```
