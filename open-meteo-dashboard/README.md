# Open Meteo Dashboard

Este proyecto es una aplicación que utiliza la API de Open-Meteo para obtener datos meteorológicos. La aplicación está escrita en TypeScript y utiliza React para la interfaz de usuario.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

```
open-meteo-dashboard
├── src
│   ├── app.ts          # Punto de entrada de la aplicación
│   └── types
│       └── DashboardTypes.tsx  # Interfaces para la respuesta de la API de Open-Meteo
├── package.json        # Configuración de npm
├── tsconfig.json       # Configuración de TypeScript
└── README.md           # Documentación del proyecto
```

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del proyecto:

```
npm install
```

## Uso

Para iniciar la aplicación, utiliza el siguiente comando:

```
npm start
```

## API de Open-Meteo

La aplicación se conecta a la API de Open-Meteo para obtener datos meteorológicos. La respuesta de la API se representa mediante la interfaz `OpenMeteoResponse`, que incluye información sobre la ubicación, condiciones actuales y datos horarios.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o un pull request en el repositorio.