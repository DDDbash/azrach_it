"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";

import { getUserDetails } from "@/apis/user.apis";
import { type User } from "@/types/user.types";

import AddressInformation from "./address-information";
import CompanyInformation from "./company-information";
import ContactInformation from "./contact-information";
import MapPreviewPlaceholder from "./map-preview-placeholder";
import PageHeading from "./page-heading";
import PersonalInformation from "./personal-information";

const UserDetails = () => {
  const { id: userId } = useParams<{ id: string }>();

  const [userDetails, setUserDetails] = useState<User | undefined>(undefined);
  const [error, setError] = useState("");
  const [isUserDetailsLoading, setIsUserDetailsLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        setError("");
        setIsUserDetailsLoading(true);
        const res = await getUserDetails(userId);
        setUserDetails(res);
      } catch (err) {
        console.error(err);
        setError("There was an error fetching the user.");
        setUserDetails(undefined);
      } finally {
        setIsUserDetailsLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId]);

  if (isUserDetailsLoading) {
    return (
      <div className="flex h-dvh items-center justify-center">
        <Loader2 className="h-5 w-5 animate-spin" />
      </div>
    );
  }

  if (error || !userDetails) {
    return (
      <div className="flex h-dvh items-center justify-center">{error}</div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6 p-6">
      <PageHeading name={userDetails.name} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <PersonalInformation
          name={userDetails.name}
          username={userDetails.username}
        />

        <ContactInformation
          email={userDetails.email}
          phone={userDetails.phone}
          website={userDetails.website}
        />

        <AddressInformation address={userDetails.address} />

        <CompanyInformation company={userDetails.company} />
      </div>

      <MapPreviewPlaceholder address={userDetails.address} />
    </div>
  );
};

export default UserDetails;
