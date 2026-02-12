import { useState } from 'react';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { MenuItem } from './components/MenuItem';

// Menu data structure
const menuData = {
  'OPENING ACTS': [
    {
      section: 'Entradas Frías',
      items: [
        {
          name: 'Ceviche de Salmón',
          description: 'Salmón fresco, cebolla morada, pimentones, cilantro, palta, choclo peruano aderezado con leche de tigre acompañado de tostadas.',
          price: '$12.500'
        },
        {
          name: 'Ceviche de Atún',
          description: 'Dados de atún fresco, cebolla morada, pimentones, cilantro, pepino fresco, aliñado con limón sutil, ralladura de naranja y limón. Acompañado de tostadas de la casa.',
          price: '$12.500'
        }
      ]
    },
    {
      section: 'Ensaladas',
      items: [
        {
          name: 'Ensalada César',
          description: 'Mix de hojas verdes, filete de pollo grillado, crutones queso parmesano, tomate cherry dressing tradicional césar.',
          price: '$9.500'
        }
      ]
    }
  ],
  'THE MAIN STAGE': [
    {
      section: 'Carnes',
      items: [
        {
          name: 'Filete Mignon',
          description: 'Carne nacional en una reducción de vino tinto, arándanos y romero.',
          price: '$21.500'
        },
        {
          name: 'Lomo Vetado Nacional',
          description: '400 gramos.',
          price: '$22.500'
        },
        {
          name: 'Pollo a la Plancha',
          description: 'Grillado a las finas hierbas.',
          price: '$13.900'
        }
      ]
    },
    {
      section: 'Acompañamientos',
      items: [
        {
          name: 'Pastelera de Choclo',
          description: 'Con albahaca.',
          price: ''
        },
        {
          name: 'Papas Rústicas',
          description: 'Papas con cáscara en cocción suave, pasada por mantequilla a las finas hierbas.',
          price: ''
        },
        {
          name: 'Papas Fritas de la Casa',
          description: '',
          price: ''
        },
        {
          name: 'Verduras Salteadas',
          description: 'Zucchini, zanahoria, champiñones, morrones, cebollín.',
          price: ''
        }
      ]
    },
    {
      section: 'Pastas',
      items: [
        {
          name: 'Fettuccini Lomo Saltado',
          description: 'Acompañado de lomo saltado en su jugo con tomates cherry confitado y cebollín fresco.',
          price: '$13.900'
        },
        {
          name: 'Fettuccini de Camarones',
          description: 'En cremoso de camarones y ciboulette fresco.',
          price: '$11.500'
        },
        {
          name: 'Fettuccini con Setas',
          description: 'Zucchini salteado en mantequilla de romero.',
          price: '$9.900'
        }
      ]
    },
    {
      section: 'Tablas Basildon',
      items: [
        {
          name: 'Tabla de Quesos',
          description: 'Para 2 personas. Ricos trozos de queso saborizados, jamón serrano, brochetas italianas, aceitunas, frutos secos, salsas, acompañado de ricas tostadas de la casa.',
          price: '$19.900'
        },
        {
          name: 'Tabla de Carnes',
          description: 'Pollo salteado a las finas hierbas, carne de lomo nacional saltado en su jugo, verduras asadas, papas fritas, encurtidos, salsas de la casa.',
          price: '$23.900'
        },
        {
          name: 'Para Compartir',
          description: 'Para 2 personas. 4 mini ceviches, 4 mini quesadillas de res y cebollín, 2 pinchos mixtos, salsas y bruschetas.',
          price: '$17.900'
        }
      ]
    }
  ],
  'B-SIDES': [
    {
      section: 'Para Compartir',
      items: [
        {
          name: 'Las Mechadas',
          description: 'Ricas papas fritas (700grs) aderezadas con aceite de ajo jengibre, salsa cheddar, tiritas de carne mechada, tocino crocante, queso en cubos y cebollín fresco, salsa verde.',
          price: '$15.500'
        },
        {
          name: 'La Vegetariana',
          description: 'Base de papas fritas (700grs) aderezadas con aceite de ajo jengibre, salsa de champiñones, verduras glaseadas, tomate cherry confitados, aceituna y salsa coleslaw.',
          price: '$13.500'
        }
      ]
    },
    {
      section: 'Hamburguesas',
      items: [
        {
          name: 'Italiana',
          description: 'Pan brioche, hamburguesa, tomate, palta y mayonesa.',
          price: '$11.900'
        },
        {
          name: 'Basildon',
          description: 'Pan brioche, hamburguesa, tocino crocante, queso, salsa BBQ.',
          price: '$11.900'
        },
        {
          name: 'Coleslaw',
          description: 'Pan brioche, hamburguesa, ensalada de repollo morado, zanahoria, dressing de mostaza y miel terminada con queso mantecoso fundido.',
          price: '$11.900'
        },
        {
          name: 'La Gringa',
          description: 'Pan brioche, hamburguesa, lechuga, tomate, pepinos caseros cebolla morada y salsa BBQ.',
          price: '$11.900'
        },
        {
          name: 'La Infaltable',
          description: 'Pan brioche, hamburguesa, aros de cebolla, tocino, huevo frito, cebolla caramelizada y salsa BBQ y porción de salsa de queso cheddar caliente para untar.',
          price: '$12.500'
        }
      ]
    }
  ],
  'THE CLASSICS': [
    {
      section: 'Sándwiches Clásicos',
      items: [
        {
          name: 'Chacarero',
          description: 'Carne mechada en cocción lenta, tomates asados, porotos verdes un ají verde de la huerta terminado con una suave mayonesa casera. Pan marraqueta.',
          price: '$11.900'
        },
        {
          name: 'Churrasco Italiano',
          description: 'Churrasco de res, palta, tomate y mayonesa casera.',
          price: '$11.900'
        },
        {
          name: 'Barros Luco',
          description: 'Suave y jugosa carne de res, doble queso fundido.',
          price: '$11.900'
        },
        {
          name: 'Ave Italiano',
          description: 'Filete de pollo, palta, tomate y mayonesa de la casa.',
          price: '$10.900'
        }
      ]
    },
    {
      section: 'Sándwiches Basildon',
      items: [
        {
          name: 'El New Wave',
          description: 'Mechada, tocino crocante, queso, cebolla caramelizada, huevo frito, palta y mayonesa.',
          price: '$11.500'
        },
        {
          name: 'El Brit',
          description: 'Filete de pollo, lechuga, pepinos frescos, palta y cebolla morada.',
          price: '$10.500'
        },
        {
          name: 'El Synth-Pop',
          description: 'Finas láminas de res, queso azul fundido, champiñones salteados, pimentones asados, palta y chimichurri de la casa.',
          price: '$10.900'
        },
        {
          name: 'El New Romantic',
          description: 'Croquetas de berenjenas apanadas, una ensalada fresca de champiñones (cebolla morada cilantro y tomate), queso de cabra.',
          price: '$10.500'
        },
        {
          name: 'El Dark',
          description: 'Finas láminas de res, queso mantecoso, jamón serrano crocante y cebolla caramelizada.',
          price: '$11.000'
        },
        {
          name: 'El Post Punk',
          description: 'Láminas de jamón serrano, rúcula fresca, ricota saborizada, cebolla morada fina y aceitunas y dressing de la casa.',
          price: '$10.500'
        }
      ]
    }
  ],
  'DRINKS': [
    {
      section: 'Bebestibles',
      items: [
        {
          name: 'Bebida Lata',
          description: '350 ml – Coca Cola Zero, Coca Cola, Fanta, Sprite.',
          price: '$3.000'
        },
        {
          name: 'Jugos de Fruta',
          description: 'Maracuyá, Mango, Frambuesa, Piña, Mix Berries.',
          price: '$3.900'
        },
        {
          name: 'Agua Mineral con Gas Porvenir',
          description: 'Botella de vidrio 330 ml.',
          price: '$2.300'
        },
        {
          name: 'Agua Mineral Vital con Gas',
          description: 'Botella de vidrio 330 ml.',
          price: '$2.000'
        },
        {
          name: 'Limonadas',
          description: 'Menta Jengibre, Frambuesa, Mango, Piña, Maracuyá, Mix Berries.',
          price: '$4.300'
        }
      ]
    },
    {
      section: 'Coctelería sin Alcohol',
      items: [
        {
          name: 'Piña Colada',
          description: '',
          price: '$5.500'
        },
        {
          name: 'Frambuesa Colada',
          description: '',
          price: '$6.000'
        },
        {
          name: 'Mango Colado',
          description: '',
          price: '$6.000'
        },
        {
          name: 'Maracuyá Colado',
          description: '',
          price: '$6.000'
        },
        {
          name: 'Primavera',
          description: '',
          price: '$5.300'
        },
        {
          name: 'Mojitos Sabores',
          description: '',
          price: '$5.800'
        }
      ]
    }
  ]
};

export default function App() {
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
                    fontFamily: 'Cinzel, serif',
                    fontSize: '12px',
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
