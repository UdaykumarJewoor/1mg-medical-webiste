const fs = require('fs');
const path = require('path');

const allowedExtensions = ['.html', '.css', '.js', '.json', '.txt', '.xml', '.svg'];

// Helper to recursively find all target files
function getTargetFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    
    // Ignore the script itself and common dependency/version control directories
    if (filePath === __filename) return;
    
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        getTargetFiles(filePath, fileList);
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (allowedExtensions.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });
  return fileList;
}

const rootDir = __dirname;
console.log(`Scanning for text files in: ${rootDir}`);
const targetFiles = getTargetFiles(rootDir);
console.log(`Found ${targetFiles.length} text files to clean.`);

targetFiles.forEach(filePath => {
  const relativePath = path.relative(rootDir, filePath);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // --- 1. NORMAL SLASHES (HTML, links, attributes) ---
  content = content.replace(/https:\/\/keerthymedicals\.com\/wp-content\//gi, '/wp-assets/wp-content/');
  content = content.replace(/https:\/\/keerthymedicals\.com\/wp-includes\//gi, '/wp-assets/wp-includes/');
  content = content.replace(/https:\/\/keerthymedicals\.com\/case_study\//gi, '/wp-assets/case_study/');
  content = content.replace(/https:\/\/keerthymedicals\.com\/our_services\//gi, '/wp-assets/our_services/');
  content = content.replace(/https:\/\/keerthymedicals\.com\/about-us\//gi, '/about-us/');
  content = content.replace(/https:\/\/keerthymedicals\.com\/services\//gi, '/services/');
  content = content.replace(/https:\/\/keerthymedicals\.com\/products\//gi, '/products/');
  content = content.replace(/https:\/\/keerthymedicals\.com\/branches\//gi, '/branches/');
  content = content.replace(/https:\/\/keerthymedicals\.com\/contact-us\//gi, '/contact-us/');
  content = content.replace(/https:\/\/keerthymedicals\.com\/faqs\//gi, '/faqs/');
  content = content.replace(/https:\/\/keerthymedicals\.com\//gi, '/');
  content = content.replace(/https:\/\/keerthymedicals\.com/gi, '/');

  // --- 2. ESCAPED SLASHES (JSON scripts, Elementor configs, Yoast schema) ---
  content = content.replace(/https:\\\/\\\/keerthymedicals\.com\\\/wp-content\\\//gi, '\\/wp-assets\\/wp-content\\/');
  content = content.replace(/https:\\\/\\\/keerthymedicals\.com\\\/wp-includes\\\//gi, '\\/wp-assets\\/wp-includes\\/');
  content = content.replace(/https:\\\/\\\/keerthymedicals\.com\\\/case_study\\\//gi, '\\/wp-assets\\/case_study\\/');
  content = content.replace(/https:\\\/\\\/keerthymedicals\.com\\\/our_services\\\//gi, '\\/wp-assets\\/our_services\\/');
  content = content.replace(/https:\\\/\\\/keerthymedicals\.com\\\/about-us\\\//gi, '\\/about-us\\/');
  content = content.replace(/https:\\\/\\\/keerthymedicals\.com\\\/services\\\//gi, '\\/services\\/');
  content = content.replace(/https:\\\/\\\/keerthymedicals\.com\\\/products\\\//gi, '\\/products\\/');
  content = content.replace(/https:\\\/\\\/keerthymedicals\.com\\\/branches\\\//gi, '\\/branches\\/');
  content = content.replace(/https:\\\/\\\/keerthymedicals\.com\\\/contact-us\\\//gi, '\\/contact-us\\/');
  content = content.replace(/https:\\\/\\\/keerthymedicals\.com\\\/faqs\\\//gi, '\\/faqs\\/');
  content = content.replace(/https:\\\/\\\/keerthymedicals\.com\\\//gi, '\\/');
  content = content.replace(/https:\\\/\\\/keerthymedicals\.com/gi, '\\/');

  // --- 3. URL-ENCODED SLASHES (oEmbed queries, encoded URLs) ---
  content = content.replace(/https%3A%2F%2Fkeerthymedicals\.com%2Fwp-content%2F/gi, '%2Fwp-assets%2Fwp-content%2F');
  content = content.replace(/https%3A%2F%2Fkeerthymedicals\.com%2Fwp-includes%2F/gi, '%2Fwp-assets%2Fwp-includes%2F');
  content = content.replace(/https%3A%2F%2Fkeerthymedicals\.com%2Fcase_study%2F/gi, '%2Fwp-assets%2Fcase_study%2F');
  content = content.replace(/https%3A%2F%2Fkeerthymedicals\.com%2Four_services%2F/gi, '%2Fwp-assets%2Four_services%2F');
  content = content.replace(/https%3A%2F%2Fkeerthymedicals\.com%2Fabout-us%2F/gi, '%2Fabout-us%2F');
  content = content.replace(/https%3A%2F%2Fkeerthymedicals\.com%2Fservices%2F/gi, '%2Fservices%2F');
  content = content.replace(/https%3A%2F%2Fkeerthymedicals\.com%2Fproducts%2F/gi, '%2Fproducts%2F');
  content = content.replace(/https%3A%2F%2Fkeerthymedicals\.com%2Fbranches%2F/gi, '%2Fbranches%2F');
  content = content.replace(/https%3A%2F%2Fkeerthymedicals\.com%2Fcontact-us%2F/gi, '%2Fcontact-us%2F');
  content = content.replace(/https%3A%2F%2Fkeerthymedicals\.com%2Ffaqs%2F/gi, '%2Ffaqs%2F');
  content = content.replace(/https%3A%2F%2Fkeerthymedicals\.com%2F/gi, '%2F');
  content = content.replace(/https%3A%2F%2Fkeerthymedicals\.com/gi, '%2F');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Completely cleaned all URLs in: ${relativePath}`);
  } else {
    console.log(`ℹ️ Already clean: ${relativePath}`);
  }
});

console.log('All text files have been thoroughly cleaned of absolute production domain URLs (normal, escaped, and URL-encoded).');
