export interface IFMenuBase {
  key: string
  title: string
  icon?: string
  component?: string
  query?: string
  requireAuth?: string
  route?: string
  login?: boolean
}

export interface IFMenu extends IFMenuBase {
  subs?: IFMenu[]
}

const menus: {
  menus: IFMenu[]
  others: IFMenu[] | []
  [index: string]: any
} = {
  menus: [
    {
      key: '/app/dashboard/index',
      title: 'Home',
      icon: 'fa-address-book',
      component: 'Home',
    },
    {
      key: '/app/dashboard/todos',
      title: 'React Query v4',
      icon: 'reactQueryIcon',
      component: 'Todos',
    },
    {
      key: '/app/dashboard/blog',
      title: 'React Query v4 Blog',
      icon: 'reactQueryIcon',
      component: 'Blog',
    },
    {
      key: '/app/dashboard/disgnpackage',
      title: 'Disgn Package',
      icon: 'reactQueryIcon',
      component: 'DisgnPackage',
    },
    {
      key: '/app/dashboard/table',
      title: 'React Table',
      icon: 'reactTableIcon',
      component: 'ReactTableDemo',
    },

    // {
    //   key: '/app/ui',
    //   title: 'UI',
    //   icon: 'scan',
    //   subs: [
    //     { key: '/app/ui/buttons', title: 'Button', component: 'Buttons' },
    //     { key: '/app/ui/icons', title: '图标', component: 'Icons' },
    //     { key: '/app/ui/spins', title: '加载中', component: 'Spins' },
    //     { key: '/app/ui/modals', title: '对话框', component: 'Modals' },
    //     {
    //       key: '/app/ui/notifications',
    //       title: 'Notification',
    //       component: 'Notifications',
    //     },
    //     { key: '/app/ui/tabs', title: '标签页', component: 'Tabs' },
    //     { key: '/app/ui/banners', title: '轮播图', component: 'Banners' },
    //     { key: '/app/ui/wysiwyg', title: '富文本', component: 'WysiwygBundle' },
    //     { key: '/app/ui/drags', title: '拖拽', component: 'Drags' },
    //     { key: '/app/ui/gallery', title: '画廊', component: 'Gallery' },
    //     { key: '/app/ui/map', title: '地图', component: 'MapUi' },
    //   ],
    // },
  ],
  others: [],
}

export default menus
