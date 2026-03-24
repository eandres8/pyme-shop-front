# 🚀 Pyme-shop

**Descripción breve:**
Proyecto frontend desarrollado con **React**, **TypeScript**, **Vite** y gestionado con **pnpm**. Este proyecto implementa un sistema de carrito de compras, autenticación de usuarios y gestión de productos, siguiendo buenas prácticas de arquitectura y testing.

---

## 🔹 Tabla de Contenidos

* [Tecnologías](#-tecnologías)
* [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
* [Instalación](#-instalación)
* [Ejecución](#-ejecución)
* [Testing](#-testing)
* [Carpetas Principales](#-carpetas-principales)
* [Contribuciones](#-contribuciones)
* [Licencia](#-licencia)

---

## 💻 Tecnologías

* **React 19** – Biblioteca de UI
* **TypeScript** – Tipado estático
* **Vite** – Bundler rápido y moderno
* **pnpm** – Gestor de paquetes
* **Material UI / Chakra UI / Tailwind** – Sistema de componentes y estilos (ajustar según tu proyecto)
* **Vitest** – Testing unitario y de hooks
* **React Router** – Navegación en SPA
* **Axios / Fetch** – Consumo de APIs

---

## 🏗 Arquitectura del Proyecto

El proyecto sigue la arquitectura **modular y por características**, inspirada en **MVVM** para frontend:

```
src/
│
├─ assets/            # Imágenes, fuentes y archivos estáticos
├─ components/        # Componentes reutilizables
├─ features/          # Módulos o características de la app
│   ├─ auth/          # Login, registro, hooks, servicios
│   ├─ cart/          # Carrito de compras, hooks, servicios
│   ├─ products/      # Listado de productos, filtros, hooks
│   └─ orders/        # Ordenes y pagos
├─ hooks/             # Custom hooks
├─ services/          # API y comunicación con backend
├─ store/             # Estado global (Redux, Zustand, Context API)
├─ utils/             # Helpers y utilidades
├─ App.tsx            # Componente principal
├─ main.tsx           # Entry point de Vite
└─ routes/            # Configuración de rutas
```

* **Componentes**: Reutilizables y desacoplados, divididos por características.
* **Features**: Cada módulo contiene sus hooks, servicios y componentes propios.
* **Services**: Comunicación con backend, repositorios y adaptadores.
* **Hooks**: Funciones reutilizables de lógica de estado y consumo de APIs.
* **Utils**: Funciones puras y helpers (p. ej., formateo, mappers, resultados).

---

## ⚡ Instalación

Clona el repositorio y usa `pnpm` para instalar dependencias:

```bash
# Clonar repositorio
git clone git@github.com:eandres8/pyme-shop-front.git
cd pyme-shop-front

# Instalar dependencias
pnpm install
```

---

## ▶️ Ejecución

Para ejecutar el proyecto en modo desarrollo:

```bash
pnpm dev
```

Esto levantará un servidor en **[http://localhost:5173](http://localhost:5173)** (por defecto) con hot-reload.

Para construir la aplicación para producción:

```bash
pnpm build
```

El resultado se encuentra en la carpeta `dist/`.

Para previsualizar la build de producción:

```bash
pnpm preview
```

---

## 🧪 Testing

El proyecto usa **Vitest** para tests unitarios y de hooks:

```bash
# Ejecutar tests
pnpm test

# Ejecutar tests en modo watch
pnpm test --watch
```

Los tests están en la misma carpeta que los archivos de features, siguiendo el patrón:

```
features/<feature>/__tests__/*.test.tsx
```

---

## 📁 Carpetas Principales

| Carpeta       | Descripción                             |
| ------------- | --------------------------------------- |
| `components/` | Componentes UI reutilizables            |
| `features/`   | Funcionalidades agrupadas por dominio   |
| `hooks/`      | Custom hooks para lógica de negocio     |
| `services/`   | Conexión con backend y adaptadores      |
| `store/`      | Estado global                           |
| `utils/`      | Funciones puras y helpers               |
| `routes/`     | Configuración de rutas de la aplicación |
| `assets/`     | Imágenes, fuentes y archivos estáticos  |

---

## 🤝 Contribuciones

1. Fork del repositorio
2. Crear una rama feature: `git checkout -b feature/nueva-funcionalidad`
3. Hacer commit de tus cambios: `git commit -m 'Agrega nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Abrir Pull Request

---

## 📜 Licencia

Este proyecto está bajo la licencia **MIT**.
Ver el archivo [LICENSE](LICENSE) para más detalles.
