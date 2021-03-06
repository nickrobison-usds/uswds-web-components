/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface UsaButton {
    'active'?: boolean;
    'disabled'?: boolean;
    'focused'?: boolean;
    'hover'?: boolean;
    'href'?: string;
    'size'?: "big";
    'unstyled'?: boolean;
    'variant'?: | "default"
    | "secondary"
    | "accent-cool"
    | "base"
    | "outline"
    | "outline-inverse";
  }
}

declare global {


  interface HTMLUsaButtonElement extends Components.UsaButton, HTMLStencilElement {}
  var HTMLUsaButtonElement: {
    prototype: HTMLUsaButtonElement;
    new (): HTMLUsaButtonElement;
  };
  interface HTMLElementTagNameMap {
    'usa-button': HTMLUsaButtonElement;
  }
}

declare namespace LocalJSX {
  interface UsaButton {
    'active'?: boolean;
    'disabled'?: boolean;
    'focused'?: boolean;
    'hover'?: boolean;
    'href'?: string;
    'size'?: "big";
    'unstyled'?: boolean;
    'variant'?: | "default"
    | "secondary"
    | "accent-cool"
    | "base"
    | "outline"
    | "outline-inverse";
  }

  interface IntrinsicElements {
    'usa-button': UsaButton;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'usa-button': LocalJSX.UsaButton & JSXBase.HTMLAttributes<HTMLUsaButtonElement>;
    }
  }
}


