import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    
    <div className="py-10">
      <div className="container max-w-screen-sm mx-auto px-5">
        <h2 className="text-2xl font-medium mb-5">Bunday sahifa topilmadi</h2>
        <p>
          Yangiliklarni
          <a
            className={buttonVariants({ variant: "link" })}
            href="https://t.me/by_Stackflowx"
            target="_blank"
          >
            @by_Stackflowx
          </a>
          telegram kanalida kuzating
        </p>
      </div>
    </div>
  );
}
