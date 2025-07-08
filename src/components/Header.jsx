import Navbar from "./Navbar";
import { buttonVariants } from "./ui/button";

export default function Header() {
  return (
    <header className="py-3">
      <div className="container max-w-screen-lg mx-auto px-5 flex items-center justify-between">
        <h1 className="font-medium text-2xl">
          A<span className="hidden md:inline sm:mr-2">bdullohning</span>p
          <span className="hidden md:inline">ortfoliosi</span>
        </h1>
        <Navbar />
        <a
          className={`${buttonVariants({
            variant: "default",
          })} hidden sm:inline-flex`}
          href="https://t.me/by_stackflowx"
          target="_blank"
        >
          Blog
        </a>
      </div>
    </header>
  );
}
