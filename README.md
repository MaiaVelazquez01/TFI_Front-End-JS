# 💄 Aurelie Beauty

Sitio web de e-commerce responsive desarrollado como **Trabajo Final Integrador** del curso **Front-End JS**.

El proyecto simula una tienda online de productos de belleza, consumiendo una API REST para mostrar productos dinámicamente e incorporando funcionalidades típicas de un e-commerce moderno, como carrito de compras con persistencia de datos y diseño adaptable a dispositivos móviles.

---

## 💻 Deployment

El proyecto fue desplegado utilizando GitHub Pages

🔗 https://maiavelazquez01.github.io/TFI_Front-End-JS/

## 🚀 Funcionalidades

- 🛍️ Listado dinámico de productos consumidos desde una API REST
- ➕ Agregar productos al carrito
- 🛒 Carrito
- 💾 Persistencia del carrito mediante **LocalStorage**
- 🔢 Contador de productos en tiempo real
- 🗑️ Vaciado completo del carrito
- 🍔 Menú hamburguesa para dispositivos móviles
- 📱 Diseño completamente responsive
- 📩 Formulario de contacto funcionando mediante Formspree
- 🎨 Animaciones y transiciones CSS

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- LocalStorage
- Flexbox
- CSS Grid
- Font Awesome
- Google Fonts
- Formspree

---

## 📂 Estructura del proyecto

```
📁 TFI_Front-End-JS
│
├── css/
│   └── styles.css
│
├── js/
│   └── main.js
│
├── img/
│   └── logo.ico
│   └── reviewer1.png
│   └── reviewer2.png
│   └── reviewer3.png
│
├── index.html
└── README.md
```

---

## ⚙️ Funcionalidades implementadas

### 🛒 Carrito de compras

- Agregar productos
- Persistencia mediante LocalStorage
- Contador dinámico
- Vaciar carrito
- Apertura y cierre mediante panel lateral

---

### 📦 Consumo de API

Los productos se obtienen dinámicamente desde:

```
https://dummyjson.com/products/category/beauty
```

utilizando **Fetch API**

---

### 📱 Responsive Design

El sitio fue desarrollado siguiendo una estrategia responsive para ofrecer una experiencia adecuada en:

- 💻 Desktop
- 📱 Mobile
- 📟 Tablets

Utilizando **Media Queries**, **Flexbox** y **CSS Grid**.

---

### 📬 Formulario

El formulario de contacto utiliza **Formspree**, permitiendo el envío de mensajes sin necesidad de desarrollar un backend.

---

## 🎯 Objetivos del proyecto

Este proyecto fue realizado para poner en práctica conocimientos de:

- Manipulación del DOM
- Consumo de APIs
- Eventos
- LocalStorage
- Responsive Design
- Organización de código
- Buenas prácticas en JavaScript