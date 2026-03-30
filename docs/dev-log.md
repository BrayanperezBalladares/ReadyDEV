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