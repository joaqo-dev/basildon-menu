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
          price: '$13.500'
        },
        {
          name: 'Ceviche de Atún',
          description: 'Dados de atún fresco, cebolla morada, pimentones, cilantro, pepino fresco, aliñado con limón sutil, ralladura de naranja y limón. Acompañado de tostadas de la casa.',
          price: '$13.500'
        },
        {
          name: 'Ensalada César',
          description: 'Mix de hojas verdes, filete de pollo grillado, crutones, queso parmesano, tomate cherry, dressing tradicional César.',
          price: '$10.500'
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
          price: '$23.900'
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
          name: 'Fetuccini y Setas 🌱',
          description: 'Fetuccini con setas y zucchini salteado en mantequilla de romero.',
          price: '$10.500'
        },
        {
          name: 'Fetuccini con Camarones',
          description: 'Fetuccini en cremoso de camarones y ciboulette fresco.',
          price: '$12.400'
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
        { name: 'Lechuga, Palta, Palmito', description: '', price: '$5.400' },
        { name: 'Lechuga, Tomate Cherry, Palta', description: '', price: '$5.200' },
        { name: 'Rúcula, Lechuga Hidropónica', description: '', price: '$4.600' }
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
          price: '$18.900'
        },
        {
          name: 'La Vegetariana 🌱',
          description: 'Base de papas fritas (700grs) aderezadas con aceite de ajo, jengibre, salsa de champiñones, verduras glaseadas, tomate cherry confitados, aceitunas y salsa coleslaw.',
          price: '$15.700'
        }
      ]
    },
    {
      section: 'Tablas',
      items: [
        {
          name: 'Tabla de Quesos',
          description: 'Trozos de queso saborizados, jamón serrano, brochetas italianas, aceitunas, frutos secos y salsas, acompañado de crocantes tostadas de la casa.',
          price: '$22.900'
        },
        {
          name: 'Tabla de Carnes',
          description: 'Pollo salteado a las finas hierbas, carne de lomo nacional saltado en su jugo, verduras asadas, papas fritas, encurtidos, salsas de la casa.',
          price: '$24.900'
        },
        {
          name: 'Tabla pollo Rockeford',
          description: 'Papas fritas de la casa, pollo salteado, salsa de queso azul, champiñones salteados y pimentones asados.',
          price: '$21.000'
        }
      ]
    },
    {
      section: 'Picoteo',
      items: [
        {
          name: 'Papas Fritas de la Casa (2 p)',
          description: '',
          price: '$8.500'
        },
        {
          name: '6 Empanadas Queso',
          description: '',
          price: '$10.500'
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
          price: '$12.900'
        },
        {
          name: 'Basildon',
          description: '150 gr (Angus/Tocino), pan brioche, tocino crocante, queso, salsa BBQ. Con papas fritas.',
          price: '$12.900'
        },
        {
          name: 'Coleslaw',
          description: '150 gr (Angus/Tocino), pan brioche, ensalada de repollo morado, zanahoria, dressing mostaza-miel y queso mantecoso. Con papas fritas.',
          price: '$12.900'
        },
        {
          name: 'La Gringa',
          description: '150 gr (Angus/Tocino), pan brioche, lechuga, tomate, pepinos caseros, cebolla morada y salsa BBQ. Con papas fritas.',
          price: '$12.900'
        },
        {
          name: 'La Infaltable',
          description: '150 gr (Angus/Tocino), pan brioche, aros de cebolla, tocino, huevo frito, cebolla caramelizada, salsa BBQ y extra salsa de queso cheddar caliente. Con papas fritas.',
          price: '$12.900'
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
          price: '$11.200'
        },
        {
          name: 'El Synth-Pop',
          description: 'Finas láminas de res, queso azul fundido, champiñones salteados, pimentones asados, palta e chimichurri.',
          price: '$12.900'
        },
        {
          name: 'El New Romantic 🌱',
          description: 'Croquetas de berenjenas apanadas, ensalada de champiñones (cebolla morada, cilantro y tomate), queso de cabra.',
          price: '$10.900'
        },
        {
          name: 'El Dark',
          description: 'Finas láminas de res, queso mantecoso, jamón serrano crocante e cebolla caramelizada.',
          price: '$11.900'
        },
        {
          name: 'El Post Punk',
          description: 'Jamón serrano, rúcula fresca, ricota saborizada, cebolla morada fina, aceitunas y dressing de la casa.',
          price: '$11.700'
        }
      ]
    }
  ],

  'TRAGOS': [
    {
      section: 'Spritz & Aperitivos',
      items: [
        { name: 'Aperol Spritz', description: 'Aperol, Champagne y Soda', price: '$7.400' },
        { name: 'Intro to Aperol', description: 'Aperol, Gin London dry, jugo de limón, almíbar simple y bíter angostura', price: '$7.400' },
        { name: 'Ramazzotti Spritz', description: 'Ramazzotti, Champagne y soda', price: '$7.500' },
        { name: 'Ramazzotti Tonic', description: 'Ramazzotti rosatto, agua tónica', price: '$7.400' },
        { name: 'Ramazzotti Violetto Tonic', description: 'Arándanos, R. Violeto y agua tónica', price: '$7.400' },
        { name: 'Pinkzotti', description: 'R. rosatto, gin Pink Strawberry, jugo de limón, jarabe de goma y Schwepper sabor frutal', price: '$7.800' },
        { name: 'Mimosa', description: 'Jugo de naranja, triple sec, champagne', price: '$5.500' },
        { name: 'St. Germain Spritz', description: 'Licor de saúco, Prosecco y agua mineral gasificada', price: '$9.000' },
        { name: 'R. Jelinek Spritz', description: 'Elixir de saúco, Prosecco y agua mineral gasificada', price: '$7.900' },
        { name: 'Orgasmo', description: 'Amaretto, licor de café y Baileys', price: '$6.600' },
        { name: 'Baileys', description: '', price: '$6.500' },
      ]
    },
    {
      section: 'Cocktails con Whisky',
      items: [
        { name: 'Old Fashioned', description: 'Whisky Jack Daniels, almíbar simple y bíter angostura', price: '$7.500' },
        { name: 'Whisky Sour', description: 'Whisky Jack Daniels, jugo de limón, almíbar simple, bíter angostura', price: '$5.500' },
        { name: 'Manhattan', description: 'Whisky, vermouth rosso, bíter angostura', price: '$5.800' },
        { name: 'Boulevardier', description: 'Whisky Jack Daniels, Campari y Vermouth rosso', price: '$7.400' },
        { name: 'Clavo Oxidado', description: 'Whisky Jack Daniels, Drambuie y Naranja', price: '$7.500' },
        { name: 'John Collins', description: 'Whisky Jack Daniels, jugo de limón, jarabe de goma y soda', price: '$7.000' },
        { name: 'Godfather', description: 'Whisky Chivas 12 años y Disaronno', price: '$7.500' },
      ]
    },
    {
      section: 'Cocktails con Gin',
      items: [

        { name: 'Negroni', description: 'Gin Beefeater, Campari y Vermouth rosso', price: '$7.000' },
        { name: 'Tom Collins', description: 'Gin (Tanqueray, Bombay, Beefeater), jugo de limón, jarabe de goma y soda', price: '$6.700' },
        { name: 'Gin Tonic Clásico', description: 'Gin y Agua Tónica', price: '$7.900' },
        { name: 'Tropical Gin', description: 'Gin, jugo de naranja y RedBull Sabor tropical', price: '$7.900' },
        { name: 'Gin Fizz Arándano', description: 'Gin, Jugo de limón y almíbar simple', price: '$7.900' },
        { name: 'Pink Tonic', description: 'Fresas, Gin y Schwepper Sabor Frutal', price: '$7.900' },
        { name: 'Ginzzotti Pomelo', description: 'Gin (Beefeater, Bombay, Tanqueray), R. Rosatto, jugo de pomelo, jugo de limón y Ginger Ale o agua tonica Schwaper rosada', price: '$8.200' }
      ]
    },
    {
      section: 'Cocktails con Vodka',
      items: [

        { name: 'Cosmopolitan', description: 'Vodka Absolut limón, licor de naranja, jugo de limón, jugo de arándano', price: '$6.700' },
        { name: 'Pantera Rosa', description: 'Vodka Absolut, jugo de piña, Granadina y crema de leche', price: '$6.900' },
        { name: 'Ruso Blanco', description: 'Vodka Absolut, licor de café, y crema de leche', price: '$5.900' },
        { name: 'Ruso Negro', description: 'Vodka Absolut, licor de café', price: '$5.700' },
        { name: 'Laguna Azul', description: 'Vodka Absolut, Curazao, jugo de limón, Sprite', price: '$6.500' },
      ]
    },
    {
      section: 'Cocktails con Pisco',
      items: [
        { name: 'Pisco Sour', description: 'Pisco Mistral 35°, jugo de limón, almíbar simple y clara de huevo', price: '$5.800' },
        { name: 'Chilcano de Pisco', description: 'Pisco Mistral 35°, Ginger Ale, jugo de limón y almíbar simple', price: '$5.800' },
        { name: 'Pisco Punch', description: 'Pisco Mistral 35°, jugo de piña, almíbar simple y jugo de limón', price: '$4.800' },
        { name: 'Primavera', description: 'Pisco, jugo de naranja, jugo de piña y granadina', price: '$5.800' },
      ]
    },
    {
      section: 'Cocktails con Ron',
      items: [
        { name: 'Cuba Libre', description: 'Ron Dorado, jugo de limón y coca cola.', price: '$5.500' },
        { name: 'Daiquiri', description: 'Ron Bacardi blanco, jugo de limón y almíbar simple', price: '$5.700' },
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
        { name: 'Blue Margarita Olmeca', description: 'Tequila Olmeca, Triple sec, Limón de pica y Curazao', price: '$6.900' },
        { name: 'Blue Margarita Don Julio', description: 'Tequila Don Julio, Triple sec, Limón de pica y Curazao', price: '$9.200' },
        { name: 'Margarita Olmeca', description: 'Tequila Olmeca, Triple sec, Limón de pica', price: '$6.700' },
        { name: 'Margarita Don Julio', description: 'Tequila Don Julio, Triple sec, Limón de pica', price: '$8.900' },
        { name: 'Tequila Sunrise Olmeca', description: 'Tequila Olmeca, triple sec, jugo de limón, jugo de naranja y granadina', price: '$7.000' },
        { name: 'Tequila Sunrise Don Julio', description: 'Tequila Don Julio, triple sec, jugo de limón, jugo de naranja y granadina', price: '$8.000' },
        { name: 'Siesta Olmeca', description: 'Tequila Olmeca, jugo de pomelo, jugo de limón, almíbar simple y Campari', price: '$6.800' },
        { name: 'Siesta Don Julio', description: 'Tequila Don Julio, jugo de pomelo, jugo de limón, almíbar simple y Campari', price: '$8.000' },
      ]
    },
    {
      section: 'Tragos Clasicos',
      items: [
        { name: 'Negroni Sbagliato', description: 'Champagne, Campari, vermouth rosso', price: '$7.200' },
      ]
    },
    {
      section: 'Martini',
      items: [
        { name: 'Martini Seco', description: 'Vermut seco (Martini), Gin Tanqueray y aceituna', price: '$6.100' },
        { name: 'Espresso Martini', description: 'Vodka Absolut, licor de café, almíbar simple y shot de espresso', price: '$6.900' },
        { name: 'Tiramisú Espresso Martini', description: 'Vodka Absolut, Baileys, licor de café y shot de espresso', price: '$6.900' },
      ]
    },
    {
      section: 'Los Mules',
      items: [
        { name: 'Moscow Mule', description: 'Vodka Absolut, jugo de limón, almíbar simple, cerveza de jengibre', price: '$7.500' },
        { name: 'London Mule', description: 'Gin (Tanqueray, Bombay, Beefeater), jugo de limón, almíbar simple, cerveza de jengibre', price: '$7.500' },
        { name: 'Mexican Mule Olmeca', description: 'Tequila, jugo de limón, almíbar simple, cerveza de jengibre', price: '$7.800' },
        { name: 'Mexican Mule Don Julio', description: 'Tequila, jugo de limón, almíbar simple, cerveza de jengibre', price: '$8.800' },
        { name: 'Kentucky Mule', description: 'Whisky Bourbon, jugo de limón, jarabe de goma, cerveza de jengibre', price: '$8.000' },
        { name: 'Disaronno Mule', description: 'Disaronno, jugo de limón, jarabe de goma, cerveza de jengibre', price: '$8.000' },
      ]
    },
    {
      section: 'Los Fuertes',
      items: [
        { name: 'Whisky Glenfiddich 18', description: '', price: '$25.000' },
        { name: 'Whisky Glenfiddich 12', description: '', price: '$11.000' },
        { name: 'Whisky Chivas Regal 12', description: '', price: '$9.900' },
        { name: 'Whisky Chivas Regal Extra 13', description: '', price: '$12.900' },
        { name: 'Whisky Chivas Regal 15', description: '', price: '$15.900' },
        { name: 'Whisky Chivas Regal 18', description: '', price: '$19.000' },
        { name: 'Jack Daniels', description: '', price: '$9.000' },
        { name: 'Jack Daniels N7', description: '', price: '$9.000' },
        { name: 'Jack Daniels Sabores', description: 'Honey, Apple, Fire', price: '$7.900' },
        { name: 'Johnnie Walker Rojo', description: '', price: '$5.900' },
        { name: 'Johnnie Walker Negro', description: '', price: '$8.900' },
        { name: 'Pisco Republicado 40ª Premiun', description: '', price: '$7.500' },
        { name: 'Pisco Artesanal Valle Luna', description: '', price: '$5.000' },
        { name: 'Pisco Mistral "Reserva Privada" Negro', description: '', price: '$9.300' },
        { name: 'Pisco Mistral Añejado en Roble 40° Clásico', description: '', price: '$6.900' },
        { name: 'Pisco Mistral Añejado en Roble 40° Reservado', description: '', price: '$6.900' },
        { name: 'Pisco Mistral Apple 35°', description: '', price: '$6.500' },
        { name: 'Pisco Mistral AFire 30°', description: '', price: '$6.500' },
        { name: 'Pisco Mistral 35° Pisco Especial', description: '', price: '$5.500' },



        { name: 'Ron Havana Club', description: 'Blanco o Dorado', price: '$6.900' },
        { name: 'Ron Bacardi', description: '', price: '$6.400' },
        { name: 'Jaggermeister', description: '', price: '$6.000' },
        { name: 'Corto Jaggermeister', description: '', price: '$4.000' }
      ]
    },

    {
      section: 'Vinos Castillo de Molina',
      items: [
        { name: 'Botella 750ml Tinto', description: 'Tinto (Castillo de Molina)', price: '$19.500' },
        { name: 'Vino T. Carmenere', description: 'Copa', price: '$5.600' },
        { name: 'Vino T. Cabernet Sauvignon', description: 'Copa', price: '$5.600' },
        { name: 'Botella 750ml Blanco', description: 'Blanco (Castillo de Molina)', price: '$17.000' },
        { name: 'Chardonnay', description: 'Copa', price: '$5.400' },
        { name: 'Botella de Espumante', description: '', price: '$18.000' },
      ]
    },
    {
      section: 'Espumantes',
      items: [
        { name: 'Espumante Misiones de Rengo', description: 'Copa', price: '$4.700' },
        { name: 'Espumante Misiones de Rengo', description: 'Botella', price: '$18.000' },
        { name: 'Espumante Riccadonna Moscato Rosé', description: 'Botella', price: '$25.000' },
        { name: 'Espumante Riccadonna Asti', description: 'Botella', price: '$25.000' },
        { name: 'Espumante Riccadonna Ruby', description: 'Botella', price: '$25.000' },


      ]
    },
    {
      section: 'Cervezas',
      items: [
        { name: 'Cerveza Austral Calafate', description: '330ml', price: '$4.500' },
        { name: 'Cerveza Cuello Negro Lager', description: '470ml', price: '$5.300' },
        { name: 'Cerveza Cuello Negro Ámbar', description: '470ml', price: '$5.300' },
        { name: 'Cerveza Negra IPA', description: '470ml', price: '$5.300' },
        { name: 'Cerveza STOUT', description: '', price: '$5.300' },
      ]
    },
  ],
  'BEBESTIBLES': [
    {
      section: 'Sin Alcohol',
      items: [
        { name: 'Bebida Lata', description: 'Coca-Cola, Coca-Cola Zero, Sprite, Fanta', price: '$3.000' },
        { name: 'Lata Redbull 250', description: '', price: '$3.500' },
        { name: 'Jugos Naturales', description: '', price: '$3.900' },
        { name: 'Limonada', description: 'Clásica, Menta Jengibre, Frambuesa, Mango, Piña, Maracuyá, Mix Berries', price: '$4.300' },
        { name: 'Café Americano', description: '', price: '$3.400' },
        { name: 'Café Expresso', description: '', price: '$2.800' },
        { name: 'Café Capuchino', description: '', price: '$3.600' },
        { name: 'Café Latte', description: '', price: '$3.600' },
        { name: 'Agua mineral con Gas Porvenir', description: '', price: '$2.600' },
        { name: 'Agua mineral con Gas Vital', description: '', price: '$2.600' },
        { name: 'Cerveza 0°', description: 'Corona', price: '$4.400' },
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
                  className="text-white uppercase tracking-[0.25em] px-6"
                  style={{
                    fontFamily: 'HopsAndBarley, serif',
                    fontSize: '16px',
                    fontWeight: 600
                  }}
                >
                  {section.section}
                </h2>
                <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
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
      <footer className="border-t border-white/15 py-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-white/40" />
          <div className="w-1 h-1 rotate-45 bg-white" />
          <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-white/40" />
        </div>
        <p
          className="text-center text-white/40 uppercase tracking-[0.3em]"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '8px',
            fontWeight: 300
          }}
        >
          Basildon Listening Restobar
        </p>
        <p
          className="text-center text-white/40 uppercase tracking-[0.3em]"
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
