import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailMask'
})
export class EmailPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    // Split the email into username and domain
    const [username, domain] = value.split('@');
    if (!username || !domain) {
      return value; // Invalid email format
    }

    // Mask part of the username for privacy
    const maskedUsername = username.length > 3
      ? username.substring(0, 3) + '***'
      : username;

    return `${maskedUsername}@${domain}`;
  }
}
