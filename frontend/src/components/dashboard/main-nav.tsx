import { Link } from "react-router-dom";
import { cn } from "../../utils/twMerge";
import { NavItem } from "../../types/nav";

interface MainNavProps {
  items?: NavItem[];
}
export function MainNav({ items }: MainNavProps) {
  return (
    <nav className={cn("mx-6 flex items-center space-x-4 lg:space-x-6")}>
      {items?.length
        ? items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )
        : null}
    </nav>
  );
}
