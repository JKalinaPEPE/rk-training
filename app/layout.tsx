import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://rk-training.pepenachokp.chatgpt.site"),
  title: "Entrenador Personal en Montevideo | RK Training",
  description:
    "Entrenamiento personalizado presencial y online en Montevideo con Rodrigo Kalina. Rutinas personalizadas y atención directa en RK Training.",
  alternates: { canonical: "/" },
  keywords: ["entrenador personal en Montevideo", "personal trainer en Montevideo", "entrenamiento personalizado", "entrenamiento personal presencial", "entrenamiento online", "rutinas personalizadas", "Rodrigo Kalina", "RK Training"],
  openGraph: {
    type: "website",
    locale: "es_UY",
    url: "/",
    siteName: "RK Training",
    title: "RK Training | Entrenador Personal en Montevideo",
    description:
      "Entrenamiento personalizado presencial y online con Rodrigo Kalina. Construí un cuerpo más fuerte con un plan hecho para vos.",
    images: [{ url: "/assets/rk-logo.jpeg", alt: "RK Training, entrenador personal en Montevideo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RK Training | Entrenador Personal en Montevideo",
    description: "Entrenamiento personalizado presencial y online con Rodrigo Kalina.",
    images: ["/assets/rk-logo.jpeg"],
  },
  icons: { icon: "/assets/rk-logo.jpeg" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
