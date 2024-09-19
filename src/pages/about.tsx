import Image from 'next/image';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <h1 className="text-5xl font-bold text-[#223363] mb-4">About Us</h1>
      <p className="text-lg text-gray-600 mb-8">
        AUAF is committed to offering education for the betterment of society.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        &quot;We Would Choose Knowledge Over Fear; Strength Over Surrender; and Ingenuity Over Doubt.&quot;
      </p>
      <Image
        src="/images/ims.webp"
        alt="About Us"
        width={256}
        height={256}
        className="rounded-lg object-cover shadow-md"
      />
    </div>
  );
};

export default About;
