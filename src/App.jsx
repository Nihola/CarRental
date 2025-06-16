import React from 'react';
import Navbar from './components/Navbar';
import Data from './Data/Data';
import Card from './Card/Card';
import { useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import { useFavoriteStore } from './store/favoriteStore';

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
    button: "Rent Now",
    img_second: "images/View3.jpg",
    img_third: "images/View2.jpg",
    description: "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track",
    rating: 4
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
    button: "Rent Now",
    img_second: "images/View3.jpg",
    img_third: "images/View2.jpg",
    description: "Range Rover Evoque has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track",
    rating: 3
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
    button: "Rent Now",
    img_second: "images/View3.jpg",
    img_third: "images/View2.jpg",
    description: "Toyota Supra has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track",
    rating: 5
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
    button: "Rent Now",
    img_second: "images/View3.jpg",
    img_third: "images/View2.jpg",
    description: "BMW X5 has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track",
    rating: 4
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
    button: "Rent Now",
    img_second: "images/View3.jpg",
    img_third: "images/View2.jpg",
    description: "Audi A4 has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track",
    rating: 1
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
    button: "Rent Now",
    img_second: "images/View3.jpg",
    img_third: "images/View2.jpg",
    description: "Mercedes C-Class has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track",
    rating: 5
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
    button: "Rent Now",
    img_second: "images/View3.jpg",
    img_third: "images/View2.jpg",
    description: "Jeep Wrangler has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track",
    rating: 4
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
    button: "Rent Now",
    img_second: "images/View3.jpg",
    img_third: "images/View2.jpg",
    description: "Chevrolet Camaro has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track",
    rating: 2
  }
];

export default function App() {
  const navigate = useNavigate();

  const handleSubmit = (id) => {
    navigate(`/cardinfo/${id}`);
  };
  const {search} = useFavoriteStore()
  const searchData=card.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))

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
          {searchData.map((item) => (
            <div key={item.id} className="cursor-pointer">
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
                handleSubmit={() => handleSubmit(item.id)}
                car={item}
              />
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
}
