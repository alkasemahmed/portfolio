import LastProject from "@/components/last-project";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Alkasem Portfolio",
  description: "Alksem Ahmed Portfolio - Filmmaker, Story Teller and Social Media Manager",
};

export default function index() {
  return (
    <Wrapper>
      <LastProject />
    </Wrapper>
  );
}
