import React from 'react';
import axios from 'axios';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      res: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const result = await axios({
      method: 'POST',
      url: `http://localhost:9000/api/v1/numbers/?n=${this.state.value}`
    });
    this.setState({ res: result.data.data });
    console.log(this.state);
  };

  render() {
    return (
      <Paper className="root">
        <AppBar>
          <Typography variant="h5" component="h5">
            Prime-Generator
          </Typography>
          <Typography variant="h6" component="h6">
            Calculate prime numbers between 2 to a given number
          </Typography>
        </AppBar>
        <form onSubmit={this.handleSubmit}>
          <Typography variant="h6" component="h6">
            Enter a number (>1)
          </Typography>
          <TextField
            variant="filled"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="sub">
            <Button
              variant="contained"
              color="secondary"
              type="input"
              value="Submit"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </div>
        </form>

        <div>
          {this.state.res.map(x => (
            <Button key={x}>{x}</Button>
          ))}
        </div>
      </Paper>
    );
  }
}

export default App;
