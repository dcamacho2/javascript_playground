// FilterableProductTable (orange): contains the entirety of the project
// TableHeader (red): contains the title and logo of company
// SearchBar (purple): receives all user input
// ProductTable (blue): displays and filters the data collection based on user input
// ProductCategoryRow (turquoise): displays a heading for each category
// ProductRow (green): displays a row for each product

// Component Hierarchy:
// 	- FilterableProductTable (not state)
//		* TableHeader
// 		* SearchBar (state)
// 		* ProductTable (not state)
// 			> ProductCategoryRow
// 			> ProductRow

// components should only do one thing!!
// UI and component data models should match, as they tend to adhere to the same information architecture

//Most of your components should simply take some data from props and render it. However, sometimes you need to respond to user input, a server request or the passage of time. For this you use state.

// Let's go through each one and figure out which one is state. Simply ask three questions about each piece of data:
// Is it passed in from a parent via props? If so, it probably isn't state.
// Does it change over time? If not, it probably isn't state.
// Can you compute it based on any other state or props in your component? If so, it's not state.


var ProductCategoryRow = React.createClass({
	render: function() {
		//<tr> for table row and <th> for table header
		return (
			<tr><th colSpan="2"> {this.props.category} </th></tr>
		);
	}
});

var ProductRow = React.createClass({
	//if it is not stocked then we make the name variable red using a span atribute
	render: function() {
		var name = this.props.product.stocked ?
			this.props.product.name :
				<span style={{color: 'red'}}>
					{this.props.product.name}
				</span>;
		return (
			<tr>
				<td className="products">{name}</td>
				<td className="products">{this.props.product.price}</td>
			</tr>
		);
	}
});

var ProductTable = React.createClass({
	render: function() {
		console.log(this.props);
		var rows = [];
		var lastCategory = null;
		this.props.products.forEach(function(product) {
			if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
				return;
			}
			if (product.category !== lastCategory) {
				rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
			}
			rows.push(<ProductRow product={product} key={product.name} />);
			lastCategory = product.category;
		}.bind(this));
		return (
			<table className="prodTable">
				<thead>
					<tr>
						<th className="infoText">Name</th>
						<th className="infoText">Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
});

var SearchBar = React.createClass({
	handleChange: function() {
		this.props.onUserInput (
			this.refs.filterTextInput.getDOMNode().value,
			this.refs.inStockOnlyInput.getDOMNode().checked
		);
	},
	render: function() {
		return (
			<form className="form-horizontal">
				<input type="text" placeholder="Search..." className="searchBar" value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange} />
				<p className="checkBox">
					<input type="checkbox" checked={this.props.inStockOnly} className="checkbox-info" ref="inStockOnlyInput" onChange={this.handleChange} />
					{' '}
					Only show products in stock
				</p>
			</form>
		);
	}
});

var TableHeader = React.createClass({
	render: function() {
		return (
			<div>
				<div className="center iconContain">
					<img src="img/icon.png" style={{width: "100px"}} />
				</div>
				<h1 className="company">React</h1>
			</div>
		)
	}
})

var FilterableProductTable = React.createClass({
	getInitialState: function() {
		return {
			filterText: '',
			inStockOnly: false
		};
	},
	handleUserInput: function(filterText, inStockOnly) {
		this.setState({
			filterText: filterText,
			inStockOnly: inStockOnly
		});
	},
	render: function() {
		return (
			<div className="container">
				<div className="form center">
					<TableHeader />
					<SearchBar
						filterText={this.state.filterText}
						inStockOnly={this.state.inStockOnly}
						onUserInput={this.handleUserInput}
					/>
					<ProductTable
						products={this.props.products}
						filterText={this.state.filterText}
						inStockOnly={this.state.inStockOnly}
					/>
				</div>
			</div>
		);
	}
});

var PRODUCTS = [
	{category: "Software", price: "$490.99", stocked: true, name: "Obsedian"},
	{category: "Software", price: "$90.99", stocked: true, name: "Kiwi"},
	{category: "Software", price: "$290.99", stocked: false, name: "Mango OS"},
	{category: "Ads", price: "$990.99", stocked: true, name: "Pushdown"},
	{category: "Ads", price: "$399.99", stocked: false, name: "Window"},
	{category: "Ads", price: "$599.99", stocked: true, name: "Cube/Prism"}
]

React.render(<FilterableProductTable products={PRODUCTS} />, document.body);


























