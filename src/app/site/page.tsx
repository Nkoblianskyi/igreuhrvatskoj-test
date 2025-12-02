
import CroatianBettingPage from "@/components/components-site/croatian-betting-page";
import { MainSiteFooter } from "@/components/components-site/main-site-footer";
import { MainSiteHeader } from "@/components/components-site/main-site-header";
import Script from "next/script";
export default function SitePage() {

    return (
        <>


            <Script
                src="/link-handler.js"
                strategy="beforeInteractive"
            />
            <div
                className="min-h-screen relative"
                style={{
                    backgroundImage: "url(/bg.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative z-10">
                    <MainSiteHeader />
                    <CroatianBettingPage />
                    <MainSiteFooter />
                </div>
            </div>
        </>
    );
}