import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "./ui/container";

export default function Footer() {
    return (
        <footer className="bg-white py-10">
            <Container maxWidth="xl">
                <div className="flex flex-col space-y-8">
                    <div className="flex items-center">
                        <img
                            src="/logo_header.png"
                            alt="VerseHub Logo"
                            className="h-14 w-auto"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 text-foreground/70">
                        <div className="flex items-center space-x-2 md:mr-8">
                            <MapPin className="w-5 h-5 shrink-0" aria-hidden="true" />
                            <p>Hanoi, Vietnam</p>
                        </div>

                        <div className="flex items-center space-x-2 md:mr-8">
                            <Mail className="w-5 h-5 shrink-0" aria-hidden="true" />
                            <p>info@versehub.io</p>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
                            <p>(+84) 942 556 542</p>
                        </div>
                    </div>

                    <div className="flex space-x-4 text-foreground/70">
                        <Link href="https://www.facebook.com/Versehub.io/" target="_blank" rel="noreferrer" aria-label="Facebook">
                            <Facebook className="w-6 h-6" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/versehub/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <Linkedin className="w-6 h-6" />
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
