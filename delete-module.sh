rm -rf node_modules/esbuild
rm -rf node_modules/@esbuild
rm -rf node_modules/@swc
rm -rf node_modules/sass-embedded
rm -rf node_modules/sass-embedded-*
rm -rf node_modules/typescript
rm -rf node_modules/@types
rm -rf node_modules/@astrojs/react
rm -rf node_modules/@astrojs/sitemap
rm -rf node_modules/.astro/assets
find node_modules -type d -name "test" -exec rm -rf {} +
find node_modules -type d -name "tests" -exec rm -rf {} +
find node_modules -type d -name "doc" -exec rm -rf {} +
find node_modules -type d -name "docs" -exec rm -rf {} +
find node_modules -type d -name "example" -exec rm -rf {} +
find node_modules -type d -name "examples" -exec rm -rf {} +
find node_modules -type d -name ".bin" -exec rm -rf {} +
find node_modules -type f -name "*.md" -delete
find node_modules -type f -name "*.map" -delete
find node_modules -type f -name "*.ts" -delete
find node_modules -type f -name "*.tsx" -delete
find node_modules -type f -iname "LICENSE*" -delete
