"use client";
import { useAppSelector } from "@/shared/store";
import { Jost } from "next/font/google";
import { useRouter } from "next/navigation";
const jost = Jost({
    subsets: ["latin"],
});

export default function Home() {
    const { user, status } = useAppSelector((state) => state.auth);
    const router = useRouter();

    if (status === "loading") {
        return <p>loading</p>;
    }

    if (status === "idle" && Object.keys(user).length) {
        router.push("/feedbacks");
        return null;
    }
    return (
        <div
            className={`${jost.className} main_box`}
            style={{ height: "100%" }}
        ></div>
    );
}
