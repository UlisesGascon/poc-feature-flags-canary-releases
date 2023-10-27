const pkg = require('../package.json')

// Default feature flags
const ff = {
    showSystemDetails: false,
}

// Overwrite feature flags in Canary Mode
if(pkg.version.includes('canary')) {
    ff.showSystemDetails = true
}

// Prevent modification of feature flags
Object.freeze(ff)

const getFeatureFlags = () => ff

module.exports = {
    getFeatureFlags
}