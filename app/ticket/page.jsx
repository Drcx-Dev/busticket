"use client";
import { useState } from "react";

export default function BuyTicket() {
  const [formData, setFormData] = useState({
    address: "",
    name: "",
    email: "",
    gender: "",
    numbercard: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Состояние для отображения сообщения после отправки

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setIsSubmitted(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen  mt-16 ">
      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
        >
          <h2 className="text-3xl font-bold text-center text-indigo-800 mb-6">
            Купите билет на автобус
          </h2>

          <div className="mb-6">
            <label
              htmlFor="address"
              className="block text-lg font-medium text-gray-800"
            >
              Номер телефона
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="+992 006220942"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-800"
            >
              Имя пассажира
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Введите имя"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-800"
            >
              Ваш Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Введите email"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="gender"
              className="block text-lg font-medium text-gray-800"
            >
              Пол
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Выберите пол</option>
              <option value="male">Мужской</option>
              <option value="female">Женский</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="numbercard"
              className="block text-lg font-medium text-gray-800"
            >
              Номер карты
            </label>
            <input
              type="numbercard"
              id="numbercard"
              name="numbercard"
              value={formData.numbercard}
              onChange={handleChange}
              required
              placeholder="Введите Номер карты"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold text-lg rounded-lg hover:bg-indigo-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Купить билет
          </button>
        </form>
      ) : (
        <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">
            Спасибо за покупку!
          </h2>
          <p className="text-lg text-gray-700">
            Мы отправили ваш билет на указанный email.
          </p>
        </div>
      )}
    </div>
  );
}
