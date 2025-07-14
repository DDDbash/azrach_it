import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

type Props = {
  name: string;
};

const PageHeading = ({ name }: Props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => router.back()}
        className="flex w-fit items-center gap-2 !pl-0 text-neutral-600"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Users
      </Button>

      <h1 className="text-3xl font-bold">{name}</h1>
    </div>
  );
};

export default PageHeading;
