
const user = {
    name: "Andrey",
    getName() {
      return this.name;
    }
  };

const builds = [
    {id: 0, name: 'Tesst', access: true, inventory: ['Hammer', 'Axe']},
    {id: 1, name: 'Test1', access: true, inventory: ['Hammer', 'Axe']},
    {id: 2, name: 'Test2', access: true, inventory: ['Hammer', 'Axe']},
    {id: 3, name: 'Test3', access: false, inventory: ['Hammer', 'Axe']},
]


const filterBuild = builds.filter((item) => {
    return item.access === true;
});

filterBuild.push({id : 4, name: 'Test4', access: true, inventory: [...builds[0].inventory]});
const copyBuild = filterBuild.map(item => { return {id: item.id, name: item.name, inventory: item.inventory}});

// const reducerBuild = copyBuild.reduce((prev, curr) => {
//     console.log('Prev' + prev);
//     console.log('Curr' + curr.inventory);
//     return [...prev, curr.inventory];
// }, [])


for(let item of copyBuild) {
    console.log(item);
}

const fn = user.getName.bind(user);
console.log(fn());
console.log(user.getName());