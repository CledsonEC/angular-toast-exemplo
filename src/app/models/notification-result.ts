import { NotificationError } from "./notification-error";
import { NotificationMessage } from "./notification-message";

export interface NotificationResult {
  isValid: boolean;
  errors: NotificationError[];
  messages: NotificationMessage[];
  data: any;
} 
