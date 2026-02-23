'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { CategoryNav } from '@/components/CategoryNav';
import { MenuItem } from '@/components/MenuItem';

// Menu data structure
const menuData = {
  'ENTRADAS': [
    {
      section: 'Entradas Frías',
      items: [
        {
          name: 'Ceviche de Salmón',
          description: 'Salmón fresco, cebolla morada, pimentones, cilantro, palta, choclo peruano aderezado con leche de tigre, acompañado de tostadas.',
          price: '$12.500'
        },
        {
          name: 'Ceviche de Atún',
          description: 'Dados de atún fresco, cebolla morada, pimentones, cilantro, pepino fresco, aliñado con limón sutil, ralladura de naranja y limón. Acompañado de tostadas de la casa.',
          price: '$12.500'
        },
        {
          name: 'Ensalada César',
          description: 'Mix de hojas verdes, filete de pollo grillado, crutones, queso parmesano, tomate cherry, dressing tradicional César.',
          price: '$9.500'
        }
      ]
    },
    {
      section: 'Picoteo',
      items: [
        {
          name: 'Alitas BBQ',
          description: '',
          price: '$13.900'
        },
        {
          name: 'Papas Rústicas (2 p)',
          description: '',
          price: '$7.000'
        },
        {
          name: 'Papas Fritas de la Casa (2 p)',
          description: '',
          price: '$6.000'
        },
        {
          name: '8 Empanadas Queso',
          description: '',
          price: '$4.000'
        }
      ]
    }
  ],
  'PRINCIPALES': [
    {
      section: 'Fondos y Carnes',
      items: [
        {
          name: 'Filete Mignon',
          description: 'Carne nacional en una reducción de vino tinto, arándanos y romero.',
          price: '$21.500'
        },
        {
          name: 'Lomo Vetado Nacional',
          description: 'Corte de 400 g de carne nacional.',
          price: '$22.500'
        },
        {
          name: 'Pollo a la Plancha',
          description: 'Pechuga de pollo grillado a las finas hierbas.',
          price: '$13.900'
        }
      ]
    },
    {
      section: 'Pastas',
      items: [
        {
          name: 'Fetuccini con Lomo Saltado',
          description: 'Fetuccini acompañado de lomo saltado en su jugo con tomates cherry confitado y cebollín fresco.',
          price: '$13.900'
        },
        {
          name: 'Fetuccini y Setas',
          description: 'Fetuccini con setas y zucchini salteado en mantequilla de romero.',
          price: '$9.900'
        },
        {
          name: 'Fetuccini con Camarones',
          description: 'Fetuccini en cremoso de camarones y ciboulette fresco.',
          price: '$11.500'
        }
      ]
    },
    {
      section: 'Acompañamientos',
      items: [
        { name: 'Pastelera de Choclo con Albahaca', description: '', price: '' },
        { name: 'Papas Rústicas', description: '', price: '' },
        { name: 'Papas Fritas de la Casa', description: '', price: '' },
        { name: 'Verduras Salteadas', description: '', price: '' }
      ]
    },
    {
      section: 'Ensaladas',
      items: [
        { name: 'Lechuga, Palta, Palmito', description: '', price: '$4.600' },
        { name: 'Lechuga, Tomate Cherry, Palta', description: '', price: '$4.200' },
        { name: 'Rúcula, Lechuga Hidropónica', description: '', price: '$3.900' }
      ]
    }
  ],
  'PARA COMPARTIR': [
    {
      section: 'Papas para Compartir',
      items: [
        {
          name: 'Las Mechadas',
          description: 'Papas fritas (700grs) aderezadas con aceite de ajo, jengibre, salsa cheddar, tiritas de carne mechada, tocino crocante, queso en cubos y cebollín fresco con salsa verde.',
          price: '$15.500'
        },
        {
          name: 'La Vegetariana',
          description: 'Base de papas fritas (700grs) aderezadas con aceite de ajo, jengibre, salsa de champiñones, verduras glaseadas, tomate cherry confitados, aceitunas y salsa coleslaw.',
          price: '$13.500'
        }
      ]
    },
    {
      section: 'Tablas',
      items: [
        {
          name: 'Tabla de Quesos',
          description: 'Trozos de queso saborizados, jamón serrano, brochetas italianas, aceitunas, frutos secos y salsas, acompañado de crocantes tostadas de la casa.',
          price: '$19.900'
        },
        {
          name: 'Tabla de Carnes',
          description: 'Pollo salteado a las finas hierbas, carne de lomo nacional saltado en su jugo, verduras asadas, papas fritas, encurtidos, salsas de la casa.',
          price: '$23.900'
        },
        {
          name: 'Tabla para Compartir',
          description: '4 mini ceviches, 4 mini quesadillas de res y cebollín, 2 pinchos mixtos, salsas y brusquetas.',
          price: '$17.900'
        }
      ]
    }
  ],
  'HAMBURGUESAS': [
    {
      section: 'Hamburguesas Angus',
      items: [
        {
          name: 'Italiana',
          description: '150 gr (Angus/Tocino), pan brioche, tomate, palta y mayonesa. Con papas fritas.',
          price: '$11.900'
        },
        {
          name: 'Basildon',
          description: '150 gr (Angus/Tocino), pan brioche, tocino crocante, queso, salsa BBQ. Con papas fritas.',
          price: '$11.900'
        },
        {
          name: 'Coleslaw',
          description: '150 gr (Angus/Tocino), pan brioche, ensalada de repollo morado, zanahoria, dressing mostaza-miel y queso mantecoso. Con papas fritas.',
          price: '$11.900'
        },
        {
          name: 'La Gringa',
          description: '150 gr (Angus/Tocino), pan brioche, lechuga, tomate, pepinos caseros, cebolla morada y salsa BBQ. Con papas fritas.',
          price: '$11.900'
        },
        {
          name: 'La Infaltable',
          description: '150 gr (Angus/Tocino), pan brioche, aros de cebolla, tocino, huevo frito, cebolla caramelizada, salsa BBQ y extra salsa de queso cheddar caliente. Con papas fritas.',
          price: '$12.500'
        }
      ]
    }
  ],
  'SÁNDWICHES': [
    {
      section: 'Clásicos',
      items: [
        {
          name: 'Chacarero',
          description: 'Carne mechada, tomates asados, porotos verdes, ají verde y mayonesa casera en pan marraqueta.',
          price: '$11.900'
        },
        {
          name: 'Churrasco Italiano',
          description: 'Churrasco de res, palta, tomate y mayonesa casera.',
          price: '$11.900'
        },
        {
          name: 'Ave Italiano',
          description: 'Filete de pollo, palta, tomate y mayonesa de la casa.',
          price: '$11.900'
        },
        {
          name: 'Barros Luco',
          description: 'Carne de res con doble queso fundido.',
          price: '$11.900'
        }
      ]
    },
    {
      section: 'Especialidades Basildon',
      items: [
        {
          name: 'El New Wave',
          description: 'Mechada, tocino crocante, queso, cebolla caramelizada, huevo frito, palta y mayonesa.',
          price: '$11.500'
        },
        {
          name: 'El Brit',
          description: 'Filete de pollo, lechuga, pepinos frescos, palta e cebolla morada.',
          price: '$10.500'
        },
        {
          name: 'El Synth-Pop',
          description: 'Finas láminas de res, queso azul fundido, champiñones salteados, pimentones asados, palta e chimichurri.',
          price: '$10.900'
        },
        {
          name: 'El New Romantic',
          description: 'Croquetas de berenjenas apanadas, ensalada de champiñones (cebolla morada, cilantro y tomate), queso de cabra.',
          price: '$10.500'
        },
        {
          name: 'El Dark',
          description: 'Finas láminas de res, queso mantecoso, jamón serrano crocante e cebolla caramelizada.',
          price: '$11.000'
        },
        {
          name: 'El Post Punk',
          description: 'Jamón serrano, rúcula fresca, ricota saborizada, cebolla morada fina, aceitunas y dressing de la casa.',
          price: '$10.500'
        }
      ]
    }
  ],
  'BEBIDAS': [
    {
      section: 'Sin Alcohol',
      items: [
        {
          name: 'Bebida Lata (350 ml)',
          description: 'Coca-Cola, Zero, Fanta, Sprite.',
          price: '$3.000'
        },
        {
          name: 'Jugos de Fruta',
          description: 'Maracuyá, Mango, Frambuesa, Piña, Mix Berries.',
          price: '$3.900'
        },
        {
          name: 'Limonadas',
          description: 'Clásica, Menta Jengibre, Frambuesa, Mango, Piña, Maracuyá, Mix Berries.',
          price: '$4.300'
        },
        {
          name: 'Cerveza 0°',
          description: 'Royal, Heineken, Corona.',
          price: '$4.600'
        },
        {
          name: 'Expresso',
          description: '',
          price: '$2.500'
        },
        {
          name: 'Latte',
          description: '',
          price: '$3.600'
        },
        {
          name: 'Agua Mineral con Gas (330 ml)',
          description: '',
          price: '$2.000'
        }
      ]
    },
    {
      section: 'Coctelería',
      items: [
        {
          name: 'Pinkzotti',
          description: 'Ramazzotti, gin, jugo de limón, goma.',
          price: '$7.800'
        },
        {
          name: 'Aperol Spritz',
          description: '',
          price: '$7.400'
        },
        {
          name: 'Moscow Mule',
          description: '',
          price: '$7.000'
        },
        {
          name: 'Negroni Sbagliato',
          description: 'Espumante, campari y vermut.',
          price: '$6.800'
        },
        {
          name: 'Cosmopolitan',
          description: 'Vodka, Aperol, jugo de arándano, jugo de limón.',
          price: '$6.500'
        },
        {
          name: 'Mimosa',
          description: 'Espumante, Aperol y jugo de naranja.',
          price: '$4.800'
        }
      ]
    },
    {
      section: 'Vinos Castillo de Molina',
      items: [
        {
          name: 'Tintos (Carmenere/Cabernet)',
          description: 'Copa / Botella',
          price: '$5.600 / $19.500'
        },
        {
          name: 'Blanco (Chardonnay)',
          description: 'Copa / Botella',
          price: '$5.400 / $17.000'
        },
        {
          name: 'Espumante',
          description: 'Copa',
          price: '$4.700'
        }
      ]
    }
  ]
};

