class Recipe {
    constructor(name, category) {
        this.name = name;
        this.category = category;
    }
   
}
class Menu {
    constructor() {
        this.recipes = [];
        this.selectedRecipe = null;
    }
    start () {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case "1":
                    this.createRecipe();
                    break;
                case "2":
                    this.viewRecipe();
                    break;
                case "3":
                    this.deleteRecipe();
                    break;
                case "4":
                    this.displayRecipes();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert("Goodbye!");
    }
    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new Recipe
        2) view Recipe
        3) delete Recipe
        4) display all Recipes
        `);
    }
    createRecipe() {
        let name = prompt("Enter name for a new recipe:");
        let category = prompt("Enter category name");
        this.recipes.push(new Recipe(name, category));
    }
    viewRecipe() {
        let index = prompt("Enter the index of the recipe you would like to view:");
        if (index > -1 && index < this.recipes.length) {
            this.selectedRecipe = this.recipes[index];
        let description = "Recipe name:" + this.selectedRecipe.name + "\n";
       
        }
        alert(description);
    }
    displayRecipes() {
        let recipeString = " ";
        for (let i = 0; i < this.recipes.length; i++) {
            recipeString += i + ")" + this.recipes[i].name + "\n";
        }
        alert(recipeString);
    }
    deleteRecipe() {
        let index = prompt("Enter the index of the recipe you would like to delete:");
        if (index > -1 && index < this.recipes.length) {
            this.recipes.splice(index, 1);
        }
    }
    
}
let menu = new Menu;
menu.start();