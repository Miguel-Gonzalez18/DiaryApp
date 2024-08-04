# 📔 DiaryApp

DiaryApp es una aplicación móvil diseñada para ayudar a estudiantes de todas las edades a organizar su vida académica. La aplicación permite anotar tareas, exámenes y recordatorios, así como integrar un calendario para gestionar mejor sus horarios.

## 📄 Descripción

DiaryApp facilita la organización de tareas y exámenes, enviando recordatorios y permitiendo a los estudiantes mantener un seguimiento de sus responsabilidades académicas. La aplicación es sencilla y práctica, diseñada para mejorar la productividad y la gestión del tiempo de los estudiantes.

## ✨ Funcionalidades

- **📚 Agregar Materias**: Permite a los usuarios agregar sus materias para una fácil organización.
- **🗓️ Clases Semanales**: Registro de clases semanales para un seguimiento rápido.
- **📝 Registrar Fechas de Exámenes**: Los usuarios pueden registrar las fechas de sus exámenes y recibir recordatorios.
- **⏰ Recordatorios**: Envío de recordatorios horas antes o un día antes de las clases y exámenes.
- **🐦 Asistente Virtual**: Una mascota asistente que ayuda a los usuarios a mantenerse organizados y motivados.

## 🛠️ Tecnologías Utilizadas

- **📱 React Native** con Expo
- **🔥 Firebase** para el backend
- **🎨 Lottie** para animaciones
- **💾 AsyncStorage** para el almacenamiento local

## 🚀 Instalación

1. Clona el repositorio
   ```bash
   git clone https://github.com/tu-usuario/DiaryApp.git
   cd DiaryApp



2. Instala las dependencias
   ```bash
   npm install
   ```

3. Configura Firebase
   - Crea un proyecto en Firebase.
   - Habilita Firestore y Authentication.
   - Descarga el archivo `google-services.json` y colócalo en el directorio `android/app`.
   - Descarga el archivo `GoogleService-Info.plist` y colócalo en el directorio `ios`.

4. Inicia la aplicación
   ```bash
   npx expo start
   ```

## ⚙️ Configuración Inicial

Al iniciar la aplicación por primera vez, se solicitarán permisos para enviar notificaciones y acceder al almacenamiento del dispositivo. Luego, se pedirá al usuario que ingrese su nombre, nivel educativo y horario preferido para notificaciones.

## 🔗 Enlace al Diseño en Figma

Puedes ver el diseño de DiaryApp en Figma en el siguiente enlace: [DiaryApp Diseño en Figma](https://www.figma.com/design/QrwM9X3SWIXB9XrdjDsh69/DiaryApp?node-id=0-1&t=MsqtYLsQ4bUfybC1-1)

Puedes ver el prototipo de DiaryApp en Figma en el siguiente enlace: [DiaryApp prototipo en Figma](https://www.figma.com/proto/QrwM9X3SWIXB9XrdjDsh69/DiaryApp?node-id=0-1&t=MsqtYLsQ4bUfybC1-1)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue los pasos a continuación para contribuir:

1. Haz un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva funcionalidad'`)
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📜 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE.txt) para más detalles.
