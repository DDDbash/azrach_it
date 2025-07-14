import { Grid, List } from "lucide-react";

import { Button } from "@/components/ui/button";
import { USERS_DISPLAY_MODE_LOCAL_STORAGE_KEY } from "@/constants/user.constants";
import { setLocalStorage } from "@/lib/storage.utils";
import { type UsersDataDisplayMode } from "@/types/user.types";

type Props = {
  displayMode: UsersDataDisplayMode;
  onDisplayModeChange: (newDisplayMode: UsersDataDisplayMode) => void;
};

const PageHeading = ({ displayMode, onDisplayModeChange }: Props) => {
  return (
    <div className="flex justify-between gap-4 bg-white p-4">
      <h1 className="text-3xl font-bold">Users</h1>

      <div className="flex items-center gap-2">
        <Button
          variant={displayMode === "table" ? "default" : "outline"}
          size="sm"
          onClick={() => {
            setLocalStorage(USERS_DISPLAY_MODE_LOCAL_STORAGE_KEY, "table");
            onDisplayModeChange("table");
          }}
          className="flex items-center gap-2 shadow-none transition-none"
        >
          <List className="h-4 w-4" />
          Table
        </Button>

        <Button
          variant={displayMode === "card" ? "default" : "outline"}
          size="sm"
          onClick={() => {
            setLocalStorage(USERS_DISPLAY_MODE_LOCAL_STORAGE_KEY, "card");
            onDisplayModeChange("card");
          }}
          className="flex items-center gap-2 shadow-none transition-none"
        >
          <Grid className="h-4 w-4" />
          Cards
        </Button>
      </div>
    </div>
  );
};

export default PageHeading;
