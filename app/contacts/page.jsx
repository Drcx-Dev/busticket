import Image from "next/image";
import contactsbus from "../photo/contactsbus.png";
import Link from "next/link";
export default function Contacts() {
  return (
    <main className="text-black">
      <section className="mt-16">
        <div>
          <h1 className="text-4xl font-bold text-center">Контакты</h1>
        </div>
        <div className="bg-white flex w-[900px] h-[31] justify-self-center mt-8 rounded-md">
          <div className="text-center pt-8 space-y-2">
            <h1 className="text-2xl">Единая служба поддержки клиентов</h1>
            <p className="font-bold text-xl ">
              горячая линия <br /> 8 (800) 555-66-34
            </p>
            <p className="text-xl font-bold">
              WhatsApp <br />8 (903) 377-53-77
            </p>
          </div>
          <div className="bg-indigo-500 rounded-e-md">
            <Image className="w-[500px]" src={contactsbus} alt="contactsbus" />
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-4xl font-bold pt-20 text-center">Наши адреса</h1>
        <div className="">
          <div className="min-h-screen bg-gray-100 flex flex-wrap justify-center gap-4 p-4">
            <div className="max-w-sm p-4 bg-white border rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-1">Москва</h2>
              <p className="text-gray-700 mb-1 text-xl">
                Адрес: Кожевническая дом 3 стр 1 (Павелецкий Вокзал)
              </p>
              <p className="text-gray-700 mb-1 text-xl">
                Телефон: 8 (925) 429-29-48
              </p>
              <p className="text-gray-700 text-xl">
                Режим работы: ежедневно с 9:00 до 22:00
              </p>
            </div>
            <div className="max-w-sm p-4 bg-white border rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-1  ">Волгоград</h2>
              <p className="text-gray-700 mb-1 text-xl ">
                Адрес: Коммунистическая дом 16
              </p>
              <p className="text-gray-700 mb-1 text-xl ">
                Телефон: 8 (925) 429-29-48
              </p>
              <p className="text-gray-700 text-xl ">
                Режим работы: ежедневно с 9:00 до 22:00
              </p>
            </div>
            <div className="max-w-sm p-4 bg-white border rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-1  ">Волжский</h2>
              <p className="text-gray-700 mb-1 text-xl">
                Адрес: ежедневно с 9:00 до 21:00{" "}
              </p>
              <p className="text-gray-700 mb-1 text-xl ">
                Телефон: 8 (925) 429-29-48
              </p>
              <p className="text-gray-700 text-xl ">
                Режим работы: ежедневно с 9:00 до 22:00
              </p>
            </div>
            <div className="max-w-sm p-4 bg-white border rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-1">
                Михайловка (Рижский рынок)
              </h2>
              <p className="text-gray-700 mb-1 text-xl ">
                Адрес:Михайловка (Рижский рынок)
              </p>
              <p className="text-gray-700 mb-1 text-xl">
                Телефон: 8 (925) 429-29-48
              </p>
              <p className="text-gray-700 text-xl">
                Режим работы: ежедневно с 9:00 до 22:00
              </p>
            </div>
            <div className="max-w-sm p-4 bg-white border rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-1">
                Москва - автовокзал Саларьево
              </h2>
              <p className="text-gray-700 mb-1 text-xl ">
                Адрес: пос. Московский, Киевское шоссе, 23-й км, д. 1, стр. 1
              </p>
              <p className="text-gray-700 mb-1 text-xl ">
                Телефон: 8 (925) 429-29-48
              </p>
              <p className="text-gray-700 text-xl ">
                Режим работы: ежедневно с 9:00 до 22:00
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center p-4">
          <div className="p-6 border-t-4 border-b-4 border-dashed border-indigo-500 text-center max-w-lg">
            <p className="text-lg mb-4 text-indigo-800">
              Покупка билетов на сайте доступна в любое время, онлайн 24/7 для
              вашего удобства и комфорта
            </p>
            <Link
              href="./ticket"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Купить билет
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
