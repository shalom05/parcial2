export const ApiCat = async() => {
    try{
        const Cat = await fetch('https://cataas.com/cat/says/hello').then(res => res.json());
        console.log(Cat);
        return Cat.results;
    }catch(error){
        console.log(error);
    }

}

export const ApiText = async() => {
    try{
        const Text = await fetch('https://catfact.ninja/fact').then(res => res.json());
        return Text.results;
    }catch(error){
        console.log(error);
    }

}
