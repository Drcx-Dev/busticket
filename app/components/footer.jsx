import logo from "../photo/logo.png";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="text-black bg-white py-8 mt-8">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-6">
            <Image src={logo} alt="logo" width={200} height={50} />
          </div>

          <div className="flex space-x-8 text-sm">
            <a
              href="mailto:vipvolzhsky@mail.ru"
              className="hover:text-gray-400"
            >
              vipvolzhsky@mail.ru
            </a>
            <a href="tel:+78005556634" className="hover:text-gray-400">
              8 (800) 555-66-34
            </a>
          </div>
        </div>

        <div className="flex justify-center space-x-8 mb-6 ">
          <a
            href="./aboutus"
            className=" hover:text-gray-400 transition-colors duration-300 pl-6"
          >
            О компании
          </a>
          <a
            href="./schedule"
            className=" hover:text-gray-400 transition-colors duration-300"
          >
            Расписание
          </a>
          <a
            href="./ticket"
            className=" hover:text-gray-400 transition-colors duration-300"
          >
            Купить билет
          </a>
          <a
            href="./contacts"
            className=" hover:text-gray-400 transition-colors duration-300"
          >
            Контакты
          </a>
        </div>

        <div className="text-center text-sm text-gray-400">
          <p>&copy; 2025 Vip Express. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
