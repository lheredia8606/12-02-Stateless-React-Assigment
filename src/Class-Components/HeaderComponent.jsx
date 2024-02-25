import { Component } from "react";
export class HeaderComponent extends Component{

  render(){
    const [...navLinks] = this.props.links;
    return (
      <header>
      <h1>Fullmetal Alchemist</h1>
      <nav>
        {
          navLinks.map((navLink)=>{
            return <li key={navLink}>{navLink}</li>
          })
        }
      </nav>
      </header>
    )
  }
}