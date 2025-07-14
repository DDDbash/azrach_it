"use client";

import React from "react";
import { Loader2 } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type DataTableColumn<T> = {
  title: string;
  dataIndex: keyof T;
  key: string;
  thClassName?: string;
  render?: (value: T[keyof T], row: T) => React.ReactElement;
};

type Props<T> = {
  columns: DataTableColumn<T>[];
  data: T[];
  dataKey: keyof T;
  isLoading?: boolean;
  error: string;
  onRowClick?: (rowData: T) => void;
};

const DataTable = <T,>(props: Props<T>) => {
  const { columns = [] } = props;

  return (
    <Table className="rounded-md bg-white">
      <TableHeader>
        <TableRow>
          {columns.map((column) => {
            const { key, title, thClassName = "" } = column;
            return (
              <TableHead key={key} className={thClassName}>
                {title}
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableContent {...props} />
      </TableBody>
    </Table>
  );
};

function TableContent<T>({
  columns,
  data,
  dataKey,
  isLoading,
  error,
  onRowClick = () => {},
}: Props<T>) {
  if (isLoading) {
    return (
      <TableRow>
        <TableCell colSpan={columns.length}>
          <div className="flex h-[500px] items-center justify-center">
            <Loader2 className="h-5 w-5 shrink animate-spin" />
          </div>
        </TableCell>
      </TableRow>
    );
  }

  if (error) {
    return (
      <TableRow>
        <TableCell colSpan={columns.length}>
          <div className="flex h-[500px] items-center justify-center">
            <p>{error}</p>
          </div>
        </TableCell>
      </TableRow>
    );
  }

  if (!data || data.length === 0) {
    return (
      <TableRow>
        <TableCell colSpan={columns.length}>
          <div className="flex h-[500px] items-center justify-center">
            <p>No Data Found</p>
          </div>
        </TableCell>
      </TableRow>
    );
  }

  return (
    <>
      {data.map((rowData) => (
        <TableRow
          onClick={() => onRowClick(rowData)}
          key={String(rowData[dataKey])}
        >
          {columns.map((column) => {
            const cellValue = rowData[column.dataIndex];
            return (
              <TableCell key={column.key} className="py-5 text-black">
                {column.render
                  ? column.render(cellValue, rowData)
                  : String(cellValue)}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </>
  );
}

export default DataTable;
