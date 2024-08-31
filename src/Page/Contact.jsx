import { Form } from "react-router-dom"

export const contactData = async ({request}) => {
  try{
const res = await request.formData()
const data = Object.fromEntries(res)
console.log(data);
return null;
  } catch(err){
console.log(err.message)
  }
};

function Contact() {
  
  return (
    <>
      <h2>Welcome to Contact Page</h2> 
      <p>Get in touch we are always here to help you</p>

      <Form action="/contact" method="POST">
        <div>
          <label htmlFor="username">Full Name</label>
          <input type="text" name="username" id="username" required placeholder="enter full name"/>
        </div>
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" required placeholder="enter email address"/>
        </div>
        <div>
        <textarea name="message" id="message" cols="30" rows="10" placeholder="we are always here to help you"></textarea>
        </div>
        <button>Submit</button>
        
      </Form>
    </>
  )
}

export default Contact
