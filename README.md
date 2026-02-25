# Portfolio React - Josue Mancilla

Portfolio profesional convertido de HTML vanilla a React + TypeScript con Vite.

## Tecnologías Utilizadas

- **React 19** con TypeScript
- **Vite** como bundler
- **CSS Modules** para estilos modularizados
- **GSAP** para animaciones avanzadas
- **tsparticles** para efectos de partículas interactivos
- **React Hooks** personalizados para estado global

## Estructura del Proyecto

```
src/
├── components/          # Componentes React reutilizables
│   ├── Navigation.tsx   # Navegación con tema e idioma
│   ├── Hero.tsx        # Sección principal con partículas
│   ├── Marquee.tsx     # Efecto marquee de tecnologías
│   └── Particles.tsx   # Sistema de partículas interactivo
├── hooks/              # Hooks personalizados
│   ├── useTheme.ts     # Gestión de tema (dark/light)
│   ├── useLanguage.ts   # Sistema de traducción i18n
│   ├── useCursor.ts     # Cursor personalizado con trail
│   └── useTypingEffect.ts # Efecto de typing animado
├── styles/             # CSS Modules
│   ├── global.module.css # Estilos globales y variables
│   ├── Navigation.module.css
│   ├── Hero.module.css
│   └── Marquee.module.css
├── data/               # Datos estáticos
│   ├── portfolio.ts     # Datos del portfolio
│   └── translations.ts # Traducciones es/en
├── types/              # Tipos TypeScript
│   └── index.ts        # Definiciones de tipos
└── utils/              # Utilidades varias
```

## Características Implementadas

### Completadas
- [x] Sistema de tema (dark/light) con persistencia
- [x] Sistema de idioma (español/inglés) con detección automática
- [x] Cursor personalizado con efecto trail
- [x] Partículas interactivas con tsparticles
- [x] Efecto typing animado en el hero
- [x] Navegación responsive con menú móvil
- [x] Efecto marquee de tecnologías
- [x] CSS Modules para estilos encapsulados
- [x] TypeScript para tipado seguro

### En Progreso
- [ ] Animaciones con GSAP y ScrollTrigger
- [ ] Componentes de About, Skills, Projects, Timeline, Contact
- [ ] Formulario de contacto funcional
- [ ] Optimización de rendimiento

## Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## Personalización

### Cambiar Colores del Tema
Editar `src/styles/global.module.css` en las variables CSS:

```css
:root {
  --bg: #050a0e;        /* Fondo principal */
  --accent: #00ffc8;      /* Color acento */
  --text: #e8f4f0;       /* Color texto */
  /* ... */
}
```

### Agregar Nuevas Traducciones
Editar `src/data/translations.ts`:

```typescript
export const translations: Translations = {
  es: {
    "nueva.clave": "Nuevo texto en español"
  },
  en: {
    "nueva.clave": "New text in English"
  }
};
```

### Modificar Datos del Portfolio
Editar `src/data/portfolio.ts` para actualizar:
- Habilidades y porcentajes
- Proyectos y tecnologías
- Experiencia profesional
- Enlaces sociales

## Responsive Design

El diseño es completamente responsive:
- **Desktop**: Layout completo con todas las animaciones
- **Tablet**: Adaptación de layouts y navegación
- **Mobile**: Menú hamburguesa, layouts optimizados

## Animaciones

### Cursor Personalizado
- Punto principal que sigue el mouse
- Trail effect con desvanecimiento
- Efecto hover en elementos interactivos

### Partículas Interactivas
- Conexiones dinámicas entre partículas
- Efecto hover (grab) y click (push)
- Cambio de colores según tema

### Efecto Typing
- Frases rotativas con efecto de escritura/borrado
- Velocidad diferenciada para typing/deleting
- Reinicio automático al cambiar idioma

## Despliegue

El proyecto está configurado para despliegue fácil en:
- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- Cualquier hosting estático

## Licencia

MIT License - Copyright (c) 2026 Josue Mancilla

---

**Desarrollado con ❤️ y ☕ por Josue Mancilla**
