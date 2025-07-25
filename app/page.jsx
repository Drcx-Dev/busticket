"use client";
import { useState } from "react";
import Image from "next/image";
import bus from "../app/photo/bus.png";
import Header from "./components/header";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="text-black">
      <section className="mt-20">
        <div className="bg-white container w-[1400px] justify-self-center mt-4 rounded-md h-[639px] flex">
          <div className="text-6xl pt-36 pl-4">
            <h1>
              Вип-экспресс - <br />
              ваш комфорт
              <br /> в любом месте!
            </h1>
            <p className="pt-2 text-2xl">
              Поездки на автобусе с ВИП Экспресс это комфортно, <br /> доступно
              и безопасно. Работаем для вас уже более 10 лет{" "}
            </p>
            <button className="text-xl bg-indigo-500 w-48 h-12 rounded-md text-white hover:bg-indigo-400">
              <Link href="./schedule" className="">
                покупка билетов
              </Link>
            </button>
          </div>
          <Image className="w-auto h-96 mt-44 ml-20" src={bus} alt="bus" />
        </div>
      </section>
      <section className="mt-20 ">
        <h1 className="text-4xl justify-self-center">Ежедневные рейсы</h1>
        <div className="flex justify-center space-x-8  text-center pt-10  ">
          <div className="w-[520px] h-10   rounded-md pt-2 bg-indigo-400">
            <h1>Москва (Автовокзал Саларьево) - Волжский / Волгоград</h1>
          </div>
          <div className="w-[520px] h-10  rounded-md pt-2 pr-6 bg-indigo-400">
            <h1>Волжский / Волгоград - Москва (Автовокзал Саларьево)</h1>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="bg-white w-full md:w-[1000px] md:ml-20 rounded-s-md p-4">
            <h1 className="text-3xl pl-3 pt-2">Компания «Vip Express»</h1>
            <div className="space-y-3 pl-3">
              <p>
                Транспортная компания “Вип Экспресс” предлагает круглогодичный
                транспортный сервис из Волгограда в Москву <br /> и обратно с
                доступными тарифами. Наши опытные водители гарантируют
                безопасную и комфортную поездку <br /> на протяжении всего
                маршрута.
              </p>
              <p>
                Кроме того, у нас доступна услуга аренды автобуса с водителем
                для организации корпоративных мероприятий, <br /> экскурсий или
                трансфера групп людей. Мы заботимся о вашем комфорте и
                безопасности, обеспечивая <br /> профессиональное вождение и
                современные автобусы.
              </p>
            </div>
            <button className="text-xl bg-indigo-500 w-48 h-10 mt-2 rounded-md text-white hover:bg-indigo-400">
              <Link href="./aboutus" className="">
                подробнее о нас
              </Link>
            </button>
          </div>

          {/* Блок с миссией */}
          <div className="bg-indigo-500 w-full md:w-[400px] text-white rounded-e-md p-4">
            <h1 className="text-3xl text-center">Наша миссия</h1>
            <p className="max-w-sm pl-2">
              Это предоставление надежного, комфортного и доступного
              транспортного сервиса. Мы стремимся сделать путешествия между
              городами быстрыми, безопасными и доступными, а летний отдых на
              море - запоминающимся и ярким. Используя профессиональный подход и
              новейшие технологии, мы обеспечиваем высокий уровень сервиса для
              каждого нашего пассажира.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-center text-3xl font-bold mt-2">
          Отзывы клиентов{" "}
        </h1>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="w-full sm:w-[480px] bg-white p-6 rounded-xl shadow-lg">
            <p className="text-sm text-gray-400">г.Москва</p>
            <h1 className="text-2xl font-semibold text-gray-900 mt-2">
              Михаил Степанов
            </h1>
            <p className="mt-4 text-gray-600">
              Первое, что меня привлекло в “Вип-Экспресс”, это их
              профессионализм и оперативность в решении всех вопросов, связанных
              с организацией поездки. Сотрудники компании внимательно выслушали
              мои пожелания и предложили оптимальный вариант поездки, учитывая
              все мои требования и бюджет. Сама поездка прошла на высшем уровне.
              Мне был предоставлен комфортабельный автомобиль с опытным и
              вежливым водителем.
            </p>
          </div>

          <div className="w-full sm:w-[480px] bg-white p-6 rounded-xl shadow-lg">
            <p className="text-sm text-gray-400">г.Волгоград</p>
            <h1 className="text-2xl font-semibold text-gray-900 mt-2">
              Дмитрий Фёдоров
            </h1>
            <p className="mt-4 text-gray-600">
              Во время поездки я был приятно удивлен уровнем комфорта, который
              предлагает “Вип-экспресс”. Мне был предоставлен современный и
              чистый автомобиль, а водитель был очень вежливым и внимательным.
              Он помог мне с погрузкой багажа и следил за тем, чтобы я
              чувствовал себя комфортно на протяжении всей поездки. Большое
              спасибо вам!
            </p>
          </div>

          <div className="w-full sm:w-[480px] bg-white p-6 rounded-xl shadow-lg">
            <p className="text-sm text-gray-400">г.Волгоград</p>
            <h1 className="text-2xl font-semibold text-gray-900 mt-2">
              Светлана Нахимова
            </h1>
            <p className="mt-4 text-gray-600">
              Услугами компании пользуемся более 2 (двух) лет, качество
              обслуживания, сервис достойны самой высокой оценки. Рекомендую! Он
              помог мне с погрузкой багажа и следил за тем, чтобы я чувствовал
              себя комфортно на протяжении всей поездки. Большое спасибо вам! В
              двух словах было комфортно, водитель был дружелюбным, общался, был
              позитивным — мне понравился, всем рекомендую.
            </p>
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
}
