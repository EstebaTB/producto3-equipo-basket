# 📱 **Producto 3: Interfaz Móvil**

### 📅 **Fecha de Entrega**  
🗓 **8 de diciembre**  
⏰ **Por: 23:59**  
📌 **Puntos Totales**: 25  
🔁 **Intentos Permitidos**: 1  

---

## 🌟 **Descripción**  
Usando el framework **React Native**, desarrollaremos la interfaz para dispositivos móviles. Aprovecharemos el trabajo realizado en los dos primeros productos para transformar las interfaces a "mobile" y conectarlas con nuestra base de datos en **Firebase**.

---

## 🎯 **Objetivos**  
- Conocer y utilizar el framework **React Native** para el desarrollo de una interfaz móvil.

---

## 📝 **Pasos a Seguir**  

1. **📖 Leer las instrucciones:** Identifica los requerimientos de la actividad y revisa la rúbrica de evaluación.  
2. **📚 Consultar recursos:** Usa los materiales facilitados en el aula virtual.  
3. **🛠 Preparar entorno de trabajo:**  
    - Instalar herramientas necesarias para React Native.  
    - Crear un repositorio en GitHub con `.gitignore` para excluir la carpeta `node_modules`.  
4. **📋 Diseñar la interfaz:** Basado en el Producto 1, incluye:  
    - Tres pantallas diferenciadas:  
        - Un reproductor multimedia con botones de interacción.  
        - Un listado.  
        - Una pantalla de detalle.  
5. **🚀 Desarrollo del componente `Inicio`:**  
    - Añade un `FlatList` para mostrar un listado infinito.  
6. **🔥 Integrar Firebase:**  
    - Instalar `react firebase`.  
    - Configurar Firebase e inicializar la conexión con `Firebase.initializeApp`.  
    - Usar el método `once` en `componentDidMount` para obtener datos.  
7. **🔀 Navegación:**  
    - Instalar y configurar **React Native Navigation**.  
    - Crear un Stack con las tres ventanas en `App.js`.  
    - Configurar el menú superior con título, colores y un botón de navegación.  
8. **📤 Subir el proyecto:**  
    - Verificar que compile correctamente en [CodeSandbox](https://codesandbox.io/).  
    - Adjuntar el enlace de GitHub y CodeSandbox en el documento de entrega.

---

## ✅ **Requisitos**  

1. Haber finalizado el **Producto 2** con las correcciones marcadas por el consultor.  
2. Tener instalado **Angular Material** en el proyecto.  

---

## 📚 **Recursos Básicos**  
Consulta el documento **"Recursos de aprendizaje vinculados a los productos"** disponible en el aula virtual.

---

## 🏆 **Criterios de Evaluación**  

| **Criterio**                          | **Puntos Máximos** |  
|---------------------------------------|--------------------|  
| Implementación de React Native        | 35 puntos          |  

📌 **Nota mínima para superar**: 17,5 puntos sobre 35.  

---

## 📦 **Entrega de la Actividad**  

1. 📩 Subir la actividad al canal indicado en el aula virtual.  
2. **Formato de entrega:**  
    - 📄 Documento (DOC o PDF) con:  
        - Documentación del proyecto.  
        - Enlaces a GitHub y CodeSandbox.  
    - 🗜 Archivo comprimido del proyecto **(sin la carpeta `node_modules`)**.  
3. **📁 Nombre del archivo:**  


# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
