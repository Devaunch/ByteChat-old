import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Session from "@component/session";
import Navbar from "@component/Navbar";
import Footer from "@component/Footer";
import MainAnimation from "@component/MainAnimation";
import Providers from "@src/store/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Byte Chat",
    description: `Welcome to ByteChat, the ultimate online community for programming enthusiasts! ByteChat provides a dynamic platform where users can connect, collaborate, and engage in meaningful discussions on a wide range of programming-related topics. Whether you're a seasoned developer or just starting your coding journey, ByteChat is the go-to destination to interact with like-minded individuals and expand your knowledge.

	With our user-friendly interface, logging in and signing up on ByteChat is a breeze. Once you're in, a vibrant community of programmers awaits you. You can explore various chat rooms and join conversations focused on different programming languages, frameworks, algorithms, and software development practices. Exchange ideas, seek advice, or share your expertise with others who share your passion for coding.

	But ByteChat goes beyond just discussions. We understand the importance of hands-on learning and practice, which is why we offer daily programming problems to keep you challenged and sharpen your skills. Our carefully curated problem sets cover a wide spectrum of difficulty levels, ensuring there's something for everyone, from beginners to experienced coders. Solve the problems, showcase your solutions, and learn from others to foster growth in your programming journey.

	Join ByteChat today and unlock a world of possibilities. Connect with programmers from all walks of life, broaden your knowledge, and become part of a thriving community that celebrates the art of coding. Embrace the power of collaboration, inspiration, and continuous learning on ByteChat, where the bytes of knowledge flow freely, and the programming community thrives!`,
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${inter.className} dark:bg-bg-dark dark:text-text-dark`}
            >
                <Providers>
                    <Session>
                        <div>
                            <Navbar />
                            {children}
                            <Footer />
                        </div>
                    </Session>
                </Providers>
            </body>
        </html>
    );
}
