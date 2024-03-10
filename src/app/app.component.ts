import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading: boolean = false;
  constructor(
    private loaderService: LoaderService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loaderService.getLoaderState().subscribe((s) => {
      this.isLoading = s;
      this.cdr.detectChanges();
    });
  }
}

// export interface NgxFacebookMessengerOptions {
//   /**
//    * Your required page_id for correctly work of real plugin facebook messenger
//    */
//   page_id: string;
//   /**
//    * Optional option for defined language support by facebook plugin (review your language in documentation)
//    * @default 'en_US'
//    */
//   language?: string;
//   /**
//    *  Init Plugin Options
//    */
//   initPluginOptions?: {
//     /**
//      * Init plugin by default Facebook Messenger Oficial lazy ( when click in the fake button )
//      * when is false init eager ( killed your web vitals )
//      * @default true
//      */
//     lazy?: boolean;
//     /**
//      * If required showDialog
//      * @default true
//      */
//     showDialog?: boolean;
//     /**
//      * Debounce time for hide the ngx facebook messenger
//      * When load real plugin, time in miliseconds
//      * @default 600
//      */
//     debounceTime?: number;
//     /**
//      * Property of attribute for theme_color color in oficial Facebook Plugin Messenger
//      * Default take your configuration setting in Facebook Account
//      * If not it's configure take blue default color
//      * @default null
//      */
//     theme_color?: string;
//     /**
//      * When the user is logged with your account show a greeting text in the Facebook Plugin Messenger
//      * @default 'Hello, how can we help you?'
//      */
//     logged_in_greeting?: string;
//     /**
//      * When the user not logged with your account show a greeting text in the Facebook Plugin Messenger
//      * @default 'Hello, how can we help you?'
//      */
//     logged_out_greeting?: string;
//   };
//   /**
//    * Button Options for customization similar to a Facebook Plugin Official
//    */
//   buttonOptions?: {
//     /**
//      * Text button when style is VIEW_BUTTON.ICON_TEXT or VIEW_BUTTON.TEXT
//      * @default Chat
//      */
//     text?: string;
//     /**
//      * Enum Options of possible view.
//      * @default VIEW_BUTTON.ICON
//      */
//     view?: VIEW_BUTTON;
//     /**
//      * Enum Options of possible style.
//      * @default STYLE_BUTTON.ROUNDED_LOGO
//      */
//     style?: STYLE_BUTTON;
//     /**
//      * Size options if is desktop or mobile
//      */
//     size?: {
//       /**
//        * Enum Options of possible desktop size.
//        * @default SIZE_BUTTON_DESKTOP.STANDARD
//        */
//       desktop?: SIZE_BUTTON_DESKTOP;
//       /**
//        * Enum Options of possible mobile size.
//        * @default SIZE_BUTTON_MOBILE.COMPACT
//        */
//       mobile?: SIZE_BUTTON_MOBILE;
//     };
//   };
// }

// export enum VIEW_BUTTON {
//   ICON = 'ICON',
//   ICON_TEXT = 'ICON_TEXT',
//   TEXT = 'TEXT',
// }

// export enum STYLE_BUTTON {
//   ROUNDED_LOGO = 'ROUNDED_LOGO',
//   ROUNDED = 'ROUNDED',
//   SQUARED = 'SQUARED',
// }

// export enum SIZE_BUTTON_MOBILE {
//   STANDARD = 'STANDARD_MOBILE',
//   COMPACT = 'COMPACT_MOBILE',
// }

// export enum SIZE_BUTTON_DESKTOP {
//   STANDARD = 'STANDARD_DESKTOP',
//   COMPACT = 'COMPACT_DESKTOP',
// }
