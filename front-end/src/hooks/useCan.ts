import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

type useCanParams = {
  permission?: string[];
  roles?: string[];
}
export function useCan({ permission, roles }: useCanParams) {
  const { user, isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    return false;
  }

  if (permission?.length > 0) {
    const hasAllPermissions = permission.every(permission => {
      return user.permissions.includes(permission);
    });

    if (!hasAllPermissions) {
      return false;
    }

  }

  if (roles?.length > 0) {
    const hasAllRoles = roles.some(role => {
      return user.roles.includes(role);
    });

    if (!hasAllRoles) {
      return false;
    }

  }

  return true;
}