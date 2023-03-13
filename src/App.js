
import './App.css';
import './categories.styles.scss'

const categories = [
  {
    "id": 1,
    "title": "hats",
    "imageUrl": "https://images.pexels.com/photos/704857/pexels-photo-704857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://images.pexels.com/photos/826380/pexels-photo-826380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    "id": 4,
    "title": "womens",
    "imageUrl": "https://www.eatthis.com/wp-content/uploads/sites/4/2020/12/woman-face-mask-street-holiday-shopping-bar.jpg?quality=82&strip=1"
  },
  {
    "id": 5,
    "title": "mens",
    "imageUrl": "http://www.abbotkinneyonline.com/wp-content/uploads/2018/11/The-Top-Men%E2%80%99s-Clothing.jpg"
  }
]


const App = () => {
  return (

    <div className='categories-container'>
      {
        categories.map(category => {
          const { title, id, imageUrl } = category
          return (
            <div key={id} className="category-container" >
              <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="category-body-container ">
                  <h2>{title}</h2>
                  <p>Shop Now</p>
                </div>
              </div>


            </div>
          )
        }


        )

      }

    </div>

  );
}

export default App;