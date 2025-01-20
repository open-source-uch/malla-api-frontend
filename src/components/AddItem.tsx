import Card from './Card'
import React from 'react'

interface Prop {
  initialCardList: Array<any>;
  handleChange: any;
}

function AddItem ( { initialCardList, handleChange, cardList }: Prop) {

    return (
        <div>
            <form onSubmit={handleChange}>
              <button type="submit">Add Item</button>
            </form>
            {cardList.map((CardComponent, index) => (
              <div key={index}>
                {CardComponent && <CardComponent />}
              </div>
            ))}
        </div>
    )
}



export default AddItem




    // const ListWithAddItem = () => {
    //     const [value, setValue] = React.useState('');
    //     const [list, setList] = React.useState(initialCardList);
      
    //     const handleChange = event: any => {
    //       setValue(event.target.value);
    //     };
      
    //     const handleSubmit = event: any => {
    //       if (value) {
    //         setList(list.concat(value));
    //       }
      
    //       setValue('');
      
    //       event.preventDefault();
    //     };    
    // }
    