import React, {Component} from 'react';
import RecipeList from "./RecipeList";
import Navbar from "./Navbar";
import RecipeInput from "./RecipeInput"

class RecipeApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [
          { 
             id: 0,
             title: "Spaghetti", 
             instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce", 
             ingredients: ["pasta", "8 cups water", "1 box spaghetti"], 
             img: "http://kep.index.hu/1/0/1857/18576/185761/18576197_91d66836f8ae3f34f89ef57ab92f2b9e_wm.jpg" 
           }, 
           { 
             id: 1,
             title: "Milkshake", 
             instructions: "Combine ice cream and milk.  Blend until creamy", 
             ingredients: ["2 Scoops Ice cream", "8 ounces milk"], 
             img: "http://img.taste.com.au/fnfmxzPM/taste/2016/11/fresh-strawberry-milkshake-83870-1.jpeg" 
           }, 
           { 
             id: 2,
             title: "Avocado Toast", 
             instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.", 
             ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"], 
             img: "data:image/jpeg;base64,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" 
           } 
        ],
        nextRecipeId: 3,
        showForm: false,
    }
    this.onDelete = this.onDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  
  
  onDelete(id){
   const recipes = this.state.recipes.filter((r, i) =>(r.id !== id))
   this.setState({recipes});
  }
  
  handleSave(recipe){
    this.setState((prevState, props)=> {
        const newRecipe = {...recipe, id: this.state.nextRecipeId};
        return {
          nextRecipeId: this.state.nextRecipeId + 1,
          recipes: [...this.state.recipes, newRecipe],
          showForm: false
          
        }
    })
  }
  
  render(){
    const  {showForm} = this.state;
    return(
      <div className="App">
        <Navbar onNewRecipe= {() => {this.setState({showForm:true})}}/>
        {showForm ? <RecipeInput onSave={this.handleSave} onClose= {() =>{this.setState({showForm: false})}}/> : null}
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes}/>
      </div>
      
      )
    
  }
}



export default RecipeApp;