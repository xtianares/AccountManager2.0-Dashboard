// folders paths
module.exports = {
  site: {
    src: '_src/',
    dest: '_build/'
  },
  html: {
    sitePages: '_src/pages/**/*.+(html|njk)',
    siteFolder: '_src/pages/',
    templatesFiles: '_src/templates/**/*',
    templatesFolder: '_src/templates/'
  },
  images: {
    siteFiles: '_src/images/**/*',
    siteFolder: '_src/images/',
    siteDest: '_build/images/',
  },
  css: {
    siteFiles: '_src/scss/**/*',
    siteFolder: '_src/scss/',
    siteSass: '_src/scss/main.scss',
    siteDest: '_build/css/',
    bsFiles: '_src/bootstrap/scss/**/*',
    bsFolder: '_src/bootstrap/scss/',
    bsSass: '_src/scss/bootstrap/scss/bootstrap.scss',
    bsDest: '_build/css/bootstrap'
  },
  js: {
    siteFiles: '_src/js/**/*',
    siteRootFiles: '_src/js/*',
    siteFolder: '_src/js/',
    siteDest: '_build/js/',
  },
  downloads: {
    files: '_src/downloads/**/*',
    folder: '_src/downloads',
    dest: '_build/downloads/'
  },
  root: {
    files: '_src/root/**/*'
  }
}
