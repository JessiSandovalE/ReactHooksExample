import { style } from 'typestyle'

export const  CharactersStyle = style({
  width: '100%',
  padding: '0 100px',
  boxSizing:'border-box',
  maxWidth:'1024px',
  $nest: {
    '& .list': {
      display: 'grid',
      gridTemplateColumns:'repeat(4,1fr)',
      gridGap: '20px',
      paddingBottom:'50px',
      $nest:{
        '& .card': {
          width: '100%',
          display:'flex',
          //flexDirection: 'column',
          boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.53',
          $nest:{
            '& img': {
              width: '100%',
              marginBottom:'20px'
            },
          }
        },
      }
    }
  }
})