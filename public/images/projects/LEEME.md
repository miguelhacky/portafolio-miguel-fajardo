# Capturas de proyectos

Coloca aquí las capturas reales de los proyectos cuando estén disponibles.

## Cómo activarlas

1. Guarda la imagen en esta carpeta, por ejemplo:
   - `restaurante.webp`
   - `analitica-clinica.webp`
2. Abre `src/data/portfolio.ts`.
3. En el proyecto correspondiente, reemplaza:

   ```ts
   image: null,
   ```

   por:

   ```ts
   image: '/images/projects/restaurante.webp',
   ```

4. Actualiza `imageAlt` con una descripción real de lo que muestra la captura.

## Recomendaciones

- Formato `.webp` o `.png`.
- Relación de aspecto cercana a `16 / 11` (por ejemplo, 1600 × 1100 px).
- Peso ideal menor a 400 KB.
- No incluyas datos personales, contraseñas ni información sensible.
- Si no hay captura, el portafolio muestra una maqueta conceptual claramente
  etiquetada como «Vista conceptual». No se presenta como una captura real.
