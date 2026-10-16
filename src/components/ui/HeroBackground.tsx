import SineWave from "./SineWave";

const HeroBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 select-none">
      <SineWave />
    </div>
  );
};

export default HeroBackground;
