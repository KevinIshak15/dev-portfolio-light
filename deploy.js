import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting deployment process...');

// Step 1: Build the project
console.log('📦 Building project...');
execSync('npm run build', { stdio: 'inherit' });

// Step 2: Copy built files to root
console.log('📁 Copying built files to root...');
const distPath = path.join(__dirname, 'dist');
const rootFiles = fs.readdirSync(distPath);

rootFiles.forEach(file => {
  const srcPath = path.join(distPath, file);
  const destPath = path.join(__dirname, file);
  
  if (fs.statSync(srcPath).isDirectory()) {
    if (fs.existsSync(destPath)) {
      fs.rmSync(destPath, { recursive: true });
    }
    fs.cpSync(srcPath, destPath, { recursive: true });
  } else {
    fs.copyFileSync(srcPath, destPath);
  }
});

// Step 3: Create 404.html for SPA routing
console.log('🔧 Creating 404.html for SPA routing...');
const spa404Content = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script type="text/javascript">
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>`;

fs.writeFileSync('404.html', spa404Content);

// Step 4: Update index.html with SPA routing script
console.log('🔄 Adding SPA routing script to index.html...');
let indexContent = fs.readFileSync('index.html', 'utf8');

const spaScript = `
    <!-- Start Single Page Apps for GitHub Pages -->
    <script type="text/javascript">
      (function(l) {
        if (l.search[1] === '/' ) {
          var decoded = l.search.slice(1).split('&').map(function(s) { 
            return s.replace(/~and~/g, '&')
          }).join('?');
          window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      }(window.location))
    </script>
    <!-- End Single Page Apps for GitHub Pages -->`;

// Insert the script before closing body tag
indexContent = indexContent.replace('</body>', spaScript + '\n  </body>');
fs.writeFileSync('index.html', indexContent);

console.log('✅ Deployment files ready!');
console.log('📝 Next steps:');
console.log('   1. git add .');
console.log('   2. git commit -m "Deploy to GitHub Pages"');
console.log('   3. git push origin main');
