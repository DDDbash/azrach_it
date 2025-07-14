import { Loader2 } from "lucide-react";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { URLS } from "@/constants/urls.constants";
import { type User } from "@/types/user.types";

type Props = {
  usersList: User[];
  isUsersLoading: boolean;
  error: string;
};

const UsersListCard = ({ usersList, isUsersLoading, error }: Props) => {
  if (isUsersLoading) {
    return (
      <div className="flex h-[500px] items-center justify-center rounded-md bg-white">
        <Loader2 className="h-5 w-5 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[500px] items-center justify-center rounded-md bg-white">
        {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {usersList.map((user) => (
        <UsersListCardItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersListCard;

function UsersListCardItem({ user }: { user: User }) {
  return (
    <Link href={`${URLS.userDetails.replace(":userId", String(user.id))}`}>
      <Card className="cursor-pointer shadow-none transition-shadow hover:shadow-sm">
        <CardContent>
          <div className="space-y-2">
            <div>
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-sm text-blue-600">@{user.username}</p>
            </div>

            <div className="space-y-2">
              <div>
                <p className="text-base text-neutral-500">Email</p>
                <p className="text-sm">{user.email}</p>
              </div>

              <div>
                <p className="text-base text-neutral-500">Address</p>
                <p className="text-sm">{`${user.address.street}, ${user.address.city}. ${user.address.zipcode}`}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
