import React, { useState, useEffect } from 'react'
import axios from 'axios'
// nodejs library that concatenates classes
import classNames from 'classnames'
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2'

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap'

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from 'variables/charts.js'

import { Input, Space } from 'antd'

// import { styled, alpha } from '@mui/material/styles'
// import AppBar from '@mui/material/AppBar'
// import Box from '@mui/material/Box'
// import Toolbar from '@mui/material/Toolbar'
// import InputBase from '@mui/material/InputBase'
// import SearchIcon from '@mui/icons-material/Search'
import '../../assets/css/Content.css'

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }))

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }))

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }))

const { Search } = Input

const onSearch = (value) => console.log(value)

const trends = [
  {
    text: 'Every Blog post is uploaded to IPFS & stored forever! ',
  },
  {
    text: 'Every blog is minted as NFTs and then sent to the blogger!',
  },
  {
    text: 'You can trade or send your blog to anyone on any NFT marketplace! ',
  },
  {
    text: 'Contract address: 0x636F8301a3E35247Bcd6069B97B20093f2aa7915 ',
  },
  {
    text: 'Updates Posted on Our Twitter: @DefiBlogs',
  },
]
const Rightbar = () => {
  return (
    <div>
      <Card className="card-chart">
        <CardHeader>
          {/* <h5 className="card-category">Total Shipments</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 763,215
                </CardTitle> */}
          {/* <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
              </Toolbar>
            </AppBar>
          </Box> */}
          <Search placeholder="Search..." onSearch={onSearch} enterButton />
        </CardHeader>
        <CardBody>
          <div className="trends">
            {/* <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  /> */}
            <p className="category">Get to know Defi Blogs:</p>
            {trends.map((e, i) => {
              return (
                <div key={i} className="trend">
                  <h4>{e.text}</h4>
                </div>
              )
            })}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default Rightbar
