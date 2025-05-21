import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import LampCard from "../Components/LampCard";
import LampFilter from "../Components/LampFilter";
import { Head } from "@inertiajs/react";
import HeroSection from "@/Components/HeroSection";

export default function Lamps() {
    const [lamps, setLamps] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("/api/lamps")
            .then((res) => res.json())
            .then((data) => setLamps(data));
    }, []);

    return (
        <>
            <Head title="Lamps" />
            <Nav />
            <HeroSection
                title="Lamp & Light"
                imageUrl="https://static.wixstatic.com/media/069b62_0311d2e76143426e99d01d41dfdb6cd1~mv2.webp/v1/fill/w_1351,h_342,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/069b62_0311d2e76143426e99d01d41dfdb6cd1~mv2.webp"
            />

            <div className="container">
                <h1 className="text-3xl md:text-4xl font-serif font-semibold text-center text-[#1f2a44]">
                    Let us light way to a cosier home
                </h1>
                <p className="text-center text-gray-600 mb-7 font-plex-thai">
                    ถ้าคุณกำลังหาโคมไฟที่สวยและราคาย่อมเยาว์
                    ไม่ต้องหาที่ไหนไกล...
                </p>

                <div className="container py-5">
                    <LampFilter onSearch={setSearch} />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        {lamps
                            .filter((lamp) =>
                                (lamp.name + lamp.description)
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                            )
                            .map((lamp) => (
                                <LampCard key={lamp.id} lamp={lamp} />
                            ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
