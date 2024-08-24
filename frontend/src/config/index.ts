import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "ProfRater - AI Powered Professor Rating",
        template: `%s | ProfRater`
    },
    description: "ProfRater uses AI to help you discover the best professors for your needs.",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "ProfRater - AI Powered Professor Rating",
        description: "ProfRater uses AI to help you discover the best professors for your needs.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@shreyassihasane",
        title: "ProfRater - AI Powered Professor Rating",
        description: "ProfRater uses AI to help you discover the best professors for your needs.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://astra-app.vercel.app"),
};
