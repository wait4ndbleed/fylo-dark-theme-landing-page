"use client";

import { Raleway } from "next/font/google";
import SvgArrow from "../utils/SvgArrow";
import { useState } from "react";
import SvgFacebook from "@/utils/SvgFacebook";
import SvgTwitter from "@/utils/SvgTwitter";
import SvgInstagram from "@/utils/SvgInstagram";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type Input = {
  email: string;
};

export default function Home() {
  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<Input>();
  const [arrow, setArrow] = useState<boolean>(false);
  const [facebook, setFacebook] = useState<boolean>(false);
  const [twitter, setTwitter] = useState(false);
  const [instagram, setInstagram] = useState(false);

  const handleFormSubmit: SubmitHandler<Input> = (data) => {
    setValue('email', '');
  };

  return (
    <>
      <div
        className={`bg-[#1c2431] w-screen bg-[url('../assets/images/bg-curvy-desktop.svg')] bg-no-repeat bg-bottom px-6 md:px-0`}
      >
        <header className="container max-w-6xl m-auto pt-6 flex justify-between">
          <div>
            <a href="">
              <img src="./assets/images/logo.svg" className="w-24 md:w-[176px]" alt="" />
            </a>
          </div>
          <div className="flex items-center">
            <ul className={`flex ${raleway.className}`}>
              <li>
                <a href="#" className="hover:text-white hover:underline">
                  Features
                </a>
              </li>
              <li className="ml-5">
                <a href="#" className="hover:text-white hover:underline">
                  Team
                </a>
              </li>
              <li className="ml-5">
                <a href="#" className="hover:text-white hover:underline">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </header>
        <main className="flex flex-col items-center container max-w-3xl m-auto mt-10">
          <img
            src="./assets/images/illustration-intro.png"
            className="w-fit mb-8"
            alt=""
          />
          <h1
            className={`${raleway.className} font-bold text-2xl px-10 md:px-0 md:text-4xl text-center text-white mb-6 md:mb-16`}
          >
            All your files in one secure location, accessible anywhere
          </h1>
          <p className="text-center text-white w-[80%] mb-10 md:px-16">
            Fylo stores all your most important files in one secure. Access them
            wherever you need, share and collaborate with friends family, and
            co-workers.
          </p>
          <button
            className={`${raleway.className} mb-40 px-20 py-3 rounded-full bg-gradient-to-r text-white font-bold from-[#5bc2d1] to-[#3faeca] hover:from-[#8cdae7] hover:to-[#8bdaeb]`}
          >
            Get Started
          </button>
        </main>
      </div>
      <div className="w-screen px-6 md:px-0">
        <section className="container max-w-4xl m-auto grid md:grid-cols-2 gap-28">
          <div className="flex flex-col items-center">
            <img src="./assets/images/icon-access-anywhere.svg" alt="" />
            <h3
              className={`${raleway.className} text-center text-white text-xl font-bold `}
            >
              Access your files, anywhere
            </h3>
            <p className="text-center">
              The ability to use a smartphone, tables, or computer to access
              your account means your files follow you everywhere.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./assets/images/icon-security.svg" alt="" />
            <h3
              className={`${raleway.className} text-center text-white text-xl font-bold `}
            >
              Security you can trust
            </h3>
            <p className="text-center">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./assets/images/icon-collaboration.svg" alt="" />
            <h3
              className={`${raleway.className} text-center text-white text-xl font-bold `}
            >
              Real-time collaboration
            </h3>
            <p className="text-center">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./assets/images/icon-any-file.svg" alt="" />
            <h3
              className={`${raleway.className} text-center text-white text-xl font-bold `}
            >
              Store any type of file
            </h3>
            <p className="text-center">
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </section>
        <section className="container max-w-5xl m-auto mt-40 mb-36 md:mb-0">
          <div className="flex flex-col md:flex-row gap-10">
            <div>
              <img
                src="./assets/images/illustration-stay-productive.png"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <h2
                className={`${raleway.className} font-bold text-xl md:text-5xl text-white`}
              >
                Stay productive,
                wherever you are
              </h2>
              <p>
                Never let location be and issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p>
                Securely share files and folders with friends, family and
                colleagues for live collaboretion. No email attachments
                required.
              </p>
              <div>
                <a
                  href="#"
                  onMouseOver={() => setArrow(true)}
                  onMouseLeave={() => setArrow(false)}
                  className="text-[#8cdae7] hover:text-white border-b border-[#8cdae7] hover:border-white"
                >
                  See how Fylo works
                  <SvgArrow color={arrow} className="inline-block" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="container max-w-5xl grid md:grid-cols-3  md:gap-10 m-auto mt-20 pb-80 bg-[url('../assets/images/bg-quotes.png')] bg-no-repeat bg-left-top">
          <div className="bg-[#202a3c] p-5 rounded-sm mt-8 ml-2">
            <p className="mt-5">
              Fylo has improves our team productivity by an order of magnitude.
              Since making the switch our team has bocome a well-oiled
              collaboration machine.
            </p>
            <div className="flex gap-2 mt-5">
              <div className="flex items-center">
                <img
                  src="./assets/images/profile-1.jpg"
                  className="w-8 rounded-full"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3
                  className={`${raleway.className} text-white text-sm font-bold`}
                >
                  Satish Patel
                </h3>
                <p className="text-[10px]">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div className="bg-[#202a3c] p-5 rounded-sm mt-8 ml-2">
            <p className="mt-5">
              Fylo has improves our team productivity by an order of magnitude.
              Since making the switch our team has bocome a well-oiled
              collaboration machine.
            </p>
            <div className="flex gap-2 mt-5">
              <div className="flex items-center">
                <img
                  src="./assets/images/profile-2.jpg"
                  className="w-8 rounded-full"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3
                  className={`${raleway.className} text-white text-sm font-bold`}
                >
                  Bruce McKenzie
                </h3>
                <p className="text-[10px]">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
          <div className="bg-[#202a3c] p-5 rounded-sm mt-8 ml-2">
            <p className="mt-5">
              Fylo has improves our team productivity by an order of magnitude.
              Since making the switch our team has bocome a well-oiled
              collaboration machine.
            </p>
            <div className="flex gap-2 mt-5">
              <div className="flex items-center">
                <img
                  src="./assets/images/profile-3.jpg"
                  className="w-8 rounded-full"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3
                  className={`${raleway.className} text-white text-sm font-bold`}
                >
                  Iva Boyd
                </h3>
                <p className="text-[10px]">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-[#0b1523] w-screen pb-12 m-0">
        <div className="bg-[#1c2230] max-w-3xl px-14 pb-4 mx-6 relative top-[-150px] md:top-[-100px] flex flex-col items-center md:mx-auto rounded-md">
          <h2
            className={`${raleway.className} font-bold text-lg md:text-3xl text-center md:text-left text-white mt-10 mb-5`}
          >
            Get eraly access today
          </h2>
          <p className="text-center mb-5">
            It only takes a minuteto sign up and our starter tier is extremely
            generous. If you have any questions, our support team would be happy
            to help you.
          </p>
          <div className="w-full">
            <form  onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col md:flex-row gap-8">
              <Controller
                name="email"
                control={control}
                rules={{
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                }}
                render={({ field }) => <input {...field}
                type="text"
                className="px-4 py-2 w-full rounded-full text-black"
              />}
              />
              
              <input
                type="submit"
                value="Get Started For Free"
                className={`${raleway.className} px-5 py-3 rounded-full bg-gradient-to-r text-white font-bold cursor-pointer from-[#5bc2d1] to-[#3faeca] hover:from-[#8cdae7] hover:to-[#8bdaeb]`}
              />
            </form>
            <div className={`h-4 ml-4 text-[#ff4242] text-[10px] ${raleway.className} font-bold `}>{errors.email && "Please enter a valid email address"}</div>
          </div>
        </div>
        <footer className="container max-w-6xl m-auto px-6 md:px-0">
          <img src="./assets/images/logo.svg" className="md:w-24 mb-7 -mt-6" alt="" />
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex gap-4 w-96">
              <div className="w-[13px] pt-1">
                <img src="./assets/images/icon-location.svg" alt="" />
              </div>
              <div className="w-[80%] md:pr-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </div>
            </div>
            <div>
              <div className="flex gap-4 mb-4 mt-6 md:mt-0">
                <div>
                  <img src="./assets/images/icon-phone.svg" alt="" />
                </div>
                <div>+1-543-123-4567</div>
              </div>
              <div className="flex gap-4">
                <div>
                  <img src="./assets/images/icon-email.svg" alt="" />
                </div>
                <div>example@fylo.com</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-6 mt-16 md:mt-0">
              <div>
                <ul>
                  <li className="mb-2 hover:font-bold">
                    <a href="#">About Us</a>
                  </li>
                  <li className="mb-2 hover:font-bold">
                    <a href="#">Jobs</a>
                  </li>
                  <li className="mb-2 hover:font-bold">
                    <a href="#">Press</a>
                  </li>
                  <li className=" hover:font-bold">
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="mb-2 hover:font-bold">
                    <a href="#">Contat Us</a>
                  </li>
                  <li className="mb-2 hover:font-bold">
                    <a href="#">Terms</a>
                  </li>
                  <li className=" hover:font-bold">
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-20 md:mt-0">
              <div>
                <a
                  href="#"
                  onMouseOver={() => setFacebook(true)}
                  onMouseLeave={() => setFacebook(false)}
                >
                  <SvgFacebook color={facebook} />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  onMouseOver={() => setTwitter(true)}
                  onMouseLeave={() => setTwitter(false)}
                >
                  <SvgTwitter color={twitter} />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  onMouseOver={() => setInstagram(true)}
                  onMouseLeave={() => setInstagram(false)}
                >
                  <SvgInstagram color={instagram} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
