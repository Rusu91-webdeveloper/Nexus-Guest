"use client";

import { motion } from "framer-motion";
import { MdOutlineKingBed } from "react-icons/md";
import { SlSizeActual } from "react-icons/sl";
import { BsPeople } from "react-icons/bs";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";
import Image from "next/image"; // Import Next.js Image component

interface Room {
  room_number: string;
  room_type: string;
  room_capacity: number;
  price_per_night: number;
  status: string;
  description: string;
  pictures: string[]; // Assuming it's an array of picture URLs
  booked_on: string[]; // Array of booked dates
}

interface RoomDetailsProps {
  room: Room;
}

export default function RoomDetails({ room }: RoomDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="px-4 sm:px-7 pt-12"
    >
      <div className="max-w-7xl mx-auto bg-white dark:bg-neutral-900 p-8 shadow-2xl rounded-xl">
        {/* Room Title */}
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-neutral-800 dark:text-neutral-100 text-center">
          Room {room.room_number} - {room.room_type}
        </h1>

        {/* Room Description */}
        <p className="mb-6 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg text-center">
          {room.description}
        </p>

        {/* Room Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="text-center flex flex-col items-center text-neutral-500 dark:text-neutral-400">
            <MdOutlineKingBed className="text-4xl sm:text-5xl" />
            <h3 className="text-lg font-semibold mt-2">Room Type</h3>
            <p className="text-sm sm:text-base">{room.room_type}</p>
          </div>
          <div className="text-center flex flex-col items-center text-neutral-500 dark:text-neutral-400">
            <SlSizeActual className="text-4xl sm:text-5xl" />
            <h3 className="text-lg font-semibold mt-2">Price Per Night</h3>
            <p className="text-sm sm:text-base">${room.price_per_night}</p>
          </div>
          <div className="text-center flex flex-col items-center text-neutral-500 dark:text-neutral-400">
            <BsPeople className="text-4xl sm:text-5xl" />
            <h3 className="text-lg font-semibold mt-2">Capacity</h3>
            <p className="text-sm sm:text-base">{room.room_capacity} People</p>
          </div>
        </div>

        {/* Booking Button */}
        <div className="text-center">
          <Button
            borderRadius="1.75rem"
            className="
          bg-[rgb(171,164,147)] 
          dark:bg-slate-900 
          text-white dark:text-white 
          border-neutral-200 dark:border-slate-800 
          
          rounded-none sm:rounded-[1.75rem_1rem] 
          shadow-[0_0_15px_rgb(171,164,147)] 
          hover:shadow-[0_0_25px_rgb(171,164,147)] 
          transition-shadow duration-300 ease-in-out
        "
          >
            <Link href={"/booking"}>Book now</Link>
          </Button>
        </div>

        {/* Room Pictures */}
        <div className="mt-8">
          <h2 className="text-lg sm:text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4 text-center">
            Pictures
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {room.pictures.map((picture, index) => (
              <div key={index} className="relative w-full h-64">
                <Image
                  src={picture}
                  alt={`Room ${room.room_number} picture ${index + 1}`}
                  fill
                  objectFit="cover" // Ensures the image covers the container without distortion
                  className="rounded-lg shadow-sm"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Room Booking Info */}
        <div className="mt-8">
          <h2 className="text-lg sm:text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4 text-center">
            Booking Dates
          </h2>
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300">
            {room.booked_on.map((date, index) => (
              <li key={index}>{new Date(date).toLocaleDateString()}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
