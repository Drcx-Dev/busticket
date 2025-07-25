import Link from "next/link";
import React from "react";

const busSchedule = [
  {
    departure: "09:00",
    arrival: "15:30",
    price: "1200 ₽",
  },
  {
    departure: "12:00",
    arrival: "18:30",
    price: "1200 ₽",
  },
  {
    departure: "15:00",
    arrival: "21:30",
    price: "1200 ₽",
  },
  {
    departure: "18:00",
    arrival: "00:30",
    price: "1200 ₽",
  },
  {
    departure: "09:00",
    arrival: "15:30",
    price: "1200 ₽",
  },
  {
    departure: "09:00",
    arrival: "15:30",
    price: "1200 ₽",
  },
  {
    departure: "09:00",
    arrival: "15:30",
    price: "1200 ₽",
  },
  {
    departure: "09:00",
    arrival: "15:30",
    price: "1200 ₽",
  },
  {
    departure: "09:00",
    arrival: "15:30",
    price: "1200 ₽",
  },
];

const Home = () => {
  return (
    <section className="text-black">
      <div className="min-h-screen flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold text-center mb-8">
          Расписание автобусов Москва — Волгоград
        </h1>

        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b text-left">
                  Время отправления
                </th>
                <th className="px-4 py-2 border-b text-left">Время прибытия</th>
                <th className="px-4 py-2 border-b text-left">Цена</th>
                <th className="px-4 py-2 border-b text-left">Действия</th>
              </tr>
            </thead>
            <tbody>
              {busSchedule.map((bus, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b">{bus.departure}</td>
                  <td className="px-4 py-2 border-b">{bus.arrival}</td>
                  <td className="px-4 py-2 border-b">{bus.price}</td>
                  <td className="px-4 py-2 border-b">
                    <Link
                      href="./ticket"
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                      Купить билет
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div></div>
      <div className="min-h-screen flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold text-center mb-8">
          Расписание автобусов Волгоград-Москва
        </h1>

        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b text-left">
                  Время отправления
                </th>
                <th className="px-4 py-2 border-b text-left">Время прибытия</th>
                <th className="px-4 py-2 border-b text-left">Цена</th>
                <th className="px-4 py-2 border-b text-left">Действия</th>
              </tr>
            </thead>
            <tbody>
              {busSchedule.map((bus, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b">{bus.departure}</td>
                  <td className="px-4 py-2 border-b">{bus.arrival}</td>
                  <td className="px-4 py-2 border-b">{bus.price}</td>
                  <td className="px-4 py-2 border-b">
                    <Link
                      href="./ticket"
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                      Купить билет
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Home;
