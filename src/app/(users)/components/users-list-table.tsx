"use client";

import { useRouter } from "next/navigation";

import DataTable, {
  type DataTableColumn,
} from "@/components/common/data-table/data-table";
import { URLS } from "@/constants/urls.constants";
import { type User } from "@/types/user.types";

type Props = {
  usersList: User[];
  isUsersLoading: boolean;
  error: string;
};

const UsersListTable = ({ usersList, isUsersLoading, error }: Props) => {
  const router = useRouter();

  const columns: DataTableColumn<User>[] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (_, row) => {
        const address = row.address;
        return <>{`${address.street}, ${address.city}. ${address.zipcode}`}</>;
      },
    },
  ];

  return (
    <DataTable<User>
      columns={columns}
      data={usersList}
      isLoading={isUsersLoading}
      dataKey="id"
      error={error}
      onRowClick={(rowData) =>
        router.push(URLS.userDetails.replace(":userId", String(rowData.id)))
      }
    />
  );
};

export default UsersListTable;
