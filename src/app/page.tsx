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
          description="I use HTML to structure my web applications. I apply modern HTML semantics to make my web application more scalable and well structured."
          icon="/icons/html5.png"
        />
        <Stack
          heading="CSS"
          description="I use CSS to create esthetic designs for my web applications. With CSS I can structure the website layout with ease which helps fit the web application perfectly on whatever device is used to load it. My aim when designing with this technology is to produce pixel perfect designs from a design file."
          icon="/icons/css3.png"
        />
        <Stack
          heading="JAVASCRIPT"
          description="JavaScript is for adding dynamic behaviour to web applications. This technology makes static web pages and applications come to life. I use this technology to add programmatic capabilities to my web application like fetching data, conditionally renderiing sections of a website or allowing my web applications to communicate with servers via APIs."
          icon="/icons/js.png"
        />
        <Stack
          heading="REACTJS"
          description="This is a Javascript framework which allows me to build components. This technology removes the need for writing certain codes manually. ReactJs allows for reusability of several components and the latest version (v.19) allows components to optionally be rendered on the server. This increases page load speed leading to overall increase in app performance metrics."
          icon="/icons/react.png"
        />
        <Stack
          heading="NEXTJS"
          description="Nextjs is a react framework. What this means is that Nextjs is ReactJs with more capabilities. This includes file routing, server side rendering by default, optimized components like Images, fonts, and layouts, etc. NextJs Allows me to write fullstack application owing to its server first approach. This means that I can write applications that communicate with database directly from the same codebase."
          icon="/icons/nextjs.png"
        />
        <Stack
          heading="NPM"
          description="NPM, Node Package Manager, allows us to download tools and packages directly from the registry into our local devices. This is my favorite tool compared to others like pnpm, yarn, and bun. I love this tool because of the speed with which it loads, the detailed report you get with the downloads and its vast community of users."
          icon="/icons/npm.png"
        />
        <Stack
          heading="VSCODE"
          description="Many people would say that I am still old school but then, I love my good old, plain, VSCode editor. This has been my favorite since i left the Notepad family. I know many other great, AI powered editors are making waves out there right now, but I prefer working with VSCode. It recently provides Copilot AI for free as well, so its a win win. Majorly, I love this editor because of its many extensions which makes my life easy."
          icon="/icons/visual-studio.png"
        />
        <Stack
          heading="GIT"
          description="building applications require a way for you to track versions of your application as you build. Git makes this seamless and easy. Git is like facebook for programmers: You write your codes upload them on Git, get stars, fork repos, earn badges or even sponsorship and much more. I have been using github from my time as an intern at ALX Africa and since then its become a part of my grow. Git provides you with very helpful process like collabortion, contribution, and codebase snapshot. Codebase snapshot helps you track your code upload up to a certain point (where things probably broke) and you can take your codebase back to that version and start afresh. Check out my profile @Codedjay672"
          icon="/icons/git.png"
        />

        <Stack
          heading="POSTGRESQL"
          description="Postgresql is SQL with super powers. This Databse tool allows you to store data without the whole hassle that native SQL presents. While working with Postgres, i like to use ORM tools like Drizzle-kit which allows me to write database queries in normal javascript or typescript format. This codes are then processed into native SQL-like commands which I can easily migrate to create my tables and other actions on my database. Working with Postgres has opened my eyes to see how data can be stored effectively and securely."
          icon="/icons/postgresql.png"
        />
        <Stack
          heading="TYPESCRIPT"
          description="Javascript on its own is a loosely typed language. What that means is that javascript doesn't make provision for typesafety as anything goes with it. There are many tools out there which developers can use to constrain user into providing the appropriate type of data everytime, but my favorite is TYPESCRIPT. Typescript comes with many benefit including very good typesafety features, auto complete while working with objects, and, as a VSCode bonus, I have detailed intellisense which makes my life very easy"
          icon="/icons/typescript.png"
        />
      </div>
    </main>
  );
}
