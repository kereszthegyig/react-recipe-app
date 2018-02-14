import React, {Component} from 'react';
import './RecipeInput.css';

class RecipeInput extends Component {
    static defaultProps = {
        onClose(){},
        onSave(){},
    }
    
    constructor(props){
        super(props);
        this.state = {
             title: "", 
             instructions: "",
             ingredients: [""], 
             img: ""
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeIng = this.handleChangeIng.bind(this);
        this.handleNewIngredient = this.handleNewIngredient.bind(this);
    }
    
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    
    
    handleNewIngredient(e){
        const {ingredients} = this.state
        this.setState({ingredients: [...ingredients, ""]})
    }
    
     handleChangeIng(e){
        const index = Number(e.target.name.split('-')[1]);
        const ingredients = this.state.ingredients.map((ing, i )=> (
            i === index ? e.target.value : ing
            ));
            
            this.setState({ingredients});
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onSave({...this.state});
        this.setState({
            title: "", 
            instructions: "",
            ingredients: [""], 
            img: ""
        });
    }

    render(){
        const {onClose} = this.props;
        const {title, instructions, ingredients, img} = this.state;
        
        let inputs = ingredients.map((ing, index) => (
            
            <div className="recipe-form-line"
                key={`ingredient-${index}`}
            >
            <label>{index+1}.
            <input 
                type="text"
                autoComplete="off"
                name={`ingredient-${index}`}
                value={ing}
                placeholder="Ingredient"
                size={45}
                onChange= {this.handleChangeIng} />
            </label>
            </div>
            ));
        
        return(
            <div className="recipe-form-container">
            <form className="recipe-form" onSubmit= {this.handleSubmit}>
                <button 
                    type="button"
                    className = "close-button"
                    onClick={onClose}>
                    X
                </button>
                <div className= "recipe-form-line">
                <label htmlFor="recipe-title-input">Title</label>
                <input
                    type="text"
                    key="title"
                    id= "recipe-title-input"
                    autoComplete= "off"
                    name="title"
                    value={title}
                    size={42}
                    onChange= {this.handleChange}
                    
                />
                </div>
                 <label htmlFor="recipe-instructions-input"
                    style={{marginTop: "5px"}}
                 >Instructions:</label>
                 <textarea
                    type="text"
                    key="instructions"
                    id="recipe-instructions-input"
                    name="instructions"
                    value={instructions}
                    rows='8'
                    cols="50"
                    autoComplete="off"
                    onChange= {this.handleChange}
                    />
                    {inputs}
                    <button 
                       type="button"
                       onClick = {this.handleNewIngredient}
                        className="buttons">
                    +
                    </button>
                     <div className= "recipe-form-line">
                        <label htmlFor="recipe-img-input">Image Url</label>
                        <input
                            type="text"
                            key="img"
                            id= "recipe-img-input"
                            autoComplete= "off"
                            name="img"
                            value={img}
                            size={36}
                            onChange= {this.handleChange}
                            
                        />
                    </div>
                    
                    <button
                        type="submit"
                        className="buttons"
                        style={{alignSelf: 'flex-end', marginRight: 0}}
                    >Submit</button>
            </form>
            </div>
            )
    }
}
  
    


export default RecipeInput