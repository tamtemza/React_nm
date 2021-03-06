import React from 'react';
import { compile } from 'mathjs';
import { Table } from 'antd';
import { Button, Container, Row, Col } from 'reactstrap';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

var data = [];
const columns = [
  {
    title: 'Iteration',
    dataIndex: 'iteration',
  },
  {
    title: 'XL',
    dataIndex: 'xl',
  },
  {
    title: 'XR',
    dataIndex: 'xr',
  },
  {
    title: 'Error',
    dataIndex: 'error',
  },
];

class Page1_2 extends React.Component {
  constructor() {
    super();
    this.state = {
      fx: "",
      XL: 0,
      XR: 0,
      err: 0.000001,
      tables: false,
    }
    this.handleChage = this.handleChage.bind(this);
    this.ClickChage = this.ClickChage.bind(this);
    this.B_funtion = this.B_funtion.bind(this);
  }

  handleChage(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  ClickChage() {
    this.B_funtion(parseFloat(this.state.XL), parseFloat(this.state.XR))
  }

  B_funtion(xl, xr) {
    let sum = parseFloat(0.000000);
    let xm = 0;
    let Xl = [];
    let Xr = [];
    let Er = [];
    let xm_new = 0;
    let i = 0;
    sum = 10.000000
    while (sum > this.state.err) {
      Xl[i] = xl.toFixed(6);
      Xr[i] = xr.toFixed(6);
      xm = (xl + xr) / 2;
      let fxm = this.changfuntion(xm);
      let xm_s = fxm * this.changfuntion(xr);
      if (xm_s > 0) {
        if (xl < xr) {
          xr = xm;
        } else {
          xl = xm;
        }
      } else {
        if (xl < xr) {
          xl = xm;
        } else {
          xr = xm;
        }
      }
      xm_new = ((xl + xr) / 2);
      sum = this.DoError(xm_new, xm);
      sum = Math.abs(sum).toFixed(7);
      Er[i] = sum;
      i++;
    };
    this.settable(Xl, Xr, Er);
    this.setState({
      tables: true
    })
  }

  changfuntion(X) {
    var expr = compile(this.state.fx);
    let scope = { x: parseFloat(X) };
    return expr.eval(scope);
  }

  DoError(n, m) {
    return (n - m) / n;
  }

  settable(Xl, Xr, Er) {
    data = []
    for (let i = 0; i < Xl.length; i++) {
      data.push({
        iteration: i + 1,
        xl: Xl[i],
        xr: Xr[i],
        error: Er[i],
      });
    }

  }

  render() {
    return (
      <div className="jad">
        <h1 >Bisection Method</h1>
        <Container style={{ backgroundColor: '#FFFACD' }}  >
          <Row>
            <Col style={{ backgroundColor: '#FFFACD' }} xs="6">
              <div style={{ margin: 1 + 'em' }}>
                <Table columns={columns} dataSource={data} />
              </div>
            </Col>

            <Col xs="6" >

              <div style={{ backgroundColor: '#FFFACD' }}>
                <div style={{ margin: 1 + 'em' }}>
                  <label>
                    fx : &ensp;
                </label>
                  <input name="fx" onChange={this.handleChage} value={this.state.value} />
                </div>

                <div >
                  <label>
                    XL :&ensp;
            </label>
                  <input name="XL" onChange={this.handleChage} value={this.state.value} />
                </div >

                <div style={{ margin: 1 + 'em' }}>
                  <label >
                    XR :&ensp;
            </label>
                  <input name="XR" value={this.state.value} onChange={this.handleChage} />
                </div>
              </div>

              <Button color="warning" onClick={this.ClickChage}>--OK--</Button>{' '}

              <div style={{ margin: 1 + 'em' }}>
                <LineChart width={500} height={300} data={data}  >
                  <Line type="monotone" dataKey="error" stroke="#8884d8" />
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="xl" />
                  <YAxis />
                </LineChart>
              </div>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Page1_2;