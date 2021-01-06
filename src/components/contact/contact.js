import React from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const ContactWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 0.7rem;
`;

const ContactTitle = styled.h1`
  font-weight: bolder;
  font-size: 2rem;
  border-bottom: 4px solid rgb(0, 0, 0);
  width: 20%;

  @media screen and (max-width: 768px){
    width: 50%;
  }
`;

const Forms = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const ImportantFields = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;

const InputImportant = styled.input`
  font-size: 1rem;
  color: #262626;
  border: 1px solid rgb(120, 120, 120);
  cursor: text;
  padding: 0.6rem 0.9rem;
  margin: 1rem 1.5rem;
  width: 100%;

  @media screen and (max-width: 768px){
    margin: 0.5rem 1.5rem;
  }
`;

const InputSubject = styled.input`
  font-size: 1rem;
  color: #262626;
  border: 1px solid rgb(120, 120, 120);
  cursor: text;
  padding: 0.6rem 0.9rem;
  margin-top: 0;
  margin-bottom: 1rem;
  width: 88.3%;

  @media screen and (max-width: 768px){
    margin: 0.5rem 1.5rem;
    width: 100%;
  }
`;

const InputMessage = styled.textarea`
  font-size: 1rem;
  color: #262626;
  border: 1px solid rgb(120, 120, 120);
  cursor: text;
  padding: 0.6rem 0.9rem;
  margin-top: 0;
  margin-bottom: 2rem;
  width: 88.3%;
  height: 10rem;
  resize: none;

  @media screen and (max-width: 768px){
    margin: 0.5rem 1.5rem;
    width: 100%;
  }
`;

const ButtonEmail = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  background-color: transparent;
  border: 2px solid rgb(0, 0, 0);
  cursor: pointer;
  padding: 0.9rem;
  margin-top: 0;
  margin-bottom: 2rem;
  width: 8rem;

  &:hover{
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    transition-timing-function: ease-out;
    transition-delay: 0.2s;
    transition-duration: 1s;
  }

  @media screen and (max-width: 768px){
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }
`;

class Contact extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {name: '', email: '', subject: '', message: ''};

    this.onChangeFields = this.onChangeFields.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  onChangeFields(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name] : value,
    });
  }

  sendEmail(event){
    event.preventDefault();
    
    emailjs.send('service_email_site','template_bb8d7t6', {from_name: this.state.name, email: this.state.email, subject: this.state.subject, message: this.state.message}, 'user_acY6CTvN9U7C20HrTZqEV')
    .then((response) => {
       alert("E-mail sent!");

       this.setState({
        name: '', email: '', subject: '', message: ''
       });
       
    }, (err) => {
       alert("Failed to send the e-mail!");
    });

  }

  render(){

    return (
        <ContactWrapper>
        
            <ContactTitle>
                Contact Me
            </ContactTitle>
            
            <Forms>

                <ImportantFields>
                <InputImportant type="text" name="name" value={this.state.name} onChange={this.onChangeFields} placeholder="Name" required />
                <InputImportant type="email" name="email" value={this.state.email} onChange={this.onChangeFields} placeholder="E-mail" required />
                </ImportantFields>
            
                <InputSubject type="text" name="subject" value={this.state.subject} onChange={this.onChangeFields} placeholder="Subject"/>

                <InputMessage type="text" name="message" value={this.state.message} onChange={this.onChangeFields} placeholder="Message" required />

            <ButtonEmail onClick={this.sendEmail}>
              Send
            </ButtonEmail>
            
            </Forms>

        </ContactWrapper>
    );
  }
}

export default Contact;