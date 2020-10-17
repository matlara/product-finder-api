
# Product Finder

Esto proyecto es el backend de un ecommerce de ejemplo.

Líder quiere realizar una nueva campaña a través del sitio, pero esta ocasión quiere que sea especial y que sea una sorpresa para sus clientes.

La campaña consiste en que cada vez que un cliente busque con un palíndromo, todos los productos encontrados tendrán un 50% de descuento, esta búsqueda aplica para identificadores (Id de Producto), marcas y descripciones de productos. Lamentablemente, el sitio actual no soporta esta funcionalidad y los equipos involucrados están muy ocupados arreglando bugs creando nuevas funcionalidades. Por esta razón, Líder se ha comunicado con usted para que lo ayude a desarrollar una nueva plataforma que cumpla con los siguientes requerimientos:

Se necesita una Aplicación Web que contenga un buscador y una sección de resultados para listar los productos encontrados desde una base de datos en mongo (https://github.com/walmartdigital/products-db). En caso de que la búsqueda sea un palíndromo se deberá retornar los productos con el descuento (50%) ya aplicado al precio.
El equipo de negocio ha definido que cuando sea una búsqueda sobre los identificadores de productos se deberá retornar el resultado exacto, es decir, un producto. Mientras que para la marca y para la descripción de productos, basta con que la búsqueda sea de más de 3 caracteres y que estos estén incluidos en los campos ya mencionados (marca y descripción).

## Tecnologias

node
nvm v12.0.0

## Instalación

Usa el manejador de paquetes de nodejs [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) para instalar las dependencias

```bash
npm install
```

## Correr el servicio

La app estara corriendo en http://localhost:3000

```bash
npm run start
```

## Ejecutar las pruebas

```bash
npm run test
```
