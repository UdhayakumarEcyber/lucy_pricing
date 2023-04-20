import * as React from 'react'; 
import * as ReactDOM from 'react-dom';


export interface IPricingProps {
    
}
export interface IPricingState {
    
}
 




export default class Pricing extends React.Component<IPricingProps,IPricingState> {
    constructor(props:IPricingProps) {
        super(props);
        this.state = {
            counter:10
        }
    }

  render() {  
    

// var musicList = [ 
//     {
//         "id": "1",
//         "title": "Lucy Canvas", 
//         "label": "Free", 
//         "text": "Personal account",
//         "bg_color": "#fdd522",
//     },
//     {
//         "id": "2",
//         "title": "Lucy Teams", 
//         "label": "USD $148", 
//         "text": "2+ accounts",
//         "bg_color": "#ed3084",
//     },
//     {
//         "id": "3",
//         "title": "Lucy Pro", 
//         "label": "On Request", 
//         "text": "On Request",
//         "bg_color": "#239bff",
//     } 
// ]  
    
// const LucyBox = () => (
//     <div className="pricing-content-top">
//         {musicList.map(item => (  
//             <div className="pricing-content-box" key={item.id}>
//                 <div className="pricing-content-box-header"  style={{backgroundColor : item.bg_color }}>
//                     <h3>{item.title}</h3>
//                 </div>  
//                 <div className="pricing-content-box-body">
//                     <h6>{item.label}</h6>
//                     <p>{item.text}</p>
//                 </div>
//             </div>  
//         ))}
//     </div>
//     );



    
var PricingList = [ 
    {
        "id": "1", 
        "label": "Unlimited Canvases" 
    },
    {
        "id": "2", 
        "label": "Unlimited Widgets" 
    },
    {
        "id": "3", 
        "label": "Mobile app" 
    },
    {
        "id": "4", 
        "label": "25 sensors" 
    },
    {
        "id": "5", 
        "label": "10 workflows" 
    },
    {
        "id": "6", 
        "label": "10 integrations" 
    },
    {
        "id": "7", 
        "label": "1 GB storage" 
    }  
]  
    
const PricingListBox = () => (
    

        <ul className="chennel_list">
        {PricingList.map(item => (
        <li key={item.id}>   
             <span className="status"></span> 
            <label className="label">{item.label}</label> 
        </li>
        ))}
        </ul>

    );
 
         return (

          <div className="pricing">
              <div className="pricing-header"> 
                  <h2> Find the perfect plan to power your business with Lucy. </h2> 
              </div>
  
              <div className="pricing-content">

                    <div className="pricing-content-top"> 
                        {/* <LucyBox />  */} 

                                <div className="pricing-content-box">
                                    <div className="pricing-content-box-header" style={{backgroundColor : '#fdd522' }} >
                                        <h3>Lucy Canvas</h3>
                                    </div>  
                                    <div className="pricing-content-box-body">
                                        <h6>Free</h6>
                                        <p>Personal account</p>
                                    </div> 
                                </div>    

                                <div className="pricing-content-box">
                                    <div className="pricing-content-box-header"  style={{backgroundColor : '#ed3084' }} >
                                        <h3>Lucy Teams</h3>
                                    </div>  
                                    <div className="pricing-content-box-body">
                                        <h6>USD $148</h6> 

                                        <p>{this.state.counter}+ accounts</p>

                                        <div className="scroll-range"> 
                                            <input className="range" type="range" onChange={(v)=> this.setState({...this.state, counter:v.target.value}) } min={1} max={100} value={this.state.counter} />
                                        </div>

                                    </div> 
                                </div>

                                 <div className="pricing-content-box">
                                    <div className="pricing-content-box-header"  style={{backgroundColor : '#239bff' }} >
                                        <h3>Lucy Pro</h3>
                                    </div>  
                                    <div className="pricing-content-box-body">
                                        <h6>On Request</h6>
                                        <p>On Request</p>
                                    </div> 
                                </div>               
                    

                    </div>

                    <div className="pricing-content-bot"> 
                        <div className="account-section-box">
                            <p>1 account gives you access to:</p>
                        </div> 
                        
                        <div className="pricing-list-section">
                            <div className="pricing-list-box personal_use"> 
                                <div className="pricing-list-box-cont">
                                    <div className="pricing-list-box-top"> <h6>Personal use</h6> </div>
                                    <PricingListBox/>                                   
                                </div>
                                <div className="get_start-btn">
                                    <a href="#">Get Start</a>
                                </div>
                            </div>

                            <div className="pricing-list-box unlimited_sharing"> 
                                <div className="pricing-list-box-cont">
                                    <div className="pricing-list-box-top"> <h6>Unlimited sharing</h6> </div>
                                        <PricingListBox/> 
                                </div>
                                <div className="get_start-btn">
                                        <a href="#">Get Start</a>
                                    </div>
                            </div>

                            <div className="pricing-list-box unlimited_pro_users"> 
                                <div className="pricing-list-box-cont">
                                    <div className="pricing-list-box-top"> <h6>Unlimited Pro users</h6> </div>
                                    <PricingListBox/> 
                                </div>
                                <div className="get_start-btn">
                                    <a href="#">Get Start</a>
                                </div>
                            </div>
                        </div>
                    </div>
        
              </div>
  
          </div>


           );
     }
}