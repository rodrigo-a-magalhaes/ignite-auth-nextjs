import { ReactNode } from "react";
import { useCan } from "../hooks/useCan";

interface CanProps {
  children: ReactNode;
  permission?: string[];
  roles?: string[];
}

export function Can({ children, permission, roles }: CanProps) {
  const userCanSeeComponent = useCan({ permission, roles });

  if (!userCanSeeComponent) {
    return null;
  }

  return (
    <>
      {children}
    </>
  )
}