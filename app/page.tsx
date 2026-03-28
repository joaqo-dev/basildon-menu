'use client';

import { useState, useRef, useEffect } from 'react';
import { menuCategories, tragosCategories, bebestiblesCategories, type MenuCategory } from '@/lib/menuData';

type TabId = 'menu' | 'tragos' | 'bebestibles' | 'nosotros';

function MenuCategoryBlock({ category }: { category: MenuCategory }) {
  return (
    <div className="category-block">
      <div className="category-header">
        <div className="category-title-row">
          <h2 className="category-name">{category.name}</h2>
          <span className="category-subtitle">{category.subtitle}</span>
        </div>
        {category.description && (
          <p className="category-description">{category.description}</p>
        )}
      </div>

      {category.sections.map((section, sIdx) => (
        <div key={sIdx} className="menu-section">
          {/* Only show section title if it's different from the category name */}
          {section.section !== category.name && (
            <h3 className="section-title">{section.section}</h3>
          )}
          {section.items.map((item, iIdx) => (
            <div key={iIdx} className="menu-item">
              <div className="menu-item-header">
                <span className="menu-item-name">{item.name}</span>
                {item.price && (
                  <span className="menu-item-price">{item.price}</span>
                )}
              </div>
              {item.description && (
                <p className="menu-item-description">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      ))}

      <hr className="category-divider" />
    </div>
  );
}

function MenuIconSVG() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M7 3L7 11C7 13.2 8.8 15 11 15L11 21" />
      <path d="M3 3L3 8C3 9.1 3.9 10 5 10L7 10" />
      <path d="M17 3L17 6C17 8.2 18.8 10 21 10" />
      <path d="M17 3C17 3 17 10 17 12C17 14 18 15 19 15" />
      <path d="M17 15L17 21" />
    </svg>
  );
}

function TragosIconSVG() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M8 2L16 2L13 10L13 18L16 21L8 21L11 18L11 10L8 2Z" />
      <path d="M5 5L19 5" />
    </svg>
  );
}

function BebestiblesIconSVG() {
  return (
    <svg viewBox="0 0 24 24">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 3L9 7" />
      <path d="M15 3L15 7" />
      <path d="M5 7L19 7" />
    </svg>
  );
}

function NosotrosIconSVG() {
  return (
    <svg viewBox="0 0 24 24">
      <circle cx="9" cy="7" r="4" />
      <path d="M2 21L2 18C2 15.8 3.8 14 6 14L12 14C14.2 14 16 15.8 16 18L16 21" />
      <circle cx="19" cy="7" r="3" />
      <path d="M22 21L22 18.5C22 16.6 20.7 15 19 15" />
    </svg>
  );
}

function InstagramIconSVG() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabId>('menu');
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: 'menu', label: 'Menú', icon: <MenuIconSVG /> },
    { id: 'tragos', label: 'Tragos', icon: <TragosIconSVG /> },
    { id: 'bebestibles', label: 'Bebestibles', icon: <BebestiblesIconSVG /> },
    { id: 'nosotros', label: 'Nosotros', icon: <NosotrosIconSVG /> },
  ];

  return (
    <>
      {/* Header */}
      <header className="header">
        <img src="/images/basilapp.png" alt="Basildon Logo" className="header-logo" />
      </header>

      {/* Main Content */}
      <main className="main-content" ref={scrollRef}>
        {activeTab === 'menu' && (
          <div className="section-container" key="menu">
            {menuCategories.map((cat, idx) => (
              <MenuCategoryBlock key={idx} category={cat} />
            ))}
          </div>
        )}

        {activeTab === 'tragos' && (
          <div className="section-container" key="tragos">
            {tragosCategories.map((cat, idx) => (
              <MenuCategoryBlock key={idx} category={cat} />
            ))}
          </div>
        )}

        {activeTab === 'bebestibles' && (
          <div className="section-container" key="bebestibles">
            {bebestiblesCategories.map((cat, idx) => (
              <MenuCategoryBlock key={idx} category={cat} />
            ))}
          </div>
        )}

        {activeTab === 'nosotros' && (
          <div className="nosotros-container" key="nosotros">
            <div className="nosotros-image-wrapper">
              <img
                src="/images/frontis.jpg"
                alt="Basildon Bar"
                loading="lazy"
              />
              <div className="nosotros-image-overlay" />
            </div>

            <h2 className="nosotros-title">Nosotros</h2>
            <span className="nosotros-subtitle">NUESTRA HISTORIA</span>

            <p className="nosotros-text">
              <strong>Basildon</strong> es el primer <strong>Listening Restobar</strong> de Concepción. Un refugio de alta fidelidad diseñado para vivir la noche en otra frecuencia, donde el sonido deja de ser ruido de fondo para convertirse en el corazón de la experiencia.
            </p>

            <p className="nosotros-text">
              Aquí, la cocina de autor y la mixología rinden homenaje a la mística del <em>synth-pop</em> y la <em>new wave</em>. Cada trago tiene una historia; cada plato, una intención pensada para maridar con la música que nos define.
            </p>

            <div className="nosotros-divider" />

            <p className="nosotros-text">
              Te invitamos a bajar las revoluciones y subir la calidad. Ven a descubrir por qué en Basildon, <strong>la música realmente importa.</strong>
            </p>

            <a
              href="https://www.instagram.com/basildon_ccp"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-button"
            >
              <InstagramIconSVG />
              Visítanos en Instagram
            </a>

            <p className="nosotros-footer-text">
              Orompello 68, Concepción.
            </p>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`nav-${tab.id}`}
            className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabChange(tab.id)}
            aria-label={tab.label}
          >
            <span className="nav-icon">{tab.icon}</span>
            <span className="nav-label">{tab.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
