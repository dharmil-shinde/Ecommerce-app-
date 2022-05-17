export const AddItem=(item)=>{
    return {
            type:"AddItem",
            payload:item
        }
    
} 
export const DeleteItem=(item)=>{
    return  {
            type:"DeleteItem",
            payload:item
        }
} 