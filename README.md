# Kenstore Products and Cart static page

**Kenstore** is a sleek and responsive web template designed for an ecommerce product page. I was tasked to create a web template where product data that came from a json file can be used to populate content for the Product page. The focus for this task was the Product and Cart page.

![](readme-preview.jpg)

[Live Demo](https://kenstore.netlify.app/)

### Technologies

<img width="22px" src="react-original.svg"> <img width="22px" src="javascript-original.svg"> <img width="22px" src="sass-original.svg"> <img width="22px" src="html5-plain.svg">

### Tools

<img width="22px" src="figma-original.svg"> <img width="22px" src="photoshop-plain.svg"> <img width="22px" src="illustrator-plain.svg">

## Key Areas

- **Products** Product content was from **data/data.json** and we need to run **json-server** to use it. I modified **vite.config.js** to run json-server at port 9600, then local port at 9500. By default, all products are populated to the Products page but we can also click the categories to filter them out.

- **Cart** This page performs some logic of an ecommerce cart page like computing the product to its quanity, then adding them all to get a total amount. The items selected to the cart are stored in Local Storage only.

## Features

- **Responsive Design:** Optimized for seamless viewing across all devices, from desktops to mobile phones.
- **Sass Styling:** Leverages the power of Sass for maintainable, scalable, and beautifully crafted styles.

### Installation

Clone the repository:

```bash
git clone https://github.com/kennyestrellaworks/kenstore-ecommerce-frontend.git
```

Navigate into the project directory:

```bash
cd kenstore-ecommerce-frontend
```

Install the dependencies:

```bash
npm install
```

### Running the Project

Development:

```bash
npm run dev:json
```

Using netlify:

```bash
npm run dev:netlify
```
