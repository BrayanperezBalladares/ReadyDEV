## Día 1 - Setup + Questions Module

### 🧩 Qué construí
- Estructura base del proyecto (web + api)
- Configuración de Git y GitHub
- Módulo `questions` en NestJS
- Endpoint GET /questions con filtros

### 🧠 Qué aprendí
- Diferencia entre controller y service
- Qué es un DTO y para qué sirve
- Qué es una entity en el dominio
- Cómo funciona el flujo HTTP en NestJS

### ⚙️ Decisiones técnicas
- Usar mock data en vez de DB para avanzar rápido
- Separar lógica en service en vez de controller
- Usar tipos estrictos en vez de string libre

### 🚧 Problemas que tuve
- Error con Git (submódulo accidental en apps/api)
- No entendía qué era .env
- Warnings de ESLint/Prettier

### 🔍 Cómo los resolví
- Eliminé el .git dentro de apps/api
- Entendí que .env es un archivo, no carpeta
- Aprendí a no copiar output de terminal como comandos

### 💡 Insights
- La estructura del proyecto es más importante que empezar a codear rápido
- Controller no debe tener lógica de negocio
- Los tipos ayudan a evitar errores futuros

### 📌 Qué haría diferente
- Hacer commits más pequeños desde el inicio
- Verificar estructura antes de escribir código

### ➡️ Próximo paso
- Implementar módulo `interviews`
- Crear endpoint POST /interviews

## Día 2 - 02/04/2026

### 🧩 Qué construí
- Mejoré el manejo de errores del backend con excepciones HTTP de NestJS
- Creé proyecto en Supabase y definí el schema de la base de datos (3 tablas)
- Instalé y configuré Prisma 5 como ORM
- Conecté NestJS con Supabase via connection pooler (puerto 6543)
- Migré QuestionsService e InterviewsService de mock data a queries reales con Prisma
- Implementé validación de DTOs con class-validator y ValidationPipe global
- Construí el frontend en React con 3 páginas: HomePage, InterviewPage, CompletePage
- Conecté el frontend al backend con axios
- Habilité CORS en NestJS para permitir requests desde el frontend

### 🧠 Qué aprendí
- Diferencia entre `throw new Error()` y excepciones HTTP de NestJS (NotFoundException, BadRequestException)
- Qué es un ORM y para qué sirve Prisma
- Cómo funciona `prisma db pull` para introspeccionar una DB existente
- Qué es el connection pooler de Supabase y por qué el puerto 6543 en vez de 5432
- Cómo crear un módulo global en NestJS con `@Global()`
- Qué es CORS y por qué el frontend no puede llamar al backend sin habilitarlo
- Cómo funciona React Router para navegación entre páginas
- Cómo pasar estado entre páginas con `useNavigate` y `location.state`
- Cómo hacer requests HTTP desde React con axios

### ⚙️ Decisiones técnicas
- Usar Prisma 5 en vez de 7 por estabilidad y compatibilidad con NestJS
- Usar connection pooler de Supabase (puerto 6543) porque el puerto directo (5432) estaba bloqueado
- PrismaModule con `@Global()` para no importarlo en cada módulo
- Frontend básico sin estilos primero para validar el flujo completo antes de diseñar
- CORS restringido solo a `localhost:5173` por seguridad

### 🚧 Problemas que tuve
- Prisma 7 tiene una API completamente diferente a v5 — incompatible con la configuración estándar de NestJS
- El servidor se colgaba al iniciar porque el puerto 5432 de Supabase estaba bloqueado
- Los decoradores de class-validator daban error con `module: "nodenext"` en tsconfig
- El frontend se quedaba cargando por falta de CORS en el backend
- Subí texto de explicación dentro del schema.prisma por error

### 🔍 Cómo los resolví
- Bajé Prisma de v7 a v5 con `npm install prisma@5 --save-dev`
- Cambié el DATABASE_URL al connection pooler de Supabase (puerto 6543)
- Cambié `module: "nodenext"` a `"commonjs"` en tsconfig y agregué `eslint-disable` en los DTOs
- Agregué `app.enableCors({ origin: 'http://localhost:5173' })` en main.ts
- Borré el contenido del schema y lo reescribí limpio

### 💡 Insights
- El backend nunca debe tener mock data en producción — Prisma + Supabase dan persistencia real con muy poco esfuerzo
- CORS no es un problema de código, es una política de seguridad del navegador
- Un ORM como Prisma te da type safety en las queries — si la tabla cambia, TypeScript te avisa
- Primero hacer que funcione, luego hacer que se vea bien
- El connection pooler es mejor que la conexión directa para aplicaciones web

### 📌 Qué haría diferente
- Verificar la versión de Prisma antes de instalar para evitar incompatibilidades
- Probar la conexión a Supabase antes de escribir código de módulos
- Habilitar CORS desde el inicio del proyecto

### 🧠 Conceptos clave del día
- ORM (Object Relational Mapper)
- Prisma schema y modelos
- Connection pooling
- CORS (Cross-Origin Resource Sharing)
- ValidationPipe global
- class-validator decoradores
- React Router (useNavigate, useLocation, Routes, Route)
- axios para HTTP requests
- useState y useEffect en flujos reales