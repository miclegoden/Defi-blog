/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
94r2RInFh16oBI9vgT
*/
import Home from 'views/Home.js'
import MyBlog from 'views/MyBlog.js'
import NewStory from 'views/NewStory.js'
import UserProfile from 'views/UserProfile.js'
import Blog from 'components/Blog'
import PublicProfile from 'views/PublicProfile.js'
import ShowBlog from 'views/ShowBlog'

// import HomeIcon from '@mui/icons-material/Home'
// import BookIcon from '@mui/icons-material/Book'
// import PersonIcon from '@mui/icons-material/Person'
// import RateReviewIcon from '@mui/icons-material/RateReview'

import { HomeOutlined, BookOutlined, DiffOutlined } from '@ant-design/icons'

var routes = [
  {
    path: '/home',
    name: 'DEFIBLOGS',
    title: 'Home',
    // icon: <HomeOutlined style={{ fontSize: '20px' }} />,
    icon: <i className="tim-icons icon-bank" style={{ fontSize: '20px' }} />,
    component: Home,
    layout: '/admin',
  },
  {
    path: '/myblog',
    name: 'DEFIBLOGS',
    title: 'My blogs',
    // icon: <BookOutlined style={{ fontSize: '20px' }} />,
    icon: (
      <i
        className="tim-icons icon-book-bookmark"
        style={{ fontSize: '20px' }}
      />
    ),
    component: MyBlog,
    layout: '/admin',
  },
  {
    path: '/newstory',
    name: 'DEFIBLOGS',
    title: 'New Story',
    // icon: <DiffOutlined style={{ fontSize: '20px' }} />,
    icon: (
      <i
        className="tim-icons icon-single-copy-04"
        style={{ fontSize: '20px' }}
      />
    ),
    component: NewStory,
    layout: '/admin',
  },
  {
    path: '/user-profile',
    name: 'DEFIBLOGS',
    title: 'Profile',
    icon: (
      <i className="tim-icons icon-single-02" style={{ fontSize: '20px' }} />
    ),
    component: UserProfile,
    layout: '/admin',
  },
  {
    path: '/blog/:url',
    name: 'DEFIBLOGS',
    component: Blog,
    layout: '/admin',
  },
  {
    path: '/publicProfile',
    name: 'DEFIBLOGS',
    component: PublicProfile,
    layout: '/admin',
  },
  {
    path: '/showblog',
    name: '',
    component: ShowBlog,
    layout: '/admin',
  },
]
export default routes
