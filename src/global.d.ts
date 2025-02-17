declare module '*.scss' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
  }

  declare module "*.png"
  declare module "*.jpeg"
  declare module "*.jpg"
  declare module '*.svg' {
    import React from 'react';

    // Импорт как React-компонент
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;

    // Импорт как URL (?url)
    const url: string;
    export { url };
}

declare module '*.svg?url' {
  const url: string;
  export default url;
}