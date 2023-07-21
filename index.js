const Button = props => {
    const {class, text} = props;
   return (
     <button className = {class}>{text}</button>
   )
};

const element = (
  //  Write your code here. 
   <div className = "bg-container">
        <h1 className = "heading">Social Buttons</h1> 
        <div className = "button-container">
            <Button class = "like" text = "Like"/>
            <Button class = "comment" text = "Comment"/>
            <Button class = "share" text = "Share"/>
        </div>
   </div>
)

ReactDOM.render(element, document.getElementById("root"))
