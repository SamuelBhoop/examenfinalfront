# DragonDex - Examen Final Por Samuel Buelvas Cabrales

Catálogo de POKEMONES tipo dragon usando PokéAPI.

## Instalación
1. Clonar el repositorio
2. `npm install`
3. `npm run dev`

## Estructura
El proyecto ya tiene la configuración base con Vite, React Router, Tailwind CSS y Font Awesome y use tsx
y un service en TS para la configuración de las cositas.
Implementando trucos de alta gerarquia de programación (mentira no) cambie un poco el app tsx porque tenia una estructura un poco basica
(En resumen me tiraba error todo :c)

# Use of fontAwesome
```<i className="fas fa-thumbs-up fa-5x"></i>```
All icons: https://fontawesome.com/search?ic=free-collection 

links de Apis usadas:
1. https://pokeapi.co/api/v2/type/dragon
2. https://pokeapi.co/api/v2/pokemon
Nota: no me gustaron las apis, no especifican que el peso puede varias y los movimientos tambien pueden variar
segun la naturaleza del pokemon, y que cada pokemon tiene por lo menos 8 movimientos diferentes que pueden ser
seleccionados 4 (Perdón profe soy muy fanatico de pokemon)

# Use of react Icons
example usage

```
import { FaBeer } from "react-icons/fa";

function Question() {
  return (
    <h3>
      Lets go for a <FaBeer />?
    </h3>
  );
}
```
All icons: https://react-icons.github.io/react-icons/
