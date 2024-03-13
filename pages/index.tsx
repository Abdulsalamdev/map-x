import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section>
      <div className=" bg-index-top w-[100%] bg-no-repeat bg-center pb-[20px]">
        <div className="flex justify-between items-center w-[80%] m-auto pt-[clamp(20px,1.9vw,30px)]">
          <div className="flex items-center gap-[20px]">
            <Image
              src={"/images/logo.png"}
              alt={"logo"}
              width={40}
              height={40}
            />
            <span className="text-[clamp(20px,1.8vw,30px)] text-MAGNET font-switzer font-bold">
              MapX
            </span>
          </div>
          <Link href={"/login"} className="index-btn text-[white] text-[16px]">
            SSO Login
          </Link>
        </div>
      </div>
      <div className=" bg-index-bottom bg-no-repeat bg-center w-[100%] h-[100%]">
        <p className="font-semibold font-switzer text-[clamp(30px,3vw,40px)] w-[80%] m-auto flex justify-center text-[black] ">
          Mapping just got better with{" "}
          <span className="text-[white] bg-[#d84740] px-[7px] max-h-[55px]">
            MapX
          </span>
        </p>
        <p className="max-w-[792px] text-center w-[80%] m-auto pb-[15px] text-PARTRIDGE-GREY font-switzer">
          Step into a world of precision agriculture and seamless farm
          management. Our platform empowers you to visualize, plan, and optimize
          every aspect of your farm operations.
        </p>
        <span className="flex justify-center items-center pb-[clamp(20px,1.8vw,30px)]">
          {" "}
          <Link href={"/login"} className="index-btn text-[white] text-[16px]">
            SSO Login
          </Link>
        </span>
        <div className="flex justify-center items-center">
          <Image
            src={"/images/Content.png"}
            alt={""}
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
