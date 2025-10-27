import Image from "next/image";
import whitebus from "../photo/whitebus.png";
import guys from "../photo/guys.png";

export default function AboutUs() {
  return (
    <main>
      <section>
        <div>
          <h1 className="text-center text-3xl font-bold pt-7 text-black">
            О компании
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center mt-14">
          <div className="w-full md:w-[900px] bg-white rounded-s-lg shadow-2xl p-5 text-black">
            <h1 className="text-3xl md:text-4xl">
              ВИП Экспресс - междугородние и туристические <br />
              перевозки с комфортом для каждого
            </h1>
            <p className="pt-4">
              Транспортная компания ВИП Экспресс — один из лидеров пассажирских
              перевозок. Ключевые направления из <br /> Волгограда в Москву и
              обратно открыты круглый год. У нас простой сервис для покупки
              билетов на сайте и в офисах <br /> продаж, где вас встретит
              приветливый и внимательный персонал. Мы рады помочь и ответить на
              ваши вопросы
            </p>
            <p className="pt-4">
              Регулярные рейсы Из Волгограда в Москву и из Москвы в Волгоград
              позволят вам легко спланировать поездку <br /> и добраться к
              нужному вам времени без задержек в комфортабельном автобусе
            </p>
          </div>
          <div className="w-full md:w-auto mt-5 md:mt-0">
            <Image
              className="shadow-2xl rounded-e-lg"
              src={whitebus}
              alt="whitebus"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-16 justify-center mt-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl text-indigo-600">10+</h1>
            <p className="text-lg md:text-xl text-indigo-600">
              лет работаем для вас и вашего <br />
              комфорта круглый год
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl text-indigo-600">24/7</h1>
            <p className="text-lg md:text-xl text-indigo-600">
              готовы ответить на любые ваши <br /> вопросы и помочь вам
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl text-indigo-600">365</h1>
            <p className="text-lg md:text-xl text-indigo-600">
              дней в году с вами на связи <br /> и работаем для вас
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl text-indigo-600">100%</h1>
            <p className="text-lg md:text-xl text-indigo-600">
              закрытия ваших потребностей в <br /> качественных поездках
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center mt-20 flex-wrap">
          <div className="w-full sm:w-[504px]">
            <Image
              className="w-full shadow-2xl rounded-s-xl"
              src={guys}
              alt="guys"
            />
          </div>
          <div className="w-full sm:w-[900px] bg-white space-y-3 pt-10 pl-5 shadow-2xl rounded-e-xl text-black">
            <h1 className="text-2xl sm:text-3xl font-bold">
              Поездка на автобусе с нами- это комфортно, доступно и <br />{" "}
              безопасно, наши преимущества
            </h1>
            <p className="text-lg sm:text-xl">
              1. Ежедневные рейсы в комфортабельных автобусах Mercedes-Benz с
              кондиционером и TV{" "}
            </p>
            <p className="text-lg sm:text-xl">
              2. Все водители с многолетним стажем пассажирских перевозок
            </p>
            <p className="text-lg sm:text-xl">
              3. Скидки на билеты для постоянных пассажиров, детям до 12 лет
              скидка 50%
            </p>
            <p className="text-lg sm:text-xl">
              4. Допускается перевозка животных не более 3-х кг
            </p>
            <p className="text-lg sm:text-xl">
              5. Бесплатный провоз багажа с вместительным багажным отделением
            </p>
            <p className="text-lg sm:text-xl">
              6. При покупке билета через сайт распечатывать его необязательно
            </p>
            <p className="text-lg sm:text-xl">
              7. Перед отправлением автобусы проходят техосмотр, остановки
              каждые 3 часа
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
