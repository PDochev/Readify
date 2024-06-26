import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ThemeToggle from "./ThemeToggle";

interface UserMenuProps {
  user: {
    picture: string;
    fullName: string;
    email: string;
  };
  logout: () => void;
}

function UserMenu({ user, logout }: UserMenuProps) {
  return (
    <div className="cursor-pointer">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage src={user.picture} alt="Your profile picture" />
            <AvatarFallback>{user.fullName.at(0)}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mx-4 p-2 md:w-72 lg:w-72">
          <div className="flex  items-center  gap-2 ">
            <Avatar className="flex">
              <AvatarImage src={user.picture} alt="Your profile picture" />
            </Avatar>
            <div className="">
              <small className="text-sm font-medium leading-none">
                {user.fullName}
              </small>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>
          <DropdownMenuSeparator />
          <div className="">
            <DropdownMenuLabel>Theme</DropdownMenuLabel>
            <ThemeToggle />
            <Button className="w-full mt-4" variant="ghost" onClick={logout}>
              Sign out
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default UserMenu;
