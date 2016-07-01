var React = require('react');
var ReactoDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>
        Hello, <input type="text" placeholder="Your name here" />!
        It is {this.props.date.toTimeString()}
      </div>
    );
  }
});

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({liked: !this.state.liked});
  }
  render() {
    const text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <div onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </div>
    );
  }
}

var TransactionBox = React.createClass({
  handleTransactionSubmit: function(transaction) {
    newTransactions = transactions.concat([transaction]);
    newBalance = balance + transaction.amount;
    this.setState({transactions: newTransactions, balance: newBalance});
  },
  getInitialState: function() {
    return {transactions: [], balance: 0};
  },
  render: function() {
    return (
      <div className="transactionBox">
        <h2>Your balance:</h2>
        <span>{this.state.balance}</span>
      </div>
    );
  }
});

var TransactionsList = React.createClass({
  render: function() {
    var transactionNodes = this.props.data.map(function(transaction) {
    return (
      <Transaction description={transaction.description} amount={transaction.amount}>
      </Transaction>
    );
    });
    return (
      <div className="transactionList">
        {}
      </div>
    );
  }  
});

setInterval(function() {
  ReactoDOM.render(
    <HelloWorld date={new Date()} />,
    document.getElementById('app')
  );
}, 500);

ReactoDOM.render(
  <LikeButton />,
  document.getElementById('like')
);
