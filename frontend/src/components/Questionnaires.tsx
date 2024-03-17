import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Questionnaires() {
  return (
    <div className="cursor-pointer">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <small className="text-sm font-medium leading-none">
            Questionnaires
          </small>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mx-4 p-2 ">
          <div className="flex flex-col gap-4">
            <a
              className="w-full p-1 hover:bg-border rounded-sm"
              href="https://forms.office.com/e/tNLzCS1mmj"
              target="_blank"
            >
              Test 1
            </a>
            <a
              className="w-full p-1 hover:bg-border rounded-sm"
              href="https://forms.office.com/e/8ZjhGT9z0c"
              target="_blank"
            >
              Test 2
            </a>
            <a
              href="https://forms.office.com/e/m0w0E1LHzX"
              target="_blank"
              className="w-full p-1 hover:bg-border rounded-sm"
            >
              Usability
            </a>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Questionnaires;
