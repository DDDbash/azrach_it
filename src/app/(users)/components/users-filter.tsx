import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { type UsersFilters } from "@/types/user.types";

type Props = {
  filters: UsersFilters;
  onFiltersChange: (newFilters: Partial<UsersFilters>) => void;
};

const UsersFilter = ({ filters, onFiltersChange }: Props) => {
  return (
    <div className="flex w-full items-center rounded-md bg-white p-4">
      <div className="flex w-full flex-col gap-2">
        <Label htmlFor="search">Search</Label>
        <Input
          id="search"
          className="h-10"
          value={filters.search}
          placeholder="Search with name or email..."
          onChange={(e) =>
            onFiltersChange({
              search: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
};

export default UsersFilter;
