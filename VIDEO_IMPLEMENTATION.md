# Guía de Implementación: Videos Bilingües de Presentación

He configurado la sección **About** para que sea dinámica y reaccione al idioma seleccionado. Aquí tienes los pasos para completar la implementación.

## 1. Ubicación de los Archivos
Los videos deben guardarse en la carpeta raíz `public/`. **No** los pongas dentro de `src/` ni en subcarpetas, ya que el navegador debe acceder a ellos mediante una ruta directa.

## 2. Nombres de Archivo (Crítico)
El sistema busca archivos con nombres específicos. Si el nombre no coincide exactamente, el video no cargará:

- **Video en Español**: `public/presentation-es.mp4`
- **Video en Inglés**: `public/presentation-en.mp4`

## 3. Formato y Dimensiones Recomendadas
Aunque el código está preparado para ajustar cualquier video (`object-fit: cover`), para obtener el mejor resultado visual te recomiendo:

- **Formato**: `.mp4` (H.264 para mayor compatibilidad).
- **Proporción**: **Portrait (Vertical)**. El contenedor en la web tiene un ratio de **9:12**.
- **Resolución**: 1080x1440px o similar es ideal. Si grabas con el celular en vertical, funcionará perfecto.
- **Tamaño de archivo**: Intenta que cada video pese menos de **10-15MB** para que la carga sea instantánea para el usuario.

## 4. Funcionamiento Técnico
- **Cambio de Idioma**: El componente `About.tsx` detecta el cambio de idioma mediante el `LanguageContext`.
- **Recarga Automática**: Cada vez que el usuario cambia de idioma (ej. de ES a EN), el reproductor ejecuta un comando `.load()` para actualizar el archivo fuente sin necesidad de refrescar la página.
- **Modo Mobile**: El video es visible en dispositivos móviles, colocado estratégicamente debajo de la descripción personal.

---
*Nota: Si necesitas cambiar los nombres de los archivos en el futuro, deberás actualizar la línea `<source src={`/presentation-${language}.mp4`} type="video/mp4" />` en el archivo `src/components/About.tsx`.*
