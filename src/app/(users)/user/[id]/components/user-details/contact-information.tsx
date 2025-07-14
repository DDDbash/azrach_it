import { Globe, Mail, Phone } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

type Props = {
  email: string;
  phone: string;
  website: string;
};

const ContactInformation = ({ email, phone, website }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Contact Information
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <Mail className="mt-1 h-4 w-4 text-neutral-600" />
            <div>
              <Label className="text-sm font-medium text-neutral-600">
                Email
              </Label>
              <p>{email}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Phone className="mt-1 h-4 w-4 text-neutral-600" />
            <div>
              <Label className="text-sm font-medium text-neutral-600">
                Phone
              </Label>
              <p>{phone}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Globe className="mt-1 h-4 w-4 text-neutral-600" />
            <div>
              <Label className="text-sm font-medium text-neutral-600">
                Website
              </Label>
              <p className="text-blue-600">{website}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInformation;
