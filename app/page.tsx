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
  
  'TRAGOS': [
    {
      section: 'Spritz & Aperitivos',
      items: [
        { name: 'Aperol Spritz', description: 'Aperol, Champagne, Soda', price: '$7.400' },
        { name: 'Intro to Aperol', description: 'Aperol, Gin London dry, jugo de limón, almíbar simple y bíter angostura', price: '$7.400' },
        { name: 'Ramazzotti Spritz', description: 'Ramazzotti, Champagne y soda', price: '$7.500' },
        { name: 'Ramazzotti Tonic', description: 'Ramazzotti rosatto, agua tónica', price: '$7.400' },
        { name: 'Ramazzotti Violetto Tonic', description: 'Arándanos, R. Violeto y agua tónica', price: '$7.400' },
        { name: 'Pinkzotti', description: 'R. rosatto, gin Pink Strawberry, jugo de limón, jarabe de goma y Schwepper sabor frutal', price: '$7.800' },
        { name: 'Mimosa', description: 'Jugo de naranja, triple sec, champagne', price: '$5.500' },
      ]
    },
    {
      section: 'Cocktails con Whisky',
      items: [
        { name: 'Old Fashioned', description: 'Whisky, almíbar simple y bíter angostura', price: '$7.500' },
        { name: 'Whisky Sour', description: 'Whisky, jugo de limón, almíbar simple, bíter angostura', price: '$5.500' },
        { name: 'Manhattan', description: 'Whisky, vermouth rosso, bíter angostura', price: '$5.800' },
        { name: 'Boulevardier', description: 'Whisky, Campari, vermouth rosso', price: '$7.400' },
        { name: 'Clavo Oxidado', description: 'Whisky, Drambuie, Naranja', price: '$7.500' },
        { name: 'John Collins', description: 'Whisky, jugo de limón, jarabe de goma, soda', price: '$7.000' },
      ]
    },
    {
      section: 'Cocktails con Gin',
      items: [
        { name: 'London Mule', description: 'Gin, jugo de limón, almíbar simple, cerveza de jengibre', price: '$7.500' },
        { name: 'Negroni', description: 'Campari, Vermouth rosso, gin Beefeater', price: '$7.000' },
        { name: 'Tom Collins', description: 'Gin, jugo de limón, jarabe de goma, soda', price: '$6.700' },
        { name: 'Gin Tonic Clásico', description: 'Gin, Agua Tónica', price: '$7.900' },
        { name: 'Tropical Gin', description: 'Gin, jugo de naranja, RedBull Sabor tropical', price: '$7.900' },
        { name: 'Gin Fizz Arándano', description: 'Gin, Jugo de limón y almíbar simple', price: '$7.900' },
        { name: 'Pink Tonic', description: 'Fresas, Gin, Schwepper Sabor Frutal', price: '$7.900' },
        { name: 'Gin Ramazzotti Pomelo', description: 'Gin, R. Rosatto, jugo de pomelo, jugo de limón y Ginger Ale o agua tonica Schwaper rosada', price: '$8.200' }
      ]
    },
    {
      section: 'Cocktails con Vodka',
      items: [
        { name: 'Moscow Mule', description: 'Vodka, jugo de limón, almíbar simple, cerveza de jengibre', price: '$7.500' },
        { name: 'Cosmopolitan', description: 'Vodka, licor de naranja, jugo de limón, jugo de arándano', price: '$6.700' },
        { name: 'Pantera Rosa', description: 'Vodka, jugo de piña, Granadina y crema de leche', price: '$6.900' },
        { name: 'Ruso Blanco', description: 'Vodka, licor de café, y crema de leche', price: '$5.900' },
        { name: 'Ruso Negro', description: 'Vodka, licor de café', price: '$5.700' },
        { name: 'Laguna Azul', description: 'Vodka, Curazao, jugo de limón, Sprite', price: '$6.500' },
      ]
    },
    {
      section: 'Cocktails con Pisco',
      items: [
         { name: 'Pisco Sour', description: 'Jugo de limón, almíbar simple, Pisco peruano y clara de huevo', price: '$5.800' },
        { name: 'Chilcano de Pisco', description: 'Pisco, Ginger Ale y jugo de limón, almíbar simple', price: '$5.800' },
        { name: 'Pisco Punch', description: 'Pisco, jugo de piña, almíbar simple y jugo de limón', price: '$4.800' },
        { name: 'Primavera', description: 'Pisco, jugo de naranja, jugo de piña y granadina', price: '$5.800' },
      ]
    },
    {
      section: 'Cocktails con Ron',
      items: [
        { name: 'Cuba Libre', description: 'Ron blanco, jugo de limón y coca cola.', price: '$5.500' },
        { name: 'Daiquiri', description: 'Ron blanco, jugo de limón, almíbar simple', price: '$5.700' },
        { name: 'El Presidente', description: 'Ron dorado, vermouth seco o Martini, licor de naranja, granadina y amargo angostura', price: '$5.400' },
        { name: 'Mojito Tradicional', description: '', price: '$6.000' },
        { name: 'Mojito Sabores', description: 'Mango, Maracuyá, Frambuesa, Piña.', price: '$6.500' },
        { name: 'Piña Colada', description: '', price: '$6.500' },
        { name: 'Colada Sabores', description: 'Mango, Maracuyá, Frambuesa, Piña.', price: '$6.800' }
      ]
    },
    {
      section: 'Cocktails con Tequila',
      items: [
        { name: 'Margarita', description: 'Tequila, Triple sec, Limón de pica', price: '$6.700' },
        { name: 'Tequila Sunrise', description: 'Tequila, triple sec, jugo de limón, jugo de naranja y granadina', price: '$7.000' },
        { name: 'Siesta', description: 'Tequila, jugo de pomelo, jugo de limón, almíbar simple y Campari', price: '$6.800' },
      ]
    },
    {
      section: 'Tragos Clasicos',
      items: [
        { name: 'Negroni Sbagliato', description: 'Champagne, Campari, vermouth rosso', price: '$7.200' },
      ]
    },
    {
      section: 'Los Fuertes',
      items: [
        { name: 'Whisky Glenfiddich 18', description: '', price: '' },
        { name: 'Whisky Glenfiddich 12', description: '', price: '' },
        { name: 'Whisky Chivas Regal 12 + Bebida', description: '', price: '$9.900' },
        { name: 'Whisky Chivas Regal 18 + Bebida', description: '', price: '$18.000' },
        { name: 'Jack Daniels + Bebida', description: '', price: '$9.500' },
        { name: 'Johnnie Walker Rojo Solo', description: '', price: '$4.500' },
        { name: 'Johnnie Walker Rojo + Bebida', description: '', price: '$5.800' },
        { name: 'Johnnie Walker Negro', description: '', price: '' },
        { name: 'Pisco Artesanal Valle Luna + Bebida', description: '', price: '$5.500' },
        { name: 'Pisco Artesanal Valle Luna Solo', description: '', price: '$4.500' },
        { name: 'Pisco 35° + Bebida', description: '', price: '$5.500' },
        { name: 'Pisco 35° Solo', description: '', price: '$4.500' },
        { name: 'Pisco Nobel 40° + Bebida', description: '', price: '$6.500' },
        { name: 'Pisco Nobel 40° Solo', description: '', price: '$5.500' },
        { name: 'Ron Havana Club', description: '', price: '$5.900' },
        { name: 'Jaggermeister + Bebida', description: '', price: '$5.700' },
        { name: 'Corto Jaggermeister', description: '', price: '$4.000' }
      ]
    },
    {
      section: 'Vinos Castillo de Molina',
      items: [
        { name: 'Botella 750ml', description: 'Tinto (Castillo de Molina)', price: '$19.500' },
        { name: 'Vino T. Carmenere', description: 'Copa', price: '$5.600' },
        { name: 'Vino T. Cabernet Sauvignon', description: 'Copa', price: '$5.600' },
        { name: 'Botella 750ml Blanco', description: 'Blanco (Castillo de Molina)', price: '$17.000' },
        { name: 'Chardonnay', description: 'Copa', price: '$5.400' },
        { name: 'Espumante', description: 'Copa', price: '$4.700' }
      ]
    },
  ],
   'BEBESTIBLES': [
    {
      section: 'Sin Alcohol',
      items: [
        { name: 'Bebida Lata', description: '', price: '$3.000' },
        { name: 'Lata Redbull 250', description: '', price: '$3.500' },
        { name: 'Jugos Naturales', description: '', price: '$3.900' },
        { name: 'Limonada', description: '', price: '$4.300' },
        { name: 'Café Americano', description: '', price: '$3.400' },
        { name: 'Café Exprés', description: '', price: '$2.800' },
        { name: 'Café Capuchino', description: '', price: '$3.600' },
        { name: 'Café Latte', description: '', price: '$3.600' },
        { name: 'Agua con Gas', description: '', price: '$2.500' },
        { name: 'Cerveza Corona 0', description: '', price: '$4.400' },
        { name: 'Cerveza Heineken 0', description: '', price: '$4.400' },
        { name: 'Cerveza Royal 0', description: '', price: '$4.400' }
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
        <p 
          className="text-center text-[#d4adad]/40 uppercase tracking-[0.3em]"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '8px',
            fontWeight: 300
          }}
        >
          Orompello #68, Concepción
        </p>
      </footer>
    </div>
  );
}
