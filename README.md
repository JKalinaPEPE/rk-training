# RK Training

Sitio público de **RK Training**, marca de entrenamiento personal de Rodrigo
Kalina en Montevideo, Uruguay.

Este repositorio también funciona como laboratorio práctico de DevOps: integra
control de versiones, validaciones automáticas, pruebas, seguridad,
contenedores y un flujo controlado de promoción entre DEV y PROD.

## Flujo de trabajo

| Rama | Ambiente | Uso |
| --- | --- | --- |
| `develop` | DEV | Integración y validación de cambios |
| `main` | PROD | Código aprobado y candidato a producción |

1. Los cambios se desarrollan en una rama `feature/*`.
2. Se abre un Pull Request hacia `develop`.
3. GitHub Actions ejecuta lint, pruebas, build y análisis de seguridad.
4. Después de revisar DEV, se abre un Pull Request de `develop` hacia `main`.
5. El workflow manual **Promover a producción** valida el candidato aprobado.
6. La publicación final en Sites se realiza de forma controlada.

## Controles automáticos

- ESLint para calidad de código.
- Build y pruebas sobre Node.js 22.
- Gitleaks para detectar secretos.
- Docker para reproducibilidad del entorno.
- Trivy para analizar vulnerabilidades de la imagen.
- Artefactos de build conservados durante siete días.

## Ejecución local

### Con Node.js

```bash
npm ci
npm run dev
```

### Con Docker Compose

```bash
docker compose up --build
```

La aplicación queda disponible en `http://localhost:3000`.

## Comandos principales

```bash
npm run lint
npm test
npm run build
```

## Seguridad

No se deben guardar tokens, contraseñas, archivos `.env` ni información de
alumnos en este repositorio. Los futuros secretos de despliegue se administran
mediante GitHub Environments y GitHub Secrets.
