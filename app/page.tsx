import Head from "next/head";
import Link from 'next/link';

import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

import FaceSVG from "./face";

export default function Home() {
	return (
		<>
			<Head>
				{/* Preload font files */}
				<link rel="preload" href="/sfpros/SourceSansPro-ExtraLight.woff" as="font" type="font/woff" crossOrigin="anonymous" />
				<link rel="preload" href="/sfpros/SourceSansPro-Light.woff" as="font" type="font/woff" crossOrigin="anonymous" />
				<link rel="preload" href="/sfpros/SourceSansPro-Regular.woff" as="font" type="font/woff" crossOrigin="anonymous" />
				<link rel="preload" href="/sfpros/SourceSansPro-Semibold.woff" as="font" type="font/woff" crossOrigin="anonymous" />
				<link rel="preload" href="/sfpros/SourceSansPro-Bold.woff" as="font" type="font/woff" crossOrigin="anonymous" />
				<link rel="preload" href="/sfpros/SourceSansPro-Black.woff" as="font" type="font/woff" crossOrigin="anonymous" />
			</Head>
			<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

				<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mr-11 ml-11 container mx-auto w-full">
					<div className="flex items-start w-full justify-center pb-8">
						<div className="grid grid-rows-2 grid-cols-2 grid-row items-center justify-center gap-12">
							<div className="col-span-2 md:col-span-1 row-span-1">
								<div className="flex justify-center items-center">
									<div className="p-4">
										<h1 className="text-4xl font-black pb-4">Hi, I am John</h1>
										<h1 className="text-xl">Senior Software Engineer at Lennar</h1>
									</div>
								</div>
							</div>
							<div className="row-span-1 md:row-span-2 col-span-2 md:col-span-1 flex items-center justify-center md:justify-start">
								<div className="w-24 sm:w-36 md:w-48 lg:w-72">
									<FaceSVG />
								</div>
							</div>
							<div className="col-span-2 md:col-span-1 row-span-1">
								<div className="flex justify-center items-center">
									<Link href="https://calendly.com/meet-him" passHref>
										<button className="button-86"><span className="text-2xl flex"><FaCalendarDays className="mr-3" />BOOK A MEETING</span></button>
									</Link>
								</div>
							</div>
						</div>
					</div>

				</main>
				<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
					<MdMail />
					rubystar4730@gmail.com

					<FaPhoneAlt />
					(512) 782 - 9975

				</footer>
			</div>
		</>
	);
}