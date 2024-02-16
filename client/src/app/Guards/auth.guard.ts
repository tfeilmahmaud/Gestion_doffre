import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { JobService } from '../Service/job.service';

@Injectable({
  providedIn: 'root',
})
class PermissionService {
  constructor(private router: Router, private auth: JobService) {}

  canActivate(allowedRoles: string[]): boolean {
    const userRole = localStorage.getItem("role");

    if (userRole && allowedRoles.includes(userRole)) {
      return true;
    }
    // Handle role-specific redirection URLs
    if (userRole === 'Job Seeker') {
      this.router.navigateByUrl('/l'); // Redirect Job Seekers to the login page
    } else if (userRole === 'Recruiter') {
      this.router.navigateByUrl('/l'); // Redirect Recruiters to the recruiter login page
    } else {
      this.router.navigateByUrl('/l'); // Redirect others to the home page or any appropriate page
    }
    return false;
  }
  
}
export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  // return inject(PermissionService).canActivate();
  const requiredRoles = route.data['roles'] as string[];

  // If no specific roles are specified for the route, allow access to all authenticated users
  if (!requiredRoles || requiredRoles.length === 0) {
    return inject(PermissionService).canActivate(['Job Seeker', 'Recruiter']);
  }

  // Check if the user has the required role(s) to access the route
  return inject(PermissionService).canActivate(requiredRoles);
};
