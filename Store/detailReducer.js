const initialState = {
  data:{
   email: '',
   password: ''
}
};
const detailReducer=(state=initialState,action)=>{
  switch(action.type)
  {
    case 'Update':{
      console.log("inside update case");
      return action.payload;
    }
    default:
    {
      return state;
    }

  }

};

export default detailReducer;
