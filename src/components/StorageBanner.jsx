import FeatureTwo from "./FeatureTwo";

function StorageBanner() {
  return (
    <div
      className="relative w-full h-auto flex flex-col items-center text-center py-20 bg-black text-white overflow-hidden"
      style={{
        position: "relative",
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        padding: "5rem 0",
        overflow: "hidden",
      }}
    >
      {/* Oval with Radial Gradient */}
      <div
        style={{
          position: "absolute",
          width: "1000px",
          height: "1000px",
          background:
            "radial-gradient(circle, rgba(93, 56, 185, 0.7), transparent 60%)",
          borderRadius: "50%",
          top: "-300px",
          left: "5%",
          animation: "moveOval1 10s ease-in-out infinite",
          zIndex: 0,
        }}
      ></div>

      {/* Content Section */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 z-10">
        IPFS - The Gateway to Decentralisation
      </h1>
      <p className="text-lg max-w-3xl mb-8 z-10">
        We at Miyagi offer storage powered by IPFS technology which stores your
        documents in a decentralised fashion. This provides an additional layer
        of security as compared to centralised data storage solutions, thus
        maintaining the integrity of your assets.
      </p>
      <p className="text-lg max-w-3xl mb-8 z-10">
        Centralised storages store all your data in one place. This means that
        it has a single point of failure, meaning an error anywhere in the
        system would cause the entirety of it to collapse, thus posing a danger
        to the security of your assets.
      </p>

      {/* FeatureTwo Section */}
      <FeatureTwo />

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes moveOval1 {
          0% {
            transform: translate(-20vw, 0) scale(1);
          }
          50% {
            transform: translate(20vw, 20vh) scale(0.5);
          }
          100% {
            transform: translate(-20vw, 0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default StorageBanner;