export default function HomePage() {
  const categories = Object.keys(menuData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <main className="px-5 py-10 max-w-xl mx-auto pb-16">
        {menuData[activeCategory as keyof typeof menuData].map((section, sectionIdx) => (
          <div key={sectionIdx} className="mb-16">
            {/* Section title */}
            <div className="mb-10 text-center">
              <div className="inline-block relative">
                <h2 
                  className="text-[#c5a059] uppercase tracking-[0.25em] px-6"
                  style={{
                    fontFamily: 'HopsAndBarley, serif',
                    fontSize: '16px',
                    fontWeight: 600
                  }}
                >
                  {section.section}
                </h2>
                <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059]/40 to-transparent" />
              </div>
            </div>

            {/* Section items */}
            <div className="space-y-5">
              {section.items.map((item, itemIdx) => (
                <MenuItem
                  key={itemIdx}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#c5a059]/15 py-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#c5a059]/40" />
          <div className="w-1 h-1 rotate-45 bg-[#c5a059]" />
          <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#c5a059]/40" />
        </div>
        <p 
          className="text-center text-[#d4adad]/40 uppercase tracking-[0.3em]"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '8px',
            fontWeight: 300
          }}
        >
          Basildon Listening Restobar
        </p>
      </footer>
    </div>
  );
}
