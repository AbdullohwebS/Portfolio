import { buttonVariants } from "@/components/ui/button";
import { Link } from "lucide-react";

const projectList = [
  {
    title: "Json Yangiliklar",
    href: "https://8oy.vercel.app/",
    description: "Json moshinalarini yangiliklari. user: fn37-best pass: maybe",
  },
  {
    title: "Stackflowx",
    href: "https://teamcv.vercel.app/",
    description: "Stackflowx bilan brendingizni yuksaltiring",
  },
  {
    title: "Ijtimoiy media",
    href: "https://social-media-dashboard-topaz-tau.vercel.app/",
    description: "Ijtimoiy media boshqaruv paneli",
  },
  {
    title: "NFT",
    href: "https://responsive-web-site-by-stackflowx.vercel.app/",
    description: "Keling, stackflowx-dan bir nechta NFT-larni sotib olaylik",
  },
];

export default function page() {
  return (
    <div className="py-10">
      <div className="container max-w-screen-lg mx-auto px-5">
        <ul className="flex flex-col gap-10">
          {projectList.map(({ description, href, title }) => {
            return (
              <li key={title}>
                <h3 className="font-medium text-xl mb-3">{title}</h3>
                <p className="mb-4">{description}</p>
                <a
                  className={buttonVariants({ variant: "secondary" })}
                  href={href}
                  target="_blank"
                >
                  <Link />
                  Ko'rish
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
