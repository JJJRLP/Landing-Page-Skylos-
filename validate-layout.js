#!/usr/bin/env node

/**
 * Validation script for alternating section layout implementation
 * This script checks that the implementation meets all requirements
 */

const fs = require('fs');
const path = require('path');

const componentPath = path.join(__dirname, 'src/components/photography-banner.tsx');

function validateImplementation() {
  console.log('🔍 Validating alternating section layout implementation...\n');
  
  if (!fs.existsSync(componentPath)) {
    console.error('❌ Component file not found:', componentPath);
    process.exit(1);
  }
  
  const content = fs.readFileSync(componentPath, 'utf8');
  let passed = 0;
  let total = 0;
  
  // Test 1: Check that colons are removed from section titles
  total++;
  const hasColonsInTitles = /THE (PROBLEM|SOLUTION|PROCESS):\s*<span/.test(content);
  if (!hasColonsInTitles) {
    console.log('✅ Test 1: Section titles do not contain colons');
    passed++;
  } else {
    console.log('❌ Test 1: Found colons in section titles');
  }
  
  // Test 2: Check Problem section has standard layout (no reverse)
  total++;
  const problemSectionMatch = content.match(/Problem Section[\s\S]*?<div className="section-container([^"]*)">/);
  if (problemSectionMatch && !problemSectionMatch[1].includes('reverse')) {
    console.log('✅ Test 2: Problem section uses standard layout');
    passed++;
  } else {
    console.log('❌ Test 2: Problem section layout incorrect');
  }
  
  // Test 3: Check Solution section has content first (title on right side)
  total++;
  const solutionSectionMatch = content.match(/Solution Section[\s\S]*?<div className="section-container">\s*<div className="benefits-grid">/);
  if (solutionSectionMatch) {
    console.log('✅ Test 3: Solution section has title on right side');
    passed++;
  } else {
    console.log('❌ Test 3: Solution section layout incorrect');
  }
  
  // Test 4: Check Process section has title first (left side)
  total++;
  const processSectionMatch = content.match(/Process Section[\s\S]*?<div className="section-container">\s*<div className="section-content">/);
  if (processSectionMatch) {
    console.log('✅ Test 4: Process section has title on left side');
    passed++;
  } else {
    console.log('❌ Test 4: Process section layout incorrect');
  }
  
  // Test 5: Check Competitive Advantages section has content first (title on right side)
  total++;
  const advantagesSectionMatch = content.match(/Competitive Advantages Section[\s\S]*?<div className="section-container">\s*<div className="advantages-grid">/);
  if (advantagesSectionMatch) {
    console.log('✅ Test 5: Competitive Advantages section has title on right side');
    passed++;
  } else {
    console.log('❌ Test 5: Competitive Advantages section layout incorrect');
  }
  
  // Test 6: Check responsive CSS is preserved
  total++;
  const hasResponsiveCSS = content.includes('@media screen and (max-width: 767px)') && 
                          content.includes('.section-container.reverse {\n            direction: ltr;\n          }');
  if (hasResponsiveCSS) {
    console.log('✅ Test 6: Responsive CSS is preserved');
    passed++;
  } else {
    console.log('❌ Test 6: Responsive CSS missing or incorrect');
  }
  
  // Test 7: Check header section is unchanged
  total++;
  const hasInfoSection = content.includes('className="info-section"') && 
                        content.includes('className="left-part"') && 
                        content.includes('className="right-part"');
  if (hasInfoSection) {
    console.log('✅ Test 7: Header section structure preserved');
    passed++;
  } else {
    console.log('❌ Test 7: Header section structure changed');
  }
  
  // Test 8: Check CTA section is unchanged
  total++;
  const hasCTASection = content.includes('className="cta-section"') && 
                       content.includes('className="cta-container"');
  if (hasCTASection) {
    console.log('✅ Test 8: CTA section structure preserved');
    passed++;
  } else {
    console.log('❌ Test 8: CTA section structure changed');
  }
  
  console.log(`\n📊 Results: ${passed}/${total} tests passed`);
  
  if (passed === total) {
    console.log('🎉 All tests passed! Implementation is correct.');
    process.exit(0);
  } else {
    console.log('⚠️  Some tests failed. Please review the implementation.');
    process.exit(1);
  }
}

validateImplementation();