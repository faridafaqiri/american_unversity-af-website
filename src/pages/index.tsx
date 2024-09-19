import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <h1 className="text-5xl font-bold text-[#223363]">
        Welcome to Our Simple Website
      </h1>
      <h2 className="text-2xl font-bold text-[#223363] m-6">Our Journey</h2>
      <p className="mt-4 text-lg text-gray-600">
        AUAF continues to educate many hundreds of students in Afghanistan and among the diaspora, online and in person at Education City in Doha, Qatar. As their need multiplies, our commitment intensifies – to delivering the highest academic quality, to equal opportunity for women, and to a better, more just society.
      </p>
      <div className="mt-8 text-center">
        <Image
          src="/images/img.jpeg"
          alt="AUAF Journey"
          width={500}
          height={220}
          className="rounded-full mx-auto mb-10"
        />
        <p className="text-lg text-gray-600 mb-10">
          &quot;We Would Choose Knowledge Over Fear; Strength Over Surrender; and Ingenuity Over Doubt.&quot;
        </p>
        <Image
          src="/images/stu.jpeg"
          alt="Additional Image"
          width={500}
          height={220}
          className="rounded-full mx-auto mb-10"
        />
        <h2 className="text-2xl font-bold text-[#223363] m-6">Mission</h2>
        <p className="text-lg text-gray-600">
          The American University of Afghanistan empowers rising leaders with knowledge, skills, and agency to define their own individual and collective futures.
        </p>
      </div>
      <div className="mt-8">
        <Link href="/about">
          <span className="text-[#223363] border border-[#223363] px-4 py-2 rounded hover:bg-[#223363] hover:text-white cursor-pointer m-10">
            Learn more about us
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
