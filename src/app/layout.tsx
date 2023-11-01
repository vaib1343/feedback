import "src/shared/styles/globalStyles.css";
import UserProvider from "@/shared/context/user-provider";
import { Providers } from "@/shared/store/Provider";
import { Toaster } from "react-hot-toast";
export const metadata = {
    title: "Feedback App",
    description: "dashboard",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                style={{
                    height: "100vh",
                    width: "100vw",
                    backgroundColor: "#F7F8FD",
                }}
            >
                <Providers>
                    <UserProvider>
                        {children}
                        <Toaster
                            toastOptions={{
                                style: {
                                    fontSize: "14px",
                                    fontFamily: "monospace",
                                },
                            }}
                        />
                    </UserProvider>
                </Providers>
            </body>
        </html>
    );
}
