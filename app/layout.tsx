import type { Metadata } from "next";
import Head from 'next/head';
import "./globals.css";
import "./assets/search.css"

export const metadata: Metadata = {
	title: "John Jackson",
	description: "Most valuable software engineer at era",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	const title = String(metadata.title) || "Default Title"; // Fallback to "Default Title" if metadata.title is null or undefined
	const description = String(metadata.description) || "Default description"; // Fallback to "Default description"


	return (
		<html lang="en">
			<Head>
				<link rel="icon" href="/favicon.ico" sizes="32x32" type="image/png" />                                                                                                                                                                                                                                                                                                                                                
				<title>{title}</title> {/* Set the title */}
				<meta name="description" content={description} /> {/* Set the description */}
			</Head>
			<body
				className={`antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
