import Hero from "./Hero";
import Malibu from "../../../public/images/malibu2.jpg";
import Cobalt from "../../../public/images/cobalt.jpg";
import BlogPosts from "./BlogPosts";
import Container from "../../components/Container";


const Home = () => {
  return (
    <main>
      <Hero />
     
      <Container>
        <h2 className=" text-center pb-50 font-semibold text-3xl">
          Barcha videolar <span className=" text-blue-700">You tube </span>
          kanalimizda
        </h2>
        <main className="">
          <div className=" justify-between flex">
            <div className=" w-1/2">
              <h4 className=" font-bold">Mahsuloti:</h4>
              <p className=" py-4 text-gray-700">
                Hozirgi paytda «UZAUTO MOTORS» AJ ning 2 ta ishlab chiqarish
                maydonchasida «Chevrolet» brendi ostida avtomobillarning 10
                modeli ishlab chiqariladi, jumladan, Spark, Nexia 3, Cobalt,
                Lacetti (Gentra) modellari Asaka shahridagi asosiy ishlab
                chiqarish maydonida,Damas, Labo modellari Pitnak shahridagi
                filialda chiqariladi.
              </p>
              <h4 className="text-gray-700">
                <span className=" font-bold">UZAUTO MOTORS</span> yetkazib
                beruvchilari:
              </h4>
              <p className=" py-4 text-gray-700">
                100 dan ortiq, shu jumladan sub-etkazib beruvchilar. Asosiylari
                — «Uz SeMyung», «Uz Koram», «Avtokomponent», «Uz Dong Yang», «Uz
                Xanvu», «Uz Dong Von Ko», «Uz Dong Ju Peynt», «Uz Tong Xong Ko»,
                «Uz Chasis» va «Avtooyna».
              </p>
            </div>
            <div className=" w-1/2">
              <img className=" m-auto" src={Cobalt} alt="Kobalt" width={400} />
            </div>
          </div>
          <div className=" justify-between flex">
            <div className=" w-1/2">
              <h4 className=" font-bold">Kafolat davri:</h4>
              <p className=" py-4 text-gray-700">
                Kafolat vakolatli dilerlar orqali sotilgan avtomobillarga
                taalluqli bo‘ladi, va normal sharoitlarda foydalaniladigan
                avtomobillar uchun, qaysi biri avvalroq yuz berishiga qarab,
                avtomobilning egasi tomonidan qabul qilinishi kunidan boshlab 36
                oyni, yoki jami 100000 km o‘tilgan yo‘lni tashkil etadi.
              </p>

              <p className="text-gray-700">
                Kafolat muayyan avtomobilga taalluqli bo‘ladi, va uning egasiga
                shaxsan bog‘liq bo‘lmaydi. Avtomobilning sotilishida sotuvchi
                servis kitobchasini yangi egasiga topshirishi va vakolatlangan
                dilerning muhrini qo‘yishi, hamda yangi egasining ma’lumotlarini
                servis kitobchasiga kiritishi shart. Kafolat davrining mobaynida
                avtomobilning yangi egasi servis kitobchasida ko‘rsatilgan
                ishlab chiqaruvchining barcha talablari bajarilishi sharti
                bilan, kafolatga ega bo‘lish yuzasidan xuddi shunday huquqlarga
                ega bo‘ladi.
              </p>
            </div>
            <div className=" w-1/2">
              <img className=" m-auto" src={Malibu} alt="Kobalt" width={400} />
            </div>
          </div>
        </main>
      </Container>
      <BlogPosts />
    </main>
  );
};
export default Home;
