import { Categories,SortPopup,PizzaBlock } from '../components';

function Home({data}) {
  return (
    <div>
    <div className="content__top">
        <Categories
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup items={[
                          {name:"популярности",type:"popular"}, 
                          {name:"цене",type:"price"}, 
                          {name:"алфавиту",type:"alphabet"},  
                      ]}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        
        {
          data.map(i=>{
            const {id} = i
            return <PizzaBlock key={id} {...i}/>
          })
        }
    </div>
    </div>
  );
}

export default Home;
