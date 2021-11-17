
function getMailRequest(email){

}
export default async (req, res)=>{
  const {email} = req.body;

  if(!email || !email.length){
    return res.status(400).json({
      error: "Add your email",
    });
  }
  try {
    const { url, data, headers } = getMailRequest(email);
    const response = await axios.post(url, data, {headers});

    //email successfuly submitted
    return res.status(201).json({error: null});
  } catch(error){
    return res.status(400).json({
      error: "something went wrong, email JBS to be added to the company newsletter"
    });
  }
};