"use client"

import React, { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface NavigationHeaderProps {
  className?: string
  onLoginClick?: () => void
  onSignUpClick?: () => void
}

const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  className = "",
  onLoginClick,
  onSignUpClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleBrandClick = () => {
    window.location.href = "/"
  }

  const handleLoginClick = () => {
    if (onLoginClick) {
      onLoginClick()
    } else {
      console.log("Login clicked - backend integration pending")
      alert("Login functionality will be connected to backend")
    }
  }

  const handleSignUpClick = () => {
    if (onSignUpClick) {
      onSignUpClick()
    } else {
      console.log("Sign Up clicked - backend integration pending")
      alert("Sign Up functionality will be connected to backend")
    }
  }



  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const headerHeight = 80 // Height of the header
      setIsScrolled(scrollPosition > headerHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap');
        
        .navigation-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: rgba(15, 20, 25, 0.8);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .navigation-header.scrolled {
          background: rgba(15, 20, 25, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(122, 40, 138, 0.3);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          transform: translateY(-2px);
        }
        
        .nav-container {
          width: 100%;
          height: 80px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .brand {
          font-family: 'Lexend', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        
        .brand:hover {
          color: #b39ddb;
        }
        
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        
        .auth-buttons {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .auth-button {
          font-family: 'Lexend', sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.3);
          padding: 10px 20px;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .auth-button:hover {
          border-color: #7a288a;
          color: #7a288a;
        }
        
        .cta-button {
          font-family: 'Lexend', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          background: linear-gradient(135deg, #7a288a, #b39ddb);
          border: none;
          padding: 12px 24px;
          border-radius: 25px;
          cursor: pointer;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(122, 40, 138, 0.3);
        }
        
        .mobile-menu-toggle {
          display: none;
          background: transparent;
          border: none;
          color: #ffffff;
          cursor: pointer;
          padding: 8px;
        }
        
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 20, 25, 0.95);
          backdrop-filter: blur(10px);
          z-index: 60;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 30px;
          transform: translateY(-100%);
          transition: transform 0.4s ease;
        }
        
        .mobile-menu-overlay.open {
          transform: translateY(0);
        }
        
        .mobile-menu-header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
        }
        
        .mobile-close-button {
          background: transparent;
          border: none;
          color: #ffffff;
          cursor: pointer;
          padding: 8px;
        }
        
        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px;
        }
        
        .mobile-auth-button {
          font-family: 'Lexend', sans-serif;
          font-size: 18px;
          font-weight: 500;
          color: #ffffff;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.3);
          padding: 15px 40px;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 200px;
        }
        
        .mobile-auth-button:hover {
          border-color: #7a288a;
          color: #7a288a;
        }
        
        .mobile-cta-button {
          font-family: 'Lexend', sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          background: linear-gradient(135deg, #7a288a, #b39ddb);
          border: none;
          padding: 18px 45px;
          border-radius: 25px;
          cursor: pointer;
          text-transform: uppercase;
          transition: all 0.3s ease;
          min-width: 250px;
        }
        
        .mobile-cta-button:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(122, 40, 138, 0.3);
        }
        
        /* Responsive breakpoints */
        @media screen and (max-width: 767px) {
          .navigation-header {
            background: transparent;
            border-bottom: none;
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
          }
          
          .navigation-header.scrolled {
            background: rgba(15, 20, 25, 0.9);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }
          
          .nav-container {
            height: 60px;
            padding: 0 16px;
            justify-content: flex-end;
          }
          
          .brand {
            display: none;
          }
          
          .desktop-nav {
            display: none;
          }
          
          .mobile-menu-toggle {
            display: block;
            padding: 12px;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
          }
          
          .mobile-menu-toggle:hover {
            background: rgba(122, 40, 138, 0.2);
          }
        }
        
        @media screen and (min-width: 1400px) {
          .nav-container {
            padding: 0 30px;
          }
        }
        
        @media screen and (min-width: 1500px) {
          .nav-container {
            padding: 0 40px;
          }
        }
      `}</style>

      <header className={`navigation-header ${isScrolled ? 'scrolled' : ''} ${className}`}>
        <div className="nav-container">
          {/* Brand Section */}
          <div className="brand" onClick={handleBrandClick}>
            Skylos
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <div className="auth-buttons">
              <button className="auth-button" onClick={handleLoginClick}>
                Log In
              </button>
              <button className="auth-button" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <div className="brand" onClick={handleBrandClick}>
              Skylos
            </div>
            <button className="mobile-close-button" onClick={toggleMobileMenu}>
              <X size={24} />
            </button>
          </div>

          <div className="mobile-menu-content">
            <button className="mobile-auth-button" onClick={handleLoginClick}>
              Log In
            </button>
            <button className="mobile-auth-button" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default NavigationHeader