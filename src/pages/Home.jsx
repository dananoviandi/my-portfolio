import Image from "../assets/profile.png";
import {
    FaLinkedin,
    FaInstagram,
    FaGithubSquare,
} from "react-icons/fa";

export default function Home() {
    return (
        <div className="bg-[#F5EFFF] text-[#2a6574]">
            <div className="container flex h-screen flex-col-reverse items-center justify-center text-center lg:flex-row mx-auto">
                <div className="flex w-1/2 items-center justify-center mt-8">
                    <img src={Image} className="w-1/2 rounded-full" />
                </div>
                <div className="flex flex-col items-center lg:w-1/2">
                    <div className="mb-6">
                        <h1 className="lg:text-5xl">
                            Hi, I'm
                            <span>
                                {" "}
                                Dana Noviandi!{" "}
                            </span>
                        </h1>
                    </div>
                    <div className="mb-6 text-base lg:text-4xl font-bold mx-10">
                        <p>
                            Full-stack Web Developer
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="/">
                            <FaGithubSquare className="h-10 w-10" alt="Github icon" />
                        </a>
                        <a href="/">
                            <FaLinkedin className="h-10 w-10" alt="Linkedin icon" />
                        </a>
                        <a href="/">
                            <FaInstagram className="h-10 w-10" alt="Instagram icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
