export function selectBook (book) {
   //selectBook is an action creator it needs to return an actions -- an object with a type propoerty
   return {
      type: 'BOOK_SELECTED',
      payload: book
   }
}
