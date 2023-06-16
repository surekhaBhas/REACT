import { Component } from "react";
import FaqsItems from "./faqsItem";
import './index.css';
const faqsList=[
{
    id:1,
    question:'What is IRC?',
    answer:'IRC is the Industry ready Certification that represents your Readiness for job with the necessary skills',
    isAnswered:false
},
{
    id:2,
    question:'What is the medium od instruction?',
    answer:' The courses would be delivered in English and Telugu. The process will be available in more vernacular languages soon.',
    isAnswered:false
},
{
    id:3,
    question:'Is there an EMI option to pay the fee for CCBp Tech 4.0 Intensive?',
    answer:'Yes EMI support is avalible for credit cards .Please select EMI option while making payments for more Information',
    isAnswered:false
},
{
    id:4,
    question:'How will my doubts be cleared? What is the mechanism?',
    answer:'You can ask Your Doubts in the discussion section and course mentor will answer them. You can also see the doubts asked by another students.',
    isAnswered:false
}
]
class Faqs extends Component{
    state={faqsList:faqsList}
    DisplayingAnswer=(id)=>{
        this.setState(prevState=>({
            faqsList:prevState.faqsList.map((eachques)=>{
                if(eachques.id===id){
                    
                    return{...eachques,isAnswered:!eachques.isAnswered} 
                }
                return eachques
            })
        }))
    }
  
     
   
    render(){
       const {faqsList}=this.state
        return(
            <div className="container"> 
               <div>
                    <h1 className='heading'>FAQs</h1>
                    <ul>
                    {faqsList.map((eachList)=>{
                        return <FaqsItems key={eachList.id} eachList={eachList} displayAnswer={this.DisplayingAnswer}/>
                    })}
                    </ul>
               </div>
            </div>
        )
    }
}
export default Faqs;