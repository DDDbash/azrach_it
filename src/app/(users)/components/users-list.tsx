"use client";

import { useEffect, useMemo, useState } from "react";

import { getUsersList } from "@/apis/user.apis";
import {
  DEFAULT_DISPLAY_MODE,
  USERS_DISPLAY_MODE_LOCAL_STORAGE_KEY,
} from "@/constants/user.constants";
import { getLocalStorage } from "@/lib/storage.utils";
import {
  type User,
  type UsersDataDisplayMode,
  type UsersFilters,
} from "@/types/user.types";

import PageHeading from "./page-heading";
import UsersFilter from "./users-filter";
import UsersListCard from "./users-list-card";
import UsersListTable from "./users-list-table";

const UsersList = () => {
  const [filters, setFilters] = useState<UsersFilters>({
    search: "",
  });

  const [usersList, setUsersList] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isUsersLoading, setIsUsersLoading] = useState(true);

  const [displayMode, setDisplayMode] = useState<UsersDataDisplayMode>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError("");
        setIsUsersLoading(true);
        const res = await getUsersList();
        setUsersList(res || []);
      } catch (err) {
        console.error(err);
        setError("There was an error fetching users.");
        setUsersList([]);
      } finally {
        setIsUsersLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    try {
      const value =
        getLocalStorage<UsersDataDisplayMode>(
          USERS_DISPLAY_MODE_LOCAL_STORAGE_KEY,
        ) || DEFAULT_DISPLAY_MODE;
      const validModes: UsersDataDisplayMode[] = ["card", "table"];

      if (validModes.includes(value)) {
        setDisplayMode(value);
      } else {
        setDisplayMode(DEFAULT_DISPLAY_MODE);
      }
    } catch (err) {
      console.error(err);
      setDisplayMode(DEFAULT_DISPLAY_MODE);
    }
  }, []);

  const filteredUsers = useMemo(() => {
    return usersList.filter(
      (user) =>
        user.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        user.email.toLowerCase().includes(filters.search.toLowerCase()),
    );
  }, [usersList, filters]);

  return (
    <div className="flex w-full flex-col gap-8">
      <PageHeading
        displayMode={displayMode}
        onDisplayModeChange={(newDisplayMode) => setDisplayMode(newDisplayMode)}
      />

      <div className="flex flex-col gap-4 px-4">
        <UsersFilter
          filters={filters}
          onFiltersChange={(newFilters) => {
            setFilters((prev) => ({ ...prev, ...newFilters }));
          }}
        />

        {displayMode === "table" ? (
          <UsersListTable
            usersList={filteredUsers}
            isUsersLoading={isUsersLoading}
            error={error}
          />
        ) : (
          <UsersListCard
            usersList={filteredUsers}
            isUsersLoading={isUsersLoading}
            error={error}
          />
        )}
      </div>
    </div>
  );
};

export default UsersList;
