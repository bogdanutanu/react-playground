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


var Transaction = React.createClass({
  render: function() {
    return (
      <tr><td>{this.props.description}</td><td>{this.props.amount}</td></tr>
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
      <table className="transactionList">
        <thead><tr><th>Description</th><th>Amount</th></tr></thead>
        <tbody>{transactionNodes}</tbody>
      </table>
    );
  }  
});

var TransactionBox = React.createClass({
  handleTransactionSubmit: function(transaction) {
    var transactions = this.state.transactions;
    var newTransactions = transactions.concat([transaction]);

    var balance = this.state.balance;
    var newBalance = balance + transaction.amount;
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
        <TransactionsList data={this.state.transactions} />
        <TransactionForm onTransactionSubmit={this.handleTransactionSubmit} />
      </div>
    );
  }
});

var TransactionForm = React.createClass({
  getInitialState: function(){
    return {description: '', 
      amount: ''};
  },
  handleDescriptionChange: function(e){
    this.setState({description: e.target.value});
  },
  handleAmountChange: function(e){
    this.setState({amount: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var description = this.state.description.trim();
    var amount = this.state.amount.trim();
    if (!description || !amount || isNaN(amount)) {
      return;
    }
    this.props.onTransactionSubmit({description: description, amount: Number(amount)});
    this.setState({description: '', amount: ''});
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Transaction description"
          value={this.state.description}
          onChange={this.handleDescriptionChange}
        />
        <input
          type="text"
          placeholder="Amount to be added or deducted. If deducted, must be preceeded by a - symbol"
          value={this.state.amount}
          onChange={this.handleAmountChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

ReactoDOM.render(
  <TransactionBox />,
  document.getElementById('transactions')
);