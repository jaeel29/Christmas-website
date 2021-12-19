import Image from 'next/image';
import IconComp from '../IconComponent';
import {
  PContainer,
  Header,
  SectionProducts,
  Card,
  Body,
  List,
} from './Products.styled';

const ProductsSection = () => {
  return (
    <SectionProducts>
      <PContainer>
        <Header>
          <span>Products</span>
          <h2>Emifood AI chooses from 5,000+ recipes</h2>
        </Header>

        <Body>
          <Card>
            <div className='card-image'>
              <Image
                src='/Cards/card-image.png'
                alt='Rudolph'
                width={1000}
                height={640}
              />
            </div>
            <div className='card-body'>
              <span className='tag'>Tag here</span>
              <p className='title'>Jaoanese Gyozas</p>
              <ul className='list-item'>
                <li className='item'>
                  <IconComp name='christmas-gift' sizeIcon={24} />
                  <p>650 calories</p>
                </li>
                <li className='item'>
                  <IconComp name='christmas-gift' sizeIcon={24} />
                  <p>NutriScore &reg; 74</p>
                </li>
                <li className='item'>
                  <IconComp name='christmas-gift' sizeIcon={24} />
                  <p>4.9 rating (537)</p>
                </li>
              </ul>
            </div>
          </Card>
          <Card>
            <div className='card-image'>
              <Image
                src='/Cards/card-image.png'
                alt='Rudolph'
                width={1000}
                height={640}
              />
            </div>
            <div className='card-body'>
              <span className='tag'>Tag here</span>
              <p className='title'>Jaoanese Gyozas</p>
              <ul className='list-item'>
                <li className='item'>
                  <IconComp name='christmas-gift' sizeIcon={24} />
                  <p>650 calories</p>
                </li>
                <li className='item'>
                  <IconComp name='christmas-gift' sizeIcon={24} />
                  <p>NutriScore &reg; 74</p>
                </li>
                <li className='item'>
                  <IconComp name='christmas-gift' sizeIcon={24} />
                  <p>4.9 rating (537)</p>
                </li>
              </ul>
            </div>
          </Card>

          <div className='list'>
            <h1>List</h1>
          </div>
        </Body>
      </PContainer>
    </SectionProducts>
  );
};

export default ProductsSection;
