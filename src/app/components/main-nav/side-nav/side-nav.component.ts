import {Component, computed, Input, signal} from '@angular/core';

export type MenuItem = {
  icon: string,
  label: string,
  route: any
}


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'video_library',
      label: 'Submission',
      route: 'submission'
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics'
    },
    {
      icon: 'comment',
      label: 'Comments',
      route: 'comments'
    }
  ]);
  sideNavCollapsed = signal<boolean>(false);
  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');

  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }
}
