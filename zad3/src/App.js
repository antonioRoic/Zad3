import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      ime: "",
      prezime: "",
      adresa: "",
      postanski_broj: "",
      grad: "",
      drzava: "",
      br_tel: "",
      email: "",
    };

    this.handleIdChange = this.handleIdChange.bind(this);
    this.handleImeChange = this.handleImeChange.bind(this);
    this.handlePrezimeChange = this.handlePrezimeChange.bind(this);
    this.handleAdresaChange = this.handleAdresaChange.bind(this);
    this.handlePostaChange = this.handlePostaChange.bind(this);
    this.handleGradChange = this.handleGradChange.bind(this);
    this.handleDrzavaChange = this.handleDrzavaChange.bind(this);
    this.handleTelChange = this.handleTelChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.state.id) {
      return this.setState({ error: "ID je nužan!" });
    }
    if (!this.state.ime) {
      return this.setState({ error: "Ime je nužno!" });
    }
    if (!this.state.prezime) {
      return this.setState({ error: "Prezime je nužno!" });
    }
    if (!this.state.adresa) {
      return this.setState({ error: "Adresa je nužna!" });
    }
    if (!this.state.postanski_broj) {
      return this.setState({ error: "Poštanski broj je nužan!" });
    }
    if (!this.state.grad) {
      return this.setState({ error: "Grad je nužan!" });
    }
    if (!this.state.drzava) {
      return this.setState({ error: "Država je nužna!" });
    }
    if (!this.state.broj_tel) {
      return this.setState({ error: "Broj telefona je nužan!" });
    }
    if (!this.state.email) {
      return this.setState({ error: "E-mail je nužan!" });
    }
  }

  handleIdChange(event) {
    this.setState({
      id: event.target.value,
    });
  };
  handleImeChange(event) {
    this.setState({
      ime: event.target.value,
    });
  };
  handlePrezimeChange(event) {
    this.setState({
      prezime: event.target.value,
    });
  };
  handleAdresaChange(event) {
    this.setState({
      adresa: event.target.value,
    });
  };
  handlePostaChange(event) {
    this.setState({
      postanski_broj: event.target.value,
    });
  };
  handleGradChange(event) {
    this.setState({
      grad: event.target.value,
    });
  };
  handleDrzavaChange(event) {
    this.setState({
      drzava: event.target.value,
    });
  }
  handleTelChange(event) {
    this.setState({
      broj_tel: event.target.value,
    });
  }
  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  render() {

    return (
      <div>
        <header>
          <h1>IMENIK</h1>
        </header>
        <div className="container"> 
        <form onSubmit={this.handleSubmit}>
         <label>ID</label>
          <input type="text" value={this.state.id} onChange={this.handleIdChange} />

          <label>Ime</label>
          <input type="text" value={this.state.ime} onChange={this.handleImeChange} />

          <label>Prezime</label>
          <input type="text"  value={this.state.prezime} onChange={this.handlePrezimeChange} />

          <label>Adresa</label>
          <input type="text" value={this.state.adresa} onChange={this.handleAdresaChange} />

          <label>Poštanski broj</label>
          <input type="text" value={this.state.postanski_broj} onChange={this.handlePostaChange} />

          <label>Grad</label>
          <input type="text" value={this.state.grad} onChange={this.handleGradChange} />

          <label>Država</label>
          <input type="text" value={this.state.drzava} onChange={this.handleDrzavaChange} />

          <label>Broj telefona</label>
          <input type="text" value={this.state.broj_tel} onChange={this.handleTelChange} />

          <label>E-mail</label>
          <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
          
          <input type="submit" value="Unesi u imenik"/>
        </form>
      </div>
      </div>
    );
  }
}

export default App;
