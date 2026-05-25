# DragonDex - Examen Final Por Samuel Buelvas Cabrales

Catálogo de POKEMONES tipo dragon usando PokéAPI. Se recomienda discreción, este proyecto puede ser tan malo como un combate de un tipo
agua-roca contra el pikachu de Ash (No tiene sentido lo poderoso que es), no sería raro que explote en cualquier momento.

## Instalación
1. Clonar el repositorio
2. `npm install`
3. `npm run dev`
4. Tener todo actualizado porque sino no funciona, como le sucedió a algunos de los compañeros.

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

Nota: no me gustaron las apis, no especifican que el peso puede variar y los movimientos tambien pueden variar
segun la naturaleza del pokemon, y que cada pokemon tiene por lo menos 8 movimientos diferentes de los cuales solo 
pueden ser seleccionados 4 (Perdón profe soy muy fanatico de pokemon).

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
Y ya, o usé mas nada porque se supone que es algo sencillo (casi no me da), si usé algo no me acuerdo al momento de redactar este README.

Recomendación: Bajarle el brillo en caso de probar el funcionamiento, posible cegado parecido al de una flashbang.
