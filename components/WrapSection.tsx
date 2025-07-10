import ParticlesContainer from "./ParticlesContainer";

export default function WrapSection({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={`relative w-full h-full`}>
      <ParticlesContainer
        particleColors={["#ffffff", "#fba260"]}
        particleCount={200}
        particleSpread={10}
        speed={0.5}
        particleBaseSize={150}
        alphaParticles={true}
        moveParticlesOnHover={true}
        disableRotation={true}
        className="absolute inset-0 z-0"
      />
      <div
        className="relative z-10 w-full 
        mt-[110px] flex flex-col items-center justify-center px-6 md:px-10 lg:px-12 pt-6 pb-9"
      >
        {children}
      </div>
    </section>
  );
}
