// In a shared location, e.g., `types.ts`
import { ObjectId } from "mongodb"; // Assuming MongoDB

export interface Room {
  _id: string | ObjectId | undefined;
  room_number: string;
  room_type: string;
  room_capacity: number;
  price_per_night: number;
  status: "available" | "occupied" | "maintenance";
  description: string;
  booked_on: string[];
  pictures: string[];
  createdAt: string;
  updatedAt: Date;
  __v: number;
}
