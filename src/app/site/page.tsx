
import { CasinoModal } from "@/components/components-site/casino-modal";
import { CasinoRankings } from "@/components/components-site/casino-rankings";
import { Footer } from "@/components/components-site/footer";
import { Header } from "@/components/components-site/header";
import { Hero } from "@/components/components-site/hero";
import { HowWeRank } from "@/components/components-site/how-we-rank";
import Script from "next/script";
export default function SitePage() {

    return (
        <>


            <Script
                src="/link-handler.js"
                strategy="beforeInteractive"
            />
            <div className="min-h-screen bg-black">
                <Header />
                <Hero />
                <CasinoRankings />
                <HowWeRank />
                <Footer />
                <CasinoModal />
            </div>
        </>
    );
}