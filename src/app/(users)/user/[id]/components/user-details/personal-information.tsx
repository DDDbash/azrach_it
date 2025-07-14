import { Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

type Props = {
  name: string;
  username: string;
};

const PersonalInformation = ({ name, username }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Personal Information
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-3">
          <div>
            <Label className="text-sm font-medium text-neutral-600">
              Full Name
            </Label>
            <p className="text-base">{name}</p>
          </div>

          <div>
            <Label className="text-sm font-medium text-neutral-600">
              Username
            </Label>
            <p className="text-base text-blue-600">@{username}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInformation;
