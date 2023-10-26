const AboutUs = () => {
    return (
      <div
        className="bg-college-background bg-cover bg-center h-screen"
        style={{ backgroundImage: "./src/assets/image-moon.png" }}
      >
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-80">
          <div className="text-white text-4xl font-semibold mb-4">About Our College</div>
          <p className="text-white text-lg text-center max-w-2xl">
            Our college is a renowned institution of higher education known for its commitment to academic excellence and fostering a vibrant learning community.
          </p>
        </div>
      </div>
    );
  };
  
  export default AboutUs;