import Stack from "@/components/Stack";
import Link from "next/link";

export default function Home() {
  return (
    <main className="wrapper flex-center flex-col gap-2">
      <div className="w-full flex-center flex-col mt-24">
        <p className="text-xl lg:text-4xl font-medium text-backgound-base dark:text-gray-50">
          Hi, I'm
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary">
          Emmanuel Ugoh
        </h1>
        <p className="capitalize text-background dark:text-gray-300 tracking-widest text-sm">
          web developer | fullstack engineer
        </p>
        <p className="text-background dark:text-gray-50 my-5 lg:px-14 text-center">
          I am a web developer specialized in building scalable and efficient
          platforms for businesses to thrive on the internet. Explore my{" "}
          <Link href="/resume" className="text-lg text-primary">
            Resume
          </Link>{" "}
          and{" "}
          <Link href="" className="text-lg text-primary">
            Portfolio
          </Link>
        </p>
      </div>

      <div className="w-full lg:w-1/2 p-2 lg:p-3 flex justify-center items-center lg:justify-start gap-4 lg:gap-6">
        <p className="text-2xl lg:text-4xl text-primary font-bold flex-center">
          2+{" "}
          <span className="text-base text-background-base dark:text-gray-50 font-thin">
            | Years experience
          </span>
        </p>
        <p className="text-2xl lg:text-4xl text-primary font-bold flex-center">
          6+{" "}
          <span className="text-base text-background-base dark:text-gray-50 font-thin">
            | Completed projects
          </span>
        </p>
      </div>

      <div className="w-full my-24">
        <h1 className="text-primary text-xl lg:text-2xl border-l border-primary p-2">
          What I Do
        </h1>
        <p className="text-background-base dark:text-gray-50 text-pretty">
          As a web developer, I specialize in building scalable and maintanable
          web applications with mordern user interfaces and functionalities. I
          build applications that will stand the test of time because they
          follow universal industry standards. I build fullstack applications
          that are secure, fast and robust to handle complex business logic
          allowing businesses carry out their activities efficiently.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-2">
        <Stack
          heading="HTML"
          description="I use HTML to structure my webapplications. I apply modern HTML semantics to make my web application more scalable and well structured."
          icon=""
        />
        <Stack
          heading="CSS"
          description="I use CSS to create esthetic designs for my web applications. with CSS I can structure the website layout with ease which helps fit the webapplication perfectly on whatever device is used to load it. My aim when designing with this technology is to produce pixel perfect designs from a figma file."
          icon=""
        />
        <Stack
          heading="JAVASCRIPT"
          description="JavaScript is for adding dynamic behaviour to web applications. This technology makes static web pages and applications come to life. I use this technology to add programmatic capabilities to my web application like fetching data, conditionally renderiing sections of a website or allowing my web applications to communicate with servers via APIs."
          icon=""
        />
        <Stack
          heading="REACTJS"
          description="This is a Javascript framework which allows me to build components. This technology removes the need for writing certain codes manually. React js allows for reusability of several components and the latest version (v.19) allows components to optionally be rendered on the server. This increases page load speed leading to overall increase in app performance metrics."
          icon=""
        />
        <Stack
          heading="NEXTJS"
          description="Nextjs is a react framework. What this means is that Nextjs is ReactJs with more capabilities. This includes file routing, server side rendering, optimized components like Images, fonts, and layouts, etc. NextJs Allows me to write fullstack application owing to its server first approach. This means that I can write applications that communicate with servers and database directly from the same codebase."
          icon=""
        />
      </div>
    </main>
  );
}
