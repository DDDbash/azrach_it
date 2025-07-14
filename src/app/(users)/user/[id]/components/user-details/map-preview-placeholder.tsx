import { MapPin } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Address } from "@/types/user.types";

type Props = {
  address: Address;
};

const MapPreviewPlaceholder = ({ address }: Props) => {
  const fullAddress = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Location Preview
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="rounded-lg bg-neutral-100 p-8 text-center">
          <MapPin className="mx-auto mb-4 h-12 w-12 text-neutral-600" />
          <p className="mb-2 text-neutral-600">Map would be displayed here</p>
          <p className="text-sm text-neutral-600">
            Coordinates: {address.geo.lat}, {address.geo.lng}
          </p>
          <p className="mt-1 text-sm text-neutral-600">{fullAddress}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapPreviewPlaceholder;
