import React from "react";
import Hero from "../_components/Hero";
import Sheet from "../_components/Sheet";
import { title } from "process";

export const metadata = {
    title: "お問い合わせ",
};
type Props ={
    children: React.ReactNode;
};

export default function RootLayout({children}: Props) {
    return (
        <>
        <Hero title="Contact" sub="お問い合わせ" />
        <Sheet>{children}</Sheet>
        </>
    );
}