import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import P1_G from './../Page/P1_Graphical Method'
import P1_B from './../Page/P1_Bisection Method'
import P1_F from './../Page/P1_False Position Method'
import P1_O from './../Page/P1_One_Point Iteration Method'
import P1_N from './../Page/P1_Newton Raphson Methods'
import P2_C from './../Page/P2_Cramer rule'
import P2_GE from './../Page/P2_Gauss Elimination Method'
import P2_GJ from './../Page/P2_Gauss Jordan Method'
import P2_Lu from './../Page/P2_LU Decomposition Method'
import P2_CH from './../Page/P2_Cholesky Decom position Method'
import P2_J from './../Page/P2_Jacobi Iteration Method'
import P2_GS from './../Page/P2_Gauss Seidel Iteration Method'
import P3_N from './../Page/P3_Newton divided differences'
import P3_L from './../Page/P3_lagrange polynomials'
import P3_S from './../Page/P3_spline interpolation'
import P4_S from './../Page/P4_Simple linear regression'
import P4_M from './../Page/P4_Multiple_linear regression'
import P4_P from './../Page/P4_polynomial regression'
import P5_T from './../Page/P5_trapezidal Rule'
import P5_CT from './../Page/P5_composite trapezoidal Rule'
import P5_S from './../Page/P5_simpson Rlue'
import P5_CS from './../Page/P5_composite simposn Rlue'
import { Route, Switch, Link } from 'react-router-dom';


const Buttons = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div >
      <Navbar color="warning" light expand="md" >
        <NavbarBrand ><h5>Nemerical Methods</h5></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* 1*/}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Root Of Equations
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to="/P1_g">
                  Graphical Method
                </DropdownItem>
                <DropdownItem tag={Link} to="/P1_b">
                  Bisection Method
                </DropdownItem>
                <DropdownItem tag={Link} to="/P1_f">
                  False Position Method
                </DropdownItem>
                <DropdownItem tag={Link} to="/P1_o">
                One-Point Iteration Method
                </DropdownItem>
                <DropdownItem tag={Link} to="/P1_n">
                Newton Raphson Methods
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            {/* 2*/}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Solutions Of Linear Algebraic Equations
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to="/P2_c">
                  Cramer rule
                </DropdownItem>
                <DropdownItem tag={Link} to="/P2_ge">
                  Gauss Elimination Method
                </DropdownItem>
                <DropdownItem tag={Link} to="/P2_gj">
                  Gauss Jordan Method
                </DropdownItem>
                <DropdownItem tag={Link} to="/P2_lu">
                  LU Decomposition Method
                </DropdownItem>
                <DropdownItem tag={Link} to="/P2_ch">
                  Cholesky Decom position Method
                </DropdownItem>
                <DropdownItem tag={Link} to="/P2_j">
                  Jacobi Iteration Method
                </DropdownItem>
                <DropdownItem tag={Link} to="/P2_gs">
                  Gauss Seidel Iteration Method
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/*3*/}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Interpolation And Extrapolation
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to="/P3_n">
                  Newton divided differences
                </DropdownItem>
                <DropdownItem tag={Link} to="/P3_l">
                  lagrange polynomials
                </DropdownItem>
                <DropdownItem tag={Link} to="/P3_s">
                  spline interpolation
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            {/*4*/}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Least Squares Regression
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to="/P4_s">
                  Simple linear regression
                </DropdownItem>
                <DropdownItem tag={Link} to="/P4_m">
                  Multiple linear regression
                </DropdownItem>
                <DropdownItem tag={Link} to="/P4_p">
                  polynomial regression
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            {/*5*/}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Numerical Integration
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to="/P5_t">
                  trapezidal Rule
                </DropdownItem>
                <DropdownItem tag={Link} to="/P5_ct">
                  composite trapezoidal Rule
                </DropdownItem>
                <DropdownItem tag={Link} to="/P5_s">
                  simpson Rlue
                </DropdownItem>
                <DropdownItem tag={Link} to="/P5_cs">
                  composite simposn Rlue
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            {/*6*/}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Numerical Differrention
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

          </Nav>
          {/*<NavbarText>Simple Text</NavbarText>*/}
        </Collapse>
      </Navbar>
      <div>

        <Switch>
          
          <Route path='/P1_g' component={P1_G} />
          <Route path='/P1_b' component={P1_B} />
          <Route path='/P1_f' component={P1_F} />
          <Route path='/P1_o' component={P1_O} />
          <Route path='/P1_n' component={P1_N} />
          <Route path='/P2_c' component={P2_C} />
          <Route path='/P2_ge' component={P2_GE} />
          <Route path='/P2_gj' component={P2_GJ} />
          <Route path='/P2_lu' component={P2_Lu} />
          <Route path='/P2_ch' component={P2_CH} />
          <Route path='/P2_j' component={P2_J} />
          <Route path='/P2_gs' component={P2_GS} />
          <Route path='/P3_n' component={P3_N} />
          <Route path='/P3_l' component={P3_L} />
          <Route path='/P3_s' component={P3_S} />
          <Route path='/P4_s' component={P4_S} />
          <Route path='/P4_m' component={P4_M} />
          <Route path='/P4_p' component={P4_P} />
          <Route path='/P5_t' component={P5_T} />
          <Route path='/P5_ct' component={P5_CT} />
          <Route path='/P5_s' component={P5_S} />
          <Route path='/P5_cs' component={P5_CS} />
        </Switch>

      </div>
    </div>
  );
}

export default Buttons;