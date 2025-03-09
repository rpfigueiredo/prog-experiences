import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
    document.documentElement.style.height = "100%";
    document.documentElement.style.overflow = "hidden";

    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
    document.body.style.backgroundColor = "black";
  }, []);

  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Image
        src="/logo.svg"
        alt="Logo"
        width={600}
        height={600}
        style={{
          maxWidth: "50vw",
          height: "auto",
          marginTop: "-80px",
        }}
      />
      <p
        style={{
          fontSize: "1.5rem",
          maxWidth: "80%",
          margin: "20px 0",
        }}
      >
        Viver não daquilo que posso ver, mas daquilo que posso sentir.
        <br /> Ainda no pão, mas o tempo traz crescimento. O caminho já está
        diante de mim.
        <br />
        <br /> e duas sentenças me foram sussurradas ao longo do tempo: O
        espírito da covardia jamais encontrou abrigo em meu ser, e se agora me
        encontro aqui, é porque não fui concebido para conhecer o infinito
        dentro de meros limites.
      </p>
      <img
        src="/walk.gif"
        alt="Walk Animation"
        style={{
          width: "20vw",
          minWidth: "400px",
          height: "auto",
        }}
      />

      <style>
        {`
          @media (max-width: 768px) {
            img {
              min-width: 50vw !important;
            }
            p {
              font-size: 1.2rem !important;
            }
          }
        `}
      </style>
    </div>
  );
}
