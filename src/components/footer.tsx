import Link from "next/link";
import { Container } from "./ui/container";

export default function Footer() {
    return (
        <footer className="bg-white py-10">
            <Container maxWidth="xl">
                <div className="flex flex-col space-y-8">
                    <div className="flex items-center">
                        <img
                            src="https://ext.same-assets.com/422046658/919375268.png"
                            alt="VerseHub Logo"
                            className="h-14 w-auto cursor-pointer"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-2 md:mr-8">
                            <img
                                src="https://ext.same-assets.com/422046658/1045802843.svg"
                                alt="Location"
                                className="w-5 h-5"
                            />
                            <p className="text-foreground/70">Hanoi, Vietnam</p>
                        </div>

                        <div className="flex items-center space-x-2 md:mr-8">
                            <img
                                src="https://ext.same-assets.com/422046658/890538655.svg"
                                alt="Email"
                                className="w-5 h-5"
                            />
                            <p className="text-foreground/70">info@versehub.io</p>
                        </div>

                        <div className="flex items-center space-x-2">
                            <img
                                src="https://ext.same-assets.com/422046658/1295800748.svg"
                                alt="Phone"
                                className="w-5 h-5"
                            />
                            <p className="text-foreground/70">(+84) 866 174 689</p>
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <Link href="https://www.facebook.com/Versehub.io/" target="_blank" rel="noreferrer">
                            <img
                                src="https://ext.same-assets.com/422046658/2029834703.svg"
                                alt="Facebook"
                                className="w-6 h-6"
                            />
                        </Link>
                        <Link href="https://www.linkedin.com/company/versehub/" target="_blank" rel="noreferrer">
                            <img
                                src="https://ext.same-assets.com/422046658/3257518115.svg"
                                alt="LinkedIn"
                                className="w-6 h-6"
                            />
                        </Link>
                    </div>

                    <div>
                        <p className="text-sm text-foreground/60">VerseHub © 2021</p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
