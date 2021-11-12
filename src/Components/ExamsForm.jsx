//  import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import "./styles.css"
import { connect } from "react-redux"
import { addGrade } from "./ACTIONS/Actions"
import { Component } from "react";
import { getAllgrades } from "./ACTIONS/Actions"
import { SignOut } from "./ACTIONS/authActions"




class ExamsForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      God_never_blesses: "",
      God_is_Good: "",
      You_and_God: "",
      Only_God_Decides: "",
      By_strength_Shall: "",
      Jesus_is_the: "",
      Christianity_is_not: "",
      A_Christian_should: "",
      Until_God_prospers: "",
      God_uses_sickness: "",
      When_dealing_with: "",
      God_is_always: "",

      what_are_the_rights: "",
      From_the_book_Your_rights: "",
      Who_anointed_Jesus_to: "",
      What_does_it_mean_to_be_called: "",
      What_do_you_understand_by_the_statement: "",
      Is_it_possible_to_know_the: "",
      Can_you_go_back_to_the_Holy_Spirit: "",
      How_is_the_right_to_choose_a_distinguishing: "",

    }
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addNewGrade(this.state)
    this.setState({
      God_never_blesses: "",
      God_is_Good: "",
      You_and_God: "",
      Only_God_Decides: "",
      By_strength_Shall: "",
      Jesus_is_the: "",
      Christianity_is_not: "",
      A_Christian_should: "",
      Until_God_prospers: "",
      God_uses_sickness: "",
      When_dealing_with: "",
      God_is_always: "",

      what_are_the_rights: "",
      From_the_book_Your_rights: "",
      Who_anointed_Jesus_to: "",
      What_does_it_mean_to_be_called: "",
      What_do_you_understand_by_the_statement: "",
      Is_it_possible_to_know_the: "",
      Can_you_go_back_to_the_Holy_Spirit: "",
      How_is_the_right_to_choose_a_distinguishing: "",



    })
  }

  componentDidMount() {
    this.props.getAllgrades()
  }




  render() {
    return (
      <div>
        <br />
        <Button variant="secondary" className="m-2 logout-btn" onClick={this.props.SignOut} >
          Logout <i class="fas fa-reply"></i>
        </Button>
        <h1 className="text-center heading">PAPA WORLA'S SELF DEVELOPMENT PLATFORM</h1> <br />
        <h3 className="text-center ">ASSESSMENT FOR THE FIRST WEEK OF OUR COACHING AND MENTORING SESSION</h3> <br />
        <h4 className="text-center instructions">PLEASE ANSWER EITHER TRUE OR FALSE</h4> <br />


        <Form className="form1" onSubmit={this.handleSubmit}>
          <Row className="align-items-center row1">

            <Col>
              <Form.Label htmlFor="inlineFormInput" >
                <span className="details">1. God never blesses any man/woman beyond His/Her mental capacity.</span>
              </Form.Label>
              <Form.Control
                className="mb-4"
                id="inlineFormInput"
                placeholder="Enter True or False"
                name="God_never_blesses"
                value={this.state.God_never_blesses}
                onChange={this.handleChange}
                required="required"


              />
              <Form.Label htmlFor="inlineFormInput" >
                <span className="details">2. God is Good, and He is willing to Heal all the time</span>
              </Form.Label>
              <Form.Control
                className="mb-4"
                id="inlineFormInput"
                placeholder="Enter True or False"
                name="God_is_Good"
                value={this.state.God_is_Good}
                onChange={this.handleChange}
                required="required"

              />



              <Form.Label htmlFor="inlineFormInput" >
                <span className="details">3. You and God are the majority</span>
              </Form.Label>
              <Form.Control
                className="mb-4"
                id="inlineFormInput"
                placeholder="Enter True or False"
                name="You_and_God"
                value={this.state.You_and_God}
                onChange={this.handleChange}
                required="required"

              />




              <Form.Label htmlFor="inlineFormInput" >
                <span className="details">4. Only God decides who wins or who loses</span>
              </Form.Label>
              <Form.Control
                className="mb-4"
                id="inlineFormInput"
                placeholder="Enter True or False"
                name="Only_God_Decides"
                value={this.state.Only_God_Decides}
                onChange={this.handleChange}
                required="required"
              />




              <Form.Label htmlFor="inlineFormInput" >
                <span className="details">5. By strength shall no man prevail</span>
              </Form.Label>
              <Form.Control
                className="mb-4"
                id="inlineFormInput"
                placeholder="Enter True or False"
                name="By_strength_Shall"
                value={this.state.By_strength_Shall}
                onChange={this.handleChange}
                required="required"

              />



              <Form.Label htmlFor="inlineFormInput" >
                <span className="details">6. Jesus is the embodiment of liberty</span>
              </Form.Label>
              <Form.Control
                className="mb-4"
                id="inlineFormInput"
                placeholder="Enter True or False"
                name="Jesus_is_the"
                value={this.state.Jesus_is_the}
                onChange={this.handleChange}
                required="required"

              />
            </Col>


            {/* second six */}
            {/* second six */}
            {/* second six */}

            <Col className="second_six">
              <Form.Label htmlFor="inlineFormInput" >
                <span className="details">7. Christianity is not a religion</span>
              </Form.Label>
              <Form.Control
                className="mb-4"
                id="inlineFormInput"
                placeholder="Enter True or False"
                name="Christianity_is_not"
                value={this.state.Christianity_is_not}
                onChange={this.handleChange}
                required="required"

              />

              <Form.Label htmlFor="inlineFormInput" >
                <span className="details">8. A Christian should not pursue mental development</span>
              </Form.Label>
              <Form.Control
                className="mb-4"
                id="inlineFormInput"
                placeholder="Enter True or False"
                name="A_Christian_should"
                value={this.state.A_Christian_should}
                onChange={this.handleChange}
                required="required"

              />


              <Form.Label htmlFor="inlineFormInput" >
                <span className="details">9. Until God prospers your mind, you cannot contain His blessings</span>
              </Form.Label>
              <Form.Control
                className="mb-4"
                id="inlineFormInput"
                placeholder="Enter True or False"
                name="Until_God_prospers"
                value={this.state.Until_God_prospers}
                onChange={this.handleChange}
                required="required"

              />


              <Form.Label htmlFor="inlineFormInput" >
                <span className="details">10. God uses sickness as a means of humbling His saints</span>
              </Form.Label>
              <Form.Control
                className="mb-4"
                id="inlineFormInput"
                placeholder="Enter True or False"
                name="God_uses_sickness"
                value={this.state.God_uses_sickness}
                onChange={this.handleChange}
                required="required"

              />


              <Form.Label htmlFor="inlineFormInput" >
                <span className="details">11. When dealing with God we cannot choose</span>
              </Form.Label>
              <Form.Control
                className="mb-4"
                id="inlineFormInput"
                placeholder="Enter True or False"
                name="When_dealing_with"
                value={this.state.When_dealing_with}
                onChange={this.handleChange}
                required="required"

              />

              <Form.Label htmlFor="inlineFormInput" >
                <span className="details">12. God is always imposing His ways on us</span>
              </Form.Label>
              <Form.Control
                className="mb-4"
                id="inlineFormInput"
                placeholder="Enter True or False"
                name="God_is_always"
                value={this.state.God_is_always}
                onChange={this.handleChange}
                required="required"

              />
            </Col>


            <Col xs="auto">

            </Col>
          </Row>
        </Form>

        <br />
        <hr className="hr" />
        <br />





        {/* second set of questions */}
        {/* second set of questions */}
        {/* second set of questions */}
        {/* second set of questions */}
        <h4 className="text-center instructions">PLEASE SUPPLY THE APPROPRIATE ANSWERS</h4> <br />
        <Form className="form2" onSubmit={this.handleSubmit}>
          <Row className="align-items-center row2">

            <Form.Label htmlFor="inlineFormInput" >
              <span className="details">13. What are the rights we have in Christ?</span>
            </Form.Label>
            <Form.Control
              className="mb-4"
              id="inlineFormInput"
              placeholder="Supply the appropriate answer"
              name="what_are_the_rights"
              value={this.state.what_are_the_rights}
              onChange={this.handleChange}
              required="required"
              as="textarea"

            />





            <Form.Label htmlFor="inlineFormInput" >
              <span className="details">14. From the book Your rights in Christ, how can you explain liberty in your own words?</span>
            </Form.Label>
            <Form.Control
              className="mb-4"
              id="inlineFormInput"
              placeholder="Supply the appropriate answer"
              name="From_the_book_Your_rights"
              value={this.state.From_the_book_Your_rights}
              onChange={this.handleChange}
              required="required"
              as="textarea"
            />



            <Form.Label htmlFor="inlineFormInput" >
              <span className="details">15. Who anointed Jesus to set men free?</span>
            </Form.Label>
            <Form.Control
              className="mb-4"
              id="inlineFormInput"
              placeholder="Supply the appropriate answer"
              name="Who_anointed_Jesus_to"
              value={this.state.Who_anointed_Jesus_to}
              onChange={this.handleChange}
              required="required"
              as="textarea"
            />



            <Form.Label htmlFor="inlineFormInput" >
              <span className="details">16. What does it mean to be called into liberty in Christ?</span>
            </Form.Label>
            <Form.Control
              className="mb-4"
              id="inlineFormInput"
              placeholder="Supply the appropriate answer"
              type="number"
              name="What_does_it_mean_to_be_called"
              value={this.state.What_does_it_mean_to_be_called}
              onChange={this.handleChange}
              required="required"
              as="textarea"
            />



            <Form.Label htmlFor="inlineFormInput" >
              <span className="details">17. What do you understand by the statement Christianity is not a religion ?</span>
            </Form.Label>
            <Form.Control
              className="mb-4"
              id="inlineFormInput"
              placeholder="Supply the appropriate answer"
              name="What_do_you_understand_by_the_statement"
              value={this.state.What_do_you_understand_by_the_statement}
              onChange={this.handleChange}
              required="required"
              as="textarea"
            />

            <Form.Label htmlFor="inlineFormInput" >
              <span className="details">18. Is it possible to know the will of God, briefly explain?</span>
            </Form.Label>
            <Form.Control
              className="mb-4"
              id="inlineFormInput"
              placeholder="Supply the appropriate answer"
              name="Is_it_possible_to_know_the"
              value={this.state.Is_it_possible_to_know_the}
              onChange={this.handleChange}
              required="required"
              as="textarea"
            />

            <Form.Label htmlFor="inlineFormInput" >
              <span className="details">19. Can you go back to the Holy Spirit if you make a wrong decision?</span>
            </Form.Label>
            <Form.Control
              className="mb-4"
              id="inlineFormInput"
              placeholder="Supply the appropriate answer"
              name="Can_you_go_back_to_the_Holy_Spirit"
              value={this.state.Can_you_go_back_to_the_Holy_Spirit}
              onChange={this.handleChange}
              required="required"
              as="textarea"
            />

            <Form.Label htmlFor="inlineFormInput" >
              <span className="details">20. How is the right to choose a distinguishing factor between Christianity and the religions of the world?</span>
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              placeholder="Supply the appropriate answer"
              name="How_is_the_right_to_choose_a_distinguishing"
              value={this.state.How_is_the_right_to_choose_a_distinguishing}
              onChange={this.handleChange}
              required="required"
              as="textarea"
            />








          </Row>

          <Col className="submit_btnCol">
            <Button type="submit" className="mt-4 submit_btn">
              Submit
            </Button>
          </Col>
        </Form>





      </div >
    );
  }
}

const mapDispatchToProps = {
  addNewGrade: addGrade,
  getAllgrades: getAllgrades,
  SignOut: SignOut

}

// Why do we pass getAllgrades to mapDispatch to props if we are just reading and not making 
// chages to our store?
// Ans: We are actuallu making changes to our store. Because we are getting information from
// our firestore database which we get immidiately our form is mounted.
// Once the form is mounted, we pass all the information from our database to 
// our store with mapDispatch state to props.
// we passing information from our firestore  to our redux store is we updating it.

export default connect(null, mapDispatchToProps)(ExamsForm);















