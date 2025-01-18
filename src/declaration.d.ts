declare module '*.module.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.css' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png';
declare module '*.ttf';
declare module '*.jpg';
declare module '*.md';
