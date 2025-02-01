"use client";

import React, { useState, useEffect } from "react";
import DonorCard from "@/components/DonorCard";
import BloodGroupFilter from "@/components/BloodGroupFilter";
import { DONORS } from "@/constants/donors";

const FindBlood: React.FC = () => {
  const [filteredDonors, setFilteredDonors] = useState(DONORS);
  const [bloodGroupFilter, setBloodGroupFilter] = useState<string>("");

  useEffect(() => {
    setFilteredDonors(
      bloodGroupFilter === ""
        ? DONORS
        : DONORS.filter((donor) => donor.bloodGroup === bloodGroupFilter)
    );
  }, [bloodGroupFilter]);

  const handleBloodGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBloodGroupFilter(e.target.value);
  };

  return (
    <div className="mb-10 overflow-x-hidden mx-5 ">
      <div className="md:w-full lg:w-full pr-4 lg:pr-8 xl:pr-16 mb-4 md:mb-0 flex flex-col justify-center">
        <h1 className="mt-8 text-4xl text-center">Donor's Information</h1>
        <BloodGroupFilter
          bloodGroupFilter={bloodGroupFilter}
          handleBloodGroupChange={handleBloodGroupChange}
        />
      </div>

      <div className="lg:w-full">
        <div className="grid grid-cols-1 gap-6 mt-8 sm:w-full lg:grid-cols-2 xl:grid-cols-3">
          {filteredDonors.map((donor) => (
            <DonorCard key={donor.id} donor={donor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindBlood;
