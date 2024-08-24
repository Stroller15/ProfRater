import Icons from "@/components/global/icons";
import { Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
      {/* Background Elements */}
      <div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
      <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row gap-8 w-full justify-between items-start">
        {/* First column: Logo and Description */}
        <div className="flex flex-col items-start justify-start md:max-w-[200px]">
          <div className="flex items-start">
            <Icons.logo className="w-7 h-7" />
          </div>
          <p className="text-muted-foreground mt-4 text-sm text-start">
          Find Your Perfect Professor with AI
          </p>
          <span className="mt-4 text-neutral-200 text-sm flex items-center">
            Made in India with IN-USA friend
          </span>
        </div>

        {/* Second column: Team Members */}
        <div className="flex flex-col">
          <h3 className="text-base font-medium text-white">Team Members</h3>
          <ul className="mt-4 text-sm text-muted-foreground">
            <li className="mt-2">
              <Link
                href="https://www.linkedin.com/in/a-shubham-verma/"
                className="hover:text-foreground transition-all duration-300"
              >
                Shubham Verma
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href="https://www.linkedin.com/in/tirthgshah/
"
                className="hover:text-foreground transition-all duration-300"
              >
                Tirth Shah
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href="https://www.linkedin.com/in/tharan-bala/
"
                className="hover:text-foreground transition-all duration-300"
              >
                Tharan Bala
              </Link>
            </li>
            <li className="mt-2">
              <Link
                href="https://www.linkedin.com/in/shobygnanasekaran"
                className="hover:text-foreground transition-all duration-300"
              >
                Shoby Gnana Sekaran
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
        <p className="text-sm text-muted-foreground mt-8 md:mt-0">
          &copy; {new Date().getFullYear()} ProfRater AI INC. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
