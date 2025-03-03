import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
    document.documentElement.style.height = "100%";

    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.height = "100%";
    document.body.style.backgroundColor = "black"; // Garante o fundo preto
  }, []);

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column", // Organiza os itens em coluna
        justifyContent: "center", // Centraliza os itens verticalmente
        alignItems: "center", // Centraliza os itens horizontalmente
        paddingTop: "5%", // Ajustei para subir mais a logo
      }}
    >
      <Image
        src="/logo.svg"
        alt="Logo"
        layout="intrinsic"
        width={500}
        height={500}
        style={{
          marginTop: "-300px", // Menos distância entre logo e gif
        }}
      />
      <img
        src="/walk.gif"
        alt="Walk Animation"
        style={{
          maxWidth: "30%", // Tamanho do gif ajustado
          maxHeight: "20%", // Tamanho do gif ajustado
        }}
      />
    </div>
  );
}
