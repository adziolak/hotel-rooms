import { type FC } from 'react';
import BookingForm from './components/BookingForm';
import "./booking-room.scss";

const BookingRoom: FC = () => {
    return (
        <section className="mt-6 mx-auto max-w-7xl container px-6 min-h-[250px] lg:min-h-[300px] booking-room"> 
            <div className="lg:w-1/2">                         
                <h1 className="lg:text-5xl font-light tracking-tight text-white text-4xl">Booking with us is easy</h1>             
                <p className="mt-2 mb-5 lg:mt-4 text-2xl font-medium text-3xl text-white">The best holiday experience</p>      
                <BookingForm  />               
            </div>
        </section>
    )
}

BookingRoom.displayName = "BookingRoom";

export default BookingRoom;