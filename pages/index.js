import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>Abaixo tenho a minha casa!</h1>
      <Image
        src="/casa.webp"  
        width={500}
        height={500}
        alt="Imagem de uma casa"
      />
    </div>
  );
}
