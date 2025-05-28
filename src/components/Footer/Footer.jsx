import Divider from "@mui/material/Divider";

import Container from "../Container";

import Logo from "../../../public/images/logo-footer.png";

const Footer = () => {
  return (
    <Container classes="flex  flex-col">
      <div className="grid grid-cols-4  lg:grid-cols-2 px-7">
        <div className="flex flex-col gap-2 my-8">
          <h2 className="text-white font-bold text-[20px]">BRENDLAR</h2>{" "}
          <img className=" cursor-pointer" src={Logo} alt="Logo" width={100} />
        </div>
        <div className="flex flex-col gap-2 my-8">
          <h3 className="text-white font-bold text-[20px] uppercase">
            Matbuot markazi
          </h3>
          <ul className="list-none">
            <li className="text-[14px] py-1 hover:underline">
              <h2 className=" text-white">Yangiliklar</h2>
            </li>
            <li className="text-[14px] py-1 hover:underline">
              <h3 className=" text-white">FAQ</h3>
            </li>
            <li className="text-[14px] py-1 hover:underline">
              <h3 className=" text-white">Fotolavhalar</h3>
            </li>
            <li className="text-[14px] py-1 hover:underline">
              <h3 className=" text-white">Videolavhalar</h3>
            </li>
            <li className="text-[14px] py-1 hover:underline">
              <h3 className=" text-white">Bo'sh ish o'rinlari</h3>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 my-8">
          <h3 className="text-white uppercase font-bold text-[20px]">
            Foydali havolalar
          </h3>
          <ul className="list-none">
            <li className="text-[14px] py-1 hover:underline">
              <h3 className=" text-white">
                O'zbekiston Respublikasi Prezidenti Sh.M. Mirziyoyevning virtual
                qabulxonasi
              </h3>
            </li>
            <li className="text-[14px] py-1 hover:underline">
              <h3 className=" text-white">Yagona interaktiv davlat xizmatlari portali</h3>
            </li>
            <li className="text-[14px] py-1 hover:underline">
              <h3 className=" text-white">Resurs bozori ma'lumoti va resurs markazi</h3>
            </li>
            <li className="text-[14px] py-1 hover:underline">
              <h3 className=" text-white">Korporativ axborot yagona portali</h3>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 my-8">
          <h3 className="text-white uppercase font-bold text-[20px]">
            Manzil
          </h3>
          <ul className="list-none">
            <li className="text-[14px] py-1 hover:underline">
              <h3 className=" text-white">Toshkent sh., Mirobod tumani, A. Temur ko'chasi, 13 uy</h3>
            </li>
            <li className="text-[14px] py-1 hover:underline">
              <h3 className=" text-white">Ish vaqti: 09:00-18:00</h3>
            </li>
            <li className="text-[14px] py-1 hover:underline">
              <h3 className=" text-white">Tushlik: 13:00-14:00</h3>
            </li>
            <li className="text-[14px] py-1 hover:underline">
              <h3 className=" text-white">Xaritada ko`rish</h3>
            </li>
          </ul>
        </div>
      </div>
      <Divider variant="fullWidth" />
      <div  className="bg-[#131619]"><p className="text-white text-[14px] flex items-center justify-center py-2">
        © 1996 - 2025 UzAuto Motors AJ
      </p></div>
    </Container>
  );
};

export default Footer;
