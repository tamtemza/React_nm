import React from 'react';
import { compile} from 'mathjs';
import { Table } from 'antd';
import { Button, Container, Row, Col } from 'reactstrap';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

var data = [];
const columns = [

  {
    title: 'x',
    dataIndex: 'x',
  },
  {
    title: 'y',
    dataIndex: 'y',
  },
];

class Page1_1 extends React.Component {
  constructor() {
    super();
    this.state = {
      fx: "",
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
    this.N_funtion()
  }

  N_funtion() {
    let X = [];
    let Y = [];
    let n=0;
    for (let i = -3; i < 4; i++) {
      X[n]=i;
      Y[n]=this.changfuntion(i)
      n++;
    }
    this.settable(X, Y);
    this.setState({
      tables: true
    })
  }

  changfuntion(X) {
    var expr = compile(this.state.fx);
    let scope = { x: parseFloat(X) };
    return expr.eval(scope);
  }

  settable(X, Y) {
    data = []
    for (let i = 0; i < X.length; i++) {
      data.push({
     
        x: X[i],
        y: Y[i],
      });
    }

  }

  render() {
    return (
      <div className="jad">
        <h1>Graphical Method</h1>
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
              </div>

              <Button color="warning" onClick={this.ClickChage}>--OK--</Button>{' '}

              <div style={{ margin: 1 + 'em' }}>
                <LineChart width={500} height={300} data={data}  >
                  <Line type="monotone" dataKey="y" stroke="#8884d8" />
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
export default Page1_1;