import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { ReactNode } from "react";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full w-full container mx-auto flex justify-center mt-10 flex-col gap-4">
      <Header />
      <Navigation />
      {children}
    </div>
  );
};

export default BaseLayout;
