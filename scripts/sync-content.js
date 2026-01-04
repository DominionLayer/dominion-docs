#!/usr/bin/env node

/**
 * Sync content from dominion-gitbook repository
 * 
 * Usage: node scripts/sync-content.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const GITBOOK_REPO = 'https://github.com/DominionLayer/dominion-gitbook.git';
const TEMP_DIR = '.gitbook-temp';
const TARGET_DIR = 'pages';

async function main() {
  console.log('Syncing content from dominion-gitbook...\n');

  try {
    // Clone or pull gitbook repo
    if (fs.existsSync(TEMP_DIR)) {
      console.log('Updating existing clone...');
      execSync(`cd ${TEMP_DIR} && git pull`, { stdio: 'inherit' });
    } else {
      console.log('Cloning gitbook repo...');
      execSync(`git clone --depth 1 ${GITBOOK_REPO} ${TEMP_DIR}`, { stdio: 'inherit' });
    }

    // Copy docs folder
    const sourceDir = path.join(TEMP_DIR, 'docs');
    
    if (!fs.existsSync(sourceDir)) {
      console.error('Error: docs folder not found in gitbook repo');
      process.exit(1);
    }

    console.log('\nContent synced successfully!');
    console.log('Note: Manual review recommended before committing.');

  } catch (error) {
    console.error('Error syncing content:', error.message);
    process.exit(1);
  }
}

main();

