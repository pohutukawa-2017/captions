import {RECEIVE_IMAGES} from '../actions'
//
//  const initialState = [
// {id: 1, path: 'https://www.sitebuilderreport.com/assets/facebook-stock-up-446fff24fb11820517c520c4a5a4c032.jpg'},
// {id: 2, path: 'https://www.bigstockphoto.com/images/homepage/2016_bigstock_picks.jpg'},
// {id: 3, path: 'http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg'},
// {id: 4, path: 'http://stories.barkpost.com/wp-content/uploads/2014/05/dogs-allowed-cute-dog.jpg'},
// {id: 5, path: 'https://i.ytimg.com/vi/f-e9hSUSlSM/maxresdefault.jpg'},
// {id: 6, path: 'http://beforeitsnews.com/contributor/upload/486248/images/cat-funny-5.jpg'}
// ]

const images = (state = [], action) => {
  switch (action.type) {
   case RECEIVE_IMAGES:
     return action.images

    default:
      return state
  }
}

export default images
