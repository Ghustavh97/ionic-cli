/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface IonlabApp {}
  interface IonlabDeviceFrame {
    'icon': string;
    'platform': string;
    'platformName': string;
    'url': string;
  }
  interface IonlabPlatformDropdown {
    'activePlatforms': string[];
  }
  interface IonlabPreview {
    'activeDevices': string[];
    'projectType'?: string;
    'url'?: string;
  }
  interface IonlabSidebar {
    'visible': boolean;
  }
  interface SkFadingCircle {}
}

declare global {


  interface HTMLIonlabAppElement extends Components.IonlabApp, HTMLStencilElement {}
  var HTMLIonlabAppElement: {
    prototype: HTMLIonlabAppElement;
    new (): HTMLIonlabAppElement;
  };

  interface HTMLIonlabDeviceFrameElement extends Components.IonlabDeviceFrame, HTMLStencilElement {}
  var HTMLIonlabDeviceFrameElement: {
    prototype: HTMLIonlabDeviceFrameElement;
    new (): HTMLIonlabDeviceFrameElement;
  };

  interface HTMLIonlabPlatformDropdownElement extends Components.IonlabPlatformDropdown, HTMLStencilElement {}
  var HTMLIonlabPlatformDropdownElement: {
    prototype: HTMLIonlabPlatformDropdownElement;
    new (): HTMLIonlabPlatformDropdownElement;
  };

  interface HTMLIonlabPreviewElement extends Components.IonlabPreview, HTMLStencilElement {}
  var HTMLIonlabPreviewElement: {
    prototype: HTMLIonlabPreviewElement;
    new (): HTMLIonlabPreviewElement;
  };

  interface HTMLIonlabSidebarElement extends Components.IonlabSidebar, HTMLStencilElement {}
  var HTMLIonlabSidebarElement: {
    prototype: HTMLIonlabSidebarElement;
    new (): HTMLIonlabSidebarElement;
  };

  interface HTMLSkFadingCircleElement extends Components.SkFadingCircle, HTMLStencilElement {}
  var HTMLSkFadingCircleElement: {
    prototype: HTMLSkFadingCircleElement;
    new (): HTMLSkFadingCircleElement;
  };
  interface HTMLElementTagNameMap {
    'ionlab-app': HTMLIonlabAppElement;
    'ionlab-device-frame': HTMLIonlabDeviceFrameElement;
    'ionlab-platform-dropdown': HTMLIonlabPlatformDropdownElement;
    'ionlab-preview': HTMLIonlabPreviewElement;
    'ionlab-sidebar': HTMLIonlabSidebarElement;
    'sk-fading-circle': HTMLSkFadingCircleElement;
  }
}

declare namespace LocalJSX {
  interface IonlabApp {}
  interface IonlabDeviceFrame {
    'icon'?: string;
    'platform'?: string;
    'platformName'?: string;
    'url'?: string;
  }
  interface IonlabPlatformDropdown {
    'activePlatforms'?: string[];
    'onIonlabPlatformToggled'?: (event: CustomEvent<any>) => void;
  }
  interface IonlabPreview {
    'activeDevices'?: string[];
    'projectType'?: string;
    'url'?: string;
  }
  interface IonlabSidebar {
    'onIonlabSidebarCloseClicked'?: (event: CustomEvent<any>) => void;
    'visible'?: boolean;
  }
  interface SkFadingCircle {}

  interface IntrinsicElements {
    'ionlab-app': IonlabApp;
    'ionlab-device-frame': IonlabDeviceFrame;
    'ionlab-platform-dropdown': IonlabPlatformDropdown;
    'ionlab-preview': IonlabPreview;
    'ionlab-sidebar': IonlabSidebar;
    'sk-fading-circle': SkFadingCircle;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'ionlab-app': LocalJSX.IonlabApp & JSXBase.HTMLAttributes<HTMLIonlabAppElement>;
      'ionlab-device-frame': LocalJSX.IonlabDeviceFrame & JSXBase.HTMLAttributes<HTMLIonlabDeviceFrameElement>;
      'ionlab-platform-dropdown': LocalJSX.IonlabPlatformDropdown & JSXBase.HTMLAttributes<HTMLIonlabPlatformDropdownElement>;
      'ionlab-preview': LocalJSX.IonlabPreview & JSXBase.HTMLAttributes<HTMLIonlabPreviewElement>;
      'ionlab-sidebar': LocalJSX.IonlabSidebar & JSXBase.HTMLAttributes<HTMLIonlabSidebarElement>;
      'sk-fading-circle': LocalJSX.SkFadingCircle & JSXBase.HTMLAttributes<HTMLSkFadingCircleElement>;
    }
  }
}


