import styled from "styled-components";
import React from 'react';
import { Link } from 'react-router-dom'

const NavLinks = styled.ul`
color: Black;
 text-decoration: none;
 display: flex;
 margin: 0 auto;
 font-size: 24px;
`
class Links extends React.Component {
  handleClick = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div>
        <NavLinks>
                
                <section id='pm'><Link to="/pageM" onClick={this.handleClick}>Sobre Fast Fashion  </Link></section>
                <section id='pe'><Link to="/pageE" onClick={this.handleClick}>Sobre Eletrônicos</Link></section>
                < section id='pa'><Link to="/pageA" onClick={this.handleClick}>Sobre Alimentos</Link></section>
            </NavLinks>

      </div>
    );
  }
}


export default Links;
