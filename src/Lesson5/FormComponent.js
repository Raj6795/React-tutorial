import { Component } from "react";

class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "test",
      username: "test@example.com",
      hobby: "Travel",
    };
  }

  handleNameChange = (event) => {
    this.setState(
      {
        name: event.target.value,
      },
      () => console.log(this.state.name)
    );
  };
  handleEmailChange = (event) => {
    this.setState(
      {
        username: event.target.value,
      },
      () => console.log(this.state.username)
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`${this.state.name}, ${this.state.username}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Personal Data</legend>
          <label htmlFor="name">Name : </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <br />
          <br />
          <br />
          <label htmlFor="username">Username : </label>
          <input
            id="username"
            type="email"
            value={this.state.username}
            onChange={this.handleEmailChange}
          />
          <br />
          <br />
          <br />
          <label htmlFor="password">Password : </label>
          <input id="password" type="password" />
          <br />
          <br />
          <br />
          <label htmlFor="hobby">Favorite hobby : </label>
          <select id="hobby" name="hobby">
            <option value="Travel">Travel</option>
            <option value="Cooking">Cooking</option>
            <option value="Movies And Series">Movies and Series</option>
          </select>
          <button type="submit" id="submit">
            Submit
          </button>
        </fieldset>
      </form>
    );
  }
}

export default FormComponent;
