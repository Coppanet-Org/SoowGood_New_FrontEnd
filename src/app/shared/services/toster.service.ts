import { HotToastService } from '@ngneat/hot-toast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TosterService {
  constructor(private toasterService: HotToastService) { }

  public customToast(msg: string, type: 'success' | 'error' | 'warning') {
    return this.toasterService[type](msg, this.getToastOptions(type));
  }

  private getToastOptions(type: 'success' | 'error' | 'warning') {
    const backgroundColor = this.getBackgroundColor(type);
    const textColor = this.getTextColor(type);
    const iconColor = this.getIconColor(type)

    return {
      duration: 3000,
    
      style: {
        padding: '10px 16px',
        color: textColor,
        background: backgroundColor,
   
      },
      iconTheme: iconColor
    };
  }

  private getBackgroundColor(type: 'success' | 'error' | 'warning'): string {
    switch (type) {
      case 'success':
        return 'rgb(0 171 7 / 49%)'; // Green background for success
      case 'error':
        return 'rgb(255 0 0 / 55%) '; // Red background for error
      case 'warning':
        return 'rgb(255 179 68 / 65%)'; // Yellow background for warning
      default:
        return '#c2e0c6'; // Default to green for success
    }
  }

  private getTextColor(type: 'success' | 'error' | 'warning'): string {
    // You can adjust the text color based on the background color for better contrast.
    // For example, use white text on dark backgrounds and black text on light backgrounds.
    switch (type) {
      case 'success': 
      return 'rgb(4 26 0)'
      case 'warning':
        return 'rgb(53 37 0)'; // Use black text for success and warning
      case 'error':
        return 'rgb(53 0 0)'; // Use white text for error
      default:
        return '#333'; // Default to black
    }
  }
  private getIconColor(type: 'success' | 'error' | 'warning'): any {
    switch (type) {
      case 'success':
        return {
          primary: '#005539',
          secondary: '#f1f1f1',
        }; // Green background for success
      case 'error':
        return {
          primary: '#f44336',
          secondary: '#f1f1f1',
        }; // Red background for error
      case 'warning':
        return {
          primary: '#483500',
          secondary: '#f1f1f1',
        }; // Yellow background for warning
      default:
        return {
          primary: '#005539',
          secondary: '#f1f1f1',
        };  // Default to green for success
    }
  }
}
