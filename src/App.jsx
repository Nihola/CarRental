import React from 'react';
import Navbar from './components/Navbar';
import Data from './Data/Data';
import Card from './Card/Card';
import { useNavigate } from 'react-router-dom';
import Footer from './components/Footer';

const data = [
  {
    title: "The Best Platform for Car Rental",
    desc: "Ease of doing a car rental safely and reliably. Of course at a low price.",
    button: "Rental Car",
    img: "images/car-first.png"
  },
  {
    title: "Easy way to rent a car at a low price",
    desc: "Providing cheap car rental services and safe and comfortable facilities.",
    button: "Rental Car",
    img: "images/car-second.png"
  }
];

export const card = [
  {
    id: 1,
    name: "Nissan GT - R",
    type: "Sport",
    img: "images/car.png",
    bok: "80L",
    rule: "Manual",
    capacity: "2 people",
    price: "$80.00/",
    discount: "$100.00",
    button: "Rent Now"
  },
  {
    id: 2,
    name: "Range Rover Evoque",
    type: "SUV",
    img: "images/Car (4).png",
    bok: "88L",
    rule: "Automatic",
    capacity: "5 people",
    price: "$100.00/",
    button: "Rent Now"
  },
  {
    id: 3,
    name: "Toyota Supra",
    type: "Sport",
    img: "images/Car (2).png",
    bok: "70L",
    rule: "Automatic",
    capacity: "2 people",
    price: "$75.00/",
    button: "Rent Now"
  },
  {
    id: 4,
    name: "BMW X5",
    type: "SUV",
    img: "images/Car (3).png",
    bok: "85L",
    rule: "Automatic",
    capacity: "5 people",
    price: "$95.00/",
    discount: "$120.00",
    button: "Rent Now"
  },
  {
    id: 5,
    name: "Audi A4",
    type: "Sedan",
    img: "images/Car (4).png",
    bok: "65L",
    rule: "Manual",
    capacity: "5 people",
    price: "$60.00/",
    button: "Rent Now"
  },
  {
    id: 6,
    name: "Mercedes C-Class",
    type: "Sedan",
    img: "images/Car (5).png",
    bok: "70L",
    rule: "Automatic",
    capacity: "5 people",
    price: "$85.00/",
    discount: "$110.00",
    button: "Rent Now"
  },
  {
    id: 7,
    name: "Jeep Wrangler",
    type: "Off-Road",
    img: "images/Car (6).png",
    bok: "90L",
    rule: "Manual",
    capacity: "4 people",
    price: "$90.00/",
    button: "Rent Now"
  },
  {
    id: 8,
    name: "Chevrolet Camaro",
    type: "Sport",
    img: "images/Car (7).png",
    bok: "75L",
    rule: "Manual",
    capacity: "2 people",
    price: "$78.00/",
    discount: "$95.00",
    button: "Rent Now"
  }
];

export default function App() {
  const navigate = useNavigate();

  const handleSubmit = (id) => {
    navigate(`/cardinfo/${id}`);
  };

  return (
    <div>
      <Navbar />
      <div className='bg-gray-100 px-2 py-2 mt-6 mb-5'>
        <section className='flex justify-around gap-8 mt-8'>
          {data.map((item, index) => (
            <Data key={index} title={item.title} desc={item.desc} button={item.button} img={item.img} />
          ))}
        </section>

        <h1 className="text-1xl font-semibold text-gray-400 ml-8 mt-8">Popular Cars</h1>

        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 px-4 justify-items-center">
          {card.map((item) => (
            <div key={item.id} onClick={() => handleSubmit(item.id)} className="cursor-pointer">
              <Card
                name={item.name}
                type={item.type}
                img={item.img}
                bok={item.bok}
                rule={item.rule}
                capacity={item.capacity}
                price={item.price}
                discount={item.discount}
                button={item.button}
              />
            </div>
          ))}
        </main>
      </div>
      <Footer/>
    </div>
  );
}
