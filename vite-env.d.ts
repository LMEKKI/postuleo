/// <reference types="vite/client" />

// Déclarations pour les modules SCSS
declare module "*.scss" {
	const classes: { readonly [key: string]: string };
	export default classes;
}

// Déclarations pour CSS Modules (.module.scss)
declare module "*.module.scss" {
	const classes: { readonly [key: string]: string };
	export default classes;
}

// Déclaration pour Pico.css (si importé directement)
declare module "@picocss/pico" {
	const pico: string;
	export default pico;
}

// Déclarations pour les assets
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";
declare module "*.webp";
