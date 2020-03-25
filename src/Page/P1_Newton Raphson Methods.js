import React from 'react';
import { compile,derivative} from 'mathjs';
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
    title: 'X',
    dataIndex: 'x',
  },
  {
    title: 'Error',
    dataIndex: 'error',
  },
];

class Page1_5 extends React.Component {
  constructor() {
    super();
    this.state = {
      fx: "",
      X: 0,
      err: 0.000001,
      tables: false,
    }
    this.handleChage = this.handleChage.bind(this);
    this.ClickChage = this.ClickChage.bind(this);
    this.N_funtion = this.N_funtion.bind(this);
  }

  handleChage(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  ClickChage() {
    this.N_funtion(parseFloat(this.state.X))
  }

  N_funtion(x) {
    let sum = parseFloat(0.000000);
    let X = [];
    let Er = [];
    let i = 0;
    sum = 10.000000
    while (sum > this.state.err) {
      X[i] = x.toFixed(6);;
      let x_new=x-(this.changfuntion(x)/this.difffuntion(x));
      sum = this.DoError(x_new, x);
      sum = Math.abs(sum).toFixed(7);
      Er[i] = sum;
      i++;
      x=x_new;
    };
    this.settable(X, Er);
    this.setState({
      tables: true
    })
  }

  changfuntion(X) {
    var expr = compile(this.state.fx);
    let scope = { x: parseFloat(X) };
    return expr.eval(scope);
  }

  difffuntion(X){
    var expr = derivative(this.state.fx,'x');
    let scope = { x: parseFloat(X) };
    return expr.eval(scope);
  }

  DoError(n, m) {
    return (n - m) / n;
  }

  settable(X, Er) {
    data = []
    for (let i = 0; i < X.length; i++) {
      data.push({
        iteration: i + 1,
        x: X[i],
        error: Er[i],
      });
    }

  }

  render() {
    return (
      <div className="jad">
        <h1>Newton Raphson Methods</h1>
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
                    X :&ensp;
            </label>
                  <input name="X" onChange={this.handleChage} value={this.state.value} />
                </div >

              </div>

              <Button color="warning" onClick={this.ClickChage}>--OK--</Button>{' '}

              <div style={{ margin: 1 + 'em' }}>
                <LineChart width={500} height={300} data={data}  >
                  <Line type="monotone" dataKey="error" stroke="#8884d8" />
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="x" />
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
export default Page1_5;