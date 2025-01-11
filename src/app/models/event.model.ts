export interface Event {
  id?: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  capacity: number;
  organizer: string;
}