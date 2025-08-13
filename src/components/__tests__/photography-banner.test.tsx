import { render, screen } from '@testing-library/react'
import PhotographyBanner from '../photography-banner'

describe('PhotographyBanner Alternating Layout', () => {
  beforeEach(() => {
    render(<PhotographyBanner />)
  })

  test('section titles should not contain colons', () => {
    // Check that titles don't end with colons
    const problemTitle = screen.getByText(/THE PROBLEM/)
    const solutionTitle = screen.getByText(/THE SOLUTION/)
    const processTitle = screen.getByText(/OUR PROCESS/)
    
    expect(problemTitle.textContent).not.toMatch(/:$/)
    expect(solutionTitle.textContent).not.toMatch(/:$/)
    expect(processTitle.textContent).not.toMatch(/:$/)
  })

  test('sections should have correct alternating layout classes', () => {
    const sections = document.querySelectorAll('.professional-section')
    
    // Problem section (index 0) - should have standard layout (no reverse)
    const problemSection = sections[0]?.querySelector('.section-container')
    expect(problemSection).not.toHaveClass('reverse')
    
    // Solution section (index 1) - should have reverse layout
    const solutionSection = sections[1]?.querySelector('.section-container')
    expect(solutionSection).toHaveClass('reverse')
    
    // Process section (index 2) - should have standard layout (no reverse)
    const processSection = sections[2]?.querySelector('.section-container')
    expect(processSection).not.toHaveClass('reverse')
    
    // Advantages section (index 3) - should have reverse layout
    const advantagesSection = sections[3]?.querySelector('.section-container')
    expect(advantagesSection).toHaveClass('reverse')
  })

  test('header and CTA sections should remain unchanged', () => {
    // Header section should maintain its structure
    const headerSection = document.querySelector('.info-section')
    expect(headerSection).toBeInTheDocument()
    expect(headerSection?.querySelector('.left-part')).toBeInTheDocument()
    expect(headerSection?.querySelector('.right-part')).toBeInTheDocument()
    
    // CTA section should not use section-container class
    const ctaSection = document.querySelector('.cta-section')
    expect(ctaSection).toBeInTheDocument()
    expect(ctaSection?.querySelector('.section-container')).not.toBeInTheDocument()
  })

  test('all section titles should maintain proper highlighting', () => {
    // Check that highlight spans are preserved
    const highlights = document.querySelectorAll('.section-title .highlight')
    expect(highlights.length).toBeGreaterThan(0)
    
    // Verify specific highlighted text
    expect(screen.getByText('WHY AI IS NO LONGER AN OPTION')).toHaveClass('highlight')
    expect(screen.getByText('CUSTOM CONVERSATIONAL AI')).toHaveClass('highlight')
    expect(screen.getByText('FASTER, SMARTER, CUSTOM')).toHaveClass('highlight')
    expect(screen.getByText('ADVANTAGES')).toHaveClass('highlight')
  })
})