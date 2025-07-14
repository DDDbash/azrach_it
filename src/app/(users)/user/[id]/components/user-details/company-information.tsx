import { Building } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { type Company } from "@/types/user.types";

type Props = {
  company: Company;
};

const CompanyInformation = ({ company }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building className="h-5 w-5" />
          Company Information
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-3">
          <div>
            <Label className="text-sm font-medium text-neutral-600">
              Company Name
            </Label>
            <p className="text-lg font-semibold">{company.name}</p>
          </div>

          <div>
            <Label className="text-sm font-medium text-neutral-600">
              Catch Phrase
            </Label>
            <p className="text-blue-600 italic">
              &quot;{company.catchPhrase}&quot;
            </p>
          </div>

          <div>
            <Label className="text-sm font-medium text-neutral-600">
              Business
            </Label>
            <p className="text-sm">{company.bs}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyInformation;
