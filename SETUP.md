# Quick Setup Guide

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

This will install:
- TanStack Start and React Router
- React 18.3
- Tailwind CSS
- TypeScript
- Vinxi (the build tool)

### 2. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

### 4. Run Production Build

```bash
npm start
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, modify the dev script in `package.json`:

```json
"dev": "vinxi dev --port 3001"
```

### Installation Errors

If you encounter dependency conflicts:

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Make sure you're using Node.js 18 or higher:

```bash
node --version
```

## Project Structure

- `app/routes/` - File-based routing
- `app/components/` - React components
- `app/styles/` - Global CSS
- `app/client.tsx` - Client entry point
- `app/ssr.tsx` - Server entry point

## Key Features

✅ Hero section with animations
✅ Footer with navigation
✅ Fully responsive
✅ TypeScript enabled
✅ Tailwind CSS styling
✅ Production-ready

## Development Tips

1. **Hot Module Replacement (HMR)** is enabled - changes appear instantly
2. **TypeScript errors** show in the terminal
3. **Tailwind classes** are purged in production for optimal bundle size
4. **Routes** are automatically generated from the `routes/` folder

## Need Help?

Check the main README.md for:
- Detailed design decisions
- Customization guide
- Learning outcomes
- Resources used

Happy coding! 🚀
