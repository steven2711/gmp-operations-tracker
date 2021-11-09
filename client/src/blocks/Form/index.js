import styled from "styled-components";
import Label from "./Label";
import Group from "./Group";
import Input from "../../elements/Input";
import Button from "../../elements/Button";
import Title from "./Title";
import SubText from "./SubText";

const Form = styled.form`
  max-width: 25rem;
  width: 70%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 3rem;
  border-radius: 10px;
  background: #f3f6f4;

  @media (max-width: 540px) {
    padding: 2rem;
    width: 100%;
  }
`;

Form.Label = Label;
Form.Group = Group;
Form.Submit = Button;
Form.Input = Input;
Form.Title = Title;
Form.SubText = SubText;

export default Form;
