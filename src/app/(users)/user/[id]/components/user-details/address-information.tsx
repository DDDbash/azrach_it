import { MapPin } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { type Address } from "@/types/user.types";

type Props = {
  address: Address;
};

const AddressInformation = ({ address }: Props) => {
  const fullAddress = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Address Information
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-3">
          <div>
            <Label className="text-sm font-medium text-neutral-600">
              Street Address
            </Label>
            <p>{address.street}</p>
          </div>

          <div>
            <Label className="text-sm font-medium text-neutral-600">
              Suite
            </Label>
            <p>{address.suite}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm font-medium text-neutral-600">
                City
              </Label>
              <p>{address.city}</p>
            </div>

            <div>
              <Label className="text-sm font-medium text-neutral-600">
                Zipcode
              </Label>
              <p>{address.zipcode}</p>
            </div>
          </div>

          <hr />

          <div>
            <Label className="text-sm font-medium text-neutral-600">
              Full Address
            </Label>
            <p className="rounded bg-neutral-100 p-2 text-sm">{fullAddress}</p>
          </div>

          <div>
            <Label className="text-sm font-medium text-neutral-600">
              Coordinates
            </Label>
            <div className="flex gap-4 text-sm">
              <span>
                Lat:{" "}
                <span className="rounded bg-neutral-100 px-1">
                  {address.geo.lat}
                </span>
              </span>
              <span>
                Lng:{" "}
                <span className="rounded bg-neutral-100 px-1">
                  {address.geo.lng}
                </span>
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddressInformation;
