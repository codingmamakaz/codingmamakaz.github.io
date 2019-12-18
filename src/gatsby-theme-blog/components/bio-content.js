import React, { Fragment } from "react"
import { Styled } from "theme-ui"
import { Link } from 'gatsby'

export default () => (
  <Fragment>
    Words by <Link to="/blog/" activeStyle={{ color: "red" }}>Kazumi Karbowski</Link>.
    <br />
  </Fragment>
)
